const User = require("../Models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");// Ensure you're importing the correct method
const userModel = require("../Models/user.model");

// User Registration
const UserRegister = async (req, res) => {
  try {

    const { data } = req.body;
    

    const { name, email, password, id, picture, verified_email } = data;
  
    if (!name || !email) {
      return res.json({
        success: false,
        msg: "Please fill all credentials",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        msg: "User already registered",
      });
    }
    let hashPassword;
    if (password) {
      hashPassword = await bcrypt.hash(password, 10);
    }



    const newUser = new User({
      name,
      email,
      password: hashPassword,
      isverified: verified_email,
      userid: id,
      profileImage: picture, // Fixed name to match model (profileImage)
    });

    await newUser.save();
    let token = null;
    if (verified_email) {
      token = jwt.sign(
        { id: newUser._id, email: newUser.email, userid: newUser.userid },
        "secret",  // Ideally, store your secret in an environment variable, not hardcoded
        { expiresIn: "1h" }
      );


    }
    res.cookie("logintoken", token, {
      httpOnly: true,
      sameSite: "strict", // Helps protect against cross-site request forgery (CSRF)
      secure: process.env.NODE_ENV === 'production', // Ensure it's secure in production
      path: '/' // 

    })


    return res.status(200).json({
      success: true,
      msg: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({ // Status 500 for server error
      success: false,
      msg: error.message,
    });
  }
};

// User Login
const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.json({
        success: false,
        msg: "Please fill all credentials",
      });
    }

    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({
        success: false,
        msg: "User does not exist",
      });
    }

    // Compare the password with the hashed password
    const isCompare = bcrypt.compare(password, existingUser.password);  // Await here to ensure the comparison is complete
    if (!isCompare) {
      return res.json({
        success: false,
        msg: "Invalid credentials",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email, userid: existingUser.userid },
      "secret",  // Ideally, store your secret in an environment variable, not hardcoded
      { expiresIn: "1h" }
    );

    // Set the token in the cookie
    res.cookie("token", token, {
      httpOnly: true,    // Ensures the cookie is not accessible by JavaScript
      sameSite: "strict", // Helps protect against cross-site request forgery (CSRF)
      secure: process.env.NODE_ENV === 'production', // Ensure it's secure in production
      path: '/' // Expiration time: 1 hour (matches the JWT expiration)
    });

    // Return success response without the token in the body (it's stored in the cookie)
    return res.status(200).json({
      success: true,
      msg: "Login successful",
      token
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};



const UserProfile = async (req, res) => {
  const usertoken = req.cookies.token;
  const logintoken = req.cookies.logintoken;
  const token = usertoken ? usertoken : logintoken ;
    if (!token ) {
    return res.json({
      success: false,
      msg: "token not find"
    })
  };
  const decode = jwt.verify(token, "secret");
  const email = decode.email ;
  const existingUser = await userModel.findOne({email});
  if(!existingUser){
    return res.json({
      success : false ,
      msg : "user not exists"
    })
  }
  return res.json({
    success: true,
    existingUser
  })
}

const userLogout = async (req, res) => {
  try {
    // Clear the token cookie
    const id = req.user.id;
    const userid = req.user.userid;
   const email = req.user.email ;

    if (id) {
      res.clearCookie('token', {
        httpOnly: true, // Ensure it matches the original cookie settings
        sameSite: 'Strict', // SameSite setting needs to match
        secure: process.env.NODE_ENV === 'production', // Use 'secure' in production only
        path: '/', // Make sure the path matches
      })
    };
    if(userid){
      await userModel.findOneAndDelete({email : email})
      res.clearCookie('logintoken', {
        httpOnly: true, // Ensure it matches the original cookie settings
        sameSite: 'Strict', // SameSite setting needs to match
        secure: process.env.NODE_ENV === 'production', // Use 'secure' in production only
        path: '/', // Make sure the path matches
      })
    }



    return res.json({
      success: true,
      msg: 'Logged out successfully',

    });
  } catch (error) {
    return res.json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = { UserRegister, UserLogin, UserProfile, userLogout };
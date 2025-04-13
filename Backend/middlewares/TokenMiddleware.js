const jwt = require("jsonwebtoken");  // Make sure to use the correct import for JWT

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header (as Bearer token)
    const token = req.cookies.token || req.cookies.logintoken ;// Assuming the token is passed as 'Bearer <token>'
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided",
      });
    }

    // Verify the token using jwt.verify
    jwt.verify(token, "secret", (err, decoded) => {  // Replace 'secret' with your actual secret key (use an env variable)
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Invalid or expired token",
        });
      }

      // If the token is valid, attach the decoded user information to the request object
      req.user = decoded;  // This can be useful to access user data in subsequent routes
      next();  // Allow the request to proceed
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authMiddleware ;

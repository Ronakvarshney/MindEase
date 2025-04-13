const { GoogleGenerativeAI } = require("@google/generative-ai");

const apikey = "AIzaSyCgXfZCFJg9WpMHVQfPbUM_r3c3r-uwhaI";
const genAi = new GoogleGenerativeAI(apikey);
const model = genAi.getGenerativeModel({
    model : "gemini-2.0-flash"
});


const generateChat = async(req , res)=>{

    try{
     const {input} = req.body ;
     const prompt = `Provide a JSON object with the following structure:

     {
       "responseText": "...",
       "suggestions": ["...", "..."], // Optional array of suggestions
       "preventions": ["...", "..."]  // Optional array of preventions
     }
     
     Respond to the following question: "${input}". 
     
     Ensure your response adheres to the specified JSON format and only includes information relevant to the provided question. Do not include any extraneous details. If no suggestions or preventions are applicable, omit those fields.`;






     const content = await model.generateContent(prompt);
     const resp =  content.response.text();
     
     return res.json({
        success : true ,
        msg : "data get extarcted successfully" ,
        resp

     })
    }
    catch(error){
        return res.json({
            success : false ,
            msg : error.message
        })
    }

}

module.exports = generateChat ;

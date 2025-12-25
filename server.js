const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { GoogleGenAI } = require("@google/genai");
const { json } = require("body-parser");
require("dotenv").config();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("Hello World");
});

app.post("/myreq", (req, res) => {
  try {
    const Data = req.body.text;
    async function main() {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: Data,
      });
      
      res.send({
       result: response.text
      });
    }
    main();
  } catch (error) {
      console.log('Error in api')
  }
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

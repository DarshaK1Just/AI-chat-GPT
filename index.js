const { Configuration, OpenAIApi } = require("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-hNwNul4X1y1GdyRGDKD7pQNG",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//Create a simple express api that calls the function above
const app = express()
const port = 3080

app.use('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
      res.json( {
        data: response.data
      })
});

app.listen(port, () => {
    console.log(`Example app listeing at http://localhost:${port}`)
});
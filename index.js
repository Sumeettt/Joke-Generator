import express from "express";
import axios from "axios";

const app = express();
const port = 3005;

app.use(express.static("public"));


const jokeUrl = "https://v2.jokeapi.dev/joke/Any?format=txt";

app.get("/", async (req, res) => {
    try{
        let result = await axios.get(jokeUrl);
        let joke = result.data;
        console.log(result.data);
        res.render("index.ejs", {joke : joke});
    }catch(error){
        console.error("Error:", error.message);
        res.status(500).send("An error occured while fetching the joke.");
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
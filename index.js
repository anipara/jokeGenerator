import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/programming");
        const data = response.data;
        res.render("index.ejs", {content: JSON.stringify(response.data.joke)});
    } catch (error) {
        console.log(error);
        res.render("index.ejs", {content: "Unable to make a joke"});
    }
});



app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
});
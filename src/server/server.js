const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

let GlobalVariable = "EN";

const getGlobalLanguage = () => {
  return GlobalVariable;
};

const setGlobalLanguage = (language) => {
  GlobalVariable = language;
};

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const articlesFilePath = path.join(__dirname, "../json/articles.json");
const commentsFilePath = path.join(__dirname, "../json/comments.json");

// Get global variable
app.get("/getGlobalVariable", (req, res) => {
  try {
    const globalVariable = getGlobalLanguage();
    res.json({ globalVariable });
  } catch (error) {
    console.error("Error getting global variable:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update global variable
app.post("/updateGlobalVariable", (req, res) => {
  try {
    const { language } = req.body;
    setGlobalLanguage(language);
    res.json({ success: true, globalVariable: getGlobalLanguage() });
  } catch (error) {
    console.error("Error updating global variable:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get articles
app.get("/articles", (req, res) => {
  try {
    const articles = JSON.parse(fs.readFileSync(articlesFilePath));
    res.json(articles);
  } catch (error) {
    console.error("Error reading articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update article likes
app.put("/articles/:id", (req, res) => {
  try {
    const articles = JSON.parse(fs.readFileSync(articlesFilePath));
    const articleId = parseInt(req.params.id);
    const { likes } = req.body;

    // Find the article by id
    const updatedArticles = articles.map((article) => {
      if (article.id === articleId) {
        return { ...article, likes };
      }
      return article;
    });

    // Write the updated articles back to the file
    fs.writeFileSync(articlesFilePath, JSON.stringify(updatedArticles, null, 2));

    res.json({ success: true, likes });
  } catch (error) {
    console.error("Error updating article likes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get comments
app.get("/comments", (req, res) => {
  try {
    const comments = JSON.parse(fs.readFileSync(commentsFilePath));
    res.json(comments);
  } catch (error) {
    console.error("Error reading comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add comment
app.post("/comments", (req, res) => {
  try {
    const { article_id, first_name, last_name, email, body, active } = req.body;

    const comments = JSON.parse(fs.readFileSync(commentsFilePath));
    const newComment = {
      article_id,
      first_name,
      last_name,
      email,
      body,
      active,
    };

    comments.push(newComment);
    fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));

    res.json({ success: true, comment: newComment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

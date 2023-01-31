
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article"
import ArticleList from "./ArticleList"



console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} text={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
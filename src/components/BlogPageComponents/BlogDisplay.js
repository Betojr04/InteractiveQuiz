/* 
This is the display page of the blog. It will include the main content of the blog, which will be the posts. It will be a functional component. From here you will then be able to click on a specific post and be redirected to the post page.
*/
import React from "react";
import { blogFace } from "./blogFace";
import "../../styles/BlogPageStyles/blogdisplay.css";

export const BlogDisplay = () => {
  return (
    <section>
      {blogFace.map((blog, index) => (
        <div key={index} className="blog-post">
          <img src={blog.img} alt={blog.name} />
          <div>
            <h4>{blog.date}</h4>
            <h1>{blog.name}</h1>
            <p>{blog.snippet}</p>
            <a href="/blogpost">{blog.readMore}</a>
          </div>
        </div>
      ))}
    </section>
  );
};

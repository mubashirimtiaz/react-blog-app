import React from "react";
import BlogList from "../../blog_list/BlogList.component";
import useFetch from "../../hooks/useFetch";
const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

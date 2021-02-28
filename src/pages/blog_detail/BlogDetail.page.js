import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  console.log(blog);
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;

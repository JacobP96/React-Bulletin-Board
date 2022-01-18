import PostLiked from "./PostLiked";
const ReactPost = ({ question }) => {
  return (
    <>
      <ul>
        {question.map(({ question, answer }, i) => (
          <li style={{ border: "2px solid black", borderRadius:"5px", listStyleType: "none",margin:"10px",marginRight:"40px" }}>
            <p style={{textDecoration: "underline"}}> {question} </p>
            <p style={{}}>{answer}</p>

            <PostLiked {...PostLiked} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReactPost;
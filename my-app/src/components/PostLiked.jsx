import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";
const PostLiked = () => {
  const [FunctionBtn, setFunctionBtn] = useState(true);

  return (
    <>
    

    
      <button
        className={FunctionBtn ? "hidden" : "show"}
        onClick={() => {
          setFunctionBtn(!FunctionBtn);
        }}
      >
        {FunctionBtn ? "LIKE" : null}
      </button>
      {!FunctionBtn ? < p >You have liked this post! <BsFillHandThumbsUpFill/></p> : null}
    </>
  );
};
export default PostLiked;
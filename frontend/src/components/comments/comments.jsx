import { useContext, useState } from "react";
import "./comments.scss";
import{AuthContext} from "../../context/authContext.js";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";


const Comments = ({postId}) => {

  const [desc, setDesc] = useState("");

  const {currentUser} = useContext(AuthContext);

 const {isLoading, error, data } = useQuery(["comments"], () => 
    makeRequest.get("/comments?postId=" + postId).then((res) => {
    return res.data;
    })
 );

 const queryClient = useQueryClient();

 const mutation = useMutation(
  (newComment) => {
    return makeRequest.post("/comments", newComment);
  },
  {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["comments"]);
    },
  }
 );

 const handleClick = async (e) => {
  e.preventDefault();
  mutation.mutate({ desc, postId });
  setDesc("");
 };

  return(
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt={currentUser.name} />
        <input type="text" placeholder="write a comment" 
        onChange={e=> setDesc(e.target.value)} 
        value = {desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error 
      ? "Something Went Wrong!" 
      :isLoading 
      ? "Loading" 
      : data.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">
            {moment(comment.createAt).fromNow()}
          </span>
        </div>
      ))}
    </div>  
  );
};

export default Comments
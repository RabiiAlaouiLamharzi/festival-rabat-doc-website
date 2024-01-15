import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import heartEmpty from '../assets/heart_empty.png';
import heartFull from '../assets/heart_full.png';
import { COMMENTS_TEXTS } from "../constants/index.js";

const ArticleContent = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [newComment, setNewComment] = useState({
    user: "",
    text: "",
    last_name: "", 
    email: "",
  });
  
  const [likes, setLikes] = useState(article.likes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://api.dash-aloui.net/api/comment/list-open-comments-by-article/${article.id}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error("Failed to fetch comments:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://api.dash-aloui.net/api/comment/post-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article_id: article.id,
          first_name: newComment.user,
          last_name: newComment.last_name,
          email: newComment.email,
          body: newComment.text,
          active: false,
        }),
      }
      );
  
      const data = await response.json();
  
      if (data.success) {
        setComments([...comments, data.comment]);
        setNewComment({ user: "", text: "", last_name: "", email: "" });
        // Set the message and show the modal
        setModalMessage("Le commentaire sera examiné et s'il est valide, il sera publié.");
        setShowModal(true);
  
        // Scroll to the comments section
        scroll.scrollTo("comments", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      } else {
        console.error("Failed to add comment:", data.error);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };  

    // Function to close the modal
    const closeModal = () => {
      setShowModal(false);
      setModalMessage("");
    };

  const handleLikeClick = async () => {
    try {
      const updatedLikes = isLiked ? likes - 1 : likes + 1;
  
      // Update likes on the server
      const response = await fetch(`https://api.dash-aloui.net/api/article/like-article/${article.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: updatedLikes,
        }),
      });
  
      if (response.ok) {
        // Update local state with the new likes count
        setLikes(updatedLikes);
        setIsLiked(!isLiked);
      } else {
        console.error("Failed to update likes:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };  
  

  return (
    <div id="app" style={{ display: "", height: "100vh", overflowY: "auto" }}>
      <style>
        {`
          .article {
            margin: 60px auto;
            padding-left: 30%;
            padding-right: 30%;
          }

          h1 {
            color: goldenrod;
            font-size: 46px;
            letter-spacing: 1px;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 50px;
            margin-top: 10px;
            font-weight: 800;
            font-family: "PT Serif", serif;
          }

          h2 {
            color: goldenrod;
            font-size: 36px;
            text-transform: uppercase;
            margin-top: 30px;
            font-weight: 800;
            font-family: "PT Serif", serif;
          }

          h2 span {
            color: white;
            font-size: 36px;
            text-transform: uppercase;
            margin-top: 30px;
            font-weight: 800;
            font-family: "PT Serif", serif;
          }

          p {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 30px;
            text-align: justify;
            font-family: "DM Sans", sans-serif;
          }

          a {
            color: darken(skyblue, 5%);
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: all 0.3s ease-in-out;
          }

          a:hover {
            border-bottom: 1px solid skyblue;
          }
          section {
            margin-bottom: 40px;
          }

          label {
            margin-bottom: 10px;
          }

          input,
          textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            border: 0px solid #ddd;
            border-radius: 100px;
            box-sizing: border-box;
          }

          button {
            background-color: transparent;
            color: goldenrod;
            padding: 10px;
            border: 2px solid goldenrod;
            border-radius: 100px;
            padding-left: 30px;
            padding-right: 30px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
            font-family: "DM Sans", sans-serif;
            font-size: 18px;
            font-weight: 800;
          }

          button:hover {
            background-color: goldenrod;
            color: #000;
            font-weight: 800;
          }

          /* Additional styles for comments */
          .comments-wrapper {
            max-height: 200px; /* Set a max height for the comments section */
            overflow-y: hidden; /* Add a vertical scrollbar if needed */
            margin-top: 10px; /* Adjust the top margin to create space */
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          li {
            margin-bottom: 20px;
            font-family: "DM Sans", sans-serif;
          }

          p {
            margin: 0;
            font-family: "DM Sans", sans-serif;
          }

          strong {
            font-weight: bold;
          }

          small {
            color: #888;
          }

          label{
            font-family: "DM Sans", sans-serif;
            font-size: 18px;
          }
          .heart {
            width: 100px;
            height: 100px;
            background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
            background-position: 0 0;
            cursor: pointer;
            transition: background-position 1s steps(28);
            transition-duration: 0s;
          }

          .heart.is-active {
            transition-duration: 1s;
            background-position: -2800px 0;
          }

          .placement {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .modal {
            display: block;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.5);
          }
  
          .modal-content {
            background-color: red;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
          }
  
          .close {
            background-color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>
      <section className="article" style={{ paddingTop: 40 }}>
      <p>{article.updated_at.slice(0, 10)}</p>
        <h1 style={{ marginBottom: 20 }}>{article.title}</h1>
        <p>{article.body}</p>

        <button onClick={handleLikeClick} style={{ background: 'transparent', border: 'none', cursor: 'pointer', margin: 0, padding: 0, paddingTop: "15px" }}>
          <img
            src={isLiked ? heartFull : heartEmpty}
            alt={isLiked ? 'full heart' : 'empty heart'}
            style={{ width: '16px', height: '16px', marginRight: '15px', marginTop: '15px' }}
          />
          <span style={{ color: 'white', fontSize: '20px', fontFamily: "DM Sans" }}>{isLiked ? likes + 0 : likes} {COMMENTS_TEXTS.LIKES}</span>
        </button>

        {/* Comment Form */}
        <h2>{COMMENTS_TEXTS.TITLE}</h2>
        <form onSubmit={handleCommentSubmit} style={{ marginLeft: 0 }}>
          <label>
            {COMMENTS_TEXTS.LNAME}
            <br />
            <input
              type="text"
              style={{ paddingLeft: 15}}
              value={newComment.last_name}
              onChange={(e) =>
                setNewComment({ ...newComment, last_name: e.target.value })
              }
            />
          </label>
          <label>
            {COMMENTS_TEXTS.EMAIL}
            <br />
            <input
              type="email"
              style={{ paddingLeft: 15}}
              value={newComment.email}
              onChange={(e) =>
                setNewComment({ ...newComment, email: e.target.value })
              }
            />
          </label>
          <label>
            {COMMENTS_TEXTS.COMMENT}
            <br />
            <textarea
            style={{ paddingLeft: 15}}
              value={newComment.text}
              onChange={(e) =>
                setNewComment({ ...newComment, text: e.target.value })
              }
              required
            />
          </label>
          <button type="submit">{COMMENTS_TEXTS.SUBMIT}</button>
        </form>

        {/* Display Comments */}
        <h2>
          <span>
            {comments.length === 0
              ? COMMENTS_TEXTS.FIRST
              : comments.length === 1
              ? `${comments.length} ${COMMENTS_TEXTS.COMMENT1}`
              : `${comments.length} ${COMMENTS_TEXTS.COMMENT2}`}
          </span>
        </h2>
        <footer
          id="comments"
          className="comments-wrapper"
          style={{
            paddingTop: 0,
            overflowY: "auto", 
            maxHeight: "100px", 
          }}
        >
          <ul>
            {comments.map((comment) => (
              <li key={comment.article_id} style={{ border: '1.5px solid white', padding: '20px', marginBottom: '10px' }}>
                <p style={{ color: 'goldenrod', fontSize: '14px', fontStyle: 'italic' }}>
                  {COMMENTS_TEXTS.EMAIL} {comment.email}
                </p>
                <p>
                  <strong>{comment.first_name} {comment.last_name}</strong> - {comment.body}
                </p>
              </li>
            ))}
          </ul>
        </footer>
      {/* Modal for Comment Submission Message */}
      {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>close</span>
              <p>{modalMessage}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ArticleContent;

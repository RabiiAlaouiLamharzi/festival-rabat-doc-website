import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import heartEmpty from '../assets/heart_empty.png';
import heartFull from '../assets/heart_full.png';
import Swal from 'sweetalert2';
import { COMMENTS_TEXTS } from "../constants/index.js";

const ArticleContent = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState({
    last_name: "",
    first_name: "",
    email: "",
    body: "",
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
      setNewComment({ first_name: "", body: "", last_name: "", email: "" });
      // Show SweetAlert success message
      Swal.fire({
        title: 'Succès!',
        text: 'Commentaire soumis avec succès. Il sera examiné et ensuite publié.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'custom-confirm-button',
        },
      });
      await fetch("https://api.dash-aloui.net/api/comment/post-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article_id: article.id,
          first_name: newComment.first_name,
          last_name: newComment.last_name,
          email: newComment.email,
          body: newComment.body,
          active: false,
        }),
      });

    } catch (error) {
      console.error("Error submitting comment:", error);

      // Show SweetAlert error message
      Swal.fire({
        title: 'Erreur!',
        text: 'Une erreur s\'est produite lors de la soumission du commentaire. Veuillez réessayer plus tard.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

    // Function to close the modal
    const closeModal = () => {
      setShowModal(false);
    };

    const handleLikeClick = async () => {
      try {

        // Update likes on the server using GET instead of PUT
        const response = await fetch(`https://api.dash-aloui.net/api/article/like-article/${article.id}`, {
          method: "GET",
        });

        if (response.ok) {
          // Re-fetch the updated article
          const articleResponse = await fetch("https://api.dash-aloui.net/api/article/shared-article");
          if (articleResponse.ok) {
            const updatedArticle = await articleResponse.json();
            // Update local state with the new likes count
            setLikes(updatedArticle);
            setIsLiked(!isLiked);
          } else {
            console.error("Failed to re-fetch the article:", articleResponse.statusText);
          }
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
            overflow-x: visible !important;
            margin: 60px auto;
            padding-left: 25%;
            padding-right: 25%;
          }

          @media (max-width: 1200px) {
            .article {
              overflow-x: visible !important;
              padding-left: 10%;
              padding-right: 10%;
            }
          }

          h1 {
            overflow-x: visible !important;
            color: goldenrod;
            font-size: 46px;
            letter-spacing: 1px;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 50px;
            margin-top: 10px;
            font-weight: 800;
            font-family: "Trocchi", serif !important;
          }

          h2 {
            overflow-x: visible !important;
            color: goldenrod;
            font-size: 36px;
            text-transform: uppercase;
            margin-top: 30px;
            font-weight: 800;
            font-family: "Trocchi", serif !important;
          }

          h2 span {
            overflow-x: visible !important;
            color: white;
            font-size: 36px;
            text-transform: uppercase;
            margin-top: 30px;
            font-weight: 800;
            font-family: "Trocchi", serif !important;
          }

          p {
            overflow-x: visible !important;
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 30px;
            text-align: justify;
            font-family: "DM Sans", sans-serif;
          }

          a {
            overflow-x: visible !important;
            color: darken(skyblue, 5%);
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: all 0.3s ease-in-out;
          }

          a:hover {
            overflow-x: visible !important;
            border-bottom: 1px solid skyblue;
          }
          section {
            overflow-x: visible !important;
            margin-bottom: 40px;
          }

          label {
            overflow-x: visible !important;
            margin-bottom: 10px;
          }

          input,
          textarea {
            overflow-x: visible !important;
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            border: 0px solid #ddd;
            border-radius: 100px;
            box-sizing: border-box;
          }

          button {
            overflow-x: visible !important;
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
            overflow-x: visible !important;
            background-color: goldenrod;
            color: #000;
            font-weight: 800;
          }

          /* Additional styles for comments */
          .comments-wrapper {
            overflow-x: visible !important;
            max-height: 200px; /* Set a max height for the comments section */
            overflow-y: hidden; /* Add a vertical scrollbar if needed */
            margin-top: 10px; /* Adjust the top margin to create space */
          }

          ul {
            overflow-x: visible !important;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          li {
            overflow-x: visible !important;
            margin-bottom: 20px;
            font-family: "DM Sans", sans-serif;
          }

          p {
            overflow-x: visible !important;
            margin: 0;
            font-family: "DM Sans", sans-serif;
          }

          strong {
            overflow-x: visible !important;
            font-weight: bold;
          }

          small {
            overflow-x: visible !important;
            color: #888;
          }

          label{
            overflow-x: visible !important;
            font-family: "DM Sans", sans-serif;
            font-size: 18px;
          }
          .heart {
            overflow-x: visible !important;
            width: 100px;
            height: 100px;
            background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
            background-position: 0 0;
            cursor: pointer;
            transition: background-position 1s steps(28);
            transition-duration: 0s;
          }

          .heart.is-active {
            overflow-x: visible !important;
            transition-duration: 1s;
            background-position: -2800px 0;
          }

          .placement {
            overflow-x: visible !important;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .modal {
            overflow-x: visible !important;
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
            overflow-x: visible !important;
            background-color: red;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 50%;
          }

          .close {
            overflow-x: visible !important;
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
          <span style={{ color: 'white', fontSize: '20px', fontFamily: "DM Sans" }}>
            {isLiked ? article.likes + 1 : article.likes} {COMMENTS_TEXTS.LIKES}
          </span>
        </button>

        {/* Comment Form */}
        <h2>{COMMENTS_TEXTS.TITLE}</h2>
        <form onSubmit={handleCommentSubmit} style={{ marginLeft: 0 }}>
          <label>
            {COMMENTS_TEXTS.FNAME}
            <br />
            <input
              type="text"
              style={{ paddingLeft: 15}}
              value={newComment.first_name}
              onChange={(e) =>
                setNewComment({ ...newComment, first_name: e.target.value })
              }
            />
          </label>
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
              value={newComment.body}
              onChange={(e) =>
                setNewComment({ ...newComment, body: e.target.value })
              }
              required
            />
          </label>
          <button type="submit" onclick="alert('Commentaire soumis avec succès. Il sera examiné et ensuite publié.');">{COMMENTS_TEXTS.SUBMIT}</button>
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
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
      </section>
    </div>
  );
};

export default ArticleContent;

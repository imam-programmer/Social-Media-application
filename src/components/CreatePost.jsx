import React from "react";

const CreatePost = () => {
  return (
    <form className="create-post">
       <div className="mb-3">
        <label htmlFor="userId" className="form-label">
      Enter Your User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId" placeholder="Your user Id"
       
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title" placeholder="Share your think.."
       
        />
      </div>
       <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows={4}
          type="text"
          className="form-control"
          id="title" placeholder="Tell us more about it.."
       
        />
      </div>
       <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions" placeholder="How many people reacted to this post"
       
        />
      </div>

<div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter hastags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags" placeholder="use tags by space"
       
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

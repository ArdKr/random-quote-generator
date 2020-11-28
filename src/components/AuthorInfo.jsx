import React from "react";
import { Link } from "react-router-dom";

const AuthorInfo = ({ quoteAuthor, quoteGenre }) => {
  return (
    <Link to={"/author/" + quoteAuthor}>
      <div className="author">
        <div className="author-info">
          <p className="name">{quoteAuthor}</p>
          <p className="genre">{quoteGenre}</p>
        </div>
        <div className="arrow">
          <p>&rarr;</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorInfo;

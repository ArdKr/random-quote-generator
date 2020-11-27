import React from "react";
import { Link } from "react-router-dom";

const AuthorInfo = () => {
  return (
    <Link to="/author/Charlie">
      <div className="author">
        <div className="author-info">
          <p className="name">Bill Gates</p>
          <p className="genre">business</p>
        </div>
        <div className="arrow">
          <p>&rarr;</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorInfo;

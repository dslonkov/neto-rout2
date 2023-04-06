import React from 'react';
import {Link} from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to='/posts/new' className="btn">
        Создать пост
      </Link>
    </div>
  );
};

export default Posts;

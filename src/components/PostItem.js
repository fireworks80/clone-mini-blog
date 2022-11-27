import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ id, title }) => {
  return (
    <li>
      <p>
        <Link to={`/content/${id}`}>{title}</Link>
      </p>
    </li>
  );
};

export default PostItem;

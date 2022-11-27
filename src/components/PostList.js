import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostList = ({ list }) => {
  return (
    <>
      <Link to='/write'>글 작성하러 가기</Link>
      <ul>
        {list?.map((item) => (
          <PostItem key={item.id} title={item.title} id={item.id} />
        ))}
      </ul>
    </>
  );
};

export default PostList;

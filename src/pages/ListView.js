import React from 'react';
import data from '../data.json';
import PostList from '../components/PostList';
import PostItem from '../components/PostItem';

const ListView = () => {
  return <PostList list={data} />;
};

export default ListView;

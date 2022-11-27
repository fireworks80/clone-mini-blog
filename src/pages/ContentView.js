import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data.json';

const ContentView = () => {
  const params = useParams();
  const content = data.find((item) => item.id === Number(params.id));

  return (
    <div>
      <Link to='/'>뒤로가기</Link>
      <p>{content.content}</p>
      <ul>
        {content.comments?.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button>댓글작성하기</button>
    </div>
  );
};

export default ContentView;

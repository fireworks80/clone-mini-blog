import React from 'react';
import { Link } from 'react-router-dom';

const WriteView = () => {
  return (
    <>
      <form>
        <p>
          <input type='text' />
        </p>
        <p>
          <textarea name='' id='' cols='30' rows='10'></textarea>
        </p>
        <button>글 작성하기</button>
      </form>
    </>
  );
};

export default WriteView;

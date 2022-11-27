import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 className='main-tit'>미니 블로그</h1>
      <Outlet />
    </>
  );
}

export default App;

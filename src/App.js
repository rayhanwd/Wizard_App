import { React, useState } from 'react';
import './App.css';
import Fullname from './Components/UserForm/Fullname';
import Fegure from './Components/UserForm/Fegure';
import Age from './Components/UserForm/Age';
import Email from './Components/UserForm/Email';
import ThankYou from './Components/UserForm/ThankYou';
function App() {
  document.title = "Simple wizard App";
  const [page, setPage] = useState(1);

  return (
    <div className="App">

      {page === 1 && <Fullname />}
      {page === 2 && <Age />}
      {page === 3 && <Email />}
      {page === 4 && <Fegure />}
      {page === 5 && <ThankYou />}

      <button disabled={page > 4} style={page > 4 ? { cursor: 'not-allowed' } : { cursor: 'pointer' }} onClick={() => setPage(page + 1)}>{page > 4 ? 'Done' : 'Next'}</button>

    </div>
  );
}

export default App;

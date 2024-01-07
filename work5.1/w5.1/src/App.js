import './App.css';
import Comments from './containers/Comments';
import Posts from './containers/Posts';

function App() {

  return (
    <div className='App'>
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;
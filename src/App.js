
import './App.css';
import Data from './component/Data';
import Error from './component/Error';
import Loading from './component/Loading';
function App() {
  const dataUrl = 'http://localhost:7070/data';
  const errorUrl = 'http://localhost:7070/error';
  const loadingUrl = 'http://localhost:7070/loading';
  return (
    <div className="App">
     <Data url = {dataUrl} />
     <Error url = {errorUrl} />
     <Loading url = {loadingUrl} />
    </div>
  );
}

export default App;

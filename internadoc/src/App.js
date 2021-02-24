// styling stuff
import logo from './logo.svg';
import './App.css';
// import Pages
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import Found from './Pages/Found';
import ViewDoc from './Pages/ViewDoc';
// import router
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/*everything within this router will have the ability to use routing, this renders components depending on URL*/}
      <div className="App"> 
          <Route path='/' exact component={Home} />
          <Route path='/search' component={SearchPage} />
          <Route path='/found' component={Found} />
          <Route path='/viewdoc:id' component={ViewDoc} />
      </div>
    </Router>
  );
}

export default App;

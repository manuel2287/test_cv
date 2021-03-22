import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './templates/Layout';
import Home from './pages/Home';
import Person from './pages/Person';

function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route path="/person/:id">
              <Person />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            </Switch>
        </Layout>
    </Router>
  );
}

export default App;

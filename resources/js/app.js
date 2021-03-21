// require('./bootstrap');

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import Timesheet from './components/Timesheet';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/timesheet">
                    <Timesheet />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Main />
                </Route>
            </Switch>
            <Footer />
        </Router >
    );
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
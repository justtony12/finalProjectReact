import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from '../posts/Home';
import Editor from '../editing/Editor';
import Create from '../posts/CreatePost';
import Post from '../posts/PostSummary';


const SignedIn = () => {
    return (
        <Router>
            <div className='App'>
                <Link to='/home'><button className='button'>Home</button></Link>
                <Link to='/editor'><button className='button'>Editor</button></Link>
                <Link to='/create'><button className='button'>New Post</button></Link>
            </div>

            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/editor' component={Editor} />
                <Route exact path='/create'component={Create} />
                <Route exact path='/post/:post_id'component={Post} />
            </Switch>
        </Router>
    )
}

export default SignedIn;
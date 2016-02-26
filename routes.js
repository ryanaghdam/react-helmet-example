import React from 'react';
import Router from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import BlogPosts from './components/BlogPosts';
import IdealGasLaw from './components/IdealGasLaw';

/* create a group of routes with nesting */
let routes = (
    <Router.Route handler={App}>
        <Router.DefaultRoute name="home" handler={Home} />
        <Router.Route name="about" path="about" handler={About} />
        <Router.Route name="news" handler={Content}>
            <Router.DefaultRoute name="all" handler={BlogPosts} />
            <Router.Route name="news-tag" path="tag/:tag" handler={BlogPosts} />
        </Router.Route>
        <Router.Route name="ideal-gas-law" handler={IdealGasLaw} />
    </Router.Route>
);

export default routes;

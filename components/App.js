import React from 'react';
import Router from 'react-router';

let App = React.createClass({
    render: function() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Router.Link to="home">Home</Router.Link></li>
                        <li><Router.Link to="news">News</Router.Link></li>
                        <li><Router.Link to="about">About</Router.Link></li>
                        <li><Router.Link to="ideal-gas-law">Ideal Gas Law Calculator</Router.Link></li>
                    </ul>
                </nav>

                <Router.RouteHandler />
            </div>
        );
    }
});

export default App;

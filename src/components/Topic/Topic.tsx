import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import TopicDetail from './TopicDetail/TopicDetail';

const Topic = ({ match }) => {
    console.log('Topic', match);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/topic1`}>Topic1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topic2`}>Topic2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topic3`}>Topic3</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicName`} component={TopicDetail} />
            <Route exact path={match.path} render={() => <h3>Hiii !! Please select a topic.</h3>} />
        </div>
    );
}



export default Topic;
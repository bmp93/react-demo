import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom';

const TopicDetail = (props) => {
    console.log('TopicDetail', props.match);
    return (
        <div>
            <h2>TopicDetail</h2>
            <h4>{props.match.params.topicName}</h4>
            <ul>
                <li>
                    <Link to='/topic'>Back To Topic</Link>
                </li>
            </ul>
        </div>
    );
}




// class TopicDetail extends Component<any, any> {
//     constructor(props: any) {
//         super(props)
//     }

//     renderRedirect = () => {
//        console.log(this.props.history);
//        return <Redirect to="/topic" />;
//         this.props.history.push('/topic')
//     }


//     render() {
//         return (
//             <div>
//                 <h2>TopicDetail</h2>
//                 <h4>{this.props.match.params.topicName}</h4>
//                 <ul>
//                     <li>
//                         <button onClick={this.renderRedirect}>Back To Topic</button>
//                         <Link to='/topic'>Back To Topic</Link>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }



export default TopicDetail;
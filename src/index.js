import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import Avatar from './Avatar';

function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
}
  


const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
  <i className="fa fa-retweet retweet-button" />
  {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart like-button" />
    {count > 0 && <span className="like-count">   {count}
    </span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

var testTweets = [
{
  message: "Welcome to the React Class",
  gravatar: "IAMZ",
  author: {
    handle: "zjeme@techlaunch.io",
    name: "Zakia"
  },
  likes: 15,
  retweets: 10,
  timestamp: "2019-02-26 22:24:37" 
},
{
  message: "I am learning React",
  gravatar: "IAMN",
  author: {
    handle: "njawad@techlaunch.io",
    name: "Nijhum"
  },
  likes: 8,
  retweets: 11,
  timestamp: "2019-02-25 21:24:37" 
},
{
  message: "We are family",
  gravatar: "IAMA",
  author: {
    handle: "amirza@techlaunch.io",
    name: "Abida"
  },
  likes: 12,
  retweets: 10,
  timestamp: "2019-02-22 21:24:37" 
},
{
  message: "Techlaunch is Great",
  gravatar: "WERALL",
  author: {
    handle: "rimpy@techlaunch.io",
    name: "Rimpy"
  },
  likes: 18,
  retweets: 15,
  timestamp: "2019-02-27 21:24:37" 
}
]

function Tweet() {
  return (
    <div className="container">
      {testTweets.map( tweet => 
      <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author} />
          <Time time={tweet.timestamp} />
          <Message text={tweet.message} />
          <div className="button">
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

ReactDOM.render(<Tweet tweet={testTweets} />, document.getElementById('root'));
import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  console.log("Feed tweets", props.tweets)
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox tweetText={props.tweetText} setTweetText={props.setTweetText} setTweets={props.setTweets} userProfile={props.userProfile} tweets={props.tweets}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.map((element, idx) => {
          return (
            <Tweet key={idx} tweet={element}></Tweet>
          )
        })
      }</div>
    </div>
  )
}

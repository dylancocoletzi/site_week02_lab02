import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnTweetTextChange(event){
    props.setTweetText(event.target.value)
  }
  function handleOnSubmit(){
    const newTweet = {name: props.userProfile.name, handle: props.userProfile.handle, text: props.tweetText, comments: 0, retweets: 0, likes: 0, id: props.tweets.length}
    props.setTweets(props.tweets.concat(newTweet))
    props.setTweetText("")
  }
  const disable = (props.tweetText.length === 0 || props.tweetText.length > 140)
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetLength={props.tweetText.length}/>
        <TweetSubmitButton disable={disable} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
var num = 140 - props.tweetLength
return <span>{num === 140 ? "" : num}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.disable}>Tweet</button>
    </div>
  )
}

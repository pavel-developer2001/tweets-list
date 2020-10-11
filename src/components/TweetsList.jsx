import React from 'react'
import '../index.css'
import TweetListItem from './TweetListItem'

const TweetsList = () => {
    return (
        <div className="tweet__list">
        <TweetListItem />
        <TweetListItem />
        <TweetListItem />
        </div>
    )
}
export default TweetsList
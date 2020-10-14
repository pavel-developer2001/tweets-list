import React from 'react'
import '../index.css'
import TweetListItem from './TweetListItem'
import {useSelector} from 'react-redux'

const TweetsList = () => {
    const items = useSelector((item) => item.cards)
    return (
        <div className="tweet__list">
         {items.map((el,index) => <TweetListItem key={index} items={el}/> )}   
        </div>
    )
}
export default TweetsList
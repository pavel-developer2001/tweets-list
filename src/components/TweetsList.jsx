import React from "react";
import "../index.css";
import TweetListItem from "./TweetListItem";
import { useSelector } from "react-redux";

const TweetsList = () => {
  const items = useSelector((item) => item);
  return (
    <div className="tweet__list">
      {items.map((el, index) => (
        <TweetListItem key={index} text={el.text} likes={el.likes} id={el.id} />
      ))}
    </div>
  );
};
export default TweetsList;

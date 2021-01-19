import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/actions/addCard";

const AddTweet = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const items = useSelector((item) => item);
  const addTweet = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      text: value,
      likes: 0,
    };
    dispatch(addCard(newItem));
    setValue("");
  };
  //
  return (
    <>
      <div className="add__tweet">
        <form className="add__tweet-form" onSubmit={addTweet}>
          <textarea
            className="add__tweet-form-area"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите текст"
          ></textarea>
          <button type="submit" className="add__tweet-form-btn">
            Добавить
          </button>
        </form>
      </div>
    </>
  );
};
export default AddTweet;

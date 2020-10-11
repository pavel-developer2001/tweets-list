import React from 'react'
import '../index.css'

const AddTweet = () => {
    return (
        <div className="add__tweet">
        <form className="add__tweet-form">
            <textarea className="add__tweet-form-area" placeholder="Введите текст"></textarea>
            <button type="submit" className="add__tweet-form-btn">Добавить</button>
        </form>
        </div>
    )
}
export default AddTweet
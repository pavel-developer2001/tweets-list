import React from 'react'
import '../index.css'
import {useDispatch} from 'react-redux'
import addCard from '../redux/actions/addCard'

const AddTweet = () => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
   
    const addTweet = (e) => {
        e.preventDefault()
        dispatch(addCard(value))
        setValue('')
    }
    // 
    return (
    <>
        <div className="add__tweet">
        <form className="add__tweet-form" onSubmit={addTweet}>
            <textarea className="add__tweet-form-area" value={value} onChange={e => setValue(e.target.value)} placeholder="Введите текст"></textarea>
            <button type="submit" className="add__tweet-form-btn">Добавить</button>
        </form>
        </div>
        </>
    )
}
export default AddTweet
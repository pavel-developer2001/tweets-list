import React from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, emitCard } from "../redux/actions/addCard";

const TweetListItem = ({ text, likes, id }) => {
  const [turn, setTurn] = React.useState(false);
  const [emit, setEmit] = React.useState(false);
  const [value, setValue] = React.useState(text);

  const items = useSelector((item) => item);
  const dispatch = useDispatch();

  const findItem = items.find((todo) => todo.id === id);

  //функция закрытия окна настроек
  const sortRef = React.useRef();
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setTurn(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const [like, setLike] = React.useState(likes);
  const [check, setCheck] = React.useState(false);
  const handleLikePlus = () => {
    if (check) {
      setLike(like - 1);
      setCheck(!check);
    }
    if (!check) {
      setLike(like + 1);
      setCheck(!check);
    }
  };
  const handleLikeMinus = () => {
    if (check) {
      setLike(like + 1);
      setCheck(!check);
    }
    if (!check) {
      setLike(like - 1);
      setCheck(!check);
    }
  };

  const deleteItem = () => {
    console.log(id);
    if (global.confirm("Вы действительно хотите удалить?")) {
      const idx = items.findIndex((state) => state.id === id);
      const cards = [...items.slice(0, idx), ...items.slice(idx + 1)];
      dispatch(removeCard(cards));
    }
  };

  const emitElement = (e) => {
    e.preventDefault();
    const newEditItem = {
      id: findItem.id,
      text: value,
      likes,
    };
    const findItemArray = items.findIndex((item) => item.id === newEditItem.id);
    const cards = [
      ...items.slice(0, findItemArray),
      ...items.slice(findItemArray + 1),
    ];
    const edit = [...cards, newEditItem];
    dispatch(emitCard(edit));
    setEmit(!emit);
  };

  return (
    <div className="tweet__list-item">
      {turn && (
        <div ref={sortRef} className="tweet__list-item-installation">
          <div className="tweet__list-item-installation-item">
            <svg
              width="25"
              height="25"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.2199 26.5294L30.6381 23.5731L29.4342 19.7907L29.9587 18.7073L33.9167 16.7758V12.5953L29.9699 10.6556L29.4542 9.57423L30.6732 5.7898L27.2527 2.83578L22.8788 3.87664L21.629 3.42343L19.3954 0H14.5617L12.319 3.41339L11.0689 3.85928L6.69389 2.80374L3.27867 5.75745L4.48236 9.5409L3.95835 10.6218L0 12.5535V16.7328L3.94318 18.6768L4.4593 19.7591L3.24053 23.5429L6.65705 26.4977L11.0317 25.4567L12.2816 25.91L14.5152 29.332H19.3477L21.5937 25.9216L22.8449 25.4753L27.2199 26.5294ZM27.5228 16.8341L26.1788 19.6103L27.1891 22.7847L26.3129 23.5426L22.6502 22.6602L19.4388 23.8057L17.5555 26.6653H16.3153L14.4476 23.8038L11.2411 22.6411L7.56876 23.515L6.69396 22.7584L7.71427 19.5907L6.38993 16.8135L3.08333 15.1834V14.1107L6.39345 12.4953L7.73793 9.72207L6.72745 6.54595L7.60043 5.79094L11.263 6.6746L14.4755 5.52874L16.356 2.66667H17.5949L19.4627 5.52947L22.6693 6.69226L26.3424 5.81816L27.2194 6.57555L26.1993 9.74261L27.5241 12.5207L30.8333 14.1471V15.2186L27.5228 16.8341ZM16.9583 20C13.5526 20 10.7917 17.6122 10.7917 14.6667C10.7917 11.7211 13.5526 9.33333 16.9583 9.33333C20.3641 9.33333 23.125 11.7211 23.125 14.6667C23.125 17.6122 20.3641 20 16.9583 20ZM20.0417 14.6667C20.0417 16.1394 18.6612 17.3333 16.9583 17.3333C15.2555 17.3333 13.875 16.1394 13.875 14.6667C13.875 13.1939 15.2555 12 16.9583 12C18.6612 12 20.0417 13.1939 20.0417 14.6667Z"
                fill="#21414B"
              />
            </svg>
            <p
              onClick={() => setEmit(!emit)}
              className="tweet__list-item-installation-text"
            >
              Редактировать
            </p>
          </div>
          <div className="tweet__list-item-installation-item">
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7917 0H20.0417C21.7445 0 23.125 1.19391 23.125 2.66667V4H27.75C29.4529 4 30.8333 5.19391 30.8333 6.66667V9.33333C30.8333 10.8061 29.4529 12 27.75 12H27.6265L26.2083 26.6667C26.2083 28.1394 24.8279 29.3333 23.125 29.3333H7.70834C6.00546 29.3333 4.625 28.1394 4.63033 26.7774L3.20647 12H3.08333C1.38046 12 0 10.8061 0 9.33333V6.66667C0 5.19391 1.38046 4 3.08333 4H7.70833V2.66667C7.70833 1.19391 9.08879 0 10.7917 0ZM3.08333 6.66667L7.70833 6.66667H23.125L27.75 6.66667V9.33333H3.08333V6.66667ZM6.3 12H24.5328L23.1303 26.5559L23.125 26.6667H7.70833L6.3 12ZM20.0417 2.66667V4H10.7917V2.66667H20.0417Z"
                fill="#21414B"
              />
            </svg>
            <p
              onClick={deleteItem}
              className="tweet__list-item-installation-text"
            >
              Удалить
            </p>
          </div>
        </div>
      )}
      <svg
        onClick={() => setTurn(true)}
        className="tweet__list-item-icon"
        width="30"
        height="30"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.3897 14.8897L42.277 17.777L24.5 35.554L6.72302 17.777L9.61037 14.8897L24.5 29.7793L39.3897 14.8897Z"
          fill="#21414B"
        />
      </svg>

      {!emit && <p className="tweet__list-item-text">{text}</p>}
      {emit && (
        <form className="add__tweet-form">
          <textarea
            className="add__tweet-form-area"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            {text}
          </textarea>
          <button
            type="submit"
            className="add__tweet-form-btn"
            onClick={emitElement}
          >
            Добавить
          </button>
        </form>
      )}

      <div className="tweet__list-item-like">
        <svg
          className="tweet__list-item-like-icon"
          onClick={handleLikePlus}
          width="30"
          height="30"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.9167 24.4981C44.9167 21.0631 42.6088 18.3731 38.7917 18.3731H32.5176C32.5359 18.323 32.5548 18.2715 32.5744 18.2185C32.6311 18.0651 32.791 17.6437 32.9463 17.2344L32.9468 17.2331C33.0841 16.8712 33.2177 16.519 33.2732 16.3701C33.6614 15.3281 33.9447 14.4886 34.1739 13.6572C34.5203 12.4005 34.7083 11.2684 34.7083 10.2065C34.7083 7.20114 32.8542 5.33449 30.1111 4.53573C28.8738 4.17546 27.7969 4.0813 26.5417 4.08148H25.5627L24.9497 4.84483C24.2573 5.70711 22.8974 7.26113 21.3295 9.05276L21.3294 9.0529L21.3293 9.05295L21.3293 9.05298L21.3292 9.05304C18.4367 12.3583 14.8366 16.4722 13.4145 18.5434C13.0454 18.4338 12.6546 18.375 12.25 18.375H8.16667C5.91151 18.375 4.08334 20.2032 4.08334 22.4583V40.8333C4.08334 43.0885 5.91151 44.9167 8.16667 44.9167H12.25C13.6529 44.9167 14.8905 44.2092 15.6256 43.1316C16.245 43.5322 16.9361 43.8665 17.6872 44.1353C19.4069 44.7506 21.1126 44.9395 22.5286 44.9136L36.75 44.9148C42.3751 44.9148 44.9167 36.6329 44.9167 24.4981ZM19.0628 40.2906C17.2561 39.6442 16.3333 38.5902 16.3333 36.7482V22.4583V22.4565C16.3333 21.9661 16.4241 21.5318 16.6227 21.0681C16.9794 20.2352 20.2165 16.5421 23.2845 13.0417C24.868 11.2351 26.4065 9.47991 27.4808 8.19571C27.9941 8.23422 28.4779 8.31311 28.9695 8.45624C30.1395 8.79692 30.625 9.28575 30.625 10.2065C30.625 10.8528 30.4942 11.6404 30.2374 12.572C30.0455 13.2681 29.7969 14.0047 29.4468 14.9445C29.3971 15.0779 29.2731 15.4047 29.1413 15.7522C28.9806 16.1757 28.8083 16.6298 28.7445 16.8022C28.4791 17.5201 28.3041 18.0487 28.1845 18.529C27.6759 20.5707 28.1861 22.4565 30.625 22.4565H38.7917C40.2029 22.4565 40.8333 23.1913 40.8333 24.4982C40.8333 34.2793 38.8226 40.8315 36.75 40.8315H22.4583L22.3829 40.8327C21.4893 40.8488 20.2342 40.7097 19.0628 40.2906ZM8.16667 40.8333V22.4583H12.25V40.8333H8.16667Z"
            fill="#21414B"
          />
        </svg>
        <p className="tweet__list-item-like-count">{like}</p>
        <svg
          onClick={handleLikeMinus}
          className="tweet__list-item-like-icon"
          width="25"
          height="30"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.8629 27.683L28.8624 27.6815L28.8623 27.6812C28.7072 27.2725 28.5477 26.8521 28.491 26.6989C28.4831 26.6774 28.4753 26.6563 28.4676 26.6353C28.4562 26.6044 28.4451 26.5741 28.4342 26.5443H34.7083C38.5254 26.5443 40.8333 23.8543 40.8333 20.4193C40.8333 8.28447 38.2917 0.00259382 32.6667 0.00259382C32.6667 0.00259382 18.4222 0.00305325 18.3728 0.00200707C17.0292 -0.0220885 15.3236 0.166841 13.6039 0.782142C12.8524 1.05102 12.161 1.38556 11.5414 1.78641C10.8062 0.709508 9.56899 0.0026055 8.16667 0.0026055H4.08333C1.82817 0.0026055 0 1.83078 0 4.08594V22.4609C0 24.7161 1.82817 26.5443 4.08333 26.5443H8.16667C8.57165 26.5443 8.96286 26.4853 9.33219 26.3755C10.755 28.4473 14.3541 32.5599 17.2459 35.8644L17.246 35.8645C18.8139 37.6562 20.174 39.2103 20.8664 40.0726L21.4793 40.8359H22.474C23.7135 40.8361 24.7905 40.742 26.0277 40.3817C28.7709 39.5829 30.625 37.7163 30.625 34.7109C30.625 33.649 30.437 32.5169 30.0905 31.2602C29.8613 30.4288 29.5781 29.5893 29.1899 28.5473C29.1344 28.3985 29.0008 28.0462 28.8635 27.6843L28.8632 27.6836L28.8629 27.683ZM12.25 22.4609V8.16926C12.25 6.32721 13.1728 5.27321 14.9795 4.6268C16.1509 4.20768 17.406 4.06866 18.3048 4.08472L18.3115 4.08472L18.3557 4.08472C25.4742 4.08557 27.5737 4.08582 29.6733 4.0859L32.6667 4.08593C34.7392 4.08593 36.75 10.6382 36.75 20.4193C36.75 21.7262 36.1196 22.4609 34.7083 22.4609H26.5417C24.1028 22.4609 23.5926 24.3467 24.1012 26.3885C24.2208 26.8688 24.3957 27.3973 24.6612 28.1152C24.7249 28.2874 24.8969 28.7409 25.0575 29.164L25.0576 29.1644L25.058 29.1653L25.0584 29.1664C25.1901 29.5135 25.3138 29.8397 25.3635 29.9729C25.7136 30.9127 25.9621 31.6493 26.154 32.3454C26.4109 33.277 26.5417 34.0646 26.5417 34.7109C26.5417 35.6317 26.0561 36.1205 24.8861 36.4612C24.3946 36.6043 23.9108 36.6832 23.3974 36.7217C22.3231 35.4375 20.7847 33.6823 19.2012 31.8757L19.2011 31.8756C16.1331 28.3753 12.8961 24.6823 12.5393 23.8493C12.3407 23.3856 12.25 22.9513 12.25 22.4609ZM4.08333 22.4609V4.08594H8.16667V22.4609H4.08333Z"
            fill="#21414B"
          />
        </svg>
      </div>
    </div>
  );
};
export default TweetListItem;

import React from "react";
import Item from "./ListData";
import "../App.css";

const List = () => {
    
    let inputRef = React.createRef();

    let [itemList, updateItemList] = React.useState([]);

    let Todo = () => {
        let newItem = inputRef.current.value;
        if (newItem === "") {
            return;
        }
        updateItemList(prevList => {
            return [...prevList, newItem];
        });
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    let handleTodoEnter = (e) => {
        if (e.key === "Enter") {
           Todo();
        }
    };

    return (
        <div>
            <div className="new-input">
                <input type="text" className="new-btn" ref={inputRef} onKeyDown={handleTodoEnter} />
                <button className="new-btn1" onClick={Todo} >Add To list</button>
            </div>
            <div className="new-list">
                {itemList.map((item, i) => (
                    <Item text={item} key={i} />
                ))}
            </div>
            <div className="new-last">
                <button
                    onClick={() => {
                        inputRef.current.focus();
                    }}
                >
                    Reach Top
                </button>
            </div>
        </div>
    );
}

export default List;

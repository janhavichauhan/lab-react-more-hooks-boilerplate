import React, { useReducer } from "react";
import '../App.css';

const Item = (props) => {
    
    let itemReducer = (state) => {
        if (state.isHidden) {
            return {
                text: props.text,
                isHidden: false
            };            
        }
        return {
            text: "Text is Hidden Now   ",
            isHidden: true,
        };  
    }

    const [state, dispatch] = useReducer(itemReducer, {
        text: props.text,
        isHidden: false,
    });

    return (
        <div>
            <h3>{state.text}</h3>
            <button onClick={dispatch}>Toggle</button>
        </div>
    );
}

export default Item;

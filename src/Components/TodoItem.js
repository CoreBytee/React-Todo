import { useState as UseState, useRef as UseRef, useEffect as UseEffect } from "react"

import TrashCanIcon from "../Icons/trash-can-solid.svg"
import "./TodoItem.css"

function TodoItem(
    {
        Index,
        Data,
        UpdateSelf,
        Delete
    }
) {
    const IndicatorRef = UseRef(null)
    const CheckBoxRef = UseRef(null)
    function TriggerComplete() {
        const NewData = Data
        NewData.Complete = !NewData.Complete
        UpdateSelf(NewData)
        IndicatorRef.current.style.backgroundColor = NewData.Complete ? "#00ff00" : "#ff0000"
    }

    UseEffect(
        () => {
            IndicatorRef.current.style.backgroundColor = Data.Complete ? "#00ff00" : "#ff0000"
            CheckBoxRef.current.checked = Data.Complete
        }
    )
    

    return (
        <div className="TodoItem">
            <div className="indicator" ref={IndicatorRef}></div>
            <input onChange={TriggerComplete} ref={CheckBoxRef} type="checkbox"></input>
            <div className="data">
                <p className="title">{Data.Name}</p>
                <p>{Data.Description}</p>
            </div>
            <div className="actions">
                <button onClick={() => Delete(Index)}><img src={TrashCanIcon}></img></button>
            </div>
        </div>
    )
}

export default TodoItem
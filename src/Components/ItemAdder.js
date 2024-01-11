import { useState as UseState, useRef as UseRef } from "react"

import "./ItemAdder.css"
import PlusIcon from "../Icons/plus-solid.svg"

function ItemAdder(
    {
        SetSavedData,
        SavedData
    }
) {
    const ItemNameFieldRef = UseRef()
    const ItemDescriptionFieldRef = UseRef()

    function CreateButtonClick() {
        const ItemNameFieldValue = ItemNameFieldRef.current.value
        const ItemDescriptionFieldValue = ItemDescriptionFieldRef.current.value

        console.log(ItemNameFieldValue, ItemDescriptionFieldValue)
        const CurrentListIndex = SavedData.CurrentList
        const CurrentList = SavedData.Lists[CurrentListIndex]
        CurrentList.Items.push(
            {
                Name: ItemNameFieldValue,
                Description: ItemDescriptionFieldValue,
                Complete: false
            }
        )
        SetSavedData(SavedData)
        window.location.reload()
    }

    return (
        <div className="ItemAdder">
            <div className="fields">
                <input ref={ItemNameFieldRef} type="text" placeholder="Item Name"></input>
                <input ref={ItemDescriptionFieldRef} type="text" placeholder="Item Description"></input>
            </div>
            <button onClick={CreateButtonClick}>
                <img src={PlusIcon}></img>
            </button>
        </div>
    )
}

export default ItemAdder
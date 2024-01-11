import { useState as UseState } from "react"

import "./TodoItemList.css"
import TodoItem from "./TodoItem"

function TodoItemList(
    {
        CurrentList,
        SetSavedData,
        SavedData
    }
) {
    const SelectedList = "Default"
    const ListData = SavedData.Lists.find(List => List.Name === SelectedList)
    const TodoItems = ListData.Items.map(
        (Item, Index) => {
            console.log(Item)
            function Update(NewData) {
                const NewSavedData = SavedData
                NewSavedData.Lists.find(List => List.Name === SelectedList).Items[Index] = NewData
                SetSavedData(NewSavedData)
            }
            function Delete() {
                const NewSavedData = SavedData
                NewSavedData.Lists.find(List => List.Name === SelectedList).Items.splice(Index, 1)
                SetSavedData(NewSavedData)
                window.location.reload()
            }
            return (
                <TodoItem UpdateSelf={Update} Delete={Delete} Index={Index} Data={Item} />
            )
        }
    )

    return (
        <div className="TodoItemList">
            {TodoItems}
        </div>
    )
}

export default TodoItemList
import { useState as UseState } from "react"

import "./TitleBar.css"

function TitleBar() {
    const [IsEditing, SetIsEditing] = UseState(false)
    const SavedData = JSON.parse(localStorage.TodoApp)

    const TitleBarContent = IsEditing ? (
        <input type="text" />
    ) : (
        <select>
            {
                SavedData.Lists.map((List, Index) => (
                    <option key={ Index }>{ List.Name }</option>
                ))
                }
        </select>
    )

    return (
        <div className="TitleBar">
            { TitleBarContent }
        </div>
    )
}

export default TitleBar
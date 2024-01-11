import { useState as UseState } from 'react'

import './App.css'
import TitleBar from './TitleBar'
import ItemAdder from './ItemAdder'
import TodoItemList from './TodoItemList'

function App() {
    const [CurrentList, SetCurrentList] = UseState("Default")
    const [SavedData, SetSavedDataState] = UseState(JSON.parse(localStorage.TodoApp))

    function SetSavedData(NewSavedData) {
        SetSavedDataState(NewSavedData)
        localStorage.TodoApp = JSON.stringify(NewSavedData)
    }

    return (
        <div className="App">
            <TitleBar SetSavedData={SetSavedData} SavedData={SavedData} CurrentList={CurrentList} SetCurrentList={SetCurrentList} />
            <ItemAdder SetSavedData={SetSavedData} SavedData={SavedData} />
            <TodoItemList SetSavedData={SetSavedData} SavedData={SavedData} CurrentList={CurrentList} />
        </div>
    )
}

export default App

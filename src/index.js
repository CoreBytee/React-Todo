import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Container from './Components/Container'

if (localStorage.TodoApp === undefined) {
    localStorage.TodoApp = JSON.stringify(
        {
            CurrentList: 0,
            Lists: [
                {
                    Name: "Default",
                    Items: [
                        {
                            Name: "Clean kitchen",
                            Description: "Clean the kitchen",
                            Complete: false
                        },
                        {
                            Name: "Clean dog house",
                            Description: "Clean the dog house",
                            Complete: false
                        },
                        {
                            Name: "Put kids to bed",
                            Description: "Read story and put kids to bed",
                            Complete: true
                        }
                    ]
                }
            ]
        }
    )
}

const root = ReactDOM.createRoot(document.body)
root.render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
)
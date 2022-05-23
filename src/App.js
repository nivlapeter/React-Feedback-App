//main App component
import React from 'react'
import { useState } from "react";
import FeedbackForm from './Components/FeedbackForm';
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from './Components/FeedbackStats';
import Header from "./Components/Header"
import FeedbackData from "./Data/FeedbackData";

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)//app level state hence changes to its state will affect all other child components
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to Delete?")){
            setFeedback(feedback.filter((item) => item.id !== id)) //filters out the deleted item
        }
    }
    return(
        <>
        <Header />
        <div className="container"> 
            <FeedbackForm />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>  {/*feedback prop to be used in the feedbackList component*/}
        </div>
        </>
        
       
    )
}
export default App;
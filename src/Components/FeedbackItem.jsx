import React from 'react'
import { FaTimes } from "react-icons/fa"
import PropTypes from 'prop-types'
import Card from "./shared/Card" //styled component


function FeedbackItem({item, handleDelete}) {  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)}className="close">   {/* passing in an argument  of id to handleDelete*/}
          <FaTimes color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
        
    </Card>
  )
}

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired
}

export default FeedbackItem
import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value); // sets whatever is typed in the input to the given piece of state
    }
  return (
      <Card>
          <form>
              <h2>How would you rate our services</h2>
              <div className="input-group">
                  <input onChange={handleChange} 
                  type="text" 
                  placeholder='Write a review'
                  value={text} />  {/* onChange connects the input in the form to the given state*/}
                  <Button type="submit">Send</Button>
              </div>

          </form>
      </Card>
    
  )
}

export default FeedbackForm
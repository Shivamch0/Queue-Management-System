import React , { useState } from 'react'

function AddToQueue() {
    const [] = useState();
  return (
     <form className="queue-form">
            <h2 className='text-2xl font-bold'>Add to queue</h2>
            <div className="form-group">
              <input
                placeholder="Customer name"
               
                type="text"
              />
            </div>
            <div className="form-group">
              <select >
                <option value="">Select Service</option>
                <option value="consultation">consultation</option>
                <option value="payment">payment</option>
                <option value="support">support</option>
              </select>
            </div>
            <button type="submit">
             Add Customer
            </button>
          </form>
  )
}

export default AddToQueue
import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
      return (
        setText(e.target.value)
      )  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }
    return (
      <div className="search-container">
          <form onSubmit={handleSubmit} >
              <div className="form-wrap">
                  <input type="text" onChange={handleChange} />
                  <button type="submit">Search</button>
              </div>
          </form>
      </div>   
    )
}

export default ImageSearch
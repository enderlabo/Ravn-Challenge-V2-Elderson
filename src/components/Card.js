import React from 'react'

export default function Card() {
    const arrow = '>'
    return (
      <>
      {/* Error message */}
        {/* <h3 className="card-errorMsg">Failed to Load Data</h3> */}

        <div className="card-container">
          <div className="card-titles">
            <h2>Luke Skywalker</h2>
            <br />
            <h3>Human from Tatooine</h3>
          </div>
          <div>
            {/* arrow-left icon */}
            <p className="card-icon">{arrow}</p>
          </div>
        </div>
        <div className="fake-line"></div>
      </>
    );
}
import React from 'react'
import "../styles/Home.css"
function Home() {
  return (
    <div className="homeContainer">
        <div className='card home-card'>
          <h5>
            random
          </h5>
          <div className='card-image'>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </div>
          
          <div className="card-content">
              <i className="material-icons">favorite</i>
              <h6>title</h6>
              <p>this is amzing post</p>
              <input type="text" placeholder="add a comment"/>
          </div>
        </div>
        <div className='card home-card'>
          <h5>
            random
          </h5>
          <div className='card-image'>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </div>
          <i className="material-icons">favorite</i>
          <div className="card-content">
              <h6>title</h6>
              <p>this is amzing post</p>
              <input type="text" placeholder="add a comment"/>
          </div>
        </div>
        <div className='card home-card'>
          <h5>
            random
          </h5>
          <div className='card-image'>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </div>
          <div className="card-content">
              <i className="material-icons">favorite</i>
              <h6>title</h6>
              <p>this is amzing post</p>
              <input type="text" placeholder="add a comment"/>
          </div>
        </div>
    </div>
  )
}

export default Home

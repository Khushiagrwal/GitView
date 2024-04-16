import React from 'react'
import "../../public/Css/Repository.css"


function Repository({user,repo}) {
  return (
    <div>
        <div>
            <div>
                <i></i>
                <a href="">{repo.name}</a>
            </div>
            <span>desc</span>
        </div>

        <div>
            <i></i>
            <span>language</span>
        </div>

        <div>
            <i></i>
            <span>star</span>
        </div>

        <div>
            <i></i>
            <span>fork</span>
        </div>
    </div>
  )
}

export default Repository
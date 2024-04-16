import React from 'react'
import "../../public/Css/Userinfo.css"

function Userinfo({user}) {
  return (
    <div>
        <img src={user.avartar_url} width='50' height='50' alt="" />
        <div>
            <h5>{user.name}</h5>
            
            { user.location &&
            <div>
                <i></i>
                <span>{user.location}</span>
            </div>
            }
            
            { user.blog &&
            <div>
                <i></i>
                <span>{user.blog}</span>
            </div>
            }

            {user.email &&
            <div>
                <i></i>
                <span>{user.email}</span>
            </div>
            }

            {user.followers && 
            <div>
                <i></i>
                <span>{user.followers}</span>
            </div>
            }

            {user.following &&
            <div>
                <i></i>
                <span>{user.following} Following</span>
            </div>
            }
        </div>
    </div>
  )
}

export default Userinfo
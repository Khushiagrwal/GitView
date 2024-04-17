import React from 'react'
import "../../public/Css/Tabs.css"

function Tabs({ repos, user }) {
  return (
    <div>
        <ul>
            <li>
                <p>Repositories {repos.length}</p>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer" 
                    href={`https://github.com/${user.login}?tab=packages`}>

                </a>Packages

            </li>
            
            <li>
                <a target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/orgs/${user.login}/people`}></a>
                <p>People</p>
            </li>

            <li> 
                <a  target="_blank"
                rel="noopener noreferrer"
        href={`https://github.com/${user.login}?tab=projects`}></a>
                <p>Projects</p>
            </li>
        </ul>
    </div>
  )
}

export default Tabs
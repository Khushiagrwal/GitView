// import React, { useEffect, useState } from 'react';
// import Navbar from "../Component/Navbar";
// import Userinfo from './Userinfo';
// import Tabs from './Tabs';
// import Repositories from './Repositories';
// import { getUserData , getUserRepo } from '../api/api';
// import Loading from './Loading';

// function UserPage({ match }) {

//     const [user, setUser] = useState(null);
//     const [repos, setRepos] = useState([]);

//     const userNameParms = match.params.userName;

//     useEffect(() => {
//         // Fetch user data and repos when component mounts
//         fetchUser();
//         fetchRepos();
//     }, [userNameParms]);

//     async function fetchUser() {
//         try {
//             const { data } = await getUserData(userNameParms);
//             console.log(data)
//             setUser(data);
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//             // Handle error, maybe show a message to the user
//         }
//     }

//     async function fetchRepos() {
//         try {
//             const { data } = await getUserRepo(userNameParms);
//             console.log(data)
//             setRepos(data);
        
//         } catch (error) {
//             console.error("Error fetching user repos:", error);
//             // Handle error, maybe show a message to the user
//         }
//     }

//     return (
//         <>
//             {user ? (
//                 <>
//                     <Navbar user={user} />
//                     <div>
//                         <Userinfo user={user} />
//                         <Tabs repos={repos} user={user} />
//                         <Repositories repos={repos} user={user} />
//                     </div>
//                 </>
//             ) : (
//                 <Loading />
//             )}
//         </>
//     );
// }

// export default UserPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../Component/Navbar";
import Userinfo from './Userinfo';
import Tabs from './Tabs';
import Repositories from './Repositories';
import { getUserData , getUserRepo } from '../api/api';
import Loading from './Loading';

function UserPage() {
    const { userName } = useParams();
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch user data and repos when component mounts
        fetchUser();
        fetchRepos();
    }, [userName]);

    async function fetchUser() {
        try {
            const { data } = await getUserData(userName);
            console.log(data)
            setUser(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Handle error, maybe show a message to the user
        }
    }

    async function fetchRepos() {
        try {
            const { data } = await getUserRepo(userName);
            console.log(data)
            setRepos(data);
        
        } catch (error) {
            console.error("Error fetching user repos:", error);
            // Handle error, maybe show a message to the user
        }
    }

    return (
        <>
            {user ? (
                <>
                    <Navbar user={user} />
                    <div>
                        <Userinfo user={user} />
                        <Tabs repos={repos} user={user} />
                        <Repositories repos={repos} user={user} />
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default UserPage;

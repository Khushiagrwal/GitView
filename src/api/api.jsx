// import axios from "axios"
// const url_base ="https://api.github.com/";

// export async function getUserData(userName)
// {
//     const userInfo =await axios.get(`${url_base}/users/${userName}`)
    
//     return userInfo;
// }

// export async function getUserRepo(userName)
// {
//     const repos =await axios.get(`${url_base}/users/${userName}/repos`)
//     return repos;
// }

import axios from 'axios';

const URL_BASE = "https://api.github.com"

export async function getUserData(userName) {
    const response = await axios.get(`${URL_BASE}/users/${userName}`);
    return response
}


export async function getUserRepo(userName) {
    const repositories = await axios.get(`${URL_BASE}/users/${userName}/repos`);
    return repositories
}
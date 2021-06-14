import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create( {
        defaultURL: 'http://localhost:5000/api',
        headers: {
            authorization: token
            // authorization: JSON.parse(window.localStorage.getItem('token)) //removes need for prior variable
        }   
    })
}
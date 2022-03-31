import axios from 'axios';
import URLSERVICES from "./urlServices";
const URL = `http://${URLSERVICES}/api/v1/users`;

async function loginService(email, password) {
    try {
        const response = await axios.post('http://54.183.246.192:9000/api/users/login/', {
            email,
            password
        })
        return response.data
    } catch (err) {
        console.log("ERROR OF CONNECTION BACK =>", err);
    }
}

async function registerService(username, email, password) {
    try {
        const response = await axios.post('http://54.183.246.192:9000/api/users/register/', {
            username,
            email,
            password
        })
        return response.data
    } catch (err) {
        console.log("ERROR OF CONNECTION BACK =>", err);
    }
}

export {
    loginService,
    registerService,
}
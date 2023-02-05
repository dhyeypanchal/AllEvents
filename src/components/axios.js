// Axios is a module by which we can make request to api and fetch it.

import axios from 'axios';
// const axios = require('axios');

const instance = axios.create ({
    baseURL: "https://allevents.s3.amazonaws.com/tests/categories.json"
});

export default instance;
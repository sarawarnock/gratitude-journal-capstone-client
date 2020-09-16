export default {
    //API_ENDPOINT: "http://localhost:8000/api",
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'https://gratitude-journal-server.herokuapp.com/api',
    TOKEN_KEY: 'gratitude-journal-client-auth-token',
}
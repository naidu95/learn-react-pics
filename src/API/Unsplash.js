import axios from 'axios';

export default axios.create({ 
  baseURL:"https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bxUOUejXKlJK-zdm59rIQHsUykNvIbuxT1Vq0vekhH0",
  }});
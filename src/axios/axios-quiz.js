import axios from 'axios';

export default axios.create({
  baseURL: 'https://tests-react-app.firebaseio.com'
});
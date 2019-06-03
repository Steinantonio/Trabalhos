import Axios from 'axios/index';
export default Axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {Authorization: 'Client-ID 67a5c0eb10ac0a28bbbeac79de35763bfcf619de0b998f4ca180b11ded2c5d89'}
});
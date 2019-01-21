// You can fetch api here Ex.

// import axios from 'axios';
// const FetchGitUser = username => dispatch =>  {
//   try {
//     axios.get(`url ${username}`).then(response => {
//       dispatch({
//         type: 'STORE_USER',
//         data: response.data,
//       })
//     }).catch(error => {
//       console.log(error.stack);
//     })
//   }
// }


const Incress = () => ({
  type: 'INCRESMENT',
});

const Decress = () => ({
  type: 'DECRESMENT',
});

export default {
  Incress,
  Decress,
};
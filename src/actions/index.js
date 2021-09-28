import {get2} from "../utils/get2";

export function addFavorites(post) {
  return {
    type: 'ADD_FAVORITES',
    post
  }
};
export function removeFavorites(post) {
    return {
      type: 'REMOVE_FAVORITES',
      post
  };
};
export function addResult(post) {
  return {
    type: 'ADD_RESULT',
    post
  }
}

export function removeResult() {
  return {
    type: 'REMOVE_RESULT',
  }
}
export function getPost() {
    return {
      type: 'GET_POST',
    }
  }

/* export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
} */

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    get2(valor).then((data)=>{
      dispatch(addResult(data.results));
      console.log(data)
      }
     )
    }
  
  }
    
    
    /* axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(r => r.data)
      .then(d => dispatch(receivePost(d)))
      .catch(e => console.log(e));*/
  
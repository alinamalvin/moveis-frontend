export const userPostFetch = user => {
    return dispatch => {
      return fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(userObj => {
            dispatch({type: 'LOGIN_USER', payload: userObj})
        })
    }
  }
  
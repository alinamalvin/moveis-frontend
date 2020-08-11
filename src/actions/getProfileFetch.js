export const getProfileFetch = (current_user_id) => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        referrer: 'no-referrer',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        // here the execution stops because fetch request is not completed
        .then(resp => resp.json())
        .then(data => {
            dispatch(loginUser(data.user))
        })
    }
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})



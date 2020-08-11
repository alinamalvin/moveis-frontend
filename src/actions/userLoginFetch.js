export const userLoginFetch = user => {
    return dispatch => {
    // fetching sessions#create
      return fetch("http://localhost:3000/login", {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({user}),
      })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt)
        localStorage.setItem("user_id", data.user.id)
        dispatch(loginUser(data.user))
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})
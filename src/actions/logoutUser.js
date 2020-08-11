// export const logoutUser = () => ({
//     type: 'LOGOUT_USER'
//   })

export const logoutUser = user => {
  return dispatch => {
  // fetching sessions#create
    return fetch("http://localhost:3000/login", {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: "DELETE",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({user}),
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch(userLogout(data.user))
    })
}
}

const userLogout = userObj => ({
type: 'LOGOUT_USER',
payload: userObj
})
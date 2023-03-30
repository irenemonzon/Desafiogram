import { Global } from '../Global'

const url = Global.url

export const signup = ({ email, password, nombre, username, bio }) =>

  fetch(`${url}usuarios/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, nombre, username, bio })
  })

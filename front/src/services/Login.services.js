import { Global } from '../Global'

const url = Global.url

export const login = ({ email, password }) =>

  fetch(`${url}usuarios/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

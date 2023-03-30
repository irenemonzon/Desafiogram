import { useState } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { login } from '../services/Login.services'

export const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formValues
    try {
      const response = await login({ email, password })
      const data = await response.json()
      console.log('data', data)
    } catch (err) {
      setErrorMessage('Usuario o contraseña no coinciden')
    }
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={3}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item xs={12}>
              <Typography variant='h2' gutterBottom>
                Desafiogram
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Email'
                id='email'
                name='email'
                onChange={handleChange}
                value={formValues.email}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                type='password'
                name='password'
                id='password'
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </Grid>
            {errorMessage !== '' && <p>{errorMessage}</p>}
            <Grid item xs={12}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom>
                No tienes cuenta ?
                <Link to='/signup'>
                  <Button>  Signup </Button>
                </Link>

              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  )
}

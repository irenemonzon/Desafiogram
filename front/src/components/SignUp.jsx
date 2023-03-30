import { useState } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { signup } from '../services/SignUp.services'

export const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    nombre: '',
    username: '',
    bio: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('envia registro nuevo')
    const { email, password, nombre, username, bio } = formValues
    try {
      const response = await signup({ email, password, nombre, username, bio })
      const data = await response.json()
      console.log('data', data)
    } catch (err) {
      console.log('error')
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
              <Typography variant='h2'>
                Desafiogram
              </Typography>
              <Typography variant='h6' gutterBottom>
                Registrate para que veas el clon de instagram
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Email'
                id='email'
                name='email'
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label='Nombre'
                id='nombre'
                name='nombre'
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Username'
                id='username'
                name='username'
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Descripción'
                id='bio'
                name='bio'
                onChange={handleChange}
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
            <Grid item xs={12}>
              <Button type='submit' fullWidth variant='contained'> Sign Up </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom>
                Ya tienes cuenta?
                <Link to='/login'>
                  <Button>  Login </Button>
                </Link>

              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  )
}

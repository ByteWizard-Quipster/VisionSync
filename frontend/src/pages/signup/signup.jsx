//import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
function Signup() {
  return (
    <>   <Card variant="outlined"> 
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            margin: 5 ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
 
 
          <Typography component="h1" variant="h5">
            Signup
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            
                <Link to="/">
                  {"Already have an account? Sign Up"}
                </Link>
          
 
          </Box>
          
        </Box>
    
      </Container>
      </Card>
    </>
  )
}

export default Signup

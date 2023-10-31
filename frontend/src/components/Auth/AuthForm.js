import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useNavigate } from 'react-router-dom';

const labelStyle = { mt: 1, mb: 2 };

const AuthForm = ({ onSubmit, isAdmin, allowSignup }) => {
  const navigate = useNavigate();

  const crossHandler = () => {
    navigate('/');
  };

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [isSignup, setIsSignup] = useState(allowSignup);

  const [open, setOpen] = useState(true);
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onSubmit({ inputs, signup: isSignup });

      setOpen(false);
      navigate('/'); // Always navigate to the home page after a successful login or signup
    } else {
      setValid(false);
    }
  };

  const validateInputs = () => {
    if (inputs.email && inputs.password) {
      return true;
    }
    return false;
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={open}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton onClick={crossHandler}>
          <ClearRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={'center'}>
        {isSignup ? 'Signup' : 'Login'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box padding={6} display={'flex'} justifyContent={'center'} flexDirection={'column'} width={400} margin={'auto'} alignContent={'center'}>
          {allowSignup && isSignup && (
            <>
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField value={inputs.name} onChange={handleChange} variant="standard" margin="normal" type="name" name="name" />
            </>
          )}

          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField value={inputs.email} onChange={handleChange} variant="standard" margin="normal" type="email" name="email" />

          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField value={inputs.password} onChange={handleChange} variant="standard" margin="normal" type="password" name="password" />

          {!valid && <p>Invalid input. Please check your inputs.</p>}

          <Button sx={{ mt: 2, borderRadius: 10, bgcolor: '#2b2d42' }} type="submit" fullWidth variant="contained">
            {isSignup ? 'Signup' : 'Login'}
          </Button>

          {allowSignup && (
            <Button onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
              Switch to {isSignup ? 'Login' : 'Signup'}
            </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;

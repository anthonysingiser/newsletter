import React from 'react';
import { Box, CssBaseline, TextField , Button } from '@material-ui/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { styles } from './styles';

export default function App(){
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_ip0sttu', 'template_u09d72k', e.target, 'epwEA6jtM-fzbhBRM')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message sent sucessfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: error.text,
        })
      });
    e.target.reset();
};

  return (
    <>
      <CssBaseline />
      <Box style={styles.loginscreen}>
        <form onSubmit={sendEmail}>
          <Box>
            <h2>Sign Up For My Newsletter !</h2>
            <TextField fullWidth style={styles.text}
              type="text"
              label="Name"
              required
              name="user_name"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField fullWidth style={styles.text}
              type="email"
              label="Email"
              name="user_email"
              required
              variant="outlined"
            />
          </Box>
          <Box >
            <TextField
              multiline
              style={styles.message}
              type="text"
              label="Message"
              required
              name="user_message"
              variant="outlined"
              placeholder='Message here...'
            />
          </Box>
          <Box style={styles.btnLogin}>
            <Button type='submit' style={styles.btnText}>SUBMIT MESSAGE</Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
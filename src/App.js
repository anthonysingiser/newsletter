import React from 'react';
import { Box, TextField , Button, TextareaAutosize } from '@material-ui/core'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { styles } from './styles';


function App(){

  const onHandleSubmit= (e) => {}

  return (
    <>
      <Box sx = {styles.loginscreen}>
        <form  onSubmit={onHandleSubmit}>
            <Box>
                 <h2>Contact Form</h2>
                <TextField fullWidth sx={styles.text}
                  type="text"
                  label="Name"
                  required
                  name="user_name"
                />
            </Box>

            <Box>
                <TextField sx={styles.text}
                    type="email"
                    label="Email"
                    name="user_email"
                    required
                />
            </Box>

            <Box >
                <TextareaAutosize sx={styles.text}
                    type="text"
                     label="Message"
                    required
                    name="user_message"
                    variant="outlined"
                    placeholder='Message here...'
                    style={{ width: 400 , height:100, borderColor:"#909090", borderWidth:1.3, 
                    marginBottom:"10px"}}
                />
            </Box>

            <Box sx={styles.btnLogin}>
                <Button type='submit' sx={styles.btnText}>SUBMIT MESSAGE</Button>
            </Box> 
        </form>
    </Box>
    </>
  )
}

export default App;

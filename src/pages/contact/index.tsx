import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Button, { ButtonProps } from '@mui/material/Button';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../../config';
import { useEffect, useRef } from 'react';

// interface FormData {
//     name: string;
//     email: string;
//     message: string;
// }

// const FormContact: React.FC = () => {
//     const form = useRef(null);

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     const onSubmit = () => {
//         console.log("dkasjflksdjflkdjs", form.current);
//         emailjs
//             .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
//             .then((response) => {
//                 console.log("Sucess");

//                 reset();
//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//             });
//     };

//     return (

//         <Container sx={{ pt: 1, pb: 12 }} maxWidth="lg" ref={form} id='contact-form' onSubmit={onSubmit}>
//             <Grid container spacing={3}>
//                 {/* <p ref={paraRef}>Current renders: {countRenders.current}</p> */}
//                 <Grid item xs={12} sm={6}>

//                     <Typography variant="h6" gutterBottom sx={{ textTransform: "uppercase", py: "1rem" }}>
//                         Liên hệ với LCHSV Trà Vinh
//                     </Typography>
//                     <Grid container spacing={3}>
//                         <Grid item xs={12}>
//                             <StyledTextField
//                                 required
//                                 error
//                                 helperText="Hãy nhập họ và tên"
//                                 id="name"

//                                 label="Họ và tên"
//                                 fullWidth
//                                 autoComplete="given-name"
//                                 variant="outlined"

//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 required
//                                 id="code"
//                                 name="code"
//                                 label="Mã số sinh viên"
//                                 fullWidth
//                                 autoComplete="given-name"
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <StyledTextField
//                                 required
//                                 id="course"
//                                 name="course"
//                                 label="Khóa"
//                                 fullWidth
//                                 autoComplete="family-name"
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <StyledTextField
//                                 required
//                                 id="major"
//                                 name="major"
//                                 label="Ngành học"
//                                 fullWidth
//                                 autoComplete="shipping address-line1"
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <StyledTextField
//                                 required
//                                 id="email"
//                                 name="email"
//                                 label="Địa chi Email sinh viên"
//                                 fullWidth
//                                 autoComplete="shipping address-line2"
//                                 variant="outlined"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <StyledTextField
//                                 id="content"
//                                 name="content"
//                                 label="Nội dung liên hệ"
//                                 fullWidth
//                                 autoComplete="shipping address-line2"
//                                 variant="outlined"
//                                 multiline
//                                 rows={6}
//                             />
//                         </Grid>
//                         <Grid item xs={12}
//                             display="flex"
//                             flexDirection="row"
//                             justifyContent="flex-end"
//                             alignItems="flex-end"
//                             width="100%"
//                         >
//                             <Button
//                                 onClick={onSubmit}
//                                 sx={{
//                                     backgroundColor: "#830000",
//                                     '&:hover': {
//                                         backgroundColor: '#570505',
//                                         boxShadow: 'none',
//                                     },
//                                 }}
//                                 variant="contained">
//                                 Gửi mail
//                             </Button>
//                         </Grid>


//                     </Grid>

//                 </Grid>
//                 <Grid item xs={12} sm={6}>

//                 </Grid>
//             </Grid>

//         </Container>


//     );
// }
// export default FormContact;



import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    code: string;
    course: string;
    major: string;
    email: string;
    content: string;
}

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        console.log("DATA", { data });

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            { data },
            PUBLIC_KEY
        ).then((response) => {
            console.log("Success", response);

            reset();
        })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container sx={{ pt: 1, pb: 12 }} maxWidth="lg">
                <Grid container spacing={3}>
                    {/* <p ref={paraRef}>Current renders: {countRenders.current}</p> */}
                    <Grid item xs={12} sm={6}>

                        <Typography variant="h6" gutterBottom sx={{ textTransform: "uppercase", py: "1rem" }}>
                            Liên hệ với LCHSV Trà Vinh
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <StyledTextField
                                    required

                                    id="name"

                                    label="Họ và tên"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="outlined"
                                    error={!!errors.name}
                                    {...register('name', { required: true })}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    required
                                    id="code"

                                    label="Mã số sinh viên"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="outlined"
                                    error={!!errors.code}
                                    {...register('code', { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <StyledTextField
                                    required
                                    id="course"

                                    label="Khóa"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="outlined"
                                    error={!!errors.course}
                                    {...register('course', { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    required
                                    id="major"

                                    label="Ngành học"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="outlined"
                                    error={!!errors.major}
                                    {...register('major', { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    required
                                    id="email"

                                    label="Địa chi Email sinh viên"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="outlined"
                                    error={!!errors.email}
                                    {...register('email', { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <StyledTextField
                                    id="content"

                                    label="Nội dung liên hệ"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    error={!!errors.content}
                                    {...register('content', { required: true })}
                                />
                            </Grid>
                            <Grid item xs={12}
                                display="flex"
                                flexDirection="row"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                                width="100%"
                            >
                                <Button
                                    type="submit"
                                    sx={{
                                        backgroundColor: "#830000",
                                        '&:hover': {
                                            backgroundColor: '#570505',
                                            boxShadow: 'none',
                                        },
                                    }}
                                    variant="contained">
                                    Gửi mail
                                </Button>
                            </Grid>


                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>

            </Container>
            {/* <Typography variant="h4">Contact Us</Typography>
      <TextField
        {...register('name', { required: true })}
        label="Name"
        fullWidth
        error={!!errors.name}
        helperText={errors.name ? 'Name is required' : ''}
      />
      <TextField
        {...register('email', { required: true })}
        label="Email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email ? 'Email is required' : ''}
      />
      <TextField
        {...register('content', { required: true })}
        label="Message"
        multiline
        rows={4}
        fullWidth
        error={!!errors.content}
        helperText={errors.content ? 'Message is required' : ''}
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button> */}
        </form>
    );
};
const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #2f3842;
  }
  .MuiOutlinedInput-input {
    cursor: pointer;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #c0c0c0;
    }
    &:hover fieldset {
      border-color: #999999;
      cursor: pointer;
    }
    &.Mui-focused fieldset {

      border:1px solid #2f3842;
    }
  }
`;
export default Form;

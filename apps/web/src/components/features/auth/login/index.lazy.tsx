import { createLazyRoute } from '@tanstack/react-router';
import { Box, Button, Container, IconButton, Snackbar, SnackbarCloseReason, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from '@/utils/trpc';
import React from 'react';
import { TRPCClientError } from '@trpc/client';
import CloseIcon from '@mui/icons-material/Close';
import CustomSnacker from '@/components/common/Snackbar';

// Define Zod schema
const authSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  password: z.string().min(1, "Password is required"),
});

// Infer TypeScript type from Zod schema
type Auth = z.infer<typeof authSchema>;

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({
    resolver: zodResolver(authSchema),
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  console.log("⛳️ log ~ LoginComponent log ~ errorMessage: ", errorMessage)

  // const {mutate} = trpc.auth.login.useMutation()
  const loginMutation = trpc.auth.login.useMutation();

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    console.log(data);
    // mutate(data)
    try{
      const response = await loginMutation.mutateAsync(data);
      localStorage.setItem("token", response.token)
      console.log("⛳️ log ~ LoginComponent log ~ response: ", response)
    }catch(error){
      if(error instanceof TRPCClientError){
        console.log("⛳️ log ~ constonSubmit:SubmitHandler<Auth>= log ~ error: ", error.message)
        setErrorMessage(error.message)
        setOpenSnackbar(true);
      }
    }
  }


  return (
      <Container
        maxWidth="md"
          component="form"
          sx={{ p: 3 }}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
      >      
      <Box sx={{ width: '100%' }}>
        <TextField
          {...register("userName")}
          variant="outlined"
          label="User name"
          sx={{ width: '100%' }}
          autoComplete="new-username"
          error={!!errors.userName}
          helperText={errors.userName?.message}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          {...register("password")}
          type="password"
          autoComplete="new-password"
          variant="outlined"
          label="Password"
          sx={{ width: '100%' }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" type="submit">Login</Button>
      </Box>
      <CustomSnacker open={openSnackbar} message={errorMessage} onClose={() => setOpenSnackbar(false)} />

      {loginMutation.error && (
        <Typography color="error">{loginMutation.error.message}</Typography>
      )}
    </Container>
  );
}

export const Route = createLazyRoute('/users')({
  component: LoginComponent,
});

import { createLazyRoute } from '@tanstack/react-router';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const authSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  passWord: z.string().min(1, "Password is required"),
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

  const onSubmit: SubmitHandler<Auth> = (data) => console.log(data);

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
          {...register("passWord")}
          type="password"
          autoComplete="new-password"
          variant="outlined"
          label="Password"
          sx={{ width: '100%' }}
          error={!!errors.passWord}
          helperText={errors.passWord?.message}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" type="submit">Login</Button>
      </Box>
    </Container>
  );
}

export const Route = createLazyRoute('/users')({
  component: LoginComponent,
});

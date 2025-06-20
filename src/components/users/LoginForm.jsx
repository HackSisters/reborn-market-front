import React from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from '../ui/buttons/CustomButton';
import { useAuth } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl text-violet font-bold font-playfair text-center mb-6">¡Te damos la bienvenida! 👋🏼</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-2"
              {...register('username', {
                required: 'El nombre de usuario es obligatorio',
                maxLength: { value: 20, message: 'El nombre de usuario no puede tener más de 20 caracteres' },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/, 
                  message: 'El nombre de usuario solo puede contener letras y números'
                }
              })}
            />
            {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-2"
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 
                  message: 'La contraseña debe contener al menos una letra y un número'
                }
              })}
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>
          <CustomButton
            type="submit"
            className="w-full py-2 px-4 bg-violet-2 text-white"
          >
            Iniciar sesión
          </CustomButton>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-violet-2 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

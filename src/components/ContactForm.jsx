import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return ( 
        <form onSubmint={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input 
                    id="name"
                    {...register('name', {
                        required: 'El nombre es obligatorio',
                        maxLength: {
                        value: 20,
                        message: 'El nombre no puede tener más de 20 caracteres'
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'El nombre solo puede contener letras'
                    }
                })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlForm="surname">Apellido:</label>
                <input 
                    id="surname"
                    {...register('surname', {
                        required: 'El apellido es obligatorio',
                        maxLength: {
                        value: 20,
                        message: 'El apellido no puede tener más de 20 caracteres'
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'El apellido solo puede contener letras'
                    }
                })}
                />
                {errors.surname && <p>{errors.surname.message}</p>}
            </div>

            <div>
                <label htmlForm="email">Correo Electrónico:</label>
                <input 
                    id="email"
                    {...register('email', {
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'El correo electrónico no es válido'
                    }
                })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlForm="message">Mensaje:</label>
                <textarea
                    id="message"
                    {...register('message', {
                        required: 'El mensaje es obligatorio',
                        maxLength: {
                        value: 100,
                        message: 'El mensaje no puede tener más de 100 caracteres'
                    },
                    validate: {
                        noScript:  value => !/<script>/i.test(value) || 'El mensaje no puede contener código'
                    }
                })}
                />
                {errors.message && <p>{errors.message.message}</p>}
                </div>
              
                <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
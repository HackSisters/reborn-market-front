import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from "../ui/buttons/CustomButton";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [messageSent, setMessageSent] = useState(false);

    const onSubmit = (data) => {
        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 1000);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            {messageSent && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
                    <div className="bg-green-300 p-6 rounded-lg shadow-lg text-white text-lg font-bold w-80 h-40 flex justify-center items-center">
                        ¡Mensaje enviado con éxito!
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="w-xs md:w-md lg:w-lg space-y-4 flex flex-col justify-center items-center">
                <div className="w-full flex flex-col items-center gap-2">
                    <label htmlFor="name" className="block text-sm font-medium">Nombre:</label>
                    <input
                        id="name"
                        className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
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
                    {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    <label htmlFor="surname" className="block text-sm font-medium">Apellido:</label>
                    <input
                        id="surname"
                        className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
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
                    {errors.surname && <p className="text-red-400 text-sm">{errors.surname.message}</p>}
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    <label htmlFor="email" className="block text-sm font-medium">Correo Electrónico:</label>
                    <input
                        id="email"
                        className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        {...register('email', {
                            required: 'El correo electrónico es obligatorio',
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'El correo electrónico no es válido'
                            }
                        })}
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                </div>

                <div className="w-full flex flex-col items-center gap-2">
                    <label htmlFor="message" className="block text-sm font-medium">Mensaje:</label>
                    <textarea
                        id="message"
                        className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        {...register('message', {
                            required: 'El mensaje es obligatorio',
                            maxLength: {
                                value: 100,
                                message: 'El mensaje no puede tener más de 100 caracteres'
                            },
                            validate: {
                                noScript: value => !/<script>/i.test(value) || 'El mensaje no puede contener código'
                            }
                        })}
                    />
                    {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
                </div>

                <CustomButton
                    type="submit"
                    className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 py-2 px-4 bg-violet-2 text-white"
                >
                    Enviar
                </CustomButton>
            </form>
        </div>
    );
};

export default ContactForm;

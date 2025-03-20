import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('should render the form fields', () => {
    const { getByLabelText } = render(<ContactForm />);

    expect(getByLabelText('Nombre:')).toBeInTheDocument();
    expect(getByLabelText('Apellido:')).toBeInTheDocument();
    expect(getByLabelText('Correo Electrónico:')).toBeInTheDocument();
    expect(getByLabelText('Mensaje:')).toBeInTheDocument();
  });

  it('should display validation errors when fields are empty', async () => {
    const { getByText, getByRole } = render(<ContactForm />);

    fireEvent.click(getByRole('button', { name: /enviar/i }));

    expect(await getByText('El nombre es obligatorio')).toBeInTheDocument();
    expect(await getByText('El apellido es obligatorio')).toBeInTheDocument();
    expect(await getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
    expect(await getByText('El mensaje es obligatorio')).toBeInTheDocument();
  });

  it('should submit the form when all fields are valid', async () => {
    const { getByLabelText, getByRole } = render(<ContactForm />);

    fireEvent.change(getByLabelText('Nombre:'), { target: { value: 'Juan' } });
    fireEvent.change(getByLabelText('Apellido:'), { target: { value: 'Pérez' } });
    fireEvent.change(getByLabelText('Correo Electrónico:'), { target: { value: 'juan.perez@example.com' } });
    fireEvent.change(getByLabelText('Mensaje:'), { target: { value: 'Hola, este es un mensaje de prueba.' } });

    fireEvent.click(getByRole('button', { name: /enviar/i }));
});
});

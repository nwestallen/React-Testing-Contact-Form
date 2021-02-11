import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ContactForm from './components/ContactForm';
import React from 'react';

test('Form renders', () => {
    render(<ContactForm />);
});

test('All form fields fill', () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message*/i);

    userEvent.type(firstNameInput, "Hi");
    userEvent.type(lastNameInput, "Allen");
    userEvent.type(emailInput, "fakeemail@realsite.com");
    userEvent.type(messageInput, "Hi, this is a message!")
});
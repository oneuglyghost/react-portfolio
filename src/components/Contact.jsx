import React, { useState } from 'react';
import '../styles/ContactMe.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (Object.values(newErrors).every((error) => error === '')) {
      // Add your form submission logic here
    }
  };

  const isValidEmail = (email) => {
    // Simple email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section>
      <h2 className='contact'>Contact</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
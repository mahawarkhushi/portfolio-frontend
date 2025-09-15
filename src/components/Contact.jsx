import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  // Step 1: Manage form data with useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to your backend
      const res = await axios.post('http://localhost:3000/contact', formData);
      console.log('Message sent:', res.data);
      alert('Message sent successfully!');
      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error.response?.data || error.message);
      alert('Failed to send message!');
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Let's Connect</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
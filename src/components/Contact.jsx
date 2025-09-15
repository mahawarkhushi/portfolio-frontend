import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

// Instead of MONGO_URI, define your backend API URL here
const API_URL = "mongodb+srv://admin:kxR8tGfwTHWwX7ya@cluster0.aja2h.mongodb.net/"; // change this to your backend server URL

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/contact`, formData);
      console.log('Message sent:', res.data);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
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

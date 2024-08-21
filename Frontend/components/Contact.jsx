import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v2/message/send",
        { name, email, subject, message },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
      console.log(error);
    }
  }

  return (
    <div>
      <div className='contact container'>
        <div className='banner'>
          <div className='item'>
            <h4>Address</h4>
            <p>Any Time available 24/7 </p>
          </div>
          <div className='item'>
            <h4>Call us</h4>
            <p>We are available at : +91 6784952366</p>
          </div>
          <div className='item'>
            <h4>Our Email</h4>
            <p>E-mail : ghjjksgrh234@gmail.com</p>
          </div>
        </div>
        <div className='banner'>
          <div className='item'>
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea rows={10} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact;

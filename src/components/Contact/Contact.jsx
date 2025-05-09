import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_w80l0ps",          // ✅ Your Service ID
          "template_teo9yn7",         // ✅ Your Template ID
          form.current,
          "5mQ9VBiXanoeFo1Tt"         // ✅ Your Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current.reset();     // Clear form after success
          },
          (error) => {
            console.log(error.text);
            setNotDone(true);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder=" Your Name" onChange={handleChange} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
            <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
            <span className='not-done'>{notDone && "Please fill in all fields or try again."}</span>
            <Button type="submit" className="button" disabled={done}>Send</Button>
            <span className='done'>{done && "Thanks for contacting me! Your message has been sent successfully."}</span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

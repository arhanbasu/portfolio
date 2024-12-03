import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // State to show success message
  const [isSending, setIsSending] = useState(false); // State to manage "Sending..." status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,     // Access from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // Access from .env
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // Access from .env
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Show success message
          form.current.reset(); // Clear the form fields
          setTimeout(() => setMessageSent(false), 3000); // Hide the message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  {messageSent && <p style={{ color: "green" }}>Message sent successfully!</p>} {/* Success message */}
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" required />
                    <label>Email</label>
                    <input type="email" name="email" required />
                    <label>Phone No.</label>
                    <input type="tel" name="phone" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <button type="submit" disabled={isSending}>
                      {isSending ? 'Sending...' : 'Send'} {/* Conditional button text */}
                    </button>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


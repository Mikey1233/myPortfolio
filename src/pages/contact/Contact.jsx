import React from "react";
import "./contact.css";
import Footer from "../../component/footer/Footer";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const serviceID = "service_q9v5htp";
  const templateID = "template_c0dct2r";
  const apiKey = "yRpT5du1tTaB-flkR";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formValues = {
    from_name: name,
    from_email: email,
    message,
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(serviceID, "template_rwlcrbn", formValues, apiKey)
      .then((error) => {
        console.log(error.text);
      });
  };

  function clearForm() {
    document.getElementById("myForm").reset();
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
    clearForm();
  };

  return (
    <div className="contact-page">
      <div className="contact-page-box">
        <h3>GET IN TOUCH</h3>
        <div className="contact-page-content">
          <div className="contact-page-content-bar">
            <button type="button">
              <a
                href="https://www.linkedin.com/in/emmanuel-michael-b82106260/"
                target="blank"
              >
                LINKEDIN
              </a>
            </button>
            <button type="button">
              <a href="" target="blank">
                EMAIL ADDRESS
              </a>
            </button>
            <button type="button">
              <a
                href="https://github.com/Mikey1233"
                target="blank"
              >
                GITHUB
              </a>
            </button>
          </div>
          <form onSubmit={handleSubmit} id="myForm" method="POST">
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              required
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <textarea
              placeholder="Hi Michael,I have an idea which needs your expertise...."
              rows={"15"}
              cols={"50"}
              name="message"
              onChange={handleChange}
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

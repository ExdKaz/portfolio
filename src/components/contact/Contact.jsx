import "./contact.css";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const sendEmail = (event) => {
    emailjs
      .sendForm("gmail", "portfolio", event.target, "RX7rbtF1GnQqra-_G")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <div className="contact-container">
      <header className="aboutMe-title" id="contact-book">
        <span className="profile-icon">{props.iconsList.about}</span>
        <span id="about-book">
          <h2>Contact</h2>
        </span>
      </header>
      <div className="card contact-me">
        <span className="send-message">Send a Message</span>
        <form className="contact-form" onSubmit={sendEmail}>
          <TextField
            id="firstName"
            label="Firstname"
            variant="standard"
            value={formData.firstname}
            onChange={handleInputChange}
            name="firstname"
          />

          <TextField
            id="lastName"
            label="Lastname"
            variant="standard"
            value={formData.lastname}
            onChange={handleInputChange}
            name="lastname"
          />

          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />

          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
          />

          <TextField
            id="message"
            label="Message"
            multiline
            variant="standard"
            className="grid-col-span-2"
            value={formData.message}
            onChange={handleInputChange}
            name="message"
          />
          <div className="wid grid-col-span-2">
            <button type="submit" className="cv-button btn send ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

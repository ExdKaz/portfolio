import "./contact.css";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact(props) {
  const notify = () => {
    toast.success("Message Sent ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
    event.preventDefault();
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
            <button
              type="submit"
              className="cv-button btn send "
              onClick={notify}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Contact;

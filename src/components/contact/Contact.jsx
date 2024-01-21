import "./contact.css";
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact(props) {
  const notify = (mssg) => {
    toast.success(mssg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "toast-message",
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
    if (
      formData.firstname.length ||
      formData.lastname.length ||
      formData.message.length === !0
    ) {
      emailjs
        .sendForm("gmail", "portfolio", event.target, "RX7rbtF1GnQqra-_G")
        .then(
          (result) => {
            console.log(result.text);
            notify("Message Sent Successfully");
          },
          (error) => {
            console.log(error.text);
            notify("Error Sending Message..");
          }
        );
    } else {
      notify("Enter Required Fields");
    }
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
            pattern={"[a-zA-Z]+"}
            type="text"
            required
          />

          <TextField
            id="lastName"
            label="Lastname"
            variant="standard"
            value={formData.lastname}
            onChange={handleInputChange}
            name="lastname"
            pattern={"[a-zA-Z]+"}
            required
          />

          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            type="email"
          />

          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            pattern={"[+]{0,1}[0-9]{10,12}"}
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
            required
          />
          <div className="wid grid-col-span-2">
            <button type="submit" className="cv-button btn send ">
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

import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export const Contact = () => {
  const form = useRef();
  const [hasSent, updateHasSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kboohha", "template_r3zgcd9", form.current, {
        publicKey: "x15zgivW-g8sVFtHD", // OK to expose
      })
      .then(
        () => {
          updateHasSent(true);
          toast.success("Sent!");
        },
        (error) => {
          toast.error(
            "Something went wrong... (You can try my email with the icon above)"
          );
        }
      );
  };

  return (
    <div className="Contact" id="Contact">
      <div>
        <h1>Contact Me</h1>
        <a href="https://github.com/sebbooth" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sebbooth" target="_blank">
          <FaLinkedin />
        </a>
        <br />
        <a href="mailto:sebbooth@yahoo.ca">
          <MdEmail />
        </a>
      </div>
      <form
        className={hasSent ? "closed-form" : "open-form"}
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;

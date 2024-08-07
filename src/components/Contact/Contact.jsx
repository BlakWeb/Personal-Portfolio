import React from "react";
import "./Contact.css";
import logo from "../../assets/logo.jpeg";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "581073d9-3ef1-4ec7-8f64-4d52bedd54cd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Email send fail!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Let's get in touch</h1>
        <img src={logo} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am always available to take on new projects, feel free to send me
            message about any project you me work on. You can contact me via
            email or phone call anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>clintonoshala@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+2349128068632</p>
            </div>
            <div className="contact-detail">
              <p>Opp. Paradise Hotel Lafia Nasarawa State, Nigeria.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message here!"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

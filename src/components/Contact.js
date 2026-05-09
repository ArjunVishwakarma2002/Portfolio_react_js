import React, { useState } from "react";
import axios from "axios";
import "./style.css";
// import server from "../server";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      setSuccess(response.data.message);

      // Clear Form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {

      console.log(err);

      setError("Failed to send message!");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Title */}
        <div className="contact-title">
          <span>GET IN TOUCH</span>
          <h2>Contact Me</h2>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Button */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}
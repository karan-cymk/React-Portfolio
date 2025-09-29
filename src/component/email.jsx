import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modecontext } from "./contextmode";
import { Link } from "react-router-dom";

function EmailForm() {
  const { mode } = useContext(Modecontext);
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      user_name: formData.name1,
      user_last: formData.name2,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: formData.address,
      to_name: "hacker",
      user_message: formData.message,
    };

    emailjs
      .send(
        "service_w83789c",
        "template_2ok9pkr",
        templateParams,
        "Rz9x0lyw8zabhOkmU"
      )
      .then(() => {
        alert("✅ Email sent successfully!");
        setFormData({ name1: "", name2: "", email: "", phone: "", address: "", message: "" });
      })
      .catch((err) => {
        console.error("❌ Error:", err);
        alert("Failed to send email.");
      });
  };

  return (
    <div className={mode ? "bg-white" : "bg-gray-900"}>
      <div className="mx-auto w-[90%] py-7">
        <Link to="/" className="block text-right">
          <h2 className="font-bold bg-blue-900 text-white p-2 rounded-full inline-block">
            <i className="fa-solid fa-xmark"></i>
          </h2>
        </Link>

        <h2 className="text-blue-500 font-bold text-3xl text-center font-serif underline">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center font-serif pt-2 pb-7">
          "Let's Build Something Together"
        </p>

        <div className="md:flex">
          {/* Form Section */}
          <div className="flex-2/3 bg-yellow-200 rounded-l-2xl md:px-20 md:py-8 p-5">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="flex-1/2 p-1">
                  <label className="font-bold">First Name</label>
                  <input
                    type="text"
                    name="name1"
                    placeholder="John"
                    value={formData.name1}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 p-2 rounded-lg text-amber-600 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                  />
                </div>
                <div className="flex-1/2 p-1">
                  <label className="font-bold">Last Name</label>
                  <input
                    type="text"
                    name="name2"
                    placeholder="Doe"
                    value={formData.name2}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 p-2 rounded-lg text-amber-600 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-200 p-2 rounded-lg text-amber-500 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                />
              </div>

              <div className="mt-3">
                <label className="font-bold">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 0127548745"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-200 p-2 rounded-lg text-amber-500 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                />
              </div>

              <div className="mt-3">
                <label className="font-bold">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Bilaspur"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="bg-gray-200 p-2 rounded-lg text-amber-500 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                />
              </div>

              <div className="mt-3">
                <label className="font-bold">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello..."
                  className="bg-gray-200 p-2 rounded-lg text-amber-500 w-full focus:outline-1 focus:outline-gray-400 shadow-md shadow-gray-400"
                />
              </div>

              <button
                type="submit"
                className="px-4 rounded-2xl py-2 border-[1px] text-white bg-blue-800 mt-2 hover:bg-blue-500"
              >
                Send <i className="fa-solid fa-location-arrow"></i>
              </button>
            </form>
          </div>

          {/* Sidebar Section */}
          <div className="flex-1/3">
            <div className="bg-blue-900 rounded-r-2xl py-10 text-white">
              <h2 className="text-2xl font-bold p-4">For Further Enquiries</h2>
              <a href="mailto:karansahu.0508@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 block hover:text-red-900">
                <i className="fa-solid fa-envelope"></i> karansahu.0508@gmail.com
              </a>
              <a href="tel:+919301313584" className="px-4 py-2 block hover:text-red-900">
                <i className="fa-solid fa-phone"></i> +91 9301313584
              </a>
              <a href="tel:+918305272144" className="px-4 py-2 block hover:text-red-900">
                <i className="fa-solid fa-phone"></i> +91 8305272144
              </a>

              <h2 className="text-2xl font-bold p-4">Social Links</h2>
              <a href="https://www.instagram.com/karan___sahu____/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 block text-red-800 hover:text-red-900 text-4xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/karan-sahu-082407290" target="_blank" rel="noopener noreferrer" className="px-4 py-1 block text-white hover:text-red-900 text-4xl">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/karan-cymk/" target="_blank" rel="noopener noreferrer" className="px-4 py-1 block hover:text-red-900 text-4xl">
                <i className="fa-brands fa-github"></i>
              </a>

              <h2 className="text-2xl font-bold p-4">Location</h2>
              <p className="px-3 py-1 hover:text-red-900">
                <i className="fa-solid fa-location-dot"></i> Bilaspur, Chhattisgarh, India
              </p>
            </div>
          </div>
        </div>

        <Link to="/" className="block text-center pt-7">
          <h2 className="bg-blue-800 text-white px-2 py-1 rounded-2xl inline-block">
            <i className="fa-solid fa-arrow-left"></i> Go To Homepage
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default EmailForm;

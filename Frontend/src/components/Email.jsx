import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Email() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6vch98i", "template_cpu0ddm", form.current, {
        publicKey: "D2PkxeycDIv9bbTip",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email: " + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form
        ref={form}
        class=" mt-28 max-w-md mx-auto p-6 bg-white "
        onSubmit={handleSubmit}
      >
        <h2 class="text-2xl font-bold text-center mb-4">Email Us!!</h2>

        <div class="mb-4">
          <label class="block text-gray-700 " for="name">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            class="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 " for="email">
            Your Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-2 border rounded-md"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 " for="email">
            Subject
          </label>
          <input
            required
            type="text"
            id="subject"
            name="subject"
            class="w-full px-3 py-2 border rounded-md"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700" for="message">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            placeholder="Type your message"
            class="w-full h-24 px-3 py-2 border rounded-md"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-600 duration-300 text-white w-72 font-bold py-2 px-4   
 rounded-md"
          >
            Submit
          </button>
          <br />
          <a href="/" className="m-7">
            Go back
          </a>
        </div>
      </form>
    </div>
  );
}

export default Email;

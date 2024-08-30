import React from "react";

function Contact() {
  return (
    <form class=" mt-28 max-w-md mx-auto p-6 bg-white ">
      <h2 class="text-2xl font-bold text-center mb-4">Contact Us</h2>

      <div class="mb-4">
        <label class="block text-gray-700 " for="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your name"
          required
        ></input>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 " for="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full px-3 py-2 border rounded-md"
          placeholder="Email address"
          required
        ></input>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700" for="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          class="w-full h-24 px-3 py-2 border rounded-md"
          placeholder="Type your message"
          required
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-pink-500 hover:bg-pink-600 duration-300 text-white font-bold py-2 px-4   
 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
    /*<div className=" space-y-5 grid items-center justify-center ">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div>
        <p>Name</p>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Enter your full name"
          />
        </label>
      </div>
    </div>*/
  );
}

export default Contact;

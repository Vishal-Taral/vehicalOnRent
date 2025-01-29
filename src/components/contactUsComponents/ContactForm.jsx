import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="Name"
          id="Name"
          className="rounded-md border-none shadow-md shadow-cyan-300 pl-3 h-10"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-md border-none shadow-md shadow-cyan-300 pl-3 h-10"
          placeholder="your email"
        />
        <input
          type="tel"
          name="Phone"
          id="Phone"
          className="rounded-md border-none shadow-md shadow-cyan-300 pl-3 h-10"
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="Subject"
          id="Subject"
          className="rounded-md border-none shadow-md shadow-cyan-300 pl-3 h-10"
          placeholder="Subject"
        />
      </div>

      <textarea
        name=""
        id=""
        cols="50"
        rows="5"
        className="rounded-md border-none shadow-md shadow-cyan-300 pl-3 w-full mt-3"
        placeholder="Write Your Message"
      />

      <button className="rounded-md bg-darkgoldenrod text-white py-2 px-4 mt-4 hover:px-6 hover:py-2.5">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;

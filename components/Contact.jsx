import React from "react";

const ContactEmailProps = () => {
  <form
    onSubmit={handleSubmit}
    className="border-none p-0"
    data-aos="fade-down"
  >
    <input
      name="email"
      type="email"
      placeholder="your-email@mail.com"
      value={formData.email}
      onChange={handleChange}
      className="text-background mb-4 w-full rounded border border-gray-300 p-2"
      required
    />
    <textarea
      name="message"
      cols={30}
      rows={5}
      placeholder="...type your message"
      value={formData.message}
      onChange={handleChange}
      className="text-background mb-4 w-full rounded border border-gray-300 p-2"
      required
    />
    <button
      type="submit"
      className="text-background w-full rounded bg-primary px-4 py-2 font-bold hover:opacity-90 hover:shadow-lg"
    >
      {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send Message
    </button>
  </form>;
};
export default ContactEmailProps;

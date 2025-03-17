import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //only one value will change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="flex flex-col mx-auto max-w-[1280px] p-6">
      <div className="font-semibold text-[48px] mt-10">Contact Us</div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-10 max-w-[840px] mt-10"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleChange}
            className="mt-3 border border-black/10 p-[18px] rounded-2xl w-full"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
            className="mt-3 border border-black/10 p-[18px] rounded-2xl w-full"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col">
          <label className="font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number..."
            value={formData.phone}
            onChange={handleChange}
            className="mt-3 border border-black/10 p-[18px] rounded-2xl w-full"
          />
        </div>

        {/* Country Dropdown */}
        <div className="flex flex-col">
          <label className="font-medium">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-3 border border-black/10 p-[18px] rounded-2xl w-full bg-white"
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="flex flex-col col-span-2">
          <label className="font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            className="mt-3 border border-black/10 p-[18px] rounded-2xl w-full h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-start">
          <button
            type="submit"
            className="bg-black py-4 px-10 text-white rounded-2xl mt-6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

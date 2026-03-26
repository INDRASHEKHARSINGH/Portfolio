import React from "react";

const HireProjectForm = () => {

  return (
    <>
       <section className=" m-10 ">
      <div className=" max-w-4xl mx-auto bg-white/80  p-8 rounded-xl shadow-lg/30">

        <h2 className="text-3xl text-sky-700 font-bold text-center mb-6">
          Hire Me For Your Project
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg w-full "
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg w-full"
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg w-full"
          />

          {/* Project Type */}
          <select className="border p-3 rounded-lg w-full">
            <option>Select Project Type</option>
            <option>Web Development</option>
            <option>AI / Machine Learning</option>
            <option>Data Analytics</option>
            <option>DevOps</option>
          </select>

          {/* Budget */}
          <select className="border p-3 rounded-lg w-full">
            <option>Project Budget</option>
            <option>$500 - $1000</option>
            <option>$1000 - $5000</option>
            <option>$5000+</option>
          </select>

          {/* Message */}
          <textarea
            placeholder="Describe your project..."
            className="border p-3 rounded-lg col-span-1 md:col-span-2 h-32"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-500 transition"
          >
            Submit Project Request
          </button>

        </form>

      </div>
    </section>
    </>
  );
};

export default HireProjectForm;
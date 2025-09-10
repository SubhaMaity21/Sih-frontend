import React from "react";

const team = [
  {
    name: "Subha",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Biplab",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Rahul",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Debangana",
    role: "AI Developer",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Ankur",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
];

const AboutUs = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sky-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          We are passionate about sustainable water solutions. Our mission is to empower communities and individuals to harvest rainwater efficiently and responsibly.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Story</h2>
        <p className="text-gray-600 text-center">
          Founded in 2025, our team brings together expertise in technology, design, and environmental science. We believe that every drop counts and strive to make water harvesting accessible for everyone.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-sky-50 rounded-xl shadow-md p-6 w-64 text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-sky-700">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-2">Email: <a href="mailto:info@rainharvest.com" className="text-sky-600 underline">info@rainharvest.com</a></p>
        <p className="text-gray-600">Phone: <span className="text-sky-600">+91 98765 43210</span></p>
      </div>
    </div>
  </section>
);

export default AboutUs;

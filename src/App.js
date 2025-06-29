import React, { useState } from "react";

// Main App Component
const App = () => {
  // State to manage which section is currently active
  const [activeSection, setActiveSection] = useState("home");

  // Dummy data for models
  const models = [
    {
      id: 1,
      name: "Sophia Lee",
      imageUrl: "https://placehold.co/400x500/A78BFA/ffffff?text=Sophia+Lee",
      description:
        "Experienced runway and print model with a diverse portfolio.",
      height: "5'9\"",
      bust: '34"',
      waist: '24"',
      hips: '35"',
    },
    {
      id: 2,
      name: "Ethan Black",
      imageUrl: "https://placehold.co/400x500/EC4899/ffffff?text=Ethan+Black",
      description:
        "Versatile commercial model, known for his charismatic presence.",
      height: "6'1\"",
      chest: '38"',
      waist: '32"',
      inseam: '32"',
    },
    {
      id: 3,
      name: "Isabella Chen",
      imageUrl: "https://placehold.co/400x500/3B82F6/ffffff?text=Isabella+Chen",
      description:
        "New face with a unique look, specializing in editorial work.",
      height: "5'7\"",
      bust: '32"',
      waist: '23"',
      hips: '34"',
    },
    {
      id: 4,
      name: "Liam Garcia",
      imageUrl: "https://placehold.co/400x500/F59E0B/ffffff?text=Liam+Garcia",
      description: "Fitness and lifestyle model with a strong athletic build.",
      height: "6'0\"",
      chest: '40"',
      waist: '30"',
      inseam: '30"',
    },
  ];

  // Dummy data for jobs
  const jobs = [
    {
      id: 1,
      title: "Fashion Week Runway Show",
      client: "Haute Couture Brand",
      description:
        "Seeking female models for Fall/Winter collection runway show. Must have strong runway walk.",
      requirements: [
        "Female, 5'9\"+",
        "Size 0-2",
        "Previous runway experience",
      ],
      location: "New York City",
      date: "Aug 15, 2025",
    },
    {
      id: 2,
      title: "Commercial Photo Shoot (Activewear)",
      client: "Sportswear Co.",
      description:
        "Looking for male and female models for an activewear campaign. Athletic build preferred.",
      requirements: [
        "Male/Female, 5'7\"+",
        "Athletic build",
        "Comfortable with active poses",
      ],
      location: "Los Angeles",
      date: "Sep 10, 2025",
    },
    {
      id: 3,
      title: "Catalog Print Ad (Jewelry)",
      client: "Luxe Jewelry",
      description:
        "Seeking models with elegant hands and refined features for a jewelry catalog.",
      requirements: [
        "All genders, all heights",
        "Expressive hands",
        "Clean skin",
      ],
      location: "Remote/Studio",
      date: "Oct 1, 2025",
    },
  ];

  // Function to render the active section based on state
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "models":
        return <ModelsSection models={models} />;
      case "jobs":
        return <JobsSection jobs={jobs} />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            ModelCast Agency
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveSection("home")}
              className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200
                ${
                  activeSection === "home"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection("models")}
              className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200
                ${
                  activeSection === "models"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
            >
              Models
            </button>
            <button
              onClick={() => setActiveSection("jobs")}
              className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200
                ${
                  activeSection === "jobs"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`text-gray-600 hover:text-indigo-600 transition-colors duration-200
                ${
                  activeSection === "contact"
                    ? "text-indigo-600 font-semibold"
                    : ""
                }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">{renderSection()}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12 rounded-t-xl">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ModelCast Agency. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-indigo-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Section Component
const HomeSection = () => (
  <section className="text-center py-16">
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-lg shadow-xl text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://placehold.co/1200x600/6B46C1/ffffff?text=Fashion+Background')",
        }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 animate-fadeInDown">
          Discover Your Next Star
        </h1>
        <p className="text-xl mb-8 animate-fadeInUp">
          Connecting top talent with leading brands and productions worldwide.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300">
            View Our Models
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transform hover:scale-105 transition duration-300">
            Browse Jobs
          </button>
        </div>
      </div>
    </div>

    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Diverse Talent Pool
        </h2>
        <p className="text-gray-600">
          Access a wide range of models for every project, from high fashion to
          commercial.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Streamlined Casting
        </h2>
        <p className="text-gray-600">
          Our platform simplifies the search and booking process for clients.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Career Growth</h2>
        <p className="text-gray-600">
          We empower models to connect with the best opportunities in the
          industry.
        </p>
      </div>
    </div>
  </section>
);

// Models Section Component
const ModelsSection = ({ models }) => (
  <section className="py-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
      Our Models
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {models.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  </section>
);

// Model Card Component
const ModelCard = ({ model }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
    <img
      src={model.imageUrl}
      alt={model.name}
      className="w-full h-80 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x500/CCCCCC/666666?text=Image+Not+Found";
      }}
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{model.name}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {model.description}
      </p>
      <div className="text-sm text-gray-700">
        {model.height && (
          <p>
            <span className="font-semibold">Height:</span> {model.height}
          </p>
        )}
        {model.bust && (
          <p>
            <span className="font-semibold">Bust:</span> {model.bust}
          </p>
        )}
        {model.chest && (
          <p>
            <span className="font-semibold">Chest:</span> {model.chest}
          </p>
        )}
        {model.waist && (
          <p>
            <span className="font-semibold">Waist:</span> {model.waist}
          </p>
        )}
        {model.hips && (
          <p>
            <span className="font-semibold">Hips:</span> {model.hips}
          </p>
        )}
        {model.inseam && (
          <p>
            <span className="font-semibold">Inseam:</span> {model.inseam}
          </p>
        )}
      </div>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200">
        View Profile
      </button>
    </div>
  </div>
);

// Jobs Section Component
const JobsSection = ({ jobs }) => (
  <section className="py-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
      Casting Calls & Jobs
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </section>
);

// Job Card Component
const JobCard = ({ job }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 cursor-pointer">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
    <p className="text-indigo-600 font-semibold mb-2">Client: {job.client}</p>
    <p className="text-gray-700 text-sm mb-3">{job.description}</p>
    <div className="text-sm text-gray-600 mb-3">
      <p>
        <span className="font-semibold">Location:</span> {job.location}
      </p>
      <p>
        <span className="font-semibold">Date:</span> {job.date}
      </p>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-1">Requirements:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200">
      Apply Now
    </button>
  </div>
);

// Contact Section Component
const ContactSection = () => (
  <section className="py-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
      Contact Us
    </h1>
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <p className="text-gray-700 mb-6 text-center">
        Have a question or looking to collaborate? Reach out to us!
      </p>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default App;

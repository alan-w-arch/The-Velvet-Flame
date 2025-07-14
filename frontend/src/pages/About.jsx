import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaCrown } from "react-icons/fa";
import { GiCandleFlame } from "react-icons/gi";
import HS from "../assets/dp1.jpg";
import MN from "../assets/dp2.jpg";
import QR from "../assets/qr.jpg";


const About = () => {
  const owners = [
    {
      name: "Himanshu Saxena",
      role: "Co-Founder & CTO",
      bio: "MERN stack specialist with a focus on responsive design and performance optimization. Combines technical precision with visionary business strategy.",
      image: `${HS}`,
      links: {
        linkedin: "linkedin.com/in/himanshu--saxena",
        github: "github.com/alan-w-arch",
        email: "himanshusaxena71333@gmail.com",
        phone: "+91-98157-59234",
      },
      skills: ["React", "Python", "Tailwind CSS", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      name: "Ajmeera Manvika Naik",
      role: "Co-Founder & CEO",
      bio: "Full-stack developer with expertise in e-commerce systems and intellectual property documentation. Passionate about blending technology with artisanal craftsmanship.",
      image: `${MN}`,
      links: {
        linkedin: "linkedin.com/in/manvika-naik--",
        github: "github.com/manvika05",
        email: "manu445naik@gmail.com",
        phone: "+91-8519975367",
      },
      skills: ["C++", "JavaScript", "HTML/CSS", "Bootstrap", "MongoDB", "Node.js"],
    },
  ];



  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-32 px-6 flex items-center justify-center bg-gradient-to-b from-amber-900/10 to-black border-b border-amber-900/20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Meet the Founders
          </h1>
          <p className="font-montserrat text-gray-400 text-lg max-w-2xl mx-auto">
            Two visionaries united by a passion for luxury craftsmanship and innovative technology.
          </p>
        </div>
      </section>

      {/* OWNERS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {owners.map((owner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-amber-900/30 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm p-8 hover:border-amber-600/40 transition-all"
            >
              <div className="absolute top-6 right-6 flex items-center text-amber-400">
                <FaCrown className="mr-2" />
                <span className="font-montserrat text-xs uppercase tracking-wider">50% Partner</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-64 object-cover rounded-sm border border-amber-900/20"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="font-playfair text-3xl text-amber-200 mb-2">{owner.name}</h2>
                  <p className="font-montserrat text-amber-400 uppercase text-sm tracking-wider mb-4">
                    {owner.role}
                  </p>
                  <p className="font-montserrat text-gray-300 mb-6">{owner.bio}</p>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="font-montserrat text-amber-200 text-sm uppercase tracking-wider mb-3">
                      Key Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {owner.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-amber-900/20 text-amber-200 text-xs font-montserrat rounded-full border border-amber-800/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-3">
                    <a
                      href={`mailto:${owner.links.email}`}
                      className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      <FaEnvelope className="mr-3 text-amber-400" />
                      {owner.links.email}
                    </a>
                    <a
                      href={`tel:${owner.links.phone.replace(/-/g, "")}`}
                      className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      <FaPhoneAlt className="mr-3 text-amber-400" />
                      {owner.links.phone}
                    </a>
                    <a
                      href={`https://${owner.links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      <FaLinkedin className="mr-3 text-amber-400" />
                      LinkedIn
                    </a>
                    <a
                      href={`https://${owner.links.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                    >
                      <FaGithub className="mr-3 text-amber-400" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50 border-t border-amber-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <GiCandleFlame className="mx-auto text-amber-400 text-4xl mb-6" />
          <h2 className="font-playfair text-3xl text-amber-200 mb-6">
            Get in Touch with THE VELVET FLAME
          </h2>
          <p className="font-montserrat text-gray-400 mb-10 max-w-2xl mx-auto">
            For inquiries, collaborations, or just to say hello, feel free to reach out to us via email or phone. We would love to hear from you!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8" onDoubleClick={()=> {open("https://www.instagram.com/the_velvet_flames?igsh=MWkwODdwdXh4aG9qbw==")}}>
            <div className="p-6 border border-amber-900/30 bg-gray-900/20 rounded-sm">
              <h3 className="font-playfair text-xl text-amber-200 mb-3">Scan Now</h3>
              <img src={QR} alt="QR code" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
// Importing FontAwesome icons
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="px-4 lg:px-8 py-8">
      <h1 className="text-center text-4xl font-extrabold mb-10 font-serif">About Me</h1>

      <div className="max-w-4xl mx-auto p-6 lg:p-8 rounded-2xl shadow-2xl bg-[#ffb4989c] border border-l-transparent border-r-transparent border-[#f8f5f4]">
        <h2 className="text-gray-800 font-serif text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
        A glance at my journey
        </h2>
        <p className="text-gray-600 mb-4 text-center">
        Hello! I’m Rabia Fareed, a passionate web developer with a knack for turning ideas into seamless digital experiences. My expertise lies in creating responsive, user-friendly websites using modern web technologies like HTML, CSS, JavaScript, and TypeScript. I take pride in writing clean, maintainable, and efficient code to bring creative designs to life.
        </p>
        <p className="text-gray-600 mb-4 text-center">
        I’ve worked on diverse projects, including dynamic resume builders, calculators, currency converters, and professional portfolio websites. Currently, I’m sharpening my skills further through exciting projects like the Panacloud website and my personal portfolio.
        </p>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/rabia-fareed-b79a3b2b6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
          <a
            href="https://github.com/RabiaAfareed?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600 hover:text-[#c45428]/100 text-3xl transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
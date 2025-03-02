import NavBar from "./Navbar";
import Footer from "./Footer";
import "./index.css";

function Contact() {
  return (
    /* Background */
    <div
      className="relative w-screen h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow text-white px-4 sm:px-8 py-4">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-emerald-600 mb-4">Contact Me</h1>
          
          {/* Contact Information */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-4">
              Feel free to reach out to me through any of the following:
            </p>
            <div className="mb-4">
              <p className="text-sm sm:text-base text-gray-400">
                <strong>Email: </strong><a href="mailto: Colbyacton12@icloud.com"> Colbyacton12@icloud.com</a>
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                <strong>Phone:</strong> (506) 536-7494
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold text-emerald-600 mb-2">Find me on:</h3>
              <ul className="flex justify-center space-x-6">
              <li><a href="https://github.com/Cacton12" className="text-gray-400 hover:text-white">Github</a></li>
              <li><a href="https://www.linkedin.com/in/colby-acton-93740b286/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
            {/* Download my resume */}
            <div>
              <h3 className="text-lg font-semibold text-emerald-600 mb-2">Download My Resume:</h3>
              <ul className="flex justify-center space-x-6">
              <li><a href="Resume-Colby-Acton.docx" download className="text-gray-400 hover:text-white">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

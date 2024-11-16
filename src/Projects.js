import NavBar from "./Navbar";
import Footer from "./Footer";


function Projects() {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <NavBar></NavBar>
      </div>
      {/* Main Content */}
      <div className=" relative z-10 mt-12">
        <div className="text-center">
          <h1 className="text-emerald-600 text-3xl font-semibold">My Projects</h1>
          <p className="text-white pt-2">These are school projects completed at NBCC click them to see my code in GitHub</p>
        </div>
        <div className="flex flex-wrap justify-evenly place-items-center w-full h-full px-4 sm:px-8 py-4 gap-2">
          <a href="https://github.com/Cacton12/Student_Scores" className="w-full md:w-1/4 flex flex-col items-center justify-center bg-zinc-100 rounded-md hover:scale-90 transition duration-500">
            <img src={`${process.env.PUBLIC_URL}/Student_Scores.png`} alt="Student Scores" className="h-60" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">Student Scores</h3>
              <p className="text-sm text-gray-600 pb-2"> My Student Scores project was created in c# and is used to store students and their scores</p>
            </div>
          </a>
          <a href="https://github.com/Cacton12/Research_Project" className="w-full md:w-1/4 flex flex-col items-center justify-center bg-zinc-100 rounded-md hover:scale-90 transition duration-500">
            <img src={`${process.env.PUBLIC_URL}/Research_Assignment_Website.png`} alt="Research Assignment Website" className="h-60 rounded-md" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">Research Assignment Website</h3>
              <p className="text-sm text-gray-600 pb-2">This website was made using bootstrap and was used to show my knowledge of DNS and ablility to create a website</p>
            </div>
          </a>
          <a href="https://github.com/Cacton12/Hotel_Reservation" className="w-full md:w-1/4 flex flex-col items-center justify-center bg-zinc-100 rounded-md hover:scale-90 transition duration-500">
            <div className="relative h-60">
              <img src={`${process.env.PUBLIC_URL}/Hotel_Reservation.png`} alt="Hotel Reservation" className="h-full w-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Hotel Reservation</h3>
              <p className="text-sm text-gray-600 pb-2">This project conencts to a MySQL database and stores hotel reservations</p>
            </div>
          </a>
          <a href="https://github.com/Cacton12/Portfolio" className="w-full md:w-1/4 flex flex-col items-center justify-center bg-zinc-100 rounded-md hover:scale-90 transition duration-500 mb-20 sm:mb-8 md:mb-10 mx-4">
            <div className="relative h-60">
              <img src={`${process.env.PUBLIC_URL}/Portfolio.png`} alt="Hotel Reservation" className="h-full w-full object-cover" />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">Portfolio</h3>
              <p className="text-sm text-gray-600 mb-4 sm:mb-6">This project is this website which was built using React and Tailwind CSS then deployed to GitHub Pages.</p>
            </div>
          </a>
        </div>
      </div>
      <div className="relative z-10 mt-12 mb-12">
        <h1 className="text-emerald-600 text-3xl font-semibold flex items-center justify-center mb-1">My Skills</h1>
        <div className="flex w-full bg-black justify-center">
          <ul className="list-disc flex flex-wrap justify-center space-x-8 px-4">
            <li className="text-white mb-2">C#</li>
            <li className="text-white mb-2">JavaScript</li>
            <li className="text-white mb-2">Java SE (Java Ant, Maven, JavaFX)</li>
            <li className="text-white mb-2">React</li>
            <li className="text-white mb-2">PHP</li>
            <li className="text-white mb-2">SQL</li>
            <li className="text-white mb-2">Bootstrap</li>
            <li className="text-white mb-2">Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-12 mb-12">
        <h1 className="text-emerald-600 text-3xl font-semibold flex items-center justify-center mb-1">My Experience</h1>
        <div className="flex w-full bg-black justify-center items-center px-4">
          <p className="text-white text-center md:text-left md:px-20">
            I worked as a laborer for the City of Fredericton Parks and Trees and the University of New Brunswick, where I performed various tasks including mowing grass, trimming, pole-sawing, operating a brush saw, and driving one-ton trucks.
            Although these tasks were not directly related to the IT field, they taught me valuable skills. I learned to be responsible, aware, and a problem solver, finding quick solutions to challenges that arose.
            Each day brought new tasks, so I had to adapt quickly. Additionally, I worked around the public frequently, which helped me engage with them and further develop my charismatic personality.
          </p>
        </div>
      </div>


      {/* Footer */}
      <div className="relative z-10 mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Projects;
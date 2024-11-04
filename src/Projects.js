import NavBar from "./Navbar";
import Footer from "./Footer";
import "./index.css";

function Projects() {
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
                <NavBar></NavBar>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-grow">
                <div className="flex flex-wrap justify-center items-center w-full h-full px-4 sm:px-8 py-4">
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center p-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl raleway-regular text-emerald-600"></h1>
                        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    
                        </p>
                    </div>
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
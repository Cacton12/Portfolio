import "./index.css";
import NavBar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
 /* Background */
<div
  className="relative w-screen min-h-screen bg-cover bg-center flex flex-col bg-black"
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
   <Main></Main>
 </div>

 {/* Footer */}
 <div className="relative z-10 mt-auto">
   <Footer></Footer>
 </div>
</div>
  );
}

export default App;
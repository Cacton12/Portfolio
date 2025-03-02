const Main = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full h-full px-4 sm:px-8 py-4">
      {/* About Me Content */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center p-4 flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-emerald-600">About Me!</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Hello! I'm Colby Acton, I am a indigenous student that grew up in a small town called Sackville, New Brunswick. I moved to pursue a degree in civil engineering at the University of New Brunswick, but I quickly realized that I did not enjoy this field and left the program.
          <br /><br />
          I took time to work and gained valuable experience through various labor roles, including lawncare and trail construction for the city and UNB. This hands-on experience helped me develop a strong work ethic and a love for problem-solving.
          <br /><br />
          While working I realized my true passion lied in computers and thats when I joined the Programmer Analyst program at New Brunswick Community College (NBCC), where I have built a strong understanding in programming and problem-solving.
        </p>
      </div>

      {/* Image */}
      <div className="w-full sm:w-2/3 md:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
        <img src={`${process.env.PUBLIC_URL}/My_Image.jpg`} alt="Colby Acton" className="h-[44rem] sm:h-[35rem] md:h-[40rem] lg:h-[44rem] object-cover rounded-md mx-auto" />
      </div>
    </div>
  );
};

export default Main;

const Main = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full h-full px-4 sm:px-8 py-4">
      {/* About Me Content */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center p-4 flex-1 ml-44">
        <h1 className="text-3xl md:text-4xl lg:text-5xl raleway-regular text-emerald-600">About Me!</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Hello! I'm Colby Acton, I grew up in a small town called Sackville, New Brunswick. I moved to pursue a degree in civil engineering at the University of New Brunswick, but I quickly realized that I did not enjoy this field and left the program.
          <br /><br />
          I took time to work and gained valuable experience through various labor roles, including lawncare and trail construction for the city and UNB. This hands-on experience helped me develop a strong work ethic and a love for problem-solving.
          <br /><br />
          While working I realized my true passion lied in computers and thats when I joined the Programmer Analyst program at New Brunswick Community College (NBCC), where I'm learning the funementals of programming and problem solving.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center mr-60 ml-32">
        <img src={`${process.env.PUBLIC_URL}/My_Image.jpg`} alt="Colby Acton" className="h-[44rem] object-cover rounded-md" />
      </div>
    </div>
  );
};

export default Main;

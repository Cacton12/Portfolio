<div className="relative w-full min-h-screen bg-black flex flex-col">
{/* Background Image Section */}
<div
    className="w-full h-[50vh] bg-cover bg-center shadow-b transition-shadow"
    style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/background.jpg')` }}
>
    {/* Navbar */}
    <div className="relative z-20">
        <NavBar />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black"></div>
</div>

{/* Main Content on Black Background */}
<div className="relative z-10 flex-grow bg-black">
    <div className="flex flex-wrap justify-center items-center w-full h-full px-4 sm:px-8 py-4">
        <div className="grid gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center p-4">
            {[...Array(6)].map((_, index) => (
                <div
                    key={index}
                    className={`bg-red-500 flex p-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center sm:flex-col md:flex-row`}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/stock.jpg`}
                        alt="Placeholder"
                        className="w-full md:w-1/2 h-auto object-cover"
                    />
                    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                        <p className="text-white text-sm md:text-base lg:text-lg">Placeholder Text for Row {index + 1}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

{/* Footer */}
<div className="relative z-10 mt-auto">
    <Footer />
</div>
</div>
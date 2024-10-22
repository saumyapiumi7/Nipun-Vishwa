// src/components/Hero.jsx
const Hero = () => {
    return (
        <section className="bg-[url('https://wallpaperaccess.com/full/1267556.jpg')] bg-cover bg-center text-center py-20 relative">
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
            <div className="relative text-white"> {/* Change text color to white */}
                <h2 className="text-4xl md:text-5xl font-bold shadow-lg">Hi, I’m Nipun Vishwa</h2> {/* Bold font with shadow */}
                <p className="mt-4 text-lg md:text-xl font-semibold shadow-lg">Finance Trainer | Undergraduate | Aspiring Chartered Accountant</p> {/* Bold font with shadow */}
                <p className="mt-2 text-base md:text-lg shadow-lg">
                    Dedicated to harnessing financial acumen and training expertise to enhance organizational performance and drive success.
                </p>
                <a href="#contact">
                    <button className="mt-6 bg-lightBlue text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-navyBlue transition-all">
                        Contact Me
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero;

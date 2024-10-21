// src/components/Hero.jsx
const Hero = () => {
    return (
        <section className="bg-[url('/path-to-your-image.jpg')] bg-cover bg-center text-center py-20">
            <div className="text-gray-800"> {/* Updated text color */}
                <h2 className="text-4xl md:text-5xl font-semibold">Hi, I’m Nipun Vishwa</h2> {/* Increased font size and weight */}
                <p className="mt-4 text-lg md:text-xl font-medium">Finance Trainer | Undergraduate | Aspiring Chartered Accountant</p> {/* Updated font weight */}
                <p className="mt-2 text-base md:text-lg">
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

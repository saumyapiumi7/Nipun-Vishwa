const Experience = () => {
    return (
        <section id="experience" className="bg-lightBlue text-darkGray py-12 px-6">
            <h2 className="text-4xl font-bold text-navyBlue text-center mb-8"> {/* Section Title */}
                Professional Experience
            </h2>
            <div className="mt-10 space-y-10 flex flex-col items-center">
                {/* Idea Industries Limited */}
                <div className="flex flex-col bg-gray-200 rounded-lg shadow-lg p-10 transition-transform transform hover:scale-105 w-full max-w-[1000px] min-w-[200px] h-60">
                    <h3 className="text-2xl font-semibold text-navyBlue text-center"> {/* Job Title */}
                        Idea Industries Limited
                    </h3>
                    <p className="text-lg font-semibold mt-1 text-center"> {/* Role Description */}
                        Finance Trainer
                    </p>
                    <p className="text-sm text-gray-700 text-center"> {/* Date */}
                        June 2024 - Present
                    </p>
                    <p className="mt-2 text-center"> {/* Description Text */}
                        Providing training in finance-related topics to improve employee knowledge and skills.
                    </p>
                </div>

                {/* Trendywear (PVT) LTD */}
                <div className="flex flex-col bg-gray-200 rounded-lg shadow-lg p-10 transition-transform transform hover:scale-105 w-full max-w-[1000px] min-w-[200px] h-60">
                    <h3 className="text-2xl font-semibold text-navyBlue text-center"> {/* Job Title */}
                        Trendywear (PVT) LTD
                    </h3>
                    <p className="text-lg font-semibold mt-1 text-center"> {/* Role Description */}
                        Management Trainer
                    </p>
                    <p className="text-sm text-gray-700 text-center"> {/* Date */}
                        September 2018 - January 2019
                    </p>
                    <p className="mt-2 text-center"> {/* Description Text */}
                        Conducted training sessions to enhance management skills among staff.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;

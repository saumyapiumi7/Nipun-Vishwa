import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="bg-lightBlue text-darkGray py-12 px-6">
            <h2 className="text-4xl font-extrabold text-navyBlue text-center mb-10">
                Professional Experience
            </h2>
            <div className="mt-10 space-y-10 flex flex-col items-center">
                {/* Experience Item 1: Idea Industries Limited */}
                <div className="flex items-start w-full max-w-[1000px] min-w-[200px] p-6 transition-transform transform hover:scale-105 bg-gray-200 rounded-lg shadow-lg justify-start">
                    <FaUsers className="text-navyBlue text-3xl mr-4" />
                    <div>
                        <h3 className="text-2xl font-bold text-navyBlue"> {/* Increased font size */}
                            Idea Industries Limited
                        </h3>
                        <p className="text-xl font-medium mt-1 text-gray-800"> {/* Increased font size */}
                            Finance Trainer
                        </p>
                        <p className="text-1xl text-gray-600"> {/* Increased font size */}
                            Jun 2024 - Present
                        </p>
                        <p className="mt-2 text-gray-700 text-1xl"> {/* Increased font size */}
                            Providing training in finance-related topics to improve employee knowledge and skills.
                        </p>
                    </div>
                </div>

                {/* Experience Item 2: Trendywear (PVT) LTD */}
                <div className="flex items-start w-full max-w-[1000px] min-w-[200px] p-6 transition-transform transform hover:scale-105 bg-gray-200 rounded-lg shadow-lg justify-start">
                    <FaChalkboardTeacher className="text-navyBlue text-3xl mr-4" />
                    <div>
                        <h3 className="text-2xl font-bold text-navyBlue"> {/* Increased font size */}
                            Trendywear (Pvt) Ltd
                        </h3>
                        <p className="text-xl font-medium mt-1 text-gray-800"> {/* Increased font size */}
                            Management Trainer
                        </p>
                        <p className="text-1xl text-gray-600"> {/* Increased font size */}
                            Sep 2018 - Jan 2019
                        </p>
                        <p className="mt-2 text-gray-700 text-1xl"> {/* Increased font size */}
                            Conducted training sessions to enhance management skills among staff.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa'; // Import new finance and training icons

const Experience = () => {
    return (
        <section id="experience" className="bg-lightBlue text-darkGray py-12 px-6">
            <h2 className="text-5xl font-extrabold text-navyBlue text-center mb-10">
                Experience
            </h2>
            <div className="mt-10 space-y-10 flex flex-col items-center">
                {/* Experience Item 1: Idea Industries Limited */}
                <div className="flex items-start w-full max-w-[1000px] min-w-[200px] p-6 transition-transform transform hover:scale-105 bg-gray-200 rounded-lg shadow-lg justify-start">
                    <FaUsers className="text-navyBlue text-3xl mr-4" /> {/* New finance icon */}
                    <div>
                        <h3 className="text-2xl font-bold text-navyBlue">
                            Idea Industries Limited
                        </h3>
                        <p className="text-lg font-medium mt-1 text-gray-800">
                            Finance Trainer
                        </p>
                        <p className="text-sm text-gray-600">
                            June 2024 - Present
                        </p>
                        <p className="mt-2 text-gray-700">
                            Providing training in finance-related topics to improve employee knowledge and skills.
                        </p>
                    </div>
                </div>

                {/* Experience Item 2: Trendywear (PVT) LTD */}
                <div className="flex items-start w-full max-w-[1000px] min-w-[200px] p-6 transition-transform transform hover:scale-105 bg-gray-200 rounded-lg shadow-lg justify-start">
                    <FaChalkboardTeacher className="text-navyBlue text-3xl mr-4" /> {/* Keeping the training icon */}
                    <div>
                        <h3 className="text-2xl font-bold text-navyBlue">
                            Trendywear (PVT) LTD
                        </h3>
                        <p className="text-lg font-medium mt-1 text-gray-800">
                            Management Trainer
                        </p>
                        <p className="text-sm text-gray-600">
                            September 2018 - January 2019
                        </p>
                        <p className="mt-2 text-gray-700">
                            Conducted training sessions to enhance management skills among staff.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

const Education = () => {
    return (
        <section id="education" className="py-12 px-6">
            <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-navyBlue">Education Qualification</h2>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Item 1: Bachelor of Commerce */}
                <div className="flex bg-lightBlue shadow-lg rounded-lg p-6 items-center hover:scale-105 transform transition-transform duration-300 text-center">
                    <div>
                        <h3 className="text-3xl font-semibold">Bachelor of Commerce (Hons.) in Accounting and Finance</h3>
                        <p className="text-xl font-medium">University of Jaffna</p>
                        <p className="text-gray-600 text-lg">2019 - Present</p>
                        <p className="mt-2 text-lg">Current GPA: 3.43</p>
                    </div>
                </div>

                {/* Item 2: Institute of Chartered Accountants */}
                <div className="flex bg-lightBlue shadow-lg rounded-lg p-6 items-center hover:scale-105 transform transition-transform duration-300 text-center">
                    <div>
                        <h3 className="text-3xl font-semibold">Institute of Chartered Accountants of Sri Lanka</h3>
                        <p className="text-xl font-medium">Corporate Level</p>
                        <p className="text-gray-600 text-lg">Ongoing</p>
                        <p className="mt-2 text-lg">Following Corporate Level program to gain professional accounting qualifications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;

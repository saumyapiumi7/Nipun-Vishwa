const About = () => {
    return (
        <section id="about" className="bg-lightGray text-darkGray py-12 px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navyBlue text-center mb-6">About Me</h2>
            <div className="mt-4 flex flex-col md:flex-row items-start">
                <div className="flex-1 md:mr-8 text-justify">
                    {/* Text section on the left */}
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                    Dedicated and detail-oriented finance professional with a passion for accounting and finance, currently seeking a challenging role as a Finance Trainer. With a solid foundation in financial principles and hands-on experience gained through coursework and internships, I am eager to leverage my academic knowledge and analytical skills to empower others in their financial journeys.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                    I am committed to maintaining the highest standards of accuracy and integrity in financial reporting and analysis. I excel in utilizing financial tools and software to enhance learning and decision-making processes.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                    My goal is to create engaging and informative training sessions that help individuals and organizations develop their expertise in accounting principles, financial management, and strategic planning.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;

// src/components/Skills.jsx
const Skills = () => {
    const skills = [
        {
            name: 'Financial Reporting',
            description: 'Experience in preparing and analyzing financial statements to ensure compliance with regulations and standards.',
        },
        {
            name: 'Taxation & Compliance',
            description: 'Knowledgeable in tax laws and regulations, ensuring compliance and timely filing of returns.',
        },
        {
            name: 'Budgeting & Forecasting',
            description: 'Skilled in creating budgets and forecasting financial outcomes based on historical data and market trends.',
        },
        {
            name: 'Auditing',
            description: 'Conducted internal audits to assess financial processes, identify risks, and recommend improvements.',
        },
        {
            name: 'Payroll Management',
            description: 'Experience in managing payroll processes to ensure accurate and timely compensation for employees.',
        },
    ];

    return (
        <section id="skills" className="bg-white text-darkGray py-12 px-6">
            <h2 className="text-5xl font-extrabold text-navyBlue text-center mb-10">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {skills.map(skill => (
                    <div 
                        key={skill.name} 
                        className="w-full sm:w-1/3 p-6 bg-lightGray rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <h3 className="text-2xl font-semibold text-navyBlue text-center">{skill.name}</h3>
                        <p className="text-center text-gray-600 mt-2">{skill.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Skills;

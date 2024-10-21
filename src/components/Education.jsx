// src/components/Education.jsx
const Education = () => {
  return (
      <section id="education" className="py-12 px-6 bg-gray-100">
          <h2 className="text-5xl font-extrabold text-navyBlue text-center mb-10">Education</h2>
          <div className="max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
                  <h3 className="text-2xl font-semibold">Bachelor of Commerce (Hons.) in Accounting and Finance</h3>
                  <p className="text-lg font-medium">University of Jaffna</p>
                  <p className="text-gray-600">2019 - Present</p>
                  <p className="mt-2">Current GPA: 3.43</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
                  <h3 className="text-2xl font-semibold">Institute of Chartered Accountants of Sri Lanka</h3>
                  <p className="text-lg font-medium">Corporate Level</p>
                  <p className="text-gray-600">Ongoing</p>
                  <p className="mt-2">Following Corporate Level program to gain professional accounting qualifications.</p>
              </div>
          </div>
      </section>
  );
}

export default Education;

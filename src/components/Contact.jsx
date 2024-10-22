// src/components/Contact.jsx
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="bg-lightGray text-darkGray py-12 px-6 mb-12">
            <h2 className="text-4xl font-extrabold text-navyBlue text-center mb-10">Contact Me</h2>
            <div className="flex flex-col items-center max-w-3xl mx-auto space-y-6">
                {/* Contact Card */}
                <div className="flex items-center w-full bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105">
                    <FaPhone className="text-navyBlue mr-4 text-3xl" />
                    <span className="text-lg font-medium">Call & WhatsApp: <span className="font-bold"> +94715792592</span></span>
                </div>
                <div className="flex items-center w-full bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105">
                    <FaEnvelope className="text-navyBlue mr-4 text-3xl" /> {/* Same size for consistency */}
                    <span className="text-lg font-medium">
                        Email: 
                        <a 
                            href="mailto:nipun98v@gmail.com" 
                            className="font-bold text-navyBlue hover:underline ml-1"
                        >
                            nipun98v@gmail.com
                        </a>
                    </span>
                </div>
                <div className="flex items-center w-full bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105">
                    <FaLinkedin className="text-navyBlue mr-4 text-3xl" />
                    <span className="text-lg font-medium">
                        LinkedIn: 
                        <a 
                            href="https://www.linkedin.com/in/nipun-vishwa-2b33652ab" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-bold text-navyBlue hover:underline ml-1"
                        >
                            Nipun Vishwa
                        </a>
                    </span>
                </div>
                <div className="flex items-center w-full bg-white shadow-md rounded-lg p-5 transition-transform transform hover:scale-105">
                    <FaMapMarkerAlt className="text-navyBlue mr-4 text-3xl" />
                    <span className="text-lg font-medium">Address: <span className="font-bold">No 313, Kurunawagama, Wariyapola</span></span>
                </div>
            </div>
        </section>
    );
}

export default Contact;

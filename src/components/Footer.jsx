const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-navyBlue to-blue-900 text-white py-6 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                <p className="text-sm text-center">
                    © 2024 <span className="font-bold">Saumya Herath</span>. All rights reserved.
                </p>
                <p className="text-sm mt-2 text-center">
                    Software Developer | IT Research Writer
                </p>
                <div className="text-sm mt-1 flex justify-center items-center">
                    <p className="mr-2">Contact:</p>
                    <a href="mailto:saumyapiumi7@gmail.com" className="text-blue-500">saumyapiumi7@gmail.com</a>
                    <p className="mx-2">|</p>
                    <p>+9470 311 3226</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import Profile from "../../assets/home.jpg"
import CV from "../../assets/zain-cv.pdf";


function NextPage() {
    return (
        <div className="bg-gray-100 min-h-screen p-5 md:p-10 flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-lg p-8 max-w-6xl w-full">
            {/* Download Button */}
            <div className="flex justify-end mb-4">
              <a href ={CV} download ='ZainIshtiaq_Resume.pdf'>
              <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                Download Resume
              </div>
              </a>
            </div>

            {/* Header Section with Photo and Summary */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-12">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <img 
                  src={Profile} 
                  alt="Zain Ishtiaq" 
                  className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4"
                />
                <h1 className="text-3xl font-bold">Zain Ishtiaq</h1>
                <p className="text-gray-600">Flutter Developer</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-600"><strong>Email:</strong> zainishtiaq.7866@gmail.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> +92 302 8163676</p>
                <p className="text-gray-600"><strong>Location:</strong> Lahore, Pakistan</p>
                <p className="text-gray-600"><strong>Website:</strong> <a href="https://zainishtiaq.netlify.app/" className="text-blue-500">zainishtiaq.netifly.app</a></p>
                <p className="text-gray-600"><strong>GitHub:</strong> <a href="https://github.com/zainishtiaq316" className="text-blue-500">github.com/zainishtiaq316</a></p>
              </div>
            </div>
    
            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
              Hi, I am Zain Ishtiaq. I am currently on my journey to become a proficient Flutter Developer by utilizing my programming skills and creativity to develop innovative and user-friendly applications that can make a positive impact on people's lives. I am committed to learning new things and growing personally, and I am always eager to improve my professional skills.
              </p>
            </div>
    
            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Work Experience</h2>
              <div>
                <h3 className="font-semibold">Flutter Developer | Hisbinary Software Company</h3>
                <p className="text-gray-600">Lahore | Sep 2023 - Present</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Participating in the design and creation of Scalable software.</li>
                  <li>Writing clean, functional code on the front-end.</li>
                  <li>Testing and Fixing bugs or other coding issues.</li>
                  <li>Working with development teams and product managers to idea software solutions.</li>
                  <li>Troubleshoot, debug and upgrade software.</li>
                  <li>Writing effective code for professional screens through playing with widgets.</li>
                  <li>Writing clean code by refactoring each and every widgets and methods is the first priority to increase reading and reusability.</li>
                  <li>Working on animations through different dependencies in flutter to make front-end beautiful and attractive.</li>
                  <li>Make custom widgets and save it like professional folder structure for next use by just calling them.</li>
                
                </ul>
              </div>
            </div>
    
            {/* Key Projects */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Key Projects</h2>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li><strong>Property Yar - Real Estate App:</strong> Designed and managed UI elements and listing layouts for the Property Yar real estate app and connect with firebase, collaborating with the development team. <a href="https://play.google.com/store/apps/details?id=com.propertyyar.realestate&pcampaignid=web_share" className="text-blue-500">Play Store Link</a></li>
                <li><strong>eBroker App:</strong> Collaborated with a team to design and manage the user interface (UI) for the eBroker property app. <a href="https://play.google.com/store/apps/details?id=com.ebroker.wrteam&pcampaignid=web_share" className="text-blue-500">Play Store Link</a></li>
                <li><strong>Active Ecommerce Demo App:</strong> Designed and implemented user interfaces (UI) for the Active Ecommerce Demo App during an internship, gaining valuable experience in e-commerce design principles. <a href="https://play.google.com/store/apps/details?id=com.aizflutterapp&pcampaignid=web_share" className="text-blue-500">Play Store Link</a></li>
              </ul>
            </div>
    
            {/* Technical Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Mobile Development</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Flutter Framework</li>
                    <li>Dart Programming</li>
                    <li>Android/iOS Development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Backend & APIs</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Firebase Integration</li>
                    <li>API Integration</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Other Skills</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Animations</li>
                    <li>Testing and Debugging</li>
                    <li>GIT/Version Control</li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Education */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Education</h2>
              <p className="font-semibold text-gray-700">Bachelor’s of Computer Science | University of the Punjab</p>
              <p className="text-gray-600">Jhelum Campus | Nov 2019 - Jun 2023 | CGPA: 3.37</p>
            </div>
    
            {/* Certifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Certifications</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Google Cloud Professional Certifications</li>
                <li>Google Cybersecurity Specialization</li>
                <li>Master Azure AI Challenge</li>
                <li>Python Seekho Challenge</li>
                <li>Master Power Platform Fundamentals</li>
              </ul>
            </div>
    
            {/* Languages */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Languages</h2>
              <ul className="grid grid-cols-2 gap-4 text-gray-600">
                <li>English - Professional</li>
                <li>Urdu - Native</li>
                <li>Punjabi - Native</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default NextPage;

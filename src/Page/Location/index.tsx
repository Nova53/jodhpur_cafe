import  { useState, useEffect } from "react";
import Gallery from "../../components/Gallary";
import ContactForm from "../../components/layout/Contactform";
import AutoCarousel from "../../components/layout/Contactimg";
import { BsInstagram } from "react-icons/bs";


const Location = () => {
  const [activeTab, setActiveTab] = useState("leeds");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // Scroll to top when showMoreInfo changes
  useEffect(() => {
    if (showMoreInfo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showMoreInfo]);

  const locationData = {
    leeds: {
      name: "Leeds",
      address: "352-354 Kirkstall Rd, Burley, Leeds LS4 2HQ, United Kingdom",
      openingHours: {
        "MON - THURS": "11:30am to 10pm",
        "FRI - SAT": "11:30am to 11pm",
        "SUNDAY": "11:30am to 10pm"
      },
      contact: {
        phone: "+441423550792",
        email: "jodhpur@gmail.com"
      },
      description: "We can usually get you seated pretty quickly, so please feel free to just turn up. If you'd rather book a table or have a larger group of you, that's great, too!"
    },
    harrogate: {
      name: "Harrogate",
      address: "12 Parliament St, Harrogate HG1 2RB, United Kingdom",
      openingHours: {
        "MON - THURS": "11:30am to 10pm",
        "FRI - SAT": "11:30am to 11pm",
        "SUNDAY": "11:30am to 10pm"
      },
      contact: {
        phone: "+441423550792",
        email: "jodhpur@gmail.com"
      },
      description: "We can usually get you seated pretty quickly, so please feel free to just turn up. If you'd rather book a table or have a larger group of you, that's great, too!"
    }
  };

  const currentLocation = locationData[activeTab as keyof typeof locationData];

  // If showing more info, display the detailed location page
  if (showMoreInfo) {
    return (
      <div className="m-0 p-0">
        {/* Hero Section with नमस्ते */}
        <div className="relative h-[500px] flex flex-col justify-center items-center text-center">
  {/* Background with opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85"
    style={{ backgroundImage: 'url(./img1.jpg)' }}
  ></div>

  {/* Content */}
  <p className="text-[48px] text-white z-10">नमस्ते,</p>
  <p className="text-[#F26632] text-[64px] z-10">{currentLocation.name}</p>
</div>


        {/* Location Information Section with Light Beige Background */}
        <div className="bg-[#F5F5DC] p-8">
          <div className="max-w-7xl mx-auto">
            {/* Location Selection Buttons */}
            <div className="flex items-center justify-center gap-5 mb-8">
              <button 
                className={`group ${activeTab === "leeds" ? "btn1" : "btn2"}`}
                onClick={() => setActiveTab("leeds")}
              >
                <span className={activeTab === "leeds" ? "btn1text" : "btn2text"}>Leeds</span>
              </button>
              <button 
                className={`group ${activeTab === "harrogate" ? "btn1" : "btn2"}`}
                onClick={() => setActiveTab("harrogate")}
              >
                <span className={activeTab === "harrogate" ? "btn1text" : "btn2text"}>Harrogate</span>
              </button>
            </div>

            {/* Introductory Text */}
            <div className="text-left mb-8">
              <p className="text-lg text-left text-gray-700
              ">
                {currentLocation.description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact & Hours */}
              <div className="space-y-6">
                {/* Opening Hours */}
                <div >
                  <h3 className="text-2xl text-[var(--primary-color)] font-semibold  mb-3">Opening Time</h3>
                  <div className="space-y-1 flex justify-between ">
                    {Object.entries(currentLocation.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex flex-col w-[210px]">
                        <span className="font-medium text-[20px] text-[var(--quaternary-color)]">{day}</span>
                        <span className="text-[#12A1CE] text-[20px] font-normal">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-3">Contact</h3>
                  <div className="space-y-1 flex justify-between ">
                    <div className="flex flex-col w-[210px]">
                      <span className="font-medium text-[20px] text-gray-700">Call us on:</span>
                      <span className="text-[#12A1CE] text-[20px] font-normal">{currentLocation.contact.phone}</span>
                    </div>
                    <div className="flex flex-col text-[20px] w-[210px]">
                      <span className="font-medium text-gray-700">Email us on:</span>
                      <span className="text-[#12A1CE] text-[20px] font-normal">{currentLocation.contact.email}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="btn1 group">
                    <span className="btn1text">LUNCH MENU</span>
                  </button>
                  <button className="btn2 group">
                    <span className="btn2text">DINNER MENU</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="bg-gray-100 rounded-lg p-4 h-80 overflow-hidden shadow-lg">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    📍 Jodhpur Cafe - {currentLocation.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Click and drag to explore the area
                  </p>
                </div>
                
                <div className="relative h-full">
                  <iframe
                    src={activeTab === "leeds" 
                      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.1234567890123!2d-1.5678!3d53.8123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ4JzQ0LjMiTiAxwrAzNCcwNC4xIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.1234567890123!2d-1.4789!3d53.9945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNTPCsDU5JzQwLjIiTiAxwrAyOCc0MC4wIlc!5e0!3m2!1sen!2suk!4v1234567890123"
                    }
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Jodhpur Cafe ${currentLocation.name} Location`}
                    className="rounded-lg shadow-md"
                  />
                  
                  {/* Map overlay with location info */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                    <div className="text-xs text-gray-700">
                      <div className="font-medium">📍 {currentLocation.name}</div>
                      <div className="text-gray-500">
                        {activeTab === 'leeds' ? 'Kirkstall Road' : 'Parliament Street'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Of Leeds/Harrogate Section */}
        <div className="text-center p-[2em]">
          <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">Visual Of {currentLocation.name}</h2>
        </div>
        <div className="max-w-7xl mx-auto p-8">
          {/* Top Row - 2 images (1 large left, 1 smaller right) */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="col-span-2 overflow-hidden rounded-lg">
              <img 
                src="./Gallaryimg1.jpg" 
                alt="Restaurant Interior - Wide Shot" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
              />
            </div>
            <div className="col-span-3 overflow-hidden rounded-lg">
              <img 
                src="./Gallaryimg2.jpg" 
                alt="Jodhpur Logo - Dark Background" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
              />
            </div>
          </div>
          
          {/* Bottom Row - 3 equal images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="./Gallaryimg3.jpg" 
                alt="Namaste Gesture" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="./Gallaryimg4.jpg" 
                alt="Outdoor Dining with Thali" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="./Gallaryimg5.jpg" 
                alt="Food Thali Close-up" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
              />
            </div>
          </div>
        </div>

                 {/* Connect With Jodhpur Section */}
         <div className="text-center p-[2em]">
           <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">Connect With Jodhpur</h2>
         </div>
         <div className="max-w-7xl mx-auto p-8">
           {/* First Row - 4 images */}
           <div className="grid grid-cols-4 gap-4 mb-4">
             {[1, 2, 3, 4].map((num) => (
               <div key={num} className="overflow-hidden rounded-lg">
                 <img 
                   src={`./Gallaryimg${num}.jpg`} 
                   alt={`Gallery Image ${num}`} 
                   className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                 />
               </div>
             ))}
           </div>
           
           {/* Second Row - 4 images */}
           <div className="grid grid-cols-4 gap-4 mb-8">
             {[5, 6, 7, 8].map((num) => (
               <div key={num} className="overflow-hidden rounded-lg">
                 <img 
                   src={`./Gallaryimg${num}.jpg`} 
                   alt={`Gallery Image ${num}`} 
                   className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                 />
               </div>
             ))}
           </div>
           
           {/* Follow Us Button with Instagram Icon */}
           <div className="text-center flex justify-center">
             <button className="btn1 group  flex items-center justify-center gap-2">
               <span className="btn1text">Follow Us</span> <BsInstagram className="text-2xl"/>
             </button>
           
           </div>
         </div>

         {/* Back Button */}
         <div className="text-center p-8">
           <button 
             onClick={() => {
               setShowMoreInfo(false);
               // Scroll to top when going back
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             className="btn2 group"
           >
             <span className="btn2text">BACK TO LOCATIONS</span>
           </button>
         </div>
      </div>
    );
  }

  // Main location page
  return (
    <div className="m-0 p-0">
      <div className="bg-[url(./headerBanner.png)] bg-cover bg-center bg-no-repeat h-[500px] p-0 m-0 flex flex-col justify-center items-center text-center">
        <p className="text-[48px] text-[#ffffff]">
          "Find Jodhpur Flavours
          <br /> near you."
        </p>
        <p className="text-[#ffffff] text-[24px]">
          "Bringing the royal taste of Rajasthan to your city."
        </p>
      </div>
      
      {/* Location Tabs */}
      <div className="p-[2em]">
        <div className="flex items-center justify-center gap-5">
          <button 
            className={`group ${activeTab === "leeds" ? "btn1" : "btn2"}`}
            onClick={() => setActiveTab("leeds")}
          >
            <span className={activeTab === "leeds" ? "btn1text" : "btn2text"}>LEEDS</span>
          </button>
          <button 
            className={`group ${activeTab === "harrogate" ? "btn1" : "btn2"}`}
            onClick={() => setActiveTab("harrogate")}
          >
            <span className={activeTab === "harrogate" ? "btn1text" : "btn2text"}>HARROGATE</span>
          </button>
        </div>
      </div>

      {/* Location Content */}
      <div className="flex max-w-[1440px] overflow-hidden">
        <div className="w-[30%] flex justify-center items-center gap-6 p-[2em]">
          <div className="pb-[11em]">
            <img src="./icon.png" alt="Jodhpur Icon" />
          </div>
          <div>
            <p className="text-[#F5652F] text-2xl">नमस्ते,</p>
            <p className="text-[#F5652F] text-3xl">{currentLocation.name}</p>
            <p className="py-[1em]">
              {currentLocation.address.split(", ").map((line, index) => (
                <span key={index} className="text-xl">
                  {line}
                  {index < currentLocation.address.split(", ").length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="flex items-center justify-center gap-5">
              <button 
                className="btn1 group"
                onClick={() => setShowMoreInfo(true)}
              >
                <span className="btn1text">MORE INFO</span>
              </button>
              <button className="btn2 group">
                <span className="btn2text">VIEW MENU</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[70%] gap-4 justify-center">
          <div className="overflow-hidden rounded-lg mb-5">
            <img 
              className="h-[520px] hover:scale-105 transition-transform duration-500 cursor-pointer" 
              src="./img1.jpg" 
              alt="Restaurant Interior 1" 
            />
          </div>
          <div className="overflow-hidden rounded-lg mt-5">
            <img 
              className="h-[520px] hover:scale-105 transition-transform duration-500 cursor-pointer" 
              src="./img2.png" 
              alt="Restaurant Interior 2" 
            />
          </div>
        </div>
      </div>

      <div className="text-center p-[2em]">
        <h2 className="text-4xl text-[#F5652F] font-bold font-[Poppins]">Jodhpur's Gallery</h2>
      </div>
      <Gallery/>
      <div className="flex justify-center ">
        <div className=" bg-[url(./bg.jpg)] bg-cover bg-center bg-no-repeat w-[50%] p-[2em] ">
          <ContactForm/>
        </div>
        <div className="w-[50%] ">
          <AutoCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Location;

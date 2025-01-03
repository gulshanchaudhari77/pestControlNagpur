import React from "react";
import antImage from "../assets/servisecimg2.png"; // Replace with the path to your ant image
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import img1 from '../assets/termide.jpg'
import img2 from '../assets/cockroach.jpg'
import img3 from '../assets/mosquito.jpg'
import img4 from '../assets/rat.webp'
import img5 from '../assets/ant.jpg'
import img6 from '../assets/spiderMain.jpg'
import img7 from '../assets/flies1.jpg'
import img8 from '../assets/ticks.webp'



const PestInformation = () => {
  const { pestName } = useParams();
  console.log("pestName ", pestName);

  const pests = [
    {
      img: img1,
      text: "Termites",
      link: "termites",
      des: "Termites are small yet powerful insects that can cause significant damage to your home by feeding on wood and other cellulose materials. With over 2,000 species worldwide, termites play a vital role in breaking down dead plants and recycling nutrients in the ecosystem. However, when they invade human structures, they can weaken foundations and cause costly damage. Effective termite pest control is essential to protect your property, using methods like inspections, treatments, and prevention strategies to eliminate termites and prevent future infestations. Termite control ensures your home remains safe, while maintaining the delicate balance they provide to nature.",
    },
    {
       img: img2,
      text: "Cockroaches",
      link: "cockroaches",
      des: "Cockroaches are resilient pests known for their ability to survive in harsh environments, making them one of the most common household invaders. They can spread diseases and trigger allergies, posing health risks to your family. With over 4,000 species, cockroaches are often found in kitchens and bathrooms, where food and moisture are abundant. Effective cockroach pest control involves thorough inspections, targeted treatments, and preventive measures to eliminate these pests and keep them from returning. Protect your home with professional pest control to ensure a clean, healthy environment for you and your family.",
    },
    {
       img: img3,
      text: "Mosquitoes",
      link: "mosquitoes",
      des: "Mosquitoes are pesky insects that can spread dangerous diseases like malaria, dengue, and Zika virus, making effective pest control essential. These tiny creatures breed in standing water and thrive in warm, humid environments, often becoming a nuisance during warmer months. Mosquito pest control involves identifying breeding sites, eliminating standing water, and using treatments like insecticides, repellents, and traps to reduce their population. Professional pest control services help prevent mosquito bites and protect your family from the health risks associated with these pests, ensuring a safer and more comfortable living space.",
    },
    {
      img: img4,
      text: "Rat",
      link: "rat",
      des: "Rats are highly adaptable pests that can cause significant damage to your property by gnawing on wires, insulation, and structures. They are also known to carry diseases and contaminate food, posing serious health risks. Effective rat pest control involves inspecting your property for entry points, setting traps, and using baits or repellents to eliminate infestations. Additionally, sealing cracks and gaps helps prevent future invasions. Professional rat control services provide a comprehensive approach to safely and efficiently remove rats, ensuring your home remains clean, secure, and free from these harmful pests.",
    },
    {
      img: img5,
      text: "Ants",
      link: "ants",
      des: "Ants are small but mighty creatures known for their incredible strength and teamwork. With over 12,000 species worldwide, they play a vital role in maintaining ecosystems by aerating soil, recycling nutrients, and  controlling pests. These tiny insects teach us the power of collaboration and resilience.",
    },
    {
       img: img6,
      text: "Spiders",
      link: "spiders",
      des: "Spiders are common household pests, with many species harmless, but some can pose health risks through bites or allergic reactions. They are often found in dark, quiet corners of homes, preying on other insects. While most spiders help control pests, infestations can become unsettling. Effective spider pest control involves identifying and eliminating the insects they feed on, sealing cracks and gaps where spiders may enter, and using treatments like sprays or traps to control their population. Professional pest control services can ensure your home stays spider-free, providing peace of mind and a more comfortable living environment.",
    },
    {
       img: img7,
      text: "Flies",
      link: "flies",
      des: "Flies are not only annoying but can also carry harmful bacteria and diseases, posing a risk to your health. Commonly found around food, trash, and waste, flies breed in unsanitary conditions and spread germs as they move from one surface to another. Effective fly pest control involves removing breeding sites, keeping food covered, and using traps, fly sprays, or insecticides to eliminate adult flies. Professional pest control services can help you address fly infestations by targeting breeding areas, ensuring your home stays clean, safe, and free of these bothersome pests.",
    },
    {
       img: img8,
      text: "Ticks",
      link: "ticks",
      des: "Ticks are small, blood-sucking parasites that can transmit dangerous diseases like Lyme disease and Rocky Mountain spotted fever. Often found in grassy or wooded areas, they can latch onto pets or humans and pose serious health risks. Effective tick pest control involves treating outdoor areas, such as lawns and gardens, with acaricides, removing leaf litter and tall grasses, and using preventive treatments for pets. Professional pest control services can help eliminate ticks from your property and reduce the risk of infestations, ensuring a safer and healthier environment for you and your family.",
    },
  ];

  return (
    <div>
      {pests.map((data, i) => (
        <>
          { pestName === data.link &&
            <div
              key={i}
              className="flex flex-col lg:flex-row py-20 px-6 lg:px-20  "
            >
              {/* Image Section */}
              <div className="lg:w-[45%] mb-7 lg:mb- flex items-center justify-center rounded-lg  overflow-hidden shadow-[0px_0px_2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
                <img
                  src={data.img}
                  alt="About"
                  className="w-[100%] my-5 object-cover rounded-lg "
                />
              </div>

              {/* Text Section */}
              <div className="lg:w-[55%] lg:pl-12 flex flex-col justify-center">
                <h2 className="text-4xl font-semibold text-green-600 mb-16 text-center">
                  All about {data.text}
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {data.des}
                </p>
              </div>
            </div>
          }
        </>
      ))}
    </div>
  );
};

export default PestInformation;

import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni maxime aperiam laudantium molestias. Amet, accusamus omnis unde, quisquam a doloremque, ipsum maiores laboriosam
            atque obcaecati dolore sapiente possimus fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab deleniti iusto esse molestiae reiciendis? Eligendi voluptate minima quam debitis assumenda expedita minus eum modi,
            pariatur voluptatem dolore est, maxime aliquid aspernatur ad fugit officia beatae esse aperiam? Earum sed animi in magni. Sed praesentium velit, quibusdam voluptates iusto dolores.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic unde laudantium odio quia ea omnis, quae veritatis molestias perspiciatis blanditiis!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why "} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas et voluptatibus maiores ratione saepe? Natus facilis illum adipisci facere odio.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas et voluptatibus maiores ratione saepe? Natus facilis illum adipisci facere odio.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas et voluptatibus maiores ratione saepe? Natus facilis illum adipisci facere odio.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;

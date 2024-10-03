import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Us"
        />

        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the industry. Our goal has always been to offer the
            highest quality products to our customers.
          </p>
          <p>
            Since our inception, we have worked tirelessly to curate a diverse
            selection of items that cater to the ever-changing needs of our
            clientele. We pride ourselves on delivering excellent service and
            staying ahead of trends.
          </p>

          {/* Mission Section */}
          <b className="text-gray-800">Our Mission</b>
          <p>
            To create value and make a difference by offering products that
            enhance everyday life. We believe in empowering our customers with
            choices that reflect quality and reliability.
          </p>
        </div>
      </div>

      {/* "Why Choose Us" Section */}
      <div className="text-xl py-4">
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-5">
        {/* Quality Assurance */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            We meticulously select and vet each product to ensure it meets our
            high standards, giving you the best value for your purchase.
          </p>
        </div>

        {/* Convenience */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping with us is quick, easy, and enjoyable.
          </p>
        </div>

        {/* Customer Support */}
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Support:</b>
          <p>
            Our dedicated support team is always ready to assist you with any
            inquiries or issues, ensuring a smooth shopping experience.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;

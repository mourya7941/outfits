import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT '} text2={'US'} />
      </div>

      {/* Contact Content Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        {/* Image Section */}
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Contact Info Section */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Store Information */}
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.co
          </p>

          {/* Careers Section */}
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">
            Join our team! If you are passionate about innovation and creativity,
            we have always looking for talented individuals. Contact us at
            careers@forever.co.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default Contact;

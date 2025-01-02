import React from "react";
import Image from "next/image";
import Link from "next/link";

 // Define Card_Type interface for props
interface CardProps {
  heading: string;
  text: string;
  blogid: number;
  image?: string;
}

// Card component definition with props destructuring
const Card: React.FC<CardProps> = ({ heading, text, blogid, image }) => {

  return (
    <div className="bg-[#f8f5f4]/15 text-gray-700 p-6 font-sans font-semibold border border-[#f8f5f4] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {image && (
        <div className=" relative mb-4 flex-shrink-0">
          <Image
            src={image}
            alt={heading}
            width={400}
            height={250}
            className="w-full h-auto object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="flex-grow">
        <h2 className="text-xl text-[#1d1d1d] font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600 mb-4">{text}</p>
      </div>
      <div className="mt-auto">
        {/* Corrected blogid here */}
        <Link
          href={`/blogs/${blogid}`}
          className="block bg-[#b4583c]/100 text-white text-center py-2 px-4 rounded-lg border hover:border-[#b4583c]/100 hover:bg-[#b4583c]/10 hover:text-gray-800 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

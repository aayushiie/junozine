import React from 'react'
import people from '../data/people'
import slugify from 'slugify'
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const MastheadProfile = () => {
  const { slug } = useParams(); // always get slug dynamically
  const person = people.find(
    p => slugify(p.name, { lower: true, strict: true }) === slug
  );

  if (!person) return <div className="text-center mt-20">Person not found</div>;

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8">
      
      {/* Back Button */}
      <div className="w-full mb-6">
        <Link to="/masthead">
          <motion.div
            whileHover={{ x: -5 }} 
            whileTap={{ scale: 0.9 }} 
            className="flex items-center cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Back</span>
          </motion.div>
        </Link>
      </div>

      {/* Profile Content */}
      <div className="flex flex-col items-center text-center roboto-mono-text max-w-2xl">
        <img
          src={person.image}
          alt={person.name}
          className="w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover mb-6 rounded-lg shadow-md"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">{person.name}</h1>
        <h2 className="text-lg sm:text-xl text-gray-500 mb-4">{person.role}</h2>
        <p className="text-base sm:text-lg leading-relaxed">{person.description}</p>
      </div>
    </div>
  )
}

export default MastheadProfile;

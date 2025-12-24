import { motion } from "framer-motion";

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600">{destination.name}</h2>
        <p className="text-gray-700 mt-1">{destination.description}</p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;

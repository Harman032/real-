import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show the back button on the Home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => navigate(-1)}
      className="flex items-center text-premium-gold hover:text-premium-black transition-colors font-bold uppercase tracking-widest text-xs group"
    >
      <svg 
        className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </motion.button>
  );
};

export default BackButton;

import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-premium-cream">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-premium-gold uppercase tracking-[0.5em] font-bold mb-6">Coming Soon</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Refinement in <span className="italic text-premium-gold">Progress.</span>
            </h1>
            <p className="text-xl text-gray-600 font-serif italic mb-12 max-w-2xl mx-auto leading-relaxed">
              We are currently curating this experience to meet our standards of excellence. This section will be unveiled shortly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate(-1)}
                className="bg-premium-black text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-premium-charcoal transition-all shadow-xl w-full sm:w-auto"
              >
                Go Back
              </button>
              <Link 
                to="/" 
                className="text-premium-black border-b-2 border-premium-gold pb-1 font-bold hover:text-premium-gold transition-colors uppercase tracking-widest text-sm"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

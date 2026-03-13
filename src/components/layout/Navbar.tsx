import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-premium-gold rotate-45 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white -rotate-45 font-serif font-bold italic">G</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>
            GOLDEN<span className="text-premium-gold">ESTATE</span>
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-premium-gold ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>Home</Link>
          <Link to="/buy" className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-premium-gold ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>Buy</Link>
          <Link to="/sell" className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-premium-gold ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>Sell</Link>
          <Link to="/about" className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-premium-gold ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>About</Link>
          <Link to="/admin" className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-premium-gold ${isScrolled ? 'text-premium-black' : 'text-white drop-shadow-md'}`}>Admin</Link>
          <Link to="/login" className="bg-premium-gold text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-premium-gold/90 transition-all shadow-lg hover:shadow-premium-gold/20">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

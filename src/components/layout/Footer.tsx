import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-8 h-8 bg-premium-gold rotate-45 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white -rotate-45 font-serif font-bold italic">G</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                GOLDEN<span className="text-premium-gold">ESTATE</span>
              </span>
            </Link>
            <p className="text-gray-400 font-serif italic leading-relaxed mb-8">
              Redefining the art of luxury living through architectural significance and bespoke intelligence.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link to="/coming-soon" className="hover:text-premium-gold transition-colors">Instagram</Link>
              <Link to="/coming-soon" className="hover:text-premium-gold transition-colors">LinkedIn</Link>
              <Link to="/coming-soon" className="hover:text-premium-gold transition-colors">X</Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-premium-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Home</Link></li>
              <li><Link to="/buy" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Buy</Link></li>
              <li><Link to="/sell" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Sell</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-premium-gold mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Privacy Policy</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Terms of Service</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-premium-gold mb-8">The Collection</h4>
            <p className="text-sm text-gray-400 mb-6">Subscribe to receive curated listings and market insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-gray-800 py-3 flex-grow outline-none focus:border-premium-gold transition-colors text-sm"
              />
              <button className="ml-4 text-premium-gold uppercase tracking-widest text-xs font-bold hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">
          <p>© 2024 Golden Estate. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Crafted for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

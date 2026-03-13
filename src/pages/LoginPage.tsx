const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-premium-cream dark:bg-premium-black px-6">
      <div className="max-w-md w-full bg-white dark:bg-premium-charcoal p-10 shadow-2xl rounded-sm border border-gray-100 dark:border-gray-800">
        <div className="text-center mb-10">
          <div className="inline-block w-12 h-12 bg-premium-gold rotate-45 flex items-center justify-center mb-6">
            <span className="text-white -rotate-45 font-serif font-bold italic text-xl">G</span>
          </div>
          <h2 className="text-3xl font-serif mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-sm italic">Enter your credentials to access your account</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 dark:bg-premium-black border border-gray-200 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold transition-colors"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 dark:bg-premium-black border border-gray-200 dark:border-gray-700 px-4 py-3 outline-none focus:border-premium-gold transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-premium-black dark:bg-premium-gold text-white py-4 font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-500">
            Don't have an account? <a href="#" className="text-premium-gold font-bold">Register interest</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

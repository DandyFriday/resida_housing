import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  
  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name||!email || !password) {
      setError('Please fill out all fields.');
      return;
    } 

    alert(`login with Email: ${email}`);
    setError(null);

    navigate(`/house/3`);

  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary mt-10">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
       
        <form className="mt-4 space-y-4" onSubmit={handleEmailLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Create Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
              placeholder="Enter your password"
              required
            /> 
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute mt-[-30px] right-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-gray-300 hover:text-primary focus:ring focus:ring-primary"
          >
            Login Here
          </button>
        </form>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500">
            Haven't created an account? <a href="/signup" className="text-secondary hover:underline">Sign Up</a>
          </p>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}       
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = () => {
    const googleUser = {
      name: 'Dandy George',
      email: 'dandygeorge02@gmail.com',
    };

    alert(`Google Sign-In successful! \nName: ${googleUser.name} \nEmail: ${googleUser.email}`);
  };

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    alert(`Signed up with Email: ${email}`);
    setError(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <form className="mt-4 space-y-4" onSubmit={handleEmailSignUp}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
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
            className="w-full px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-gray-300 hover:text-primary focus:ring focus:ring-blue-100"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">OR sign up with Google</p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 text-primary bg-secondary rounded-lg hover:bg-gray-300 hover:text-secondary focus:ring focus:ring-red-200"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
    const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const googleUser = {
      name: 'Dandy George',
      email: 'dandygeorge02@gmail.com',
    };

    alert(`Google Sign-In successful! \nName: ${googleUser.name} \nEmail: ${googleUser.email}`);
  };

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name||!email || !password||  !confirmPassword) {
      setError('Please fill out all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }



    alert(`Signed up with Email: ${email}`);
    setError(null);

    navigate(`/login`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary mt-14">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-primary">Sign Up</h2>
       
        <form className="mt-4 space-y-4" onSubmit={handleEmailSignUp}>
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
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
               type={showPassword ? 'text' : 'password'}
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-primary"
               placeholder="Confirm your password"
               required
              />
            </div>



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
            Sign Up
          </button>
        </form>
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500">
            Already signed up? <a href="/login" className="text-secondary hover:underline">Login here</a>
          </p>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}


        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500 mb-2">OR <br/> sign up with Google</p>
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

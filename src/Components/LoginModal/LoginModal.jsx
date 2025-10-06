import { useState } from 'react';

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    // simple regex for email validation
    // you can improve this or use a library
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSendOTP = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    console.log('Send OTP to:', email);
    // Here send the OTP via email
  };

  return (
    <div className="fixed inset-0 bg-blend-color-burn bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 rounded-b-lg">
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-2">Login to continue</h2>
        <p className="text-sm text-gray-600 mb-4">
          You will receive an email to verify your account.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border ${ emailError ? 'border-red-500' : 'border-gray-300' } rounded-3xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-300`}
        />

        {emailError && (
          <p className="text-sm text-red-500 mb-4">{emailError}</p>
        )}

        <button
          onClick={handleSendOTP}
          className="w-full bg-rose-300 text-white py-2 rounded-2xl hover:bg-rose-400"
        >
          Send OTP
        </button>

        <p className="text-xs text-gray-500 mt-4">
          By continuing, you agree to our{' '}
          <a href="#" className="text-gray-600 underline">Terms of service</a> &{' '}
          <a href="#" className="text-gray-600 underline">Privacy policy</a>.
        </p>
      </div>
    </div>
  );
}

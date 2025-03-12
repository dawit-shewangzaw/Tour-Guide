import React, { useState } from 'react';

const MyProfile = () => {
  const [selectedOption, setSelectedOption] = useState('Profile Information');
  const [name, setName] = useState('Dawit Shewangzaw');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Addis Ababa');
  const [bankName, setBankName] = useState('Tele-Birr');
  const [accountPhone, setAccountPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSaveProfile = () => {
    alert('Profile information saved!');
  };

  const handleSavePayment = () => {
    alert('Payment method saved!');
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-4 sm:p-8 font-serif pt-20 lg:pt-20">
      {/* Title with Shadow Box */}
      <div className="bg-white shadow-sm rounded-lg p-4 mb-8 w-full sm:w-4/5 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">My Profile</h1>
      </div>

      {/* Main Container (White Box with Shadow) */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col sm:flex-row p-4 sm:p-8 w-full sm:w-4/5 mx-auto">
        {/* Left Side (25% width on desktop, full width on mobile) */}
        <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
          {/* Profile Image and Info */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gray-500">+</span>
              )}
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#7BBCB0] rounded-full flex items-center justify-center">
                <span className="text-white text-sm sm:text-base">✎</span>
              </div>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <h2 className="text-lg font-semibold mt-4">{name}</h2>
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <span>📍 {location}</span>
              <span>|</span>
              <span>📅 15/2/2025</span>
            </div>
          </div>

          {/* Options List */}
          <div className="space-y-4">
            {['Profile Information', 'Payment Method', 'Account Setting'].map((option) => (
              <div
                key={option}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedOption === option ? 'bg-[#7BBCB0] text-white' : 'bg-white text-gray-700'
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* Space between left and right (5% on desktop, hidden on mobile) */}
        <div className="w-0 sm:w-1/20"></div>

        {/* Right Side (50% width on desktop, full width on mobile) */}
        <div className="w-full sm:w-1/2">
          {selectedOption === 'Profile Information' && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Personal Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <button
                  className="w-full bg-[#7BBCB0] text-white py-2 rounded-lg hover:bg-[#6aa89c] transition"
                  onClick={handleSaveProfile}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {selectedOption === 'Payment Method' && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Payment Method</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  >
                    <option value="Tele-Birr">Tele-Birr</option>
                    <option value="CBE">CBE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    value={accountPhone}
                    onChange={(e) => setAccountPhone(e.target.value)}
                    className="w-full p-2 rounded-lg bg-[#F4F4F5]"
                  />
                </div>
                <button
                  className="w-full bg-[#7BBCB0] text-white py-2 rounded-lg hover:bg-[#6aa89c] transition"
                  onClick={handleSavePayment}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {selectedOption === 'Account Setting' && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Account Setting</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">Do you want to Logout?</p>
                <button
                  className="w-full bg-[#7BBCB0] text-white py-2 rounded-lg hover:bg-[#6aa89c] transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
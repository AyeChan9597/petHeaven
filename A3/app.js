import React, { useState } from 'react';
import { Home, Dog, Cat, Contact, LogIn, UserPlus, BookOpen, MessageCircle } from 'lucide-react';
import './PetAdoptionApp.css';

// Mock data for pets
const dogData = [
  { id: 1, name: 'Buddy', age: 3, breed: 'Labrador', image: '/api/placeholder/300/200' },
  { id: 2, name: 'Max', age: 5, breed: 'German Shepherd', image: '/api/placeholder/300/200' }
];

const catData = [
  { id: 1, name: 'Whiskers', age: 2, breed: 'Siamese', image: '/api/placeholder/300/200' },
  { id: 2, name: 'Luna', age: 4, breed: 'Persian', image: '/api/placeholder/300/200' }
];

// Navigation Component
const Navigation = ({ setCurrentPage }) => (
  <nav className="bottom-navigation">
    <button onClick={() => setCurrentPage('home')} className="nav-button">
      <Home />
      <span className="nav-label">Home</span>
    </button>
    <button onClick={() => setCurrentPage('dogs')} className="nav-button">
      <Dog />
      <span className="nav-label">Dogs</span>
    </button>
    <button onClick={() => setCurrentPage('cats')} className="nav-button">
      <Cat />
      <span className="nav-label">Cats</span>
    </button>
    <button onClick={() => setCurrentPage('about')} className="nav-button">
      <BookOpen />
      <span className="nav-label">About</span>
    </button>
    <button onClick={() => setCurrentPage('contact')} className="nav-button">
      <Contact />
      <span className="nav-label">Contact</span>
    </button>
  </nav>
);

// Pet Card Component
const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.image} alt={pet.name} className="pet-image" />
    <div className="pet-details">
      <h3 className="pet-name">{pet.name}</h3>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
      <button className="adopt-button">
        Adopt Me
      </button>
    </div>
  </div>
);

// Adoption Form Component
const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petType: '',
    petName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Adoption request submitted!');
  };

  return (
    <div className="adoption-form-container">
      <h2 className="form-title">Pet Adoption Form</h2>
      <form onSubmit={handleSubmit} className="adoption-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="form-input"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="form-input"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <select 
          className="form-input"
          value={formData.petType}
          onChange={(e) => setFormData({...formData, petType: e.target.value})}
        >
          <option value="">Select Pet Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <input 
          type="text" 
          placeholder="Preferred Pet Name" 
          className="form-input"
          value={formData.petName}
          onChange={(e) => setFormData({...formData, petName: e.target.value})}
        />
        <button 
          type="submit" 
          className="submit-button"
        >
          Submit Adoption Request
        </button>
      </form>
    </div>
  );
};

// Main App Component
const PetAdoptionApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="page-content">
            <h1 className="main-title">Welcome to Pet Haven</h1>
            <p>Find your perfect companion today!</p>
            <div className="tips-section">
              <h2 className="section-title">Pet Care Tips</h2>
              <ul className="tips-list">
                <li>Regular veterinary check-ups</li>
                <li>Proper nutrition and exercise</li>
                <li>Love and attention</li>
              </ul>
            </div>
          </div>
        );
      case 'dogs':
        return (
          <div className="page-content">
            <h2 className="section-title">Available Dogs</h2>
            <div className="pet-grid">
              {dogData.map(dog => <PetCard key={dog.id} pet={dog} />)}
            </div>
          </div>
        );
      case 'cats':
        return (
          <div className="page-content">
            <h2 className="section-title">Available Cats</h2>
            <div className="pet-grid">
              {catData.map(cat => <PetCard key={cat.id} pet={cat} />)}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="page-content">
            <h2 className="section-title">About Pet Haven</h2>
            <p>Our mission is to connect loving pets with caring families.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="page-content">
            <h2 className="section-title">Contact Us</h2>
            <p>Email: info@pethaven.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">Pet Haven</h1>
        <div className="header-actions">
          <button className="header-button">
            <LogIn /> Log In
          </button>
          <button className="header-button">
            <UserPlus /> Sign Up
          </button>
        </div>
      </header>
      
      <main className="main-content">
        {renderContent()}
        <AdoptionForm />
      </main>
      
      <Navigation setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PetAdoptionApp;
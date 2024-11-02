import React, { useState } from 'react';
import BooksPage from '../BooksPage/BooksPage';
import UsersPage from '../UsersPage/UsersPage';
import CategoryPage from '../CategoryPage/CategoryPage'; // Asegúrate de que la ruta sea correcta

const ControlPanel = () => {
  // Estado para controlar qué componente se debe mostrar
  const [activeTab, setActiveTab] = useState('books');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <h1 className='Lexend-Deca'>Admin Control Panel</h1>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'books' ? 'active' : ''}`}
              onClick={() => handleTabClick('books')}
            >
              Books
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => handleTabClick('users')}
            >
              Users
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => handleTabClick('categories')}
            >
              Categories
            </button>
          </li>
        </ul>
      </nav>
      <div>
        {activeTab === 'books' && <BooksPage />}
        {activeTab === 'users' && <UsersPage />}
        {activeTab === 'categories' && <CategoryPage />}
      </div>
    </div>
  );
};

export default ControlPanel;

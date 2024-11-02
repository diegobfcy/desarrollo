import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Header from "./../../components/Header/Header";
import Inicio from './../../components/Inicio/Inicio';
import BestSellers from '../../components/BestSellers/BestSellers';
import Footer from '../../components/Footer/Footer';
import CommonQuestions from '../../components/CommonQuestions/CommonQuestions';
import BooksPage from '../BooksPage/BooksPage';
import AddBookPage from '../AddBookPage/AddBookPage';
import UsersPage from '../UsersPage/UsersPage';

function MainPage() {
  const scrollContainerRef = useRef(null);  // Creando la referencia

  return (
    <div className="App" ref={scrollContainerRef}>
      <Header scrollContainer={scrollContainerRef}/>
      <Inicio/>
      <BestSellers/>
      <CommonQuestions/>
      <Footer/>
    </div>
  );
}

export default MainPage;
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './pages/style.css';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Contact'){
            return <Contact />;
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio />;
        }
            return <Resume />;
        };


    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <React.Fragment>    <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /></div>
        <div>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      
      </div>
      <div><Footer></Footer></div></React.Fragment>
    

   
    );
}
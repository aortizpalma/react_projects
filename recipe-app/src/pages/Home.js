import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../assets/Home.css'

const Home = () => {
    return (
        <div className='Home'>
        
        <Header />
        <Main />
            This is Home.
        <Footer />
        </div>
    );
};

export default Home;
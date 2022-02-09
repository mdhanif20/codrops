import React from 'react';
import Footer from '../Commonarea/Footer/Footer';
import Header from '../Commonarea/Header/Header';
import FullColumn from './Body/MainBody/FullColumn';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FullColumn></FullColumn>
            <Footer></Footer>
        </div>
    );
};

export default Home;
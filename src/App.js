import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Works from './components/Works/works';
import Blog from './components/Blog/blog';
import Testimonials from './components/Testimonials/testimonial';
import Cta from './components/Cta/cta';
import Stats from './components/Stats/stats';
import PhotoSwipped from './components/PhotoSwipped/photoswipped';
import Footer from './components/Footer/footer';

function App() {
    return (
        <div className="App">

            <Header/>
            <Home/>
            <About/>
            <Works/>
            <Testimonials/>
            <Blog/>
            <Cta/>
            <Stats/>
            <PhotoSwipped/>

            <Footer/>
            <div id="preloader">
                <div id="loader"/>
            </div>


            <script src="../public/js/jquery-3.2.1.min.js"/>
            <script src="../public/js/plugins.js"/>
            <script src="../public/js/main.js"/>
        </div>
    );
}

export default App;

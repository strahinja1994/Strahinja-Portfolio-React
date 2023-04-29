import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Offer from './Offer';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

export default function App() {
    return(
        <div>
            <Header />
            <Navbar />
            <About />
            <Offer />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}
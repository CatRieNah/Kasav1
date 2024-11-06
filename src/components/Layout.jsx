import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Utilise props children pour pour les enfants de main, qui ne sont pas encores définis
const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
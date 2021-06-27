import React from 'react';
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

const Contact = () => {
    return (
        <div>
            <Head className="row"/>
            <div className="row container mx-5 my-5">
                <Sidebar className="col-md-4 px-4"/>
            </div> 
        </div>
    );
};

export default Contact;
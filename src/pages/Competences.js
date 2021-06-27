import React from 'react';
import Experiences from '../components/competences/Experiences';
import Hobbis from '../components/competences/Hobbis';
import Languages from '../components/competences/Languages';
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

const Competences = () => {
    return (
        <div>
            <Head />
            <div className="row d-flex justify-content-between container mx-md-5 my-5">
                <div className="col-md-4 px-md-4">
                    <Sidebar />
                </div>
                
                <div className="col-md-8 know-content">
                    <div className="row mt-4">
                        <div className="language col-md-9">
                            <Languages />
                        </div>
                        <div className="hobbis col-md-3">
                            <Hobbis />
                        </div>
                    </div>
                        <div className="experience ">
                            <Experiences />
                        </div>
                </div>
            </div> 
        </div>
    );
};

export default Competences;
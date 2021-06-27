import React from 'react';
import {  } from "module";
import { NavLink } from "react-router-dom";
import 'bootstrap';
import '../styles/component.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="id-content">
                    <img src="./media/img-cv.jpg" className="rounded-circle w mx-auto d-block" alt="img-cv"></img>
                    <h3>Boguhe ange stephane</h3>
                </div>
            </div>

            <div className="Navigation">
                <u className="list-group list-group-flush text-link">
                    <NavLink exact to="/" className="list-group-item ">
                        <i className="fas fa-home mx-3"></i>
                        <span className="text-dark">Home</span>
                    </NavLink>
                    <NavLink exact to="/Competences" className="list-group-item px-3" >
                        <i className="fas fa-mountain mx-3"></i>
                        <span className="text-dark">Compétence</span>
                    </NavLink>
                    <NavLink exact to="/Contact" className="list-group-item" >
                        <i className="fas fa-address-book mx-3"></i>
                        <span className="text-dark" >Contact</span>
                    </NavLink>

                </u>
            </div>

            <div className="Social-network mt-4 text-center">
                <ul className="list-group list-group-horizontal mx-3">
                    <li className="list-group-item">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-center text-muted">Stephane Ange - 2020</p>
            </div>
        
        </div>

        
    );
};

export default Sidebar;
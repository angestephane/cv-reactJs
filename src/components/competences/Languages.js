import React, { Component } from 'react';
import ProgressBare from './ProgressBare';

class Languages extends Component {
    
    /*state nous permet de créer une petite 
    base de données de manière statique*/
    state = {
        languages : [
            {id:1, value: "JAVASCRIPT", xp:2},
            {id:2, value: "HTML", xp:4},
            {id:3, value: "CSS", xp:4},
            {id:4, value: "JAVA", xp:3},
            {id:5, value: "PHP", xp:2.7},
            {id:6, value: "C", xp:2.5},
        ],

        frameworks : [
            {id:1, value: "BOOTSTRAP", xp:4},
            {id:2, value: "LARAVEL", xp:2},
            {id:3, value: "REACT", xp:1.5},
        ]
    }
    
    render() {
        
        /***On va retourner les élémént de notre tableau
         */
        let {languages, frameworks} = this.state;

        return (
            <div className="language-framework">
               <ProgressBare
                languages = {languages}
                className = "languages px-4" 
                title = "LANGAGES"
               />
               <ProgressBare
                languages = {frameworks}
                className = "frameworks mt-4 px-4" 
                title = "FRAMEWORKS & LIBRAIRIES"
               />
            </div>
        );
    }
}

export default Languages;
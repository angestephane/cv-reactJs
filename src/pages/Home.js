import React from 'react';
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';


const Home = () => {
    return (
        <div>
            <Head />
            <div className="row container mx-md-5  my-5">
                <div className="col-md-4 px-md-4">
                    <Sidebar />
                </div>
                
                <div className="col-md-6 home-content">
                    <div className="first">
                        <h3 className="text-center">Stephane En Bref</h3>
                        <p>Stephane est un jeune étudiant en master spécialisé en Ingénerie informatique,
                        Qui est passionné de nouvelle technologie et qui a décidé d'orienter ces études dans
                        ce domaine.<br/>En effet après mon baccalauréat, direction le Maroc dans le cadre d'une
                        bourse d'étude pour la licence. Mission qui n'a pas été facile, j'avoue.
                        </p>
                    </div>
                    <div className="second">
                        <h3 className="text-center">Stephane En Bref</h3>
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise 
                        en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie 
                        depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte 
                        pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre 
                        cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son 
                        contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de 
                        feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, 
                        par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker
                        </p>
                    </div>
                </div>
            
            </div>

        </div>
    );
};

export default Home;
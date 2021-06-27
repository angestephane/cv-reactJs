import React from 'react';

const ProgressBare = (props) => {
    return (
        
        <div className={props.className}>
            <h5>{props.title}</h5>
            <div className="annee row">
                <span className="col-md-4"></span>
                <span className="col-md-4 text-right">1 an</span>
                <span className="col-md-3 text-right">5 ans</span>
            </div>
            
            <div>
                {
                    props.languages.map((item) =>{
                        let xpyear = 5;
                        let progressbare = item.xp / xpyear * 100 + '%';

                        return(
                            <div key={item.id}>
                                <li>{item.value}</li>
                                <div className="progressbare mb-2" style = {{width : progressbare}}></div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
};

export default ProgressBare;
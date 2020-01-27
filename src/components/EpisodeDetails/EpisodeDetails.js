import React, { useEffect, useState } from 'react';
import './EpisodeDetails.scss';

function EpisodeDetails({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [ episodeinformation, setitem ] = useState({
        image: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://api.tvmaze.com/shows/${match.params.showid}/episodebynumber?season=${match.params.episodeseason}&number=${match.params.episodenumber}`);
        const episodeinformation = await fetchItem.json();
        const regexPattern = /(<([^>]+)>)/ig;
        if(!episodeinformation.summary){
            episodeinformation.summary = "Not Available."
        }
        if(!episodeinformation.image){
            episodeinformation.image = {original : ""};
        }
        const episodesummary = episodeinformation.summary.replace(regexPattern, '');
        episodeinformation.summary = episodesummary;
        setitem(episodeinformation);
        
    };

    return (
        <div className="Episodecontainer container">
            <div className="row">
            <div className="Episodeimagecontainer col-xs-4 col-md-5 col-lg-4">
                <img src={ episodeinformation.image.original } alt="Coverimage not available" />
                </div>
                <div className="Episodeinfo col-xs-8 col-md-7 col-lg-8">
                    <h2>{episodeinformation.name}</h2>
                    <p>{episodeinformation.summary}</p>                
                </div>                
            </div>            
        </div>
    );
}

export default EpisodeDetails;
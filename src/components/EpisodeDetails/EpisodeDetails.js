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
        const episodesummary = episodeinformation.summary.replace(regexPattern, '');
        episodeinformation.summary = episodesummary;
        setitem(episodeinformation);
        
    };

    return (
        <div className="Episodecontainer">            
            <div className="Episodeinfo">
                <h2>{episodeinformation.name}</h2>
                <p>{episodeinformation.summary}</p>
                
            </div>
            <div className="Episodeimagecontainer"><img src={ episodeinformation.image.original } alt="Coverimage" /></div>
        </div>
    );
}

export default EpisodeDetails;
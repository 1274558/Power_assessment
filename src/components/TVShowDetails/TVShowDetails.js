import React from 'react';
import './TVShowDetails.scss';
import {
    Link
} from 'react-router-dom';

const TVshowdetails = ( props ) => {
    return (
        <div className="ShowDetails">        
            <div className="Imagecontainer">
                <img src={ props.showimage }  alt="Coverimage" />
            </div>
            <div className="Detailscontainer">
                <h2>{props.name}</h2>
                <p>{props.summary}</p>
                <nav className="Episodelink">
                    {props.episodedata.episodes.map(function (episodelistitem){
                    return ( 
                        <ul key={episodelistitem.id}>Season{episodelistitem.season}
                            <li><Link to={`/episodes/${props.showid}/${episodelistitem.season}/${episodelistitem.number}`}>Episode{episodelistitem.number}</Link></li>
                        </ul>
                    );
                    })}
                </nav>
            </div>    
        </div>
    );
};

export default TVshowdetails;
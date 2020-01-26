import React, { Component } from 'react';
import axios from 'axios';
import './TVShow.scss';
import TVShowDetails from '../TVShowDetails/TVShowDetails';

class TVshow extends Component {
    state = {
        availableshows: []
    }
    componentDidMount() {
        axios.get('http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls&embed=episodes')
        .then(response => {
            const availableshowdata = response;
            this.setState({availableshows: availableshowdata});
        });
    }
    render() {
        const showdata = this.state.availableshows.data;
        if (showdata == null) return null;
        const episodelistdata = this.state.availableshows.data._embedded;
        const regex = /(<([^>]+)>)/ig;
        const showSummary = showdata.summary.replace(regex, '');
        return(
            <div className="TVShowinformation">
                <TVShowDetails key={ showdata.id } showid={ showdata.id } name={ showdata.name } summary={ showSummary } episodedata={ episodelistdata } showimage={ showdata.image.original }/>
            </div>
        );
    }
}
export default TVshow;
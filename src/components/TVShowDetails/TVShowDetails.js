import React, {Component} from 'react';
import './TVShowDetails.scss';
import {
    Link
} from 'react-router-dom';

function groupBy(data, key) {
    return data.reduce((acc, x) => {
      acc[x[key]] = [...(acc[x[key]] || []), x];
      return acc;
    }, {});
  }

class TVshowdetails extends Component {
    constructor (props, context) {
      super(props, context);

      this.state = {
        activeKey: "1"
      };

      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(activeKey) {
        this.setState({ activeKey });
    }
  
    render () {
        const episodesarray = groupBy(this.props.episodedata.episodes, 'season');
        return (
            <div className="ShowDetails container">
                <div className="row">
                    <div className="Imagecontainer col-xs-4 col-md-5 col-lg-4">
                        <img src={ this.props.showimage }  alt="Coverimage" />
                    </div>
                    <div className="Detailscontainer col-xs-8 col-md-7 col-lg-8">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.summary}</p>
                        <div className="Infocontainer">
                            <div className="Additionalinfo">
                                <div><b>Show type:</b> {this.props.showtype}</div>
                                <div><b>Genres:</b> {this.props.showgenres[0]}, {this.props.showgenres[1]}, {this.props.showgenres[2]}</div>
                                <div><b>Premiered:</b> {this.props.showpremiered}</div>
                            </div>
                            { Object.entries(episodesarray).map(([season, seasondata]) => {
                                return (
                                <div className='Seasonlink' key={season}>
                                    <div className='Seasonnumber badge badge-success badge-pill'>Season {season}</div>
                                    <nav className="Episodelink">
                                    {seasondata.map(episodelistitem => {                        
                                    return (
                                        <ul className='' key={episodelistitem.id}>
                                        <li><Link to={`/episodes/${this.props.showid}/${episodelistitem.season}/${episodelistitem.number}`}>Episode: {episodelistitem.number}</Link></li>
                                        </ul>
                                    )
                                    })}
                                    </nav>
                                </div>
                                )
                            })}
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
  }

export default TVshowdetails;
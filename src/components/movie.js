import React from 'react';
import ReviewList from './review-list';
import Voting from './voting';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.id,
            title: props.title,
            poster: props.poster,
            summary: props.summary,
            cast: props.cast

        };
    }

    render() {
        return(
            <div className="row">
                <div className="card w-75">
                    <div className="card-header bg-dark text-white">
                        {this.state.title}
                    </div>
                    <br/>
                    <div className="card-header bg-light">
                        <img src={this.state.poster} width="300"/>
                    </div>
                    <br/>
                    <div className="card-body">
                        <h2><b>Summary</b></h2>
                        {this.state.summary}
                        <br/>
                        <br/>
                        <h2><b>Cast</b></h2>
                        {this.state.cast}
                        <br/>
                        <br/>
                        <Voting />
                    </div>
                    <br/>
                    <div className="card-footer"> 
                    <h6><b>Leave a Review Here</b></h6>
                    <ReviewList />
                    </div>
                </div>
            </div>
        );
    }
}

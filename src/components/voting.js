import React,{Component} from 'react';
import '../App.css';

class Voting extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			star : [
				{name: " * ", votes: 0},
				{name: " * * ", votes: 0},
				{name: " * * * ", votes: 0},
				{name: " * * * * ", votes: 0},
                {name: " * * * * * ", votes: 0}
			]
		}
	}

	vote (i) {
		let newStar = [...this.state.star];
		newStar[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({star: newStar});
		
	}

	render(){
		return(
			<>
<h3>Rate This Movie!</h3>
<p>Set you rating by clicking on the "*'s", with one "*" for poor and upto 5 "*'s" for FANTASTIC!</p>
<div className="d-flex flex-row justify-content-evenly">
					{
						this.state.star.map((star, i) => 
		<div key={i}>
            <button  className="btn btn-lg btn-outline-warning" onClick={this.vote.bind(this, i)}> { star.name + star.votes }</button>
	    </div>
	)}
	</div>
        </>
	);
	}
}
export default Voting;
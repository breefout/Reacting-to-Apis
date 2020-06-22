import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import logo from "../ghibli-logo.png";




export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],  
            loading: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
    }



    render() {
        if (this.state.loading) {
            return <div class="myContainer">
                {this.state.films.map((film) => <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{film['title']}</h5>
                        <p class="card-text">{film['description']}</p>
                    </div>
                </div>)}
            </div>;


        } else {
            return <div>
                <Button onClick={() => this.setState({loading: true})} style={{margin:'20px'}} variant="primary">Load</Button>
            </div>

        } 
        

    }
}

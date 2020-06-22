import React from 'react';
import logo from "../ghibli-logo.png";
import '../App.css';




export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
    }
    render() {
        return <div class="myContainer">
            {this.state.films.map((film) => <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{film['title']}</h5>
                    <p class="card-text">{film['description']}</p>
                </div>
            </div>)}
        </div>;

    }
}

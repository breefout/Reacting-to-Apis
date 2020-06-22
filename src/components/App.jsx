import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import logo from "../ghibli-logo.png";




export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            loadingFilm: false,
            people: [],
            loadingPeople: false

        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(arr => this.setState({ people: arr }))
    }



    render() {
        if (this.state.loadingFilm) {
            return <div><img src={logo} /><div class="myContainer">
                {this.state.films.map((film) => <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{film['title']}</h5>
                        <p class="card-text">{film['description']}</p>
                    </div>
                </div>)}
            </div>
            </div>;


        } else if (this.state.loadingPeople) {
            return <div><img src={logo} /> <div class="myContainer">
                {this.state.people.map((person) => <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{person['name']}</h5>
                        <p class="card-text">{person['age']}</p>
                        <p class="card-text">{person['gender']}</p>
                    </div>
                </div>)}
            </div>
            </div>;
        } else {
            return <div>
                <img src={logo} />
                <Button onClick={() => this.setState({ loadingFilm: true })} style={{ margin: '20px' }} variant="primary">Load Films</Button>
                
                <Button onClick={() => this.setState({ loadingPeople: true })} style={{ margin: '20px' }} variant="primary">Load People</Button>
            </div>


        }


    }
}
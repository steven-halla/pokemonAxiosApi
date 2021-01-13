import axios from 'axios';


export const PokemanButton = (props) => {
    const {setPokeman} = props;

        // https://pokeapi.co/api/v2/pokemon?limit=1
        // https://pokeapi.co/api/v2/pokemon?limit=100
        // https://pokeapi.co/api/v2/pokemon?limit=1200 // there are 1118 pokeman, fetch them all 
    const fetchAndSetPokeman = (event) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200")
        .then(response => {
            console.log(JSON.stringify(response)); // if you don't use JSON.stringify() it will only print out [Object], so we used JSON.stringify to convert the object to to string json.
            setPokeman(response.data.results);
        });

        // the pokemon api response data looks like:
        /*
            {
            "count": 1118,
            "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
            "previous": null,
            "results": [
                {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
                },
            }
        */
    };

    return (
        <button onClick={fetchAndSetPokeman}>catch pokeman</button>
    );
};

// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => {
//         return response.json();

//     }).then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err);
//     });

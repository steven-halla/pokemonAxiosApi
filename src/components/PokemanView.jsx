import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const PokemanView = (props) => {
    const {pokeman} = props;

    console.log("pokemon: " + JSON.stringify(pokeman));

    // // v1 using named function, and pass function into map()
    // const renderPokeman = (pokeman, index) => (
    //     <p key={index}>
    //         <a href={pokeman.url} target="blank">
    //             {pokeman.name}
    //         </a>
    //     </p>
    // );

    // return (
    //     pokeman.map(renderPokeman)
    // );
//  const someComponent = props => {
    const [responseData, setResponseData] = useState(null);
  
    return(
        <div>
            {pokeman.map((pokeman, index ) => {
            return<p>{pokeman.name} </p>
            }) }
        </div>
    )
// }


    // v2 with lambda/anonymous function
//     return (
//         pokeman.map((name, index) => (
//             <p key={index}>{name}</p>
//         ))
//     );
}
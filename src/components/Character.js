import React from 'react'
import styled from 'styled-components'




const Character = ({name, gender, species, origin, location, status, image}) => {

return (
    <div>
    <img src={image} />
        <div>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin}</p>
            <p>Location{location}</p>
            <p>Status: {status}</p>
        </div>
        </div>
    )
}

export default Character
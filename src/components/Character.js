import React from 'react'
import styled from 'styled-components'


const Details = ({ toon }) => {
    return (
        <div>
            <p>Name: {toon.name}</p>
            <p>Gender: {toon.gender}</p>
            <p>Species: {toon.species}</p>
            <p>Origin: {toon.origin}</p>
            <p>Location{toon.location.name}</p>
            <p>Status: {toon.status}</p>
        </div>
    )
}
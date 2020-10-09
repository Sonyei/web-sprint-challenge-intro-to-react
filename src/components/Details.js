import React from 'react'
import Character from './Character'

const MapDetails = ({ data }) => {
return (
    <div>
        {data.map(toon, id => {
            return (
                <div toon={toon} key={id}/>
            )
        })}
    </div>
)
}
import React from 'react'
import './tech.css'
import {tech} from '../../helpers/tech'

const Tech = () => {
    return (
        <div className='tech_container' id='technologies'>
            <div>
                <h1 style={{textAlign: 'center'}}>Some of the technologies that I use</h1>
            </div>
            <div className='tech_cards_container'>
                {tech.map((value, index) => {
                    console.log(value)
                    return (
                    <div className='tech_card' key={index}>
                        <img className='tech_icons' src={value.iconName} alt="tech icon" />
                        <span style={{margin: '5px', fontSize: '1.5rem'}}>{value.name}</span>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tech

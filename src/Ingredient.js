import React, { useState } from 'react'

const Ingredient = (props) =>  {
	
		// I want to render a background color
        // I want to render the name of a ing
        // if there is a key with this `name` extract it
        const { name, color } = props.ingredient
		return (
            <p 
                style={{backgroundColor: color}}
                onClick={props.clickFunc}
                id={props.Key}
            >
                {name}
            </p>
        )
	
}

export default Ingredient
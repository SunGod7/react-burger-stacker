import React, { useState, useEffect } from 'react'
import Ingredient from './Ingredient'

const BurgerPane= () => {
    
	
    // map over all the added burger bits
    // still going to use the Ingredient Comp
    let burgerBits = this.props.ingredients.map((ing, idx) => (
        <li key={idx}>
            <Ingredient 
                itemKey={idx}
                ingredient={ing}
                clickFunc={this.props.remove}
            />
        </li>
    ))
		return (
          
             <section>
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
             </section>
           
         )
			
	
}

export default BurgerPane
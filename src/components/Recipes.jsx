import {useState} from 'react';
const elvenShieldRecipe={
    leatherStips:2,
    ironIngot:1,
    refinedMoonstone:4
}

const elevenGauntletsRecipe={
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:5
}

console.log(elvenShieldRecipe);
console.log(elevenGauntletsRecipe);

const Recipes= () =>{
    const [recipe,setRecipe]=useState({});
    return(<>
    <h3>Current Recipe:</h3>
    <button onClick={()=>setRecipe(elvenShieldRecipe)}>eleven shiled recipe</button>
    <button onClick={()=>setRecipe(elevenGauntletsRecipe)}>eleven gaunt recipe</button>
    <ul>
        {Object.keys(recipe).map((material)=>(
            <li key={material}>
            {material}:{recipe[material]}
            </li>
        ))}
    </ul>
    </>)
}

export default Recipes;
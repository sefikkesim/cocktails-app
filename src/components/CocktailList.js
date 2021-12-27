import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useAppContext } from "../context";

const CocktailList = () => {
  const {loading,cocktails} = useAppContext()
  console.log(cocktails);

  if(loading){
    return <Loading/>
  }
  if (cocktails.length < 1) {
   return <h1 className="section-title"> There is no match</h1>;
  }
  return (
    <section className= "section">
     <div className="section-title">
       Cocktails
     </div>
     <div className="cocktails-center">
       {cocktails.map((item)=>{
        return <Cocktail key = {item.id} {...item}/>
       })}
     </div>
    </section>
  )
}

export default CocktailList

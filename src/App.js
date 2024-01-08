import { useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import ratingStar from './images/rating.png'

export default function App(){

  const[rRatings, setrRatings] = useState(4)
  const[sRatings, setsRatings] = useState(5)
  const[aRatings, setaRatings] = useState(9)


  function getResRatings(x){
        setrRatings(x)
    }

  function getSportsRatings(x){
    setsRatings(x)
    }

  function getAutoRatings(x){
    setaRatings(x)
  }

const ratings = [{name:"Restraunt", rating: rRatings},
                  {name:"SportsComplex", rating: sRatings},
                  {name:"Automotive", rating: aRatings}]

const byRating = ratings.slice(0)
byRating.sort(function(a,b){return b.rating - a.rating})

console.log(byRating)

  const div = byRating.map( rating => {
    return (
            <span order={rating.rating} className={rating.rating}> {rating.name}: {rating.rating} out of 10
            <img src={ratingStar}></img>
            </span>
    )
  })

  return(
    
    <div className="main--container">

      <Header />

      <Main 
        getRatings={setrRatings}
        getSpRatings={setsRatings}
        getAutoRatings={setaRatings}

      />
      <div className="main-sort-section">
          <h3> Our most popular businesses </h3>
          {div}
      </div>

    </div>


  )
}

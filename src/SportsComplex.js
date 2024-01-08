import React, {useState} from 'react'
import './sports.css'

export default function SportsComplex(props){

const [showContact, setShowContact] = useState(false)

function contact(){
    setShowContact( prevShow => !prevShow)
}

const [sportsRating, setSportsRating] = useState(0)
function handleChange(event){
    setSportsRating(event.target.value)
}
function submitReview(){
        props.spRating(sportsRating)

        alert("thank you for the review")
        document.getElementById("reviewTextArea").value = ""
}   

    return(
        <div className="sports-container">

            <div className="image">
               {showContact && <div className="sportsDetails">
                    <span> Email: sports@sports.sports</span><br></br>
                    <span>Phone No. : SPORTS</span><br></br>
                    <span>Pigeon : black wings white eyes</span> 
                </div>} 
            </div>

            <div className="sports-description">
                <span className="left">VolleyBall Court</span>
                <span className="right">Indoor court</span>
                <span className="center">Food Stalls</span>
                <span className="bottom" onClick={contact}>Contact Us</span>
                <span className="menu">What we Offer</span>
            </div>

            <div className="sports-review">
                <label htmlFor='reviewTextArea'>Please share your reviews</label>
                <textarea id='reviewTextArea'/>
                <select onChange={handleChange}>
                    <option value="default">--Please Rate US--</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">Seriously ?</option>
                </select>
                <button onClick={submitReview}>Submit</button>
            </div>


        </div>
    )
}
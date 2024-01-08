import React, {useState} from 'react'
import momo from './images/momo.png'
import south from './images/south.png'
import chinese from './images/chinese.png'
import './res.css'

export default function Restraunts(props){

const restrauntData = [
    {
        id: 1,
        name: "MomoCenter",
        image: momo,
        des: "Discover a taste of the Himalayas at our Momo Haven! Savor exquisite dumplings filled with traditional flavors from Nepal and Tibet. Each bite is a delicious adventure waiting to be enjoyed in our cozy and vibrant restaurant."
    },
    {
        id: 2,
        name: "SouthIndian",
        image: south,
        des: "Very good South"
    },
    {
        id: 3,
        name: "Chinese",
        image: chinese,
        des: "Very good Chinese"
    }
]
const [imageIndex, setImageIndex] = useState(0)

function prevSlide(){
    if(imageIndex === 0){
        setImageIndex( prevIndex => {
            return restrauntData.length - 1;
        })
    }
    else{
        setImageIndex( prevIndex => prevIndex - 1)
    }
}
function nextSlide(){
    if(imageIndex === restrauntData.length - 1){
        setImageIndex( prevIndex => {
            return 0;
        })
    }
    else{
        setImageIndex( prevIndex => prevIndex + 1)
    }
}

const [restaurantRating, setResRating] = useState()
function handleChange(event){
    setResRating(event.target.value)
}
function submitReview(){
    
        props.resRating(restaurantRating)

        alert("thank you for the review")
        document.getElementById("reviewTextArea").value = ""
}

    return(
        <div className="restraunt-component">
            <div className="restraunt-slider">
                <button className="prevButton"onClick={prevSlide}>&#10094;</button>
                <button className="nextButton" onClick={nextSlide}>&#10095;</button>
                <img src={restrauntData[imageIndex].image} />
            </div>
            <div className="slider-description">
                <h3>{restrauntData[imageIndex].name}</h3>
                <p>{restrauntData[imageIndex].des}</p>
            </div>
            <div className="restraunt-review">
                <label htmlFor="reviewTextArea">Please share your reviews</label>
                <textarea id="reviewTextArea" name="textarea"/>
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
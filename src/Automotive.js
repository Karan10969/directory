import React, {useState} from 'react'
import './auto.css'
import tiago from './images/tiago.png'
import nano from './images/nano.png'
import alto from './images/alto.png'
import omni from './images/omni.png'
import gear from './images/gear.svg'
import type from './images/type.svg'
import condition from './images/condition.svg'
import driven from './images/driven.svg'


export default function Automotive(props){

const [loan, setLoan] = useState({
        price: 0,
        down: 0,
        time: 0,
        emi: 0
})

    function getdata(event){
        const {name, value} = event.target

        setLoan( prev => ({
            ...prev,
            [name]: value
        }))
    }


const usedCars = [
    {
        id: 1,
        image: tiago,
        gear: "manual",
        type: "petrol",
        km: "10000000km",
        condition: "excellent"
    },
    {
        id: 2,
        image: nano,
        gear: "automatic",
        type: "petrol",
        km: "10000000km",
        condition: "small"
    },
    {
        id: 3,
        image: alto,
        gear: "manual",
        type: "electic",
        km: "10000000km",
        condition: "grandma"
    },
    {
        id: 4,
        image: omni,
        gear: "manual",
        type: "petrol",
        km: "10000000km",
        condition: "kidnapping"
    }
]

const [autoRating, setAutoRating] = useState(0)
function handleChange(event){
    setAutoRating(event.target.value)
}
function submitReview(){
        props.autoRating(autoRating)

        alert("thank you for the review")
        document.getElementById("automativeTextArea").value = ""
}   

const usedCar = usedCars.map( car => {
    return (
            
                <div className="used-car-map" key={car.id}>
                <div className="usedcars-image">
                        <img src={car.image}></img>
                    </div>
                   <div className="info-row-1">
                        <img src={gear}></img>
                        <h5>{car.gear}</h5>
                        <img src={type} className="gap"></img>
                        <h5>{car.type}</h5>
                   </div>

                   <div className="info-row-2">
                        <img src={condition}></img>
                        <h5>{car.condition}</h5>
                        <img src={driven} className="gap"></img>
                        <h5>{car.km}</h5>
                   </div>
                </div>
                   
                  
    )
})

function calculateEmi(event){
    event.preventDefault()
    console.log("form submitted")
        const emi =  ((loan.price - loan.down) + ((loan.price - loan.down)*10*loan.time)/100)/(12*loan.time)
        
        setLoan( prev => ({
            ...prev,
            emi: emi
        }))
}
    return(
        <div className="automotive-main">
            <div className="autoshop">
                <div className="autoshop--top">
                    <div className="auto-image"></div>
                    <h5>Best Garage Services</h5>
                </div>
                <div className="usedcars">
                {usedCar}
                </div>
            </div>

            <div className="loan-calculator">
                
                <form onSubmit = {calculateEmi}>
                    <label htmlFor="price">Price of Car</label>
                    <input type="text" id="price" name="price" onChange={getdata}></input>

                    <label htmlFor="down">Downpayment</label>
                    <input type="text" id="down" name="down" onChange={getdata}></input>

                    <label htmlFor="time">Time (in years)</label>
                    <select id="time" name="time" onChange={getdata}>
                        <option value="default">--choose--</option>
                        <option value="1">1 year</option>
                        <option value="2">2 year</option>
                        <option value="3">3 year</option>
                        <option value="4">4 year</option>
                        <option value="5">5 year</option>
                        <option value="6">6 year</option>
                    </select><br></br>

                    <button>Calculate Emi</button>

                    { loan.emi > 0 && <div className="answer">
                        You will need to pay {loan.emi}/month for {loan.time} years <br></br>
                       <small>*Interest rates are fixed 10% per annum </small> 
                    </div>}
                </form>
                    <div className="contact-details"> want to contact us ?
                        <span className="phoneNumber"> +91 007007007007</span>
                    </div>
            </div>


            <div className="automative-review">
                <label htmlFor='automativeTextArea'>Please share your reviews</label>
                <textarea name='automativeTextArea' id='automativeTextArea'/>
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
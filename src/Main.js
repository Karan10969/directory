import BusinessData from './BusinessData.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Restraunts from './Restraunts.js';
import SportsComplex from './SportsComplex.js';
import Automotive from './Automotive.js';
import GamingStations from './GamingStations.js';
import Default from './Default.js';
import More from './More.js';
import './index.css'


export default function Main(props){

    const businessIcons = BusinessData.map(business => <span key={business.id}>
                                                        <Link to={`/${business.name}`}>
                                                        <img src={business.icon}
                                                        title={business.name}
                                                        /></Link>

                                                        </span>)




    return(
        <Router>
        <main className="main-container">

            <div className="main-directory">

                <div className="business-selector">
                    {businessIcons}
                </div>

                <div className="business-section">
                    <Routes>
                        <Route path="/" element={<Default />}></Route>
                        <Route path="/Restraunts" element={<Restraunts 
                                                resRating={props.getRatings}
                                                />}></Route>
                                                
                        <Route path="/SportsComplex" element={<SportsComplex
                                                        spRating={props.getSpRatings}
                                                        />}></Route>
                        <Route path="/Automotive" element={<Automotive 
                                                        autoRating={props.getAutoRatings}
                                                        />}></Route>
                        <Route path="/GamingStations" element={<GamingStations />}></Route>
                        <Route path="/More" element={<More />}></Route>
                    </Routes>
                </div>

            </div>

            

        </main>
        </Router>
    )
}
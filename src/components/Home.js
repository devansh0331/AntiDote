import React , {useState , useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import {auth , fs} from '../Config/Config'
import "./Home.css"

//Card Import
import DiseaseCard from "./diseaseCard/DiseaseCard.js"

//Image Import
import Vaccine from "../img/capsule.png";

export const Home = () => {

    function GetCurrentUser() {
        const [user , setUser] = useState(null)

        useEffect(() => {
            
            auth.onAuthStateChanged(user => {
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().FullName.split(" ")[0]);
                    })
                }

                else{
                    setUser(null)
                }
            })

        },[])

        return user;
    }

    const user = GetCurrentUser()
    console.log(user)
    return (
        <>
            <Navbar user={user}/>
            <div className="header-img">
        <span>AntiDote : Close To YOU </span>
        
        <button> <a href="#about">Know More</a> </button>
      </div>
      <section id="about" className="about-container">
        {/* <span>
          {" "}
          <strong>| AntiDote</strong> : Close to You{" "}
        </span> */}
        
          <div className="about-desc">

            <div className="about-desc-content span-head">
            <span><strong>| About : </strong> AntiDote </span>
            
            <p>
              {" "}
              A website for doctors appointment would be an online platform that allows patients to schedule appointments with doctors in a convenient and easy way. The website would typically have a search function that allows patients to find doctors by location, specialty, availability, and other relevant criteria. Patients can then select a doctor and book an appointment based on their preferred date and time. The website may also allow patients to reschedule or cancel appointments, view their medical history, and receive reminders about upcoming appointments. {" "}
              {/* Additionally, the website may provide information about doctors' qualifications, fees, and reviews from other patients to help patients make informed decisions. Overall, the website aims to streamline the appointment booking process for patients and doctors alike. */}
              <div className="aboutBtns">
                <button type=""><a href="#explore"> EXPLORE</a></button>
                <button type=""><a href="#appointment">APPOINTMENT</a></button>
                <button type=""><a href="">ANY SUGGESTION</a></button>

                

                
              </div>
            </p>
            </div>
            
          <div className="about-img">
            <img src={Vaccine} alt="Dummy Image" />
          </div>
          </div>
        {/* </div> */}
      </section>

      <section id="explore">
      <div className="about-desc-content span-head">
            <span><strong>| Explore : </strong> Our Availabilities </span>
            <div className="diseaseCard row mx-2 ">
           
                  <div className="col-4 my-2">
                    
                <DiseaseCard disease="Heart Disease" doctors="3"  href="admin"/>
                  </div>  
               
                    <div className="col-4 my-2">
                        
                <DiseaseCard disease="Cancer" doctors="12"/>
                    </div>
               <div className="col-4 my-2">
                
                    
                <DiseaseCard disease="Covid" doctors="7"/>
               </div>
               <div className="col-4 my-2">
                
                    
                <DiseaseCard disease="Viral" doctors="4"/>
               </div>
               <div className="col-4 my-2">
                
                    
                <DiseaseCard disease="AIDS" doctors="2"/>
               </div>
               <div className="col-4 my-2">
                
                    
                <DiseaseCard disease="Typhoid" doctors="5"/>
               </div>
               
               </div>
            
        </div>
      </section>
      <section id="appointment">
      <div className=" span-head">
            <span><strong>| Appointments : </strong> Connect with Our Doctors </span>

            </div>
      </section>
        </>
    )
}
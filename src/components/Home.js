import React , {useState , useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import {auth , fs} from '../Config/Config'
import "./Home.css"

//Card Import
import DiseaseCard from "./diseaseCard/DiseaseCard.js"
import DoctorCard from "./doctorCard/DoctorCard.js"
import Footer from "./footer/Footer.js"

//Image Import
import Vaccine from "../img/capsule.png";
import Heart from "../img/heartDisease.jpg"
import Cancer from "../img/cancer.jpg"
import Covid from "../img/covid.jpg"
import Viral from "../img/viral.jpg"
import Aids from "../img/aids.png"
import Typhoid from "../img/typhoid.jpg"
import DocMale from "../img/docMale.png"
import DocFemale from "../img/docFemale.png"
import Logo from "../img/AntiDoteLogo.png"

//JSON Import
import disease from "../JSON/diseases.json"
import docs from "../JSON/doctors.json"

export const Home = () => {
  // const [diseaseList , setDiseaseList] = useState([])
  // setDiseaseList({})
  // let data = require

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
           

               <div className="diseaseCard row mx-2">
                {disease.map((item , key) => {
                  return <div key={key} className="col-4 my-2">
                      <DiseaseCard pageImport={item.page} disease={item.disease} doctors={item.doctors} diseaseImg={item.diseaseImg}/> 
                  </div>
                })}
                
               </div>
            
        </div>
      </section>
      <section id="appointment">
      <div className=" span-head ">
            <span id="appointmentHead"><strong>| Appointments : </strong> Connect with Our Doctors </span>
           

              <div className="docCard row mx-2 ">
                  {docs.map((item , key) => {
                    return <div className="col-4 my-2">
                           <DoctorCard docImg={item.docImg} docName={item.docName} degree={item.degree} specialization={item.specialization} fee={item.fee} availability={item.availability}/>
                      </div>
                  })}
                </div>

            </div>
      </section>

      <section>
        <Footer/>
      </section>
        </>
    )
}
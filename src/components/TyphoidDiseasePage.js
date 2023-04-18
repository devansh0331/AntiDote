import React , {useState , useEffect} from 'react'
import {auth , fs} from '../Config/Config'
import { Navbar } from './Navbar'
import Footer from "./footer/Footer.js"
import disease from "../JSON/indiDisease.json"
import diseases from "../JSON/diseases.json"
import doctors from "../JSON/doctors.json"
import DoctorCard from "./doctorCard/DoctorCard.js"
import "./diseasePage.css"
import DiseaseForm from "./diseaseForm/DiseaseForm"


function TyphoidDiseasePage() {
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

    //Agr typhoid mein koi click krta hai toh typhoid 
    
  return (
    <div>
      <Navbar user={user}/> 
    <div className="diseasePage my-5">
    <div className="diseasePageContent">
        
        <h1><strong>{disease.typhoid.disease}</strong> </h1>
        <p>{disease.typhoid.content}</p>
        <p><strong>Symptoms : </strong>{disease.typhoid.symptoms}</p>
    </div>
        <img src={disease.typhoid.diseaseImg} alt=""/>

    </div>  
    <div className="diseasePageDoctors">
        <h1><strong>| Available Doctors</strong></h1>
        <div className="docCard row mx-0">

        {disease.typhoid.docs.map((items , key) => {
            
            return   <div key={key} className="col-4 my-2">
               <DoctorCard docName={items.docName} degree={items.degree}  specialization={items.specialization} availability={items.availability} fee={items.fee} docImg={items.docImg} />

               {/* docName , degree, specialization , availability , fee , docImg */}
                
            </div>
        })}

        </div>
    </div>

        <div className="diseasePageDoctors">
        <h1><strong>| Book Appointment</strong></h1>
            <DiseaseForm/>
        </div>

      <Footer/>
    </div>
  )
}

export default TyphoidDiseasePage

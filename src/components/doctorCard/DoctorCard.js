import React , {useEffect,useState} from 'react'
import './DoctorCard.css'

import {Link , useNavigate} from 'react-router-dom'

import {auth , fs} from '../../Config/Config'

import Heart from "../../img/heartDisease.jpg"

function DoctorCard({ docName , degree, specialization , availability , fee , docImg} ) {
    const Navigate = useNavigate();

    const handleTrueUser = () => {
        

            setTimeout(() => {
               Navigate('/signup') 
            }, 2000);
      
    }
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

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ errorMsg, setErrorMsg ] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');

    const handleLogin=()=>{
        // e.preventDefault();
        auth.signInWithEmailAndPassword(email , password).then(() => {
            
            setSuccessMsg('Login Successfull. You will now automatically get redirected to Home Page')
            setEmail('')
            setPassword('')

            setTimeout(() => {
                setSuccessMsg('')
                Navigate('/')
            }, 3000);

        }).catch((error) => {
            setErrorMsg(error.message)
        })
    }

  return (
    <div className="cardContainer">
        <img src={docImg} alt=""/>
      {!user && <><Link to="signup" className="card1" >
        
    <h3>{docName}</h3>
    <p className="small">Degree : <strong>{degree}</strong> </p>
    <p className="small">Specialized : <strong>{specialization}</strong> </p>
    <p className="small">Available : <strong>{availability}</strong> </p>
    <p className="small">Fee : <strong>{fee}</strong> </p>
    {/* <p className="small">No worries! We are here :)</p>
    <p className="small">Just a Click!!!</p> */}
    <button type=""><a href="">Book Appointment</a></button>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </Link></>}
    
    
      {user && <> <Link to="admin" className="card1" >
        
      <h3>{docName}</h3>
    <p className="small">Degree : <strong>{degree}</strong> </p>
    <p className="small">Specialized : <strong>{specialization}</strong> </p>
    <p className="small">Available : <strong>{availability}</strong> </p>
    <p className="small">Fee : <strong>{fee}</strong> </p>
    {/* <p className="small">No worries! We are here :)</p>
    <p className="small">Just a Click!!!</p> */}
    <button type=""><a href="">Book Appointment</a></button>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
    {/* </div> */}
  </Link> </>}
    </div>
  )
}

export default DoctorCard

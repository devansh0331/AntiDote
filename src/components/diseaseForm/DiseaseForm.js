import React , {useState , useEffect , useRef } from 'react'
import {Link} from 'react-router-dom'
import {storage , fs} from '../../Config/Config'
import emailjs from '@emailjs/browser';

function DiseaseForm() {

    const [ name, setName ] = useState('');
    const [ phn, setPhn ] = useState('');
    const [ age, setAge ] = useState('');
    const [ gender, setGender ] = useState('');
    // const [ , setEmail ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ doc, setDoc ] = useState('');
    // const [ templateDetails, setDoc ] = useState('');
    const templateDetails = {
        name : name,
        from_name : "Devansh",
        message : "Your appointment in under procedure"
    }
    // const [phn,]
    

    const [ errorMsg, setErrorMsg ] = useState('');
    const [ successMsg, setSuccessMsg ] = useState('');
    const sendEmail=  ( e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
      
        emailjs.sendForm('service_6nbwnc7', 'template_xdj11xm', templateDetails, 'p7x9N5yQqw8UswzUE')
          .then((result) => {
            console.log('SUCCESS!')
          }, (error) => {
              // show the user an error
          });
      };

    // const handleDiseaseAppointment = () => {

    // }   

    const handleDiseaseAppointment = (e) => {
        e.preventDefault();
    
        fs.collection('Disease Appointment').add({
            name,
            phn,
            age,
            gender,
            email,
            doc
        }).then(() => {
            setName('')
            setPhn('')
            setAge('')
            setGender('')
            setEmail('')
            setDoc('')
           
          setTimeout(()=>{
            setSuccessMsg("Your details have reached successfully. Please check you mail...");
        },3000)
        }).catch(error=>setErrorMsg("Null"));
      }

  return (
    <div className='container'>
    <br></br>
    {/* <br></br> */}
    {/* <h1>Login</h1>
    <hr></hr> */}
    {successMsg && <>
        <div className='success-msg'>
            {successMsg}
        </div>
        <br></br>
    
    </>}
    <form  className='form-group' autoComplete="off"
    onSubmit={handleDiseaseAppointment}>               
        <label>Patient's Name</label>
        <input type="text" className='form-control' required
        onChange={(e)=>setName(e.target.value)} value={name}></input>
        <br></br>
        <label>Patient's Email</label>
        <input type="email" className='form-control' required
        onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <br></br>
        <label>Patient's Phn No.</label>
        <input type="text" className='form-control' required
        onChange={(e)=>setPhn(e.target.value)} value={phn}></input>
        <br></br>
        <label>Patient's Age</label>
        <input type="text" className='form-control' required
        onChange={(e)=>setAge(e.target.value)} value={age}></input>
        <br></br>
        <label>Patient's Gender</label>
        <input type="text" className='form-control' required
        onChange={(e)=>setGender(e.target.value)} value={gender}></input>
        <br></br>
        
        <label>Suggested Doctor Name from our Site</label>
        <input type="text" className='form-control' required
        onChange={(e)=>setDoc(e.target.value)} value={doc}></input>
        <br></br>
        <div className='btn-box mb-5'>
            {/* <span>Don't have an account SignUp
            <Link to="signup" className='link'> Here</Link></span> */}
            <button type="submit" className='btn btn-success btn-md'>Ask for an  Appointment</button>
        </div>
    </form>
    {errorMsg && <>

        <br></br>
        <div className='error-msg'>
            {errorMsg}
        </div>
    
    </>}
</div>
  )
}

export default DiseaseForm

import React,{useState} from 'react'
import {storage,fs} from '../Config/Config'

export const AddProducts = () => {

    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [image , setImage] = useState(null)

    const [imageError , setImageError] = useState('')

    const [successMsg , setSuccessMsg] = useState('')
    const [uploadError , setUploadError] = useState('')

    const types = ['image/jpg' , 'image/jpeg' , 'image/png' , 'image/PNG']
    const handleProductImg =(e) => {
        let selectedFile = e.target.files[0]

        if(selectedFile){
            if(selectedFile && types.includes(selectedFile.type)){
                setImage(selectedFile)
                setImageError('')
            }
            else{
                setImageError('Please select a valid image file type (png/jpg/jpeg')
            }
        }else{
            setImageError('Please select your file')
        }
        
    }

    const handleAddProducts=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Products').add({
                    title,
                    description,
                    price: Number(price),
                    url
                }).then(()=>{
                    setSuccessMsg('Product added successfully');
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        })
    }

 
    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Products</h1>
            <hr></hr>        
            {successMsg && <>
                <div className='success-msg'>
                    {successMsg}
                    
                </div>
            </>}
            <form autoComplete="off" className='form-group' >
                <label>Product Title</label>
                <input type="text" className='form-control' required
                onChange={e => {setTitle(e.target.value)}} value={title}
                ></input>
                <br></br>
                <label>Product Description</label>
                <input type="text" className='form-control' required
                onChange={e => {setDescription(e.target.value)}} value={description}></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" className='form-control' required
                onChange={e => {setPrice(e.target.value)}} value={price}></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="file" className='form-control' required onChange={handleProductImg}></input>
              
                <br></br>           
                {imageError && <>
                        <div className="error-msg">
                            {imageError}
                            <br></br>
                        </div>
                </>}
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" onClick={handleAddProducts} className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError && <>
                    <div className='error-msg'>
                       {uploadError} 
                    </div>
                    <br></br>
            </>}
         

        </div>
    )
}
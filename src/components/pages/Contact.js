import React, {useState} from 'react';


export default function Contact() {

const [formStatus, setFormStatus] = useState('Submit')
const onSubmit = (e) => {
  e.preventDefault()
  setFormStatus('Submitting')
  const {name, email, message} = e.targer.elements 
  let confirmmessage = {
    name: name.value,
    email: email.value,
    message: message.value,
  }
  console.log(confirmmessage);
}

  return (
    <div style={{padding: "2rem"}}>
      <div className='container my-5 d-flex justify-content-center'>
       
        <form onSubmit={onSubmit}>
 <h2>Contact Me</h2>
          <div className='mb-3'>
            <label className='form-label' htmlFor='name'>
              Name
            </label>
            <input className='form-control' type='text' id='name' required />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input className='form-control' type='email' id='email' required />
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='message'>
              Message
            </label>
            <textarea className='form-control' id='message' required />
          </div>

          <button className='btn btn-danger' type='submit'>
            {formStatus}
          </button>

        </form>
      </div>
    
    </div>
   
  );
}

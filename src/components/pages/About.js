import React from 'react';
import avatar from  './images/avatar.png';

export default function About() {
  return (
    <div className='container'>
    <div style={{padding: "2rem", height:'100%'}}>
      <h1>About Me</h1>
      <div className="my-5 d-flex justify-content-center" width={100} height={100}>
      <img
        src={avatar}
        className="rounded-circle"
        alt="Avatar"
      />
   </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
    </div>
  );
}

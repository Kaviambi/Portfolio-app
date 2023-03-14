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
        I am a full stack developer and currently studying Full stack bootcamp in UTSA. In another few weeks I am going to complete. I did my Bachleor of Computer Science in India. And I learned 
        new skills in JavaScript, CSS, React.js and responsive web design. 
      </p>
      <p>My strength in front-end technologies including JavaScript, CSS3 and HTML5 and third party libraries such as React Js, JQuery</p>
      <p>And I have a knowledge of Database in MongoDB, MySql.</p>
    </div>
    </div>
  );
}

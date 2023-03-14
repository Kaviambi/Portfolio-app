import React from 'react';
import './style.css';
import resume from './file/Kavi_Resume.docx';
export default function Resume() {
  return (
    <div className='container'>
    <div style={{padding: "2rem", height:'100%'}}>
      <h1>Resume</h1>
     <p> Download my <a href={resume}>Resume</a></p>
     <div>
      <h5>Front-end Proficiencies</h5>
      <ol className='list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ol>
      <br></br>
      <h5>Back-end Proficiencies</h5>
      <ol className='list'>
        <li>API</li>
        <li>NodeJS</li>
        <li>REST</li>
        <li>MVC</li>
        <li>Progressive Web Applications(PWA)</li>
      </ol>
     </div>
    </div>
    </div>

  );
}
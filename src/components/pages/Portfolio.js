import React from 'react';
import Card from 'react-bootstrap/Card';
import quiz from '../pages/images/quiz.jpg';
import password from './images/password.JPG';
import techblog from './images/techblog.png';
import api from './images/socialapi.png';
import note from './images/note.png';
import planner from './images/planner.png';
import project3 from './images/HomeScreen.JPG';
import './style.css';
import Githublogo from "./images/github.png";
import repo from './images/repo.png';

export default function Home() {
  return (

    <div className='container'>
      <div className='row'>

{/* Quiz Challenge */}
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={quiz} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Quiz Challenge</h3></Card.Title>
            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/Quiz_Challenge"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/Quiz_Challenge">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://kaviambi.github.io/Quiz_Challenge/"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://kaviambi.github.io/Quiz_Challenge/"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
          </Card>
        </div>

{/* Password Generator */}
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={password} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Password Generator</h3></Card.Title>
            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/Password-generator-challenge"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/Password-generator-challenge">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://kaviambi.github.io/Password-generator-challenge/"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://kaviambi.github.io/Quiz_Challenge/"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
          </Card>

{/* Tech blog */}
        </div>
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={techblog} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Tech Blog</h3></Card.Title>
            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/TechBlog"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/TechBlog">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://kk-techblog.herokuapp.com/"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://kk-techblog.herokuapp.com/"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
          </Card>


        </div>

{/* Social Network API */}
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={api} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Social Network API</h3></Card.Title>
              

            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/Social_network_API"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/Social_network_API">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://github.com/Kaviambi/Social_network_API"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://github.com/Kaviambi/Social_network_API"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
          </Card>
        </div>

{/* Note Taker  */}
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={note} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Note Taker</h3></Card.Title>
            </Card.ImgOverlay>
          
          <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/Note-Taker"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/Note-Taker">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://notetaker-kk.herokuapp.com/"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://notetaker-kk.herokuapp.com/"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
</Card>
        </div>
{/* Work Day Planner*/}
        <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={planner} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Work Day Planner</h3></Card.Title>
              


            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Kaviambi/Work-Day-Planner"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Kaviambi/Work-Day-Planner">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://kaviambi.github.io/Work-Day-Planner/"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://kaviambi.github.io/Work-Day-Planner/"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
                  </Card>
                  </Card>
                  </div>

                  {/* Project 3 */}
                  <div className='col-md-6'>
          <Card style={{ width: '25rem', margin: '1rem' }}>
            <Card.Img variant="top" src={project3} />
            <Card.ImgOverlay>
              <Card.Title className='cardhover'><h3>Fitness Meal Planner </h3></Card.Title>
              


            </Card.ImgOverlay>
            <Card>
              <div className='wrap'>
                <a href="https://github.com/Dom231/Fitness_Meal-Plan.git"
                  target='_blank'
                  rel="noreferrer"
                > 
                  <img src={Githublogo}
                    alt="githublogo"
                    className="cardhoverimg left"
                    path="https://github.com/Dom231/Fitness_Meal-Plan.git">
                  </img> <h5 className='left'>GitHub Repo</h5>
                </a>
               
                  <a href="https://github.com/Dom231/Fitness_Meal-Plan.git"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <img src={repo}
                      alt="githublogo"
                      className="cardhoverimg right"
                      path="https://github.com/Dom231/Fitness_Meal-Plan.git"></img>
                      <h5 className='right'>Deployed Page</h5>
                  </a>
                  </div>
              </Card>
          </Card>


        </div>


    </div></div>

  );
}
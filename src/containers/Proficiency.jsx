import React from 'react';
import build from "../assets/lottie/build";

import { SkillBars } from "../portfolio";
import {
    Container,
    Row,
    Progress,
    Col
} from "reactstrap";

import { Fade } from 'react-reveal';

import GreetingLottie from "../components/DisplayLottie";
import imgs from  '../assets/vips.jpg';

const Proficiency = () => {
    return (
        <Container className="section section-lg">
           <Fade bottom duration={1000} distance="40px">
            <Row>
               <Col>
               <img alt="" class="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4" style={{ width: '414px', height: '388px' }} src={imgs}/>
               </Col>
            </Row>
            <Row>
                    <Col lg="6">
                        <h1 className="h1">Proficiency</h1>
                        {
                            SkillBars.map(skill => {
                                return <div className="progress-info" key={skill.Stack}>
                                            <div className="progress-label">
                                            <span style={{ fontSize: '17px'}}>{skill.Stack}</span>
                                            </div>
                                            <div className="progress-percentage">
                                            <span>{skill.progressPercentage}%</span>
                                            </div>
                                            <Progress max="100" value={skill.progressPercentage} color="info" />
                                        </div>
                            })
                        }
                    </Col>
                    <Col style={{ marginTop: '42px'}} lg="6">
                        <GreetingLottie animationData={build}/>
                    </Col>
                </Row>
           </Fade>
        </Container>
     );
}

export default Proficiency;

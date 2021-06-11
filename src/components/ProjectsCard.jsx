import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Button
} from "reactstrap";

import { Fade } from 'react-reveal';

const ProjectsCard = ({data}) => {
    console.log('dtata', data);
    return (
        <Col lg="6">
        <Fade bottom duration={1000} distance="40px">
            <Card className="shadow-lg--hover shadow mt-4">
            <CardBody>
                <div className="d-flex px-3">
                <div className="pl-4">
                    <h5 style={{ color: 'darkblue', fontSize: 'x-large'}}>
                    {data.name}
                    </h5>
                    <p style={{ fontSize: '18px', color: 'black', fontWeight: '500'}}>
                        {data.desc}
                    </p>

                        <Button
                            className="btn-neutral btn-icon"
                            color="primary"
                            href={data.url}
                            target="_blank"
                            >
                            <span className="btn-inner--icon">
                                <i className="fa fa-arrow-right mr-2" />
                            </span>
                            <span style={{ color: 'chocolate'}} className="nav-link-inner--text ml-1">
                                {data.name}
                            </span>
                        </Button>
                        {data.git ? <Button
                            className="btn-neutral btn-icon"
                            color="secondary"
                            href={data.giturl}
                            target="_blank"
                            >
                            <span className="btn-inner--icon">
                            <i class="fa fa-github"></i>
                            </span>
                            <span style={{ color: 'chocolate'}} className="nav-link-inner--text ml-1">
                                {data.git}
                            </span>
                        </Button> : null}

                </div>
                </div>
            </CardBody>
        </Card>
        </Fade>
        </Col>
     );
}

export default ProjectsCard;
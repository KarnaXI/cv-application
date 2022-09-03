import React from "react";

const Projects = (props) => {
    const { projectsInfo } = props;

    if (projectsInfo.projectName){
        return (
            <div className="projects-info-container">
                <div className="projects">
                    <h3 className="projects-heading">Projects</h3>
                    <div className="projects-one-wrapper">
                        <div className="projects-one-container">
                            <div className="projects-description">
                                <strong>{projectsInfo.projectName}</strong>
                                <i>{projectsInfo.positionDepartment}{ projectsInfo.labCourse ? ", " : null } {projectsInfo.labCourse}</i>
                            </div>
                        </div>
                        {projectsInfo.projectSummary.length > 0 &&
                            <div className="projects-summary-contributions">
                                <p>{projectsInfo.projectSummary}</p>
                            </div>
                        }
                        <ul className="projects-contributions">
                        {projectsInfo.projectContribution.length > 0 &&
                                <li>{projectsInfo.projectContribution}</li>
                        }
                        {projectsInfo.projectContributionTwo.length > 0 &&
                                <li>{projectsInfo.projectContributionTwo}</li>   
                        }
                        </ul>
                    </div>


                </div>
            </div>
        )
    }
    
}

export default Projects;
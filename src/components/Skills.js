import React from "react";

const Skills = (props) => {
    const { skillsInfo } = props;

    if (skillsInfo.skillOne){
        return (
            <div className="skills-info-container">
                    <h3 className="heading">Skills</h3>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillOne}{skillsInfo.skillOneInformation ? ": " : null }</strong> {skillsInfo.skillOneInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillTwo}{skillsInfo.skillTwoInformation ? ": " : null }</strong> {skillsInfo.skillTwoInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillThree}{skillsInfo.skillThreeInformation ? ": " : null }</strong> {skillsInfo.skillThreeInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillFour}{skillsInfo.skillFourInformation ? ": " : null }</strong> {skillsInfo.skillFourInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillFive}{skillsInfo.skillFiveInformation ? ": " : null }</strong> {skillsInfo.skillFiveInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillSix}{skillsInfo.skillSixInformation ? ": " : null }</strong> {skillsInfo.skillSixInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{skillsInfo.skillSeven}{skillsInfo.skillSevenInformation ? ": " : null }</strong> {skillsInfo.skillSevenInformation}
                    </div>
            </div>
        )
    }
}

export default Skills;
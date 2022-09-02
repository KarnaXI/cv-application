import React from "react";

const Experience = (props) => {
    const { experienceInfo } = props;

    if (experienceInfo.skillOne){
        return (
            <div className="experience-info-container">
                    <h3 className="heading">experience</h3>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.skillOne}{experienceInfo.skillOneInformation ? ": " : null }</strong> {experienceInfo.skillOneInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.skillTwo}{experienceInfo.skillTwoInformation ? ": " : null }</strong> {experienceInfo.skillTwoInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.skillThree}{experienceInfo.skillThreeInformation ? ": " : null }</strong> {experienceInfo.skillThreeInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.skillFour}{experienceInfo.skillFourInformation ? ": " : null }</strong> {experienceInfo.skillFourInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.skillFive}{experienceInfo.skillFiveInformation ? ": " : null }</strong> {experienceInfo.skillFiveInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.experienceix}{experienceInfo.experienceixInformation ? ": " : null }</strong> {experienceInfo.experienceixInformation}
                    </div>
                    <div className="rendered-skill-container">
                    <strong>{experienceInfo.experienceeven}{experienceInfo.experienceevenInformation ? ": " : null }</strong> {experienceInfo.experienceevenInformation}
                    </div>
            </div>
        )
    }
}

export default Experience;
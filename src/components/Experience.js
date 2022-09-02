import React from "react";

const Experience = (props) => {
    const { experienceInfo } = props;

    if (experienceInfo.employerName){
        return (
            <div className="experience-info-container">
                <div className="experience">
                    <h3 className="experience-heading">Experience</h3>
                    <div className="experience-one-wrapper">
                        <div className="experience-one-container">
                            <div className="experience-city">
                                <strong>{experienceInfo.employerName} { experienceInfo.employerCity ? " |" : null } {experienceInfo.employerCity}
                                { experienceInfo.employerState ? "," : null } {experienceInfo.employerState}</strong>
                                <i>{experienceInfo.position}{ experienceInfo.department ? ", " : null } {experienceInfo.department}</i>
                            </div>
                            <div className="experience-dates">
                                {(() => {
                                    if (experienceInfo.experienceCurrentlyWork === true) {
                                        return(
                                        
                                            <div>
                                                <p><i>{experienceInfo.experienceStartMonth} {experienceInfo.experienceStartYear} - Present</i></p>
                                            </div>
                                        )
                                        
                                    }
                                    else {
                                        return (
                                        
                                            <i>{experienceInfo.experienceStartMonth} {experienceInfo.experienceStartYear} { experienceInfo.experienceEndMonth ? " - " : null }
                                            {experienceInfo.experienceEndMonth} {experienceInfo.experienceEndYear}</i>
                                        )
                                    }
                                })()}

                            </div>
                        </div>
                        {experienceInfo.experienceOneSummary.length > 0 &&
                            <div className="experience-summary-contributions">
                                <p>{experienceInfo.experienceOneSummary}</p>
                            </div>
                        }
                        <ul className="experience-contributions">
                        {experienceInfo.experienceOneContribution.length > 0 &&
                                <li>{experienceInfo.experienceOneContribution}</li>
                        }
                        {experienceInfo.experienceOneContributionTwo.length > 0 &&
                                <li>{experienceInfo.experienceOneContributionTwo}</li>   
                        }
                        </ul>
                    </div>

                    {(() => {
                        if (experienceInfo.extraExperience){
                            return (
                                <div className="experience-one-wrapper">
                                    <div className="experience-two-container">
                                        <div className="experience-city">
                                            <strong>{experienceInfo.employerNameTwo} { experienceInfo.employerCityTwo ? " |" : null } {experienceInfo.employerCityTwo}
                                            { experienceInfo.employerStateTwo ? "," : null } {experienceInfo.employerStateTwo}</strong>
                                            <i>{experienceInfo.positionTwo}{ experienceInfo.departmentTwo ? ", " : null } {experienceInfo.departmentTwo}</i>
                                        </div>
                                        <div className="experience-dates">
                                            {(() => {
                                                if (experienceInfo.experienceCurrentlyWorkTwo === true) {
                                                    return (
                                                        <div>
                                                            <p><i>{experienceInfo.experienceStartMonthTwo} {experienceInfo.experienceStartYearTwo} - Present</i></p>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <i>{experienceInfo.experienceStartMonthTwo} {experienceInfo.experienceStartYearTwo} { experienceInfo.experienceEndMonthTwo ? " - " : null }
                                                        {experienceInfo.experienceEndMonthTwo} {experienceInfo.experienceEndYearTwo}</i>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    {experienceInfo.experienceTwoSummary.length > 0 &&
                                        <div className="experience-summary-contributions">
                                            <p>{experienceInfo.experienceTwoSummary}</p>
                                        </div>
                                    }
                                    <ul className="experience-contributions">
                                        {experienceInfo.experienceTwoContribution.length > 0 &&
                                            <li>{experienceInfo.experienceTwoContribution}</li>
                                        }
                                        {experienceInfo.experienceTwoContributionTwo.length > 0 &&
                                            <li>{experienceInfo.experienceTwoContributionTwo}</li>
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    })()}

                </div>
            </div>
        )
    }
    
}

export default Experience;
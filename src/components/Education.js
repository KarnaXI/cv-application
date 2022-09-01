import React from "react";

const Education = (props) => {
    const { educationInfo } = props;

    if (educationInfo.schoolName){
        return (
            <div className="education-info-container">
                <div className="education">
                    <h3 className="education-heading">Education</h3>
                    <div className="education-one-container">
                        <div className="education-school-city">
                            <strong>{educationInfo.schoolName} { educationInfo.schoolCity ? " |" : null } {educationInfo.schoolCity}
                            { educationInfo.schoolState ? "," : null } {educationInfo.schoolState}</strong>
                            {educationInfo.degreeCertificate}{ educationInfo.gpa ? ", GPA " : null } {educationInfo.gpa}
                        </div>
                        <div className="education-dates">
                            {(() => {
                                if (educationInfo.currentlyAttend === true) {
                                    return(
                                    
                                        <div>
                                            <p><i>{educationInfo.startMonth} {educationInfo.startYear} - Present</i></p>
                                            <p>Expected Graduation, {educationInfo.endMonth} {educationInfo.endYear}</p>
                                        </div>
                                    )
                                    
                                }
                                else {
                                    return (
                                    
                                        <i>{educationInfo.startMonth} {educationInfo.startYear} { educationInfo.endMonth ? " - " : null }
                                        {educationInfo.endMonth} {educationInfo.endYear}</i>
                                    )
                                }
                            })()}

                        </div>
                    </div>

                    {(() => {
                        if (educationInfo.extraEducation){
                            return (
                    
                            <div className="education-two-container">
                                <div className="education-school-city">
                                    <strong>{educationInfo.schoolNameTwo} { educationInfo.schoolCityTwo ? " |" : null } {educationInfo.schoolCityTwo}
                                    { educationInfo.schoolStateTwo ? "," : null } {educationInfo.schoolStateTwo}</strong>
                                    {educationInfo.degreeCertificateTwo}{ educationInfo.gpaTwo ? ", GPA " : null } {educationInfo.gpaTwo}
                                </div>
                                <div className="education-dates">
                                    {(() => {
                                        if (educationInfo.currentlyAttendTwo === true) {
                                            return (
                                                <div>
                                                    <p><i>{educationInfo.startMonthTwo} {educationInfo.startYearTwo} - Present</i></p>
                                                    <p>Expected Graduation, {educationInfo.endMonthTwo} {educationInfo.endYearTwo}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <i>{educationInfo.startMonthTwo} {educationInfo.startYearTwo} { educationInfo.endMonthTwo ? " - " : null }
                                                {educationInfo.endMonthTwo} {educationInfo.endYearTwo}</i>
                                            )
                                        }
                                    })()}
                    
                                </div>
                            </div>
                    
                            )
                                }
                    })()}










                </div>
            </div>
        )
    }
    
}

export default Education;
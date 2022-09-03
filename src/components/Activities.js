import React from "react";

const Activity = (props) => {
    const { activityInfo } = props;

    if (activityInfo.organizationName){
        return (
            <div className="activity-info-container">
                <div className="activity">
                    <h3 className="activity-heading">Activities</h3>
                    <div className="activity-one-wrapper">
                        <div className="activity-one-container">
                            <div className="activity-city">
                                <strong>{activityInfo.organizationName} { activityInfo.organizationCity ? " |" : null } {activityInfo.organizationCity}
                                { activityInfo.organizationState ? "," : null } {activityInfo.organizationState}</strong>
                                <i>{activityInfo.activityPositionDepartment}</i>
                            </div>
                            <div className="activity-dates">
                                {(() => {
                                    if (activityInfo.activityCurrent === true) {
                                        return(
                                        
                                            <div>
                                                <p><i>{activityInfo.activityStartMonth} {activityInfo.activityStartYear} - Present</i></p>
                                            </div>
                                        )
                                        
                                    }
                                    else {
                                        return (
                                        
                                            <i>{activityInfo.activityStartMonth} {activityInfo.activityStartYear} { activityInfo.activityEndMonth ? " - " : null }
                                            {activityInfo.activityEndMonth} {activityInfo.activityEndYear}</i>
                                        )
                                    }
                                })()}

                            </div>
                        </div>
                        <ul className="activity-contributions">
                        {activityInfo.activityContribution.length > 0 &&
                                <li>{activityInfo.activityContribution}</li>
                        }
                        {activityInfo.activityContributionTwo.length > 0 &&
                                <li>{activityInfo.activityContributionTwo}</li>   
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Activity;
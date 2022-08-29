import React from "react";

const Personal = (props) => {
    const { personalInfo } = props;
    console.log(personalInfo);

    return (
        <div className="personal-info-container">
            <h1>{personalInfo.name}</h1>
            <div className="identity-contact">
                {personalInfo.streetAddress} {personalInfo.city}{ personalInfo.stateProvince ? "," : null } {personalInfo.stateProvince} {personalInfo.zipPostalCode} {personalInfo.country}
                { personalInfo.phone ? " |" : null } {personalInfo.phone} { personalInfo.email ? "|" : null } {personalInfo.email}
            </div>
        </div>
    )
}

export default Personal;
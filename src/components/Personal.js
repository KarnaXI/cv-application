import React from "react";
import { formatPhoneNumberIntl } from 'react-phone-number-input';

const Personal = (props) => {
    const { personalInfo } = props;

    if (personalInfo.name){
        return (
            <div className="personal-info-container">
                <h1>{personalInfo.name}</h1>
                <div className="identity-contact">
                    {personalInfo.streetAddress} {personalInfo.city}{ personalInfo.stateProvince ? "," : null } {personalInfo.stateProvince} {personalInfo.zipPostalCode} {personalInfo.country}
                    { personalInfo.phone ? " |" : null } {formatPhoneNumberIntl(personalInfo.phone)} { personalInfo.email ? "|" : null } {personalInfo.email}
                </div>
                <div className="objective">
                    <h3 className="objective-heading">Objective</h3>
                    {personalInfo.objective}
                </div>
            </div>
        )
    }
}

export default Personal;
import { Component } from 'react';
import './App.css';
import PhoneInput from 'react-phone-number-input/input';
import Personal from './components/Personal';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      streetAddress: '',
      city: '',
      stateProvince: '',
      zipPostalCode: '',
      country: '',
      phone: '',
      email: '',
      objective: '',
      schoolName: '',
      schoolCity: '',
      schoolState: '',
      degreeCertificate: '',
      gpa: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      currentlyAttend: '',
      schoolNameTwo: '',
      schoolCityTwo: '',
      schoolStateTwo: '',
      degreeCertificateTwo: '',
      gpaTwo: '',
      startMonthTwo: '',
      startYearTwo: '',
      endMonthTwo: '',
      endYearTwo: '',
      currentlyAttendTwo: '',
      extraEducation: '',
      skillOne: '',
      skillOneInformation: '',
      skillTwo: '',
      skillTwoInformation: '',
      skillThree: '',
      skillThreeInformation: '',
      skillFour: '',
      skillFourInformation: '',
      skillFive: '',
      skillFiveInformation: '',
      skillSix: '',
      skillSixInformation: '',
      skillSeven: '',
      skillSevenInformation: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  

  handleChange(e) {
    // console.log(this.state.currentlyAttend)
    if(typeof(e) !== "undefined"){
      if(typeof(e.target) !== "undefined" ){
        if (e.target.name === "currentlyAttend"){
            this.setState({currentlyAttend: e.target.checked});
        }
        else if (e.target.name === "currentlyAttendTwo"){
          this.setState({currentlyAttendTwo: e.target.checked});
      }
        else{
          this.setState({[e.target.name]: e.target.value});
        }
      }
      else{
        this.setState({phone: e});
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
  }

  addEducation(){
    console.log(this.state.extraEducation)
    if (this.state.extraEducation){
      this.setState({extraEducation: false});
    }
    else{
      this.setState({extraEducation: true});
    }
  }

  render() {
    return (
    <div className="inner-container">

      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          
          <h2>Personal Information</h2>
          <input type="text" placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange} />

          <div className='address-fields'>
            <input type="text" placeholder='Street address' name="streetAddress" value={this.state.streetAddress} onChange={this.handleChange} />
            <input type="text" placeholder='City' name="city" value={this.state.city} onChange={this.handleChange} />
            <input type="text" placeholder='State/Province' name="stateProvince" value={this.state.stateProvince} onChange={this.handleChange} />
            <input type="text" placeholder='Zip/Postal Code' name="zipPostalCode" value={this.state.zipPostalCode} onChange={this.handleChange} />
            <input type="text" placeholder='Country' name="country" value={this.state.country} onChange={this.handleChange} />
          </div>

          <div className='contact-fields'>
            <PhoneInput placeholder='Phone' name="phone" value={this.state.phone} onChange={this.handleChange} />
            <input type="text" placeholder='Email' name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className='objective-container'>
            <textarea placeholder="Your objective ..." name="objective" value={this.state.objective} onChange={this.handleChange} />
          </div> 

          <div className='education-container'>
            <h2>Education</h2>
            <div className='school-info-inputs'>
              <input type="text" placeholder="School name ..." name="schoolName" value={this.state.schoolName} onChange={this.handleChange} />
              <input type="text" placeholder="School City" name="schoolCity" value={this.state.schoolCity} onChange={this.handleChange} />
              <input type="text" placeholder="School State" name="schoolState" value={this.state.schoolState} onChange={this.handleChange} />
            </div>
            <div className='degree-certificate-inputs'>
              <input type="text" placeholder="Degree / Certificate ..." name="degreeCertificate" value={this.state.degreeCertificate} onChange={this.handleChange} />
              <input type="text" placeholder="GPA ..." name="gpa" value={this.state.gpa} onChange={this.handleChange} />
            </div>
            <div className='education-timeline'>
              <input type="text" placeholder="Start month" name="startMonth" value={this.state.startMonth} onChange={this.handleChange} />
              <input type="text" placeholder="Start year" name="startYear" value={this.state.startYear} onChange={this.handleChange} />
              <input type="text" placeholder="End month" name="endMonth" value={this.state.endMonth} onChange={this.handleChange} />
              <input type="text" placeholder="End year" name="endYear" value={this.state.endYear} onChange={this.handleChange} />
              <div>
                <label htmlFor='currentlyAttend'>I currently attend</label>
                <input type="checkbox" name="currentlyAttend" checked={this.state.currentlyAttend} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          
          <button className='add-more-education-button' onClick={this.addEducation}>Add more education</button>
          
          {(() => {
            if (this.state.extraEducation === true) {
              return (
                <div className='education-container-two'>
                  <h2>Education</h2>
                  <div className='school-info-inputs'>
                    <input type="text" placeholder="School name ..." name="schoolNameTwo" value={this.state.schoolNameTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="School City" name="schoolCityTwo" value={this.state.schoolCityTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="School State" name="schoolStateTwo" value={this.state.schoolStateTwo} onChange={this.handleChange} />
                  </div>
                  <div className='degree-certificate-inputs'>
                    <input type="text" placeholder="Degree / Certificate ..." name="degreeCertificateTwo" value={this.state.degreeCertificateTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="GPA ..." name="gpaTwo" value={this.state.gpaTwo} onChange={this.handleChange} />
                  </div>
                  <div className='education-timeline'>
                    <input type="text" placeholder="Start month" name="startMonthTwo" value={this.state.startMonthTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="Start year" name="startYearTwo" value={this.state.startYearTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="End month" name="endMonthTwo" value={this.state.endMonthTwo} onChange={this.handleChange} />
                    <input type="text" placeholder="End year" name="endYearTwo" value={this.state.endYearTwo} onChange={this.handleChange} />
                    <label htmlFor='currentlyAttendTwo'>I currently attend</label>
                    <input type="checkbox" name="currentlyAttendTwo" checked={this.state.currentlyAttendTwo} onChange={this.handleChange} />
                  </div>
                </div>
              )
            }
          })()}

          <div className='skills-inputs-container'>
          <h2>Skills</h2>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillOne" value={this.state.skillOne} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillOneInformation" value={this.state.skillOneInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillTwo" value={this.state.skillTwo} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillTwoInformation" value={this.state.skillTwoInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillThree" value={this.state.skillThree} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillThreeInformation" value={this.state.skillThreeInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillFour" value={this.state.skillFour} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillFourInformation" value={this.state.skillFourInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillFive" value={this.state.skillFive} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillFiveInformation" value={this.state.skillFiveInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillSix" value={this.state.skillSix} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillSixInformation" value={this.state.skillSixInformation} onChange={this.handleChange} />
            </div>
            <div className='skills-item'>
              <input type="text" class="skill" placeholder="Skill" name="skillSeven" value={this.state.skillSeven} onChange={this.handleChange} />
              <input type="text" placeholder="Skill information" name="skillSevenInformation" value={this.state.skillSevenInformation} onChange={this.handleChange} />
            </div>
          </div>



        

          <input type="submit" value="Submit" onSubmit={this.handleSubmit} />

        </form>
      </div>

      <div className='resume-container'>
        <Personal personalInfo={this.state} />
        <Education educationInfo={this.state} />
        <Skills skillsInfo={this.state} />

      </div>

    </div>
    );
  }
}

export default App;

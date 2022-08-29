import { Component } from 'react';
import './App.css';
import PhoneInput from 'react-phone-number-input/input';
import Personal from './components/Personal';

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
    };

    // let personalInformationHolder = {...this.state.personalInformation}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log("event", (e))
    if(typeof(e) !== "undefined"){
      if(typeof(e.target) !== "undefined" ){
        console.log(e.target.name)
      this.setState({[e.target.name]: e.target.value});
      // console.log(this.state)
      }
      else{
        this.setState({phone: e});
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
    <div className="inner-container">

      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>

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

          <input type="submit" value="Submit" onSubmit={this.handleSubmit} />

        </form>
      </div>

      <div className='resume-container'>
        <Personal personalInfo={this.state} />
      </div>

    </div>
    );
  }
}

export default App;

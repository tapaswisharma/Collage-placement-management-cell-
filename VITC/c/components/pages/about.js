import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./about.css";

class Card extends
React.Component {
  render() {
    return(
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Database used : Firebase , This site is only for admin and work purpose of SCET . For any queries whatsapp me +91 7674908511 or drop a mail : abdulaffanmohammad@gmail.com Thank You</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
    )
  }
}

const About = () => {
  return (
    

    <div class="container" style={{ marginTop: "10px" }}>
      <div class="header">
     <h3>HOW TO DOWNLOAD ALL DATA IN EXCEL SHEET ? </h3></div>
<p>Step : 1</p>
      <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://console.firebase.google.com/u/5/project/react-contact-dd820/database/react-contact-dd820-default-rtdb/data';
      }}
> Download JSON</button>
<p>Step : 2</p>

      <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://data.page/json/csv';
      }}
>Upload JSON and Download CSV</button>
<br></br>
<br></br>
     
      
       <div className='cards'>
         <Card
          img=''
          title='This is React SCET Student Management System Application with Routing using
          Firebase database'
          author='Mohammad Abdul Affan'
          />
      </div>  
      
      <h4>


{" "}

</h4>

<div>
    
    <Popup trigger={<button> Click to Get Google Firebase  Account Creditionals </button>} 
     position="right center">
      <div>scethydplacement</div>
      <button>@admin123</button>
    </Popup>
  </div>

<br></br>
<br></br>
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import { toast } from "react-toastify";
import { Link} from "react-router-dom";

const initialState = {
  name: "",
  rollnumber: "",
  overalpercentage: "",
  activebacklogs: "",
  emailaddress:"",
  contactnumber:"",
  department:"",

  placedin:"",
  year:"",
  sem1:Number=0,
  sem2:Number=0,
  sem3:"",
  sem4:"",
  sem5:"",
  sem6:"",
  sem7:"",
  sem8:"",

};


const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name,department,placedin,year,rollnumber, overalpercentage, activebacklogs , emailaddress , contactnumber , sem1 , sem2 , sem3 , sem4 , sem5 , sem6 , sem7 , sem8 ,} = state;

  const history = useHistory();

  const { id } = useParams();
  const [percentage,setPercentage] = useState("");
  const sem1Input=document.getElementById("sem1");
  const sem2Input=document.getElementById("sem2");
  const sem3Input=document.getElementById("sem3");
  const sem4Input=document.getElementById("sem4");
  const sem5Input=document.getElementById("sem5");
  const sem6Input=document.getElementById("sem6");
  const sem7Input=document.getElementById("sem7");
  const sem8Input=document.getElementById("sem8");

  function calculate(){
    let ans1=sem1Input.valueAsNumber
    let ans2=sem2Input.valueAsNumber
    let ans3=sem3Input.valueAsNumber
    let ans4=sem4Input.valueAsNumber
    let ans5=sem5Input.valueAsNumber
    let ans6=sem6Input.valueAsNumber
    let ans7=sem7Input.valueAsNumber
    let ans8=sem8Input.valueAsNumber

    
    let cal=(ans1+ans2+ans3+ans4+ans5+ans6+ans7+ans8)/8
     
    setPercentage(cal)
  }


          

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rollnumber || !overalpercentage || !activebacklogs) {
      toast.error("Please provide value in each input field");
    } else {
      if (!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Student Data Added Successfully");
          }
        });
      } else {
        fireDb.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Student Data Updated Successfully");
          }
        });
      }

      setTimeout(() => history.push("/"), 500);
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name of the student</label>
        <input
        
          type="text"
          id="name"
          name="name"
          placeHolder="Enter Name..."
          value={name || ""}
          onChange={handleInputChange}
        />

<label htmlFor="department">Department</label>
        <input
        
          type="text"
          id="department"
          name="department"
          placeHolder="CSE , ECE , IT , EEE , Mech , CIVIL ..."
          value={department || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="rollnumber">JNTUH - Roll Number</label>
        <input
          type="text"
          id="rollnumber"
          name="rollnumber"
          placeHolder="Hallticket Number..."
          value={rollnumber || ""}
          onChange={handleInputChange}
        />

<label htmlFor="year">Current Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeHolder="I,II,III,IV / passedout"
          value={year || ""}
          onChange={handleInputChange}
        />
<label htmlFor="emailaddress">Email Address</label>
        <input
          type="email"
          id="emailaddress"
          name="emailaddress"
          placeHolder="Enter Valid Email "
          value={emailaddress || ""}
          onChange={handleInputChange}
        />

<label htmlFor="contactnumber">Contact Number</label>
        <input
          type="number"
          id="contactnumber"
          name="contactnumber"
          placeHolder="Mobile Number"
          value={contactnumber || ""}
          onChange={handleInputChange}
        />



        <label htmlFor="overalpercentage">Total Percentage</label>
        <input
          type="number"
          id="overalpercentage"
          name="overalpercentage"
          placeHolder="Percentage (Ex: 9.0)"
          value={overalpercentage || ""}
          onChange={handleInputChange}
        />
        
        
        <label htmlFor="activebacklogs">Number of Backlogs</label>
        <input
          type="text"
          id="activebacklogs"
          name="activebacklogs"
          placeHolder="Active Backlogs..."
          value={activebacklogs || ""}
          onChange={handleInputChange}
        />

<label htmlFor="placedin">Placed In </label>
        <input
          type="text"
          id="placedin"
          name="placedin"
          placeHolder="Company Name (pkg) or Null"
          value={placedin || ""}
          onChange={handleInputChange}
        />
        <label>Enter All Semister GPA</label>
        <p>as on  individual long memo's</p>
       

        <input
        
          type="number"
          id="sem1"
          name="sem1"
          placeHolder="GPA of 1-1 "
          value={sem1 || ""}
          onChange={handleInputChange}>

          </input>

          <input
          
          type="number"
          id="sem2"
          name="sem2"
          placeHolder="GPA of 1-2 "
          value={sem2 || ""}
          onChange={handleInputChange}>

          </input>

          
          
          <input
          type="number"
          id="sem3"
          name="sem3"
          placeHolder="GPA of 2-1 "
          value={sem3 || ""}
          onChange={handleInputChange}>

          </input>


          <input
          type="number"
          id="sem4"
          name="sem4"
          placeHolder="GPA of 2-2 "
          value={sem4 || ""}
          onChange={handleInputChange}>

          </input>


          <input
          type="number"
          id="sem5"
          name="sem5"
          placeHolder="GPA of 3-1 "
          value={sem5 || ""}
          onChange={handleInputChange}>

          </input>



          <input
          type="number"
          id="sem6"
          name="sem6"
          placeHolder="GPA of 3-2 "
          value={sem6 || ""}
          onChange={handleInputChange}>

          </input>



          <input
          type="number"
          id="sem7"
          name="sem7"
          placeHolder="GPA of 4-1 "
          value={sem7 || ""}
          onChange={handleInputChange}>

          </input>

          <input
          type="number"
          id="sem8"
          name="sem8"
          placeHolder="GPA of 4-2 "
          value={sem8 || ""}
          onChange={handleInputChange}>

          </input>

          <br>
          </br>
          
          <button type="button" id="adds" onClick={calculate}>calculate</button>

          <input id="output1"  size="5" value={percentage}  />
     


        <input type="submit" value={id ? "Update" : "Save"} />
      
      </form>

      

     


     
    </div>

    
  );
};



export default AddEdit;


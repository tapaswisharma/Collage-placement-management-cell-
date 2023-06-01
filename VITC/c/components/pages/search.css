import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { useParams, Link } from "react-router-dom";
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  console.log("user", user);
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="card">
        <div className="card-header">
          <p>Student Details</p>
        </div>
        <div className="">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Student Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Roll Number: </strong>
          <span>{user.rollnumber}</span>
          <br />
          <br />
          <strong>Current Year: </strong>
          <span>{user.year}</span>
          <br />
          <br />

          <strong>Email Address: </strong>
          <span>{user.emailaddress}</span>
          <br />
          <br />

          <strong>Contact Number: </strong>
          <span>{user.contactnumber}</span>
          <br />
          <br />
          
          
          <strong>GPA Score in Semister 1: </strong>
          <span>{user.sem1}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 2: </strong>
          <span>{user.sem2}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 3: </strong>
          <span>{user.sem3}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 4: </strong>
          <span>{user.sem4}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 5: </strong>
          <span>{user.sem5}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 6: </strong>
          <span>{user.sem6}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 7: </strong>
          <span>{user.sem7}</span>
          <br />
          <br />
          <strong>GPA Score in Semister 8: </strong>
          <span>{user.sem8}</span>
          <br />
          <br />

          <strong>Overall Engineering Percentage: </strong>
          <span>{user.overalpercentage}</span>
          <br />
          <br />

          <strong>Placed In </strong>
          <span>{user.placedin}</span>
          <br />
          <br />


          <hr>
          </hr>
         


          
          
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
    </div>
  );
};

export default View;

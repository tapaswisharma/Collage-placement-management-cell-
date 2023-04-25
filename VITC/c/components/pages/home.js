import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);

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
  }, []);

  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that Student Data ?")
    ) {
      fireDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Student Data Deleted Successfully");
        }
      });
    }
  };

  const handleChange = (e) => {
    setSort(true);
    fireDb
      .child("contacts")
      .orderByChild(`${e.target.value}`)
      .on("value", (snapshot) => {
        let sortedData = [];
        snapshot.forEach((snap) => {
          sortedData.push(snap.val());
        });
        setSortedData(sortedData);
      });
  };
  const handleReset = () => {
    setSort(false);
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  };

  const filterData = (value) => {
    fireDb
      .child("contacts")
      .orderByChild("status")
      .equalTo(value)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Student Name</th>
            <th style={{ textAlign: "center" }}>Department</th>
            <th style={{ textAlign: "center" }}>Roll Number</th>
            <th style={{ textAlign: "center" }}>Year</th>
            
            <th style={{ textAlign: "center" }}>Number of Backlogs</th>
            
            <th style={{ textAlign: "center" }}>Contact Number</th>
            
            <th style={{ textAlign: "center" }}>Placed In</th>
            <th style={{ textAlign: "center" }}>Percentage</th>
            
            {!sort && <th style={{ textAlign: "center" }}>Action</th>}

            </tr>
        </thead>
        {!sort && (
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].department}</td>
                  <td>{data[id].rollnumber}</td>
                  <td>{data[id].year}</td>
                  <td>{data[id].activebacklogs}</td>
                  <td>{data[id].contactnumber}</td>
                  
                  <td>{data[id].placedin}</td>
                  <td>{data[id].overalpercentage}</td>
                  
                  
                  
                  
                  
                  <td>
                    <Link to={`/update/${id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                      
                    </button>
                    <Link to={`/view/${id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
        {sort && (
          <tbody>
            {sortedData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.rollnumber}</td>
                  <td>{item.year}</td>
                  <td>{item.activebacklogs}</td>
                  <td>{item.contactnumber}</td>                
                  <td>{item.placedin}</td>
                  <td>{item.overalpercentage}</td>
                  
                  
                  
                  
                
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <br>
      </br>
      
      <label>Sort By:</label>
      <select className="dropdown" name="colValue" onChange={handleChange}>
        <option>Please Select</option>
        <option value="name">Student Name</option>
        <option value="email">Roll Number</option>
        <option value="contact">Percentage</option>
        <option value="status">Number of Backlogs</option>
        
      </select>
      <button className="btn btn-reset" onClick={handleReset}>
        Reset
      </button>
      <br />


      
    </div>
  );
};

export default Home;

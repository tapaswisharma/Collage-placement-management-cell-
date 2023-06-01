import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import fireDb from "../firebase";
import { toast } from "react-toastify";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState({});

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  let search = query.get("name");
  console.log("search", search);

  useEffect(() => {
    searchData();
  }, [search]);

  useEffect(() => {
    searchDataS();
  }, [search]);

  useEffect(() => {
    mobilenumber();
  }, [search]);


 

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

  const searchData = () => {
    fireDb
      .child("contacts")
      .orderByChild("rollnumber" )
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };

  const searchDataS = () => {
    fireDb
      .child("contacts")
      .orderByChild("department")
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };


  const mobilenumber = () => {
    fireDb
      .child("contacts")
      .orderByChild("contactnumber")
      .equalTo(search)
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };



  console.log("data", data);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        
        {Object.keys(data).length === 0 ? (
          <h2>No Search Found Please Search "Status of the student , Department or Roll Number" </h2>
        ) : (
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
            
            <th style={{ textAlign: "center" }}>Action</th>
                
              </tr>
            </thead>
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
                    </tr>
                );
              })}
            </tbody>
          </table>
          
        )}
        <br></br>
        <Link to="/">
          <button className="btn btn-edit">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default Search;

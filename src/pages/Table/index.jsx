import React from 'react';
import { useEffect, useState } from 'react';
import './table-style.css';
import Axios from 'axios';

export default function Table() {
  const [data, setData] = useState([]);
  const [delPopUpBool, setDelPopUp] = useState(0);
  //const [deleteFunction, setDeleteFunction] = useState(() => {});
  const urlData = `https://oncd-24.fr/gestion/api/dentist.php`;
  let DeleteFunction;
  
  useEffect(() => {
    fetchDentistData();
  },[]);

  // fetch data function
  let fetchDentistData = () => {
    Axios.get(urlData)
    .then(res => {
      console.log("Getting from :::: " , res.data.detail);
      setData(res.data.detail);
    
    }).catch(err => console.log(err));
  }


  //delete data function
  let deleteData = (id, e) => {
    e.preventDefault();
    Axios.delete( urlData + `/${id}`)
    .then(res => {
      console.log("deleted", res);
      setDelPopUp(0);
      fetchDentistData();
      
    }).catch(err => console.log(err));
  };

  let deletePopUp = (id) => {

    let popUpDeleteBtn = document.querySelector(".deleteButton");
        popUpDeleteBtn.removeEventListener("click", DeleteFunction);
        DeleteFunction = (e) => deleteData(id,e);
        popUpDeleteBtn.addEventListener("click", DeleteFunction);
    setDelPopUp(1);

  };
  



  const arr = data.map((data, index) => {
    return (
        <tr className='dentist-data-tr' key={index+1}>
          <th>{index + 1}</th>
          <th>{data.first_name}</th>
          <th>{data.last_namem}</th>
          <th>{data.address}</th>
          <th>{data.phone_number}</th>
          <th>{data.email}</th>
          <th>
            <button onClick={() => {
              deletePopUp(data.id);
            }} style={{marginRight : "5px" , cursor : "pointer"}}>
              Delete
            </button>

            <button style={{cursor : "pointer"}}>
              Edit
            </button>
          </th>
        </tr>
    )
  })
  return <div className='table-div'>

            <div className='table-title'> Gestion des dentistes</div>

            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Adresse</th>
                  <th>Telephone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {arr}
               </tbody>
            </table>

            <div className={delPopUpBool ? " delete-popUp  display-popUp" : " delete-popUp  close-popUp"}>
                <div className='delete-popUp-inner'> 
                  <div className='delete-popUp-inner-inner'>
                    <div className='delete-popUp-question'>Are you use want delete this data?</div>
                      <div className='delete-popUp-buttons'>
                        <button className='deleteButton' style={{cursor : "pointer"}} onClick={() => {setDelPopUp(1);}} >Yes</button>
                        <button style={{cursor : "pointer"}} onClick={() => {setDelPopUp(0);}}>No</button>
                      </div>
                    </div>
                </div>
            </div>
          </div>;
}

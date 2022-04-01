import Background from "./Background";
import "./EditModal.css";
import { useState } from 'react';
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";


function EditModal(props) {
  const [newDate, setNewDate] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newRace, setNewRace] = useState("");
  const [people, setPeople] = useState([]);
  const peopleCollectionsRef = collection(db, "people");

  
  const createRecord = async () => {
    if ((newDate === "") || (newFirstName === "") || (newLastName === "") || (newAge === 0) || (newCity === "") || (newState === "") || (newGender === "") || (newRace === "") || (newDate === "")){
      alert('You need to fill out all the fields!');
    }else{
      await addDoc(peopleCollectionsRef, {
        AGEATMISSING: newAge, CITY: newCity, 
        DATEMISSING: newDate, FIRSTNAME: newFirstName, 
        LASTNAME: newLastName, GENDER: newGender, 
        STATE: newState, RACE: newRace
      })
      window.location.reload(true);
    }
  };

  return (
    <div className="modal">
      
      <p className="exit" onClick={props.onCancel}>X</p>
      <label for="date">Date of disappearance</label>
      <input type="date" id="date" onChange={(event) => {setNewDate(event.target.value)}} ></input>
      <input placeholder="Last name..." onChange={(event) => {setNewLastName(event.target.value)}} ></input>
      <input placeholder="First name..." onChange={(event) => {setNewFirstName(event.target.value)}} ></input>
      <input placeholder="Age at disappearance..." type="number" onChange={(event) => {setNewAge(event.target.value)}} ></input>
      <input placeholder="city..." onChange={(event) => {setNewCity(event.target.value)}} ></input>
      <input placeholder="State..." onChange={(event) => {setNewState(event.target.value)}} ></input>
      <label for='gender'>Gender</label>
      <select id='gender' onChange={(event) => {setNewGender(event.target.value)}} >
          <option selected>PLEASE SELECT</option>
          <option value="M" >M</option>
          <option value="F">F</option>
          <option value="O">Other</option>
      </select>
      <label for='race'>Race</label>
      <select id='race' onChange={(event) => {setNewRace(event.target.value)}} >
          <option selected>PLEASE SELECT</option>
          <option value='W'>American</option>
          <option value='M'>Latino</option>
          <option value='B'>African</option>
          <option value='A'>Asian</option>
          <option value='O'>Other</option>
      </select>
      <button onClick={createRecord}>Create Record</button>
      
    </div>
  );
}

export default EditModal;

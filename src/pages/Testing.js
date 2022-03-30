import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import FadeIn from "react-fade-in";

import "./Testing.css";
function Testing() {
  const [people, setPeople] = useState([]);
  const peopleCollectionsRef = collection(db, "people");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(peopleCollectionsRef);
      setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="main content">
      <FadeIn>
        <table>
          <th>Date Missing</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Age at Missing</th>
          <th>City</th>
          <th>State</th>
          <th>Gender</th>
          <th>Race</th>
          <tbody>
            {people.map((person) => {
              return (
                <tr>
                  <td>{person.DATEMISSING}</td>
                  <td>{person.LASTNAME}</td>
                  <td>{person.FIRSTNAME}</td>
                  <td>{person.AGEATMISSING}</td>
                  <td>{person.CITY}</td>
                  <td>{person.STATE}</td>
                  <td>{person.GENDER}</td>
                  <td>{person.RACE}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </FadeIn>
    </div>
  );
}

export default Testing;

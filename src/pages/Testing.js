import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import FadeIn from "react-fade-in";
import EditModal from "../components/EditModal";
import EditRecord from "../components/EditRecord";
import DeleteRecord from "../components/DeleteRecord";
import SearchRecord from "../components/SearchRecord";
import Background from "../components/Background";
import "./Testing.css";

function Testing() {
  //usestate for toggling the create modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModalHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  //usestate for toggling edit record modal
  const [editModal, setEditModal] = useState(false);
  function editModalHandler() {
    setEditModal(!editModal);
  }

  //usestate for toggling delete record modal
  const [deleteModal, setDeleteModal] = useState(false);
  function deleteModalHandler() {
    setDeleteModal(!deleteModal);
  }

  //usestate for toggling search record modal
  const [searchModal, setSearchModal] = useState(false);
  function searchModalHandler() {
    setSearchModal(!searchModal);
  }

  //data base stuff
  const [people, setPeople] = useState([]);
  const peopleCollectionsRef = collection(db, "people");

  useEffect(() => {
    const getPeople = async () => {
      const data = await getDocs(peopleCollectionsRef);
      setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPeople();
  }, []);

  //component content
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

        {/* this section handles all the buttons */}
        <div class="editRecords">
          <button onClick={openModalHandler}>Create Record</button>
          {modalIsOpen && <EditModal onCancel={openModalHandler} />}
          {modalIsOpen && <Background onCancel={openModalHandler} />}

          <button onClick={editModalHandler}>Edit Record</button>
          {editModal && <EditRecord onCancel={editModalHandler} />}
          {editModal && <Background onCancel={editModalHandler} />}

          <button onClick={deleteModalHandler}>Delete Record</button>
          {deleteModal && <DeleteRecord onCancel={deleteModalHandler} />}
          {deleteModal && <Background onCancel={deleteModalHandler} />}

          <button onClick={searchModalHandler}>Search for Record</button>
          {searchModal && <SearchRecord onCancel={searchModalHandler} />}
          {searchModal && <Background onCancel={searchModalHandler} />}
        </div>
      </FadeIn>
    </div>
  );
}

export default Testing;

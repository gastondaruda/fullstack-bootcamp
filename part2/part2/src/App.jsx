import {useState, useEffect} from "react"
import axios from "axios"
import personServices from "./services/notes"
//import Course from "./components/Course"
//import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
//import Countries from "./components/Countries"
import Notification from "./components/Notification"
import "../app.css"

const App = () => {
 
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [loading, setLoading] = useState(true)
  const [messageStyle, setMessageStyle] = useState("")

//exercise 2.11
  useEffect(() => {
    console.log("useEffect")
    //exercises 3.9
    getInfo()
    setLoading(false)
  },[])
//---------------------------------------

const getInfo = () => {
  personServices
    .getAll()
    .then(initialData => {
      setPersons(initialData)
    })
  setLoading(false)
}

//---------------------------------------
  const addPerson = (e) => {
    e.preventDefault()
    setLoading(true)
    const newPerson = {
      name: newName,
      number: newNumber
    }
  //exercises 3.9
    personServices
    .createPerson(newPerson)
    .then(() => getInfo())
        
    setLoading(false)
    setNewName("")
    setNewNumber("")
    console.log("adding...")

  }
//---------------------------------------
  //exercise 2.17
  const handleDelete = (e) => {
    const id = e.target.id
    console.log(id)
    setLoading(true)
    if (window.confirm("Are you sure you wish to delete this person?")) {
      personServices.remove(id)
      .then(() =>  getInfo())
      setLoading(false)
  }
  }

  //---------------------------------------

  const handleAddPerson = (e) => {
    setNewName(e.target.value)
  }
  //---------------------------------------
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }
  

  return(
    <>
      {/*
        <Course course={courses} />
      */ }

    <div>
      <h2>Phonebook</h2>
      
      <Form 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleAddPerson={handleAddPerson}
        handleNewNumber={handleNewNumber}
      />
      {/*<Notification message={successMessage} style={messageStyle}/>*/}
      <h2>Numbers</h2>
      {
        loading ? <span>Loading...</span> : 
          <Persons 
            persons={persons}
            handleDelete={handleDelete}
          />
      }
    </div>
    </>
  )
  }

  //v

export default App
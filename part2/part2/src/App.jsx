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
  const [successMessage, setSuccessMessage] = useState(null)
  const [messageStyle, setMessageStyle] = useState("")

//exercise 2.11
  useEffect(() => {
    console.log("useEffect")
    //exercises 3.9
    personServices
    .getAll()
    .then(initialData => {
      setPersons(initialData)
    })
    setLoading(false)
  },[])
//---------------------------------------

//---------------------------------------
  const addPerson = (e) => {
    e.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber
    }
  //exercises 3.9
    personServices
    .createPerson(newPerson)
    .then(res => console.log(res, "fetching..."))
    
    setPersons(persons.concat(newPerson))
    
    setLoading(false)
    setNewName("")
    setNewNumber("")
    console.log("adding...")

  }
//---------------------------------------
  //exercise 2.17
  const handleDelete = (e) => {
    setLoading(true)
    const id = e.target.id
    const person = persons.find(p => p.id === id)
    if (window.confirm("Are you sure you wish to delete this person?")) {
      personServices
      .remove(id)
      .then(response => {
        console.log(response)
        setPersons(persons.filter((p) => p.id.toString() !== id))
        setLoading(false)
      })
      //exercises 2.20
      .catch(err => {
        console.log(err)
        setMessageStyle(".error")
        setSuccessMessage(`${person.name} has already been removed...`)
      })
    }
    console.log(e.target.id)
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
      <Notification message={successMessage} style={messageStyle}/>
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
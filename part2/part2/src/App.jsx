import {useState, useEffect} from "react"
import axios from "axios"
import personServices from "./services/notes"
import Course from "./components/Course"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
import Countries from "./components/Countries"
import Notification from "./components/Notification"
import "../app.css"

const App = () => {
  /*const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]*/
/*
  const personsArr = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]
  */


  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [loading, setLoading] = useState(true)
  const [successMessage, setSuccessMessage] = useState(null)
  const [messageStyle, setMessageStyle] = useState("")

//exercise 2.11
  useEffect(() => {
    fetchData()
  },[])
//---------------------------------------
  const fetchData = () => {
    
    personServices
    .getAll()    
    .then(initialData => {
              console.log('promise fulfilled')        
              setPersons(initialData)
              setLoading(false)      
            })
      .catch(err => {
        console.log(err)
        setMessageStyle(".error")
        setSuccessMessage(err)
      })
  }
//---------------------------------------
  const addPerson = (e) => {
    e.preventDefault()
    setLoading(true)
    const newPerson = {
      name: newName,
      number: newNumber
    }

    //exercise 2.18
    if(persons.find(person => person.name === newPerson.name)){
      if (window.confirm("Are you sure you wish to change this person number?")){
      setLoading(true)
      const changePerson = {...newPerson, number: newNumber}
      const personFind = persons.find(person => person.name === newPerson.name)
      personServices
      .update(personFind.id, changePerson)
      .then( res => {
        console.log(res)
        fetchData()
        setLoading(false)
      })
      //fetchData()

    }
    }else{
      //exercise 2.15
      personServices
      .create(newPerson)
      .then(res => {
        console.log(res)
        
        fetchData()
      })
      .catch(err => {
        console.log(err)
        setMessageStyle(".error")
        setSuccessMessage(`${newPerson.name} was not added successfully...`)
      })
      //setPersons(persons.concat(newPerson))
    }
    //exercise 2.19
    setSuccessMessage(`${newPerson.name} was added successfully...`)
    setMessageStyle("success")
        setTimeout(() => {
                    setSuccessMessage(null)
                    }, 3000)

    setLoading(false)
    setNewName("")
    setNewNumber("")

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
  //---------------------------------------
  const handleSearch = (e) => {
    let inputSearch = e.target.value

    let result = persons.filter(person => person.name.toUpperCase().includes(inputSearch.toUpperCase()))

    if(inputSearch === ""){
      setPersons(persons)
    }else{
      console.log(result)
      setPersons(result)
    }
  }

  return(
    <>
      {/*
        <Course course={courses} />
      */ }

    <div>
      <h2>Phonebook</h2>
      <Filter 
        handleSearch={handleSearch}
      />
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
    <Countries />
    </>
  )
  }

export default App
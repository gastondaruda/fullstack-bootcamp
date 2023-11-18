import {useState} from "react"
import Course from "./components/Course"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"

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

  const personsArr = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]


  const [persons, setPersons] = useState(personsArr)

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState("")


  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(persons.find(person => person.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPerson))
    }

    setNewName("")
    console.log(persons)

  }

  const handleAddPerson = (e) => {
    setNewName(e.target.value)
  }
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const handleSearch = (e) => {
    let inputSearch = e.target.value

    let result = persons.filter(person => person.name.toUpperCase().includes(inputSearch.toUpperCase()))

    if(inputSearch === ""){
      setPersons(personsArr)
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
        handleAddPerson={handleAddPerson}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
      />
    </div>
    </>
  )
  }

export default App
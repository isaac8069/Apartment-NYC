import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import apiUrl from '../../../apiConfig'

const ApartmentProfile = (props) => {

  const navigate = useNavigate()

  const[currentApartment, setCurrentApartment] = useState(props.apartment)

  useEffect(() => {
    getApartments()
  }, [])

  // API call to get userApartments
  const getApartments = () => {
    fetch(`${apiUrl}/apartments`)
      .then(res => res.json())
      .then(foundCurrentApartment => {
        setCurrentApartment(foundCurrentApartment.currentApartment)
      })
      .catch(err => console.log(err))
  }

  
  return (
    <div>
      <h1>User Apartments</h1>
      {currentApartment.title}
    </div>
  )
  }
  
  export default ApartmentProfile
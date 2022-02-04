import { Form, FormControl, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import apiUrl from '../apiConfig'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {

  const navigate = useNavigate()
  // get all apartment(s) by Zip Code
  const [searchZip, setSearchZip] = useState('')
  useEffect(() => {
    getSearchZip()
  }, [])


  const handleChange = (e) => {
    console.log('WHAT IS E', e.target)
    setSearchZip({ ...searchZip, [e.target.name]: e.target.value })
  }

  
    console.log('SEARCH ZIP:', searchZip)

    fetch(`${apiUrl}/apartments/search/${searchZip.zipSearch}`, requestOptions)
      .then(res => res.json())
      .then(searchZipResults => {
        console.log('THESE ARE THE APARTMENTS BY ZIP', searchZipResults)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>HOME</h1>
      <Form className="d-flex" onClick={getSearchZip}>
        <FormControl
          name='zipSearch'
          onChange={handleChange}
          value={searchZip.zipSearch}
          type="string"
          placeholder="Zip Code"
          className="me-3"
          aria-label="Search"
        />
        <Button type="submit" variant="outline-success" >Search</Button>
      </Form>
    </div>
  )
}

export default Home

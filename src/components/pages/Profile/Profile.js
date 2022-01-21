import { useState, useEffect } from "react"
import { Button, ListGroup, ListGroupItem, Form, FormCheck, FormGroup } from "react-bootstrap"
import apiUrl from "../../../apiConfig"

const UserApartments = (props) => {
    // get an apartment to edit by checking the box and hitting the edit button
    // first GET an Apartment by aptartmentId
    // const [oneUserApartment, setOneUserApartment] = useState([])
    // useEffect(() => {
    //     getOneApartment()
    // }, [])

    // const getOneApartment = (e) => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Authorization': `Bearer ${props.user.token}`
    //         },
    //     }
    //     console.log('APARTMENT ID:', e.target.value)
    //     fetch(`${apiUrl}/apartments/${e.target.value}`, requestOptions)
    //     .then(res => res.json())
    //     .then(foundOneApartment => {
    //         console.log('FOUND THIS APARTMENT:', foundOneApartment)
    //         console.log('ONE USER APARTMENT', oneUserApartment)
    //         setOneUserApartment(foundOneApartment)
    //     })
    //     .catch(err=> console.log(err))
    // }
    const [isChecked, setIsChecked] = useState(false)
    // handle check box
    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }

    // get all apartment(s) by userId
    const [userApartment, setUserApartment] = useState()
    useEffect(() => {
        getUserApartment()
    }, [])

    const getUserApartment = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
        }
        console.log('USER APARTMENTS', setUserApartment)

        fetch(`${apiUrl}/apartments/user/${props.user._id}`, requestOptions)
            .then(res => res.json())
            .then(foundApartments => {
                // console.log('THESE ARE THE USER APARTMENTS', foundApartments)
                // console.log('USER APARTMENTS SET TO STATE', userApartment)
                setUserApartment(foundApartments)
            })
            .catch(err => console.log(err))
    }
    // const userApartmentList = userApartment ? userApartment.apartments.map((apartment, index) => { return <li> {apartment.title} </li> }) : null
    // console.log(userApartmentList)
    // console.log('USER CREATED APT', userApartment)

    return (

        <div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <ul>

                    {

                        userApartment ? userApartment.apartments.map((apartment, a) => { return <li key={a}>  <Form.Check type="checkbox" label={apartment.title} checked={isChecked} onChange={handleOnChange} /></li> }) : null

                    }</ul>
                    <div className="result">
                        {isChecked ? 'checked' : 'un-checked'}
                    </div>
            </Form.Group>
            <Button type="button" >Edit</Button>

        </div>

    )
}

export default UserApartments
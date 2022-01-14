import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiUrl from '../../../apiConfig'


const ApartmentTag = (props) => {

    const navigate = useNavigate()

    const [newApartmentTag, setNewApartmentTag] = useState({
       
            tag: '',
            name: '',
            apartments: []
       
    })

    const postApartmentTag = (e) => {
        e.preventDefault()
        let preJSONBody = {
            
            tag: {
                tag: newApartmentTag._id,
                name: newApartmentTag.name,
                apartments: newApartmentTag.apartments
            }
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(preJSONBody),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.user.token}`
            }
        }

        // const ApartmentId = useParams()

        // fetch(`${apiUrl}/tags/${apartmentId}`, requestOptions)
        //     .then(updatedApartment => {
        //         Tag.findById(req.body._id)
        //         .then(foundTag => {
        //             foundTag.apartments.push(updatedApartment)
        //             return foundTag.save()
        //         })
        //         .then(updatedTag => {
        //             navigate('/apartments/all')

        //         })
        //         .catch(err => console.error(err))
        //     })

        // I need to get the apartment by ID
        // Now that apartment has been found by ID
        // I need to take the found apartment and push together to a tag by TagID
        // The apartment now has an associated tag in its model under tag[ref]
        //// Next I will need to take that same tag and push to that same apartment using the apartment[ref] inside the tag model
        // First I will find that tag by ID
        // Now the tag has been found by ID
        // Then I will the found TagByID and push together to that apartment using its apartmentID
        // The tag now has an associated aartment in its tag model under apartment[ref]
    }


    return (
        <div>

        </div>
    )
}

export default ApartmentTag
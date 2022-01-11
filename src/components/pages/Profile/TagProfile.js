import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react'
import apiUrl from '../../../apiConfig'

const TagProfile = (props) => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags()
    }, [])

    const getTags = () => {
        fetch(`${apiUrl}/tags`)
            .then(res => res.json())
            .then(foundTags => {
                console.log('FOUND TAGS', foundTags.tags)

                setTags(foundTags.tags)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            <h1>Tags</h1>
            {
                tags.map(tag => (
                    <li>
                        {tag.name}
                    </li>
                ))
            }

        </div>

    )
}

export default TagProfile
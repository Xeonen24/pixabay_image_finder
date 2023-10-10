import React from 'react'
import { useParams } from 'react-router-dom'

export default function FullImage({ image }) {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1>Full Image</h1>
                <img
                    src={image}
                />
            </div>
        </div>
    )
}


import React from 'react'
import Twitter from '../components/Twitter'

const Alul = (props) => {
    const { title } = props
    return (

        <div className="text-center">
            <h1>{title}</h1>
            <Twitter hashTag={title} />
        </div>
    )
}

export default Alul

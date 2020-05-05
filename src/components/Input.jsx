import React from 'react'

const Input = ({ chooseMentee, mentee }) => (
    <div>
        <input onChange={chooseMentee} label="input" value={mentee} />
        <h1 className="mt-3">{mentee}</h1>
    </div>
)

export default Input
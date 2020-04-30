import React from 'react'
import Alul from '../components/Alul'
import { mentees } from '../utils/index'

class List extends React.Component {
    state = {
        name: mentees[1].name
    }

    render() {
        const { name } = this.state
        return (
            <div>
                <Alul title={name} />
            </div>
        )
    }

}

export default List

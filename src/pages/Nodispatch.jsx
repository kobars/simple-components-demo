import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
    render() {
        console.log('dispatch', this.props.dispatch)
        const { count, mentee, data, mentees } = this.props
        return (
            <div className="text-center">
                <div>
                    <h1>{count}</h1>
                    <button className="btn btn-info mb-5">Add point</button>
                </div>

                <div>
                    <h1>{mentee}</h1>
                </div>

                <button className="btn btn-dark mt-5" >Add mentee</button>
                {data.map((el, index) => (<h1 key={index}>{el.name}</h1>))}

                <div className="mt-5 pt-5" style={{ backgroundColor: '#8e44ad', height: '500px', color: 'white', fontSize: '20px' }}>
                    <h1 >Daftar mentee: </h1>
                    {mentees.map((el, index) => (
                        <p key={index}>{el}</p>
                    ))}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        count: state.count,
        mentee: state.mentee.chosenMentee,
        mentees: state.mentee.mentees,
        data: state.mentee.data
    })
}

export default connect(mapStateToProps)(Counter)
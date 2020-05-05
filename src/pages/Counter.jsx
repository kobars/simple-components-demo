import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePoints } from '../store/actions/count'
import { chooseMentee, addMentee, getData, resetState, searchCollege } from '../store/actions/mentee'
import Input from '../components/Input'

class Counter extends React.Component {

    onClick = (num) => this.props.add(num)

    chooseMentee = (name) => {
        this.props.choose(name)
        this.props.searchCollege(name)
    }

    onAddClick = () => {
        this.props.addMentee(this.props.mentee)
        this.props.choose('')
    }

    componentDidMount() {
        // this.props.getData()
    }

    render() {
        // console.log('dispatch', this.props.dispatch)
        console.log(this.props.loading)
        const { count, mentee, data, mentees, resetState, colleges } = this.props
        return (
            <div className="text-center">
                <div className="mt-3">
                    <Link to="/"><h1>{count}</h1></Link>
                    <button className="btn btn-info mb-5" onClick={() => this.onClick(2)}>Add point</button>
                </div>
                <div>
                    {/* <button className="btn btn-danger mb-5">Reset Point</button> */}
                </div>

                <Input chooseMentee={(e) => this.chooseMentee(e.target.value)} mentee={mentee} />
                <div>
                    {!this.props.loading ? colleges.map((el, index) => (<p key={index}>{el.name}</p>)) : <h3 className="text-info">loading...</h3>}
                </div>
                <div>
                    <button className="btn btn-dark mt-5" onClick={this.onAddClick}>Add mentee</button>
                    {data.map((el, index) => (<h1 key={index}>{el.name}</h1>))}
                </div>

                <div className="mt-5 pt-5" style={{ backgroundColor: '#8e44ad', height: '500px', color: 'white', fontSize: '20px' }}>
                    <h1 >Daftar mentee: </h1>
                    {mentees.map((el, index) => (
                        <h3 key={index}>{el}</h3>
                    ))}
                    <div>
                        <button className="btn btn-danger mt-5" onClick={resetState}>Reset Mentee</button>
                    </div>
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
        data: state.mentee.data,
        colleges: state.mentee.colleges,
        loading: state.mentee.loading
    })
}

const mapDispatchToProps = {
    add: changePoints,
    choose: chooseMentee,
    addMentee,
    getData,
    resetState,
    searchCollege
}

// export default connect(state => ({ count: state.count, mentee: state.mentee.chosenMentee }), {})(Counter)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
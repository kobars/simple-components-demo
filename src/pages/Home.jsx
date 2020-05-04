import React, { Component } from 'react'
import TwitterCard from '../components/Twitter'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Unmounted extends Component {
    componentWillUnmount() {
        console.log('unmounted')
    }
    render() {
        return <h1>INI TARGET UNOMUNTED</h1>
    }
}

class Home extends Component {
    state = {
        title: 'This is Ajay Home',
        data: [],
        mount: true
    }

    changeTitle = () => {
        this.setState({ title: 'This is Derby Home' })
    }

    unmountComp = () => {
        this.setState({ mount: !this.state.mount })
    }

    getData = async () => {
        const url = 'https://5e9921015eabe7001681c784.mockapi.io/mentees'
        const response = await axios.get(url)
        console.log('response', response)
        this.setState({ data: response.data })
    }

    componentDidMount() {
        console.log('mounted')
        // side effect
        this.getData()
    }

    componentDidUpdate() {
        console.log('updated')
    }

    render() {
        return (
            <div>
                <Link to="/counter"><h1 className="text-center">Point {this.props.point}</h1></Link>
                {this.state.mount && <Unmounted />}
                <button className="btn btn-info" onClick={this.unmountComp}>{this.state.mount ? 'Unmount atas' : 'Mount atas'}</button>
                <h1 className="text-center pt-3 pb-3" onClick={this.changeTitle}>{this.state.title}</h1>
                <div className="row">
                    {this.state.data.map((el, index) => (
                        <div key={index} className="col-md-4">
                            <TwitterCard name={el.name} content={el.content} hashTag={el.hashTag} />
                        </div>))}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (state) => ({
    point: state.count
})

export default connect(mapDispatchToProps)(Home)

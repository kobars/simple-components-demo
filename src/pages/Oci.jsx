import React, { Component } from 'react'
import TwitterCard from '../components/Twitter'
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
        title: 'This is Oci Home',
        data: [],
        mount: true
    }

    changeTitle = () => {
        this.setState({ title: 'This is Ajay Home' })
    }

    unmountComp = () => {
        this.setState({ mount: !this.state.mount })
    }

    getData = async () => {
        const urlOci = 'https://5e9921015eabe7001681c784.mockapi.io/oci'
        const response = await axios.get(urlOci)
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

export default Home

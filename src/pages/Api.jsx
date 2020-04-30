import React from 'react'
import TwitterCard from '../components/Twitter'
import axios from 'axios'

const Tweets = ({ mentees }) => {
    return mentees.map((el, index) => (
        <div className="col-md-4" key={index}>
            <TwitterCard name={el.name} content={el.content} hashTag={el.hashTag} />
        </div>
    ))
}

class Api extends React.Component {
    state = {
        data: []
    }

    getData = async () => {
        const res = await axios('https://5e9921015eabe7001681c784.mockapi.io/mentees')
        console.log(res)
        const data = res.data
        await this.setState({ data })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1 className="text-center pt-3 pb-3">This is Api</h1>
                <h1>{this.state.title}</h1>
                <div className="row">
                    <Tweets mentees={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Api

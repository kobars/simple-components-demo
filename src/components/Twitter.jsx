import React from 'react'
import TwitterSvg from '../svg/twitter.svg'

const TwitterCard = (props) => {
    const { name, content, hashTag } = props
    return (
        <div className="container d-flex justify-content-center">
            <div className="card text-white bg-info mb-3">
                <div className="card-body">
                    <div className="card-title">
                        <h2>
                            <span className="pr-3">
                                <img
                                    alt="twitter-icon"
                                    src={TwitterSvg}
                                    width="26"
                                    height="26"
                                />
                            </span>
                            {name}
                        </h2>
                    </div>
                    <br />
                    <p className="card-text font-weight-bold">{content}</p>
                </div>
                <p className="card-text font-weight-bold pl-3 pb-3" style={{ fontSize: '12px' }}>#{hashTag}</p>
            </div>
        </div>
    )
}

export default TwitterCard

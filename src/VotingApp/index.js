import React, {Component} from 'react'

import './style.css'

export default class VotingApp extends Component{
    render(){
        return (
            <div className="main ui text container">
                <h1 className="ui dividing centered header">Popular Products</h1>
                <div id="content">
                    <div className='ui unstackable items'>
                        <div className='item'>
                            <div className='image'>
                                <img src="images/products/image-yellow.png" />
                            </div>
                            <div className='middle aligned content'>
                                <div className='header'>
                                    <a>
                                        <i className='large caret up icon' />
                                    </a>
                                    50
                                </div>
                                <div className='description'>
                                    <a href="#">
                                        Yellow Pail
                                    </a>
                                    <p>
                                        On-demand sand castle construction expertise.
                                    </p>
                                </div>
                                <div className='extra'>
                                    <span>Submitted by:</span>
                                    <img
                                        className='ui avatar image'
                                        src="images/avatars/molly.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src="images/products/image-yellow.png" />
                            </div>
                            <div className='middle aligned content'>
                                <div className='header'>
                                    <a>
                                        <i className='large caret up icon' />
                                    </a>
                                    50
                                </div>
                                <div className='description'>
                                    <a href="#">
                                        Yellow Pail
                                    </a>
                                    <p>
                                        On-demand sand castle construction expertise.
                                    </p>
                                </div>
                                <div className='extra'>
                                    <span>Submitted by:</span>
                                    <img
                                        className='ui avatar image'
                                        src="images/avatars/molly.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='image'>
                                <img src="images/products/image-yellow.png" />
                            </div>
                            <div className='middle aligned content'>
                                <div className='header'>
                                    <a>
                                        <i className='large caret up icon' />
                                    </a>
                                    50
                                </div>
                                <div className='description'>
                                    <a href="#">
                                        Yellow Pail
                                    </a>
                                    <p>
                                        On-demand sand castle construction expertise.
                                    </p>
                                </div>
                                <div className='extra'>
                                    <span>Submitted by:</span>
                                    <img
                                        className='ui avatar image'
                                        src="images/avatars/molly.png"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
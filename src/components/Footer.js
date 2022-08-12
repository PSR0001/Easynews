import React from 'react'
import '../App.css'
const Footer = () => {
    return (
        <div>

            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links text-grey">
                                <li>Home</li>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Get Started</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>Home</li>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Get Started</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li>Home</li>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Get Started</li>
                                <li>Imprint</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u>National Transaction Corporation</u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                            <p className="h6">© All right Reversed.Sunlimetech</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
import React from 'react'
import '../App.css'
import { AiOutlineFacebook ,AiFillGithub,AiOutlineLinkedin,AiFillTwitterCircle} from 'react-icons/ai';




const Footer = () => {
    return (
        <div>

            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-white text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links ">
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
                            <ul className="list-unstyled list-inline social text-center text-white">
                                <li className="list-inline-item text-lg-left text-white"><AiOutlineFacebook /></li>
                                <li className="list-inline-item"><AiFillGithub /></li>
                                <li className="list-inline-item"><AiOutlineLinkedin /> </li>
                                <li className="list-inline-item"><AiFillTwitterCircle  /> </li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p><u>GG Corporation limited</u> </p>
                            <p className="h6">© All right Reversed</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
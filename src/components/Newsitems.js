import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, descriptions, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ 'width': '18rem' }} >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{descriptions}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unkhown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems

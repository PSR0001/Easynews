import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps={
        country: 'in',
        pageSize: 9,
        category: 'general'
    }
     Proptypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    articles = []
    
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            button: true
        };
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2021-12-15&to=2021-12-15&sortBy=popularity&apiKey=4f5f88aa667c490e90c2c2b1213f6bc6&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let dataParse = await data.json()
        this.setState({ articles: dataParse.articles })
    }
    
    previousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2021-12-15&to=2021-12-15&sortBy=popularity&apiKey=4f5f88aa667c490e90c2c2b1213f6bc6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let dataParse = await data.json()
        this.setState({
            page: this.page - 1,
            articles: dataParse.articles,
        })
    }
    
    nextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.pageSize)) {
            
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2021-12-15&to=2021-12-15&sortBy=popularity&apiKey=4f5f88aa667c490e90c2c2b1213f6bc6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let dataParse = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: dataParse.articles,
            })
        }
        
    }
    
    default_url = 'https://st1.bgr.in/wp-content/uploads/2021/12/Flipkart-Smartphone-Deals.jpg'
    render() {
     
        return (
            <div className='container my-3'>
                <h2>News Api - Headline</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className='col-md-4'>
                            <Newsitems title={element.title.slice(0, 40)} descriptions={element.description ? element.description.slice(0, 70) : ''} imageUrl={element.urlToImage ? element.urlToImage : this.default_url} newsUrl={element.url} author={element.author} date={element.publisheAt} />
                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" onClick={this.previousClick} className="btn btn-warning"> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" onClick={this.nextClick} className="btn btn-warning">Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News

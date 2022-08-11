import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
// import {useEffect} from 'react'



let API = "554578280c364851bc7b40b4accf332c";
export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }
    Proptypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    // articles = []

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            button: true
        };
    }

    articles = []
    defaultArticle =[
        {
            "source": {
            "id": null,
            "name": "Jalopnik"
            },
            "author": "Steve DaSilva",
            "title": "Rivian's Cash Burn Is Becoming a Problem",
            "description": "Analysts are concerned about how much Rivian is spending, Tesla is lobbying for a factory in Ontario, and things are bad in Europe. All that and more in The Morning Shift for Thursday, August 11, 2022.Read more...",
            "url": "https://jalopnik.com/rivians-cash-burn-is-becoming-a-problem-1849400028",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/202fca143fbbf8b511dc61aa9e8d727b.png",
            "publishedAt": "2022-08-11T14:53:20Z",
            "content": "Analysts are concerned about how much Rivian is spending, Tesla is lobbying for a factory in Ontario, and things are bad in Europe. All that and more in The Morning Shift for Thursday, August 11, 202… [+6997 chars]"
            }
    ] 
    async componentDidMount() {
        // console.log("component mount")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2022-08-11&sortBy=popularity&apiKey=${API}&pageSize=${this.pageSize}`
        // let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=554578280c364851bc7b40b4accf332c&pageSize=${this.pageSize}`

        let data = await fetch(url)
        let dataParse = await data.json()
        if (dataParse.status === 'ok') {
            this.setState({ articles: dataParse.articles })
        }
        else {
            this.setState({ articles: this.defaultArticle})
        }
    }

    previousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2022-08-11&sortBy=popularity&apiKey=${API}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let dataParse = await data.json()
        if(dataParse.status === 'ok'){
        this.setState({
            page: this.page - 1,
            articles: dataParse.articles,
        })}
        else {
            this.setState({ articles: this.defaultArticle})
        }
    }

    nextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2022-08-11&sortBy=popularity&apiKey=${API}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let dataParse = await data.json()
            if(dataParse.status === 'ok'){
                this.setState({
                    page: this.page + 1,
                    articles: dataParse.articles,
                })}
                else {
                    this.setState({ articles: this.defaultArticle})
                }
        }

    }

    default_url = 'https://st1.bgr.in/wp-content/uploads/2021/12/Flipkart-Smartphone-Deals.jpg'
    render() {

        return (
            <>
                <div className='container my-3'>
                    <h2>News Api - Headline</h2>
                    <div className='row'>
                        {  this.state.articles.map((element) => {
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
            </>
        )
    }
}

export default News

import React, { Component } from "react";
import { Newsitem } from "./Newsitem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?language=${this.props.language}&language=${this.props.language}&country=${this.props.country}&category=${this.props.category}&apiKey=854dd83a3e614a14a1b23d1ff94b2624&page=1&pagesize=6`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }

  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=${
      this.props.language
    }&country=${this.props.country}&category=${
      this.props.category
    }&apiKey=854dd83a3e614a14a1b23d1ff94b2624&page=${
      this.state.page + 1
    }&pagesize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);
    this.setState({ articles: parseddata.articles });

    this.setState({
      page: this.state.page + 1,
      loading: false,
    });
  };
  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=${
      this.props.language
    }&country=${this.props.country}&category=${
      this.props.category
    }&apiKey=854dd83a3e614a14a1b23d1ff94b2624&page=${
      this.state.page - 1
    }&pagesize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);
    this.setState({ articles: parseddata.articles });

    this.setState({
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsBook - Top Headlines</h1>
        <span></span>
        <div className="container d-flex  justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="rounded-pill btn btn-dark"
            onClick={this.handleprev}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.round(this.state.totalResults / 10)
            }
            type="button"
            className="rounded-pill btn btn-dark"
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div>

        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Flatest-news-breaking-report-daily-newspaper-vector-28478020&psig=AOvVaw2aCb1iNJrqF3A5o9hLl4OV&ust=1647674991290000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj-o-eRz_YCFQAAAAAdAAAAABAD"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

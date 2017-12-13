import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import {articleStore} from "../stores/Stores";
import ArticleList from "./ArticleList";

class Container extends Component {
    static propTypes = {};

    constructor() {
        super();
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    };

    render() {
        return <ArticleList articles={this.state.articles}/>
    }
}

export default Container
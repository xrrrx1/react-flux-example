import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import {deleteArticle} from "../AC/articlesAC";

class Article extends Component {
    static propTypes = {

    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title} <button onClick={this.handleDelete}>Delete me</button></h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    handleDelete = (e) => {
        e.preventDefault();
        deleteArticle(this.props.article.id);
        console.log('deleting', this.props.article.id)
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    }
}

export default toggleOpen(Article)
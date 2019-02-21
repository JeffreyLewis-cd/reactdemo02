import React from 'react'
import HOCList from './hocList';
import CommentList from './commentList';
import BlogPost from './blogPost';
import withSubscription from './withSubscription'

const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource3) => DataSource3.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource4) => DataSource4.getBlogPost()
);
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const style = {
            width: '500px',
            'textAlign': 'center',
            title: {
                color: 'red'
            }
        };
        return (
            <div style={style}>
                <h1 style={style.title}>hello hoc</h1>
                <CommentListWithSubscription/>
                <BlogPostWithSubscription/>
            </div>
        );
    }
}

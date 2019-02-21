import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>{this.props.comment.id}</h2>
                <h3>{this.props.comment.title}</h3>
            </div>
        )
    }
}

export default Comment;
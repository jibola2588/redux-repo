import React from 'react';
import { connect } from 'react-redux'

const Post = (props) => {
    console.log(props.posts);
  return (
    <div>
        { 
           props.posts.map(post => ( 
            <div 
            key = {post.id}
            className='p-4 shadow-md w-full sm:w-1/2 md:w-1/3'>
            <p>id : {post.id}</p>
            <p>title : {post.title} </p>
            <p>desc: {post.desc} </p>
         </div>
           ))
        }
    </div>
  );
}

const mapStateToProps = state => { 
    return { 
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Post);

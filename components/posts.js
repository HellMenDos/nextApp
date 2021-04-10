import React,{Component} from 'react'
import Link from 'next/link'

class PostsComponent extends Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
    }    
    delete(id) {
        this.props.delete(id)
    }
    render() {
        return (
            <div>
                <hr/>
                <h1>{this.props.id}</h1>
                <h1>{this.props.title}</h1>
                <button onClick={() => this.delete(this.props.id)}>Delete</button>
                <Link href={`/post/${this.props.id}`}>GO</Link>
            </div>
        )
    }
}


export default PostsComponent
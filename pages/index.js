import {Component} from 'react';
import PostsComponent from '../components/posts'
import SearchComponent from '../components/search';


class IndexPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      value: '',
      posts: [] 
    }
        
  }
  componentDidMount() {
    this.setState({
      posts: this.props.posts
    })
  }

  delete = (val)=> {

      let index = this.props.posts.findIndex(data => data.id == val)
      this.props.posts.splice(index,1)
      let post = this.props.posts.filter(dt => dt.title.includes(this.state.value))
      this.setState({ posts: post })
      
  }

  change = (val)=> {
    let filtred = this.props.posts.filter(dt => dt.title.includes(val))
    this.setState({
      value: val,
      posts: filtred,
    })
  }

  render() {
    return (
      <>
      <SearchComponent change={this.change} />
     <div>
      {this.state.posts.map((data) => 
          <PostsComponent 
            delete={this.delete} 
            key={data.id} 
            title={data.title} 
            id={data.id} 
          />
      )}
      </div>
     </>
    )
  }
}


export async function getServerSideProps(context) {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  let posts = await response.json()
      
  return { props: { posts } }
  
}

export default IndexPage

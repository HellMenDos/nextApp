import React,{Component} from 'react'
import { useRouter } from 'next/router'

let post = (props) => {
    return (
        <h1>{props.post.title}</h1>
    )
}

export async function getServerSideProps(context) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`)
    let post = await response.json()
        
    return { props: { post } }
    
  }


export default post
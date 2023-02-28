import React from 'react'
import NewPostForm from '@/components/NewPostForm'
import { Container } from 'react-bootstrap'

const NewPost = () => {
  return (
    <Container>
        <h1>New Post</h1>
        <NewPostForm/>
    </Container>
  )
}

export default NewPost
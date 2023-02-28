import React from 'react'
import UpdatePostForm from '@/components/NewPostForm'
import { Container } from 'react-bootstrap'

const UpdatePost = () => {
  return (
    <Container>
        <h1>Update Post</h1>
        <UpdatePostForm/>
    </Container>
  )
}

export default UpdatePost
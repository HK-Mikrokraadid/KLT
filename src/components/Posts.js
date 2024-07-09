import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';


const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://blog.hk.tlu.ee/posts', {
                headers: {
                    Authorization: `Bearer ${token}`,
                  }
            });
            setPosts(response.data.posts);
            console.log(response.data.posts);
            
        } catch (error) {
            if (error.response.status === 401) {
                navigate('/');
            }
            console.log(error.response.status); 
        }   
    }

    return (
        <Container>
            <Row>
            <h1>Siia tulevad Martti loodud API'st postitused</h1>
            </Row>
            <Row>
            {posts.map((post) => (
                <p> 
                    {post.title}
                    {post.body}
                </p>
            ))}   
            </Row>
        </Container>
    )
};

export default Posts;
// const express = require('express')
import express from 'express';
import path from 'path';

const app = express()
const port = 3000

const dirname = path.resolve();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Hello From Contact page')
})

app.get('/image', (req, res) => {
  
    res.sendFile(dirname + '/static/car.jpg');
})

app.use('/home', express.static(dirname, {index: '/static/index.html'}))

app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let postObj = [
        {
            postId: 1,
            postTitle: "INDvsPak",
            postDesc: "21-Sep-25 will be the match day"
        },
        {
            postId: 2,
            postTitle: "UAEvsPak",
            postDesc: "17-Sep-25 will be the match day"
        },
        {
            postId: 3,
            postTitle: "AfgvsBan",
            postDesc: "23-Sep-25 will be the match day"
        },
    ];

    postObj.map((post) => {
        if(post.postId == postId){
            console.log(post)
            postObj = post
        }
    })

    res.send(postObj);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

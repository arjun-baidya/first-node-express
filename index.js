const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001

app.get('/',(req,res)=>{
    res.send('Hello God! my love')
})

const users = [
    {id:1, name:'arjun', occ:'Engineer', edu:'BSc Eng'},
    {id:2, name:'Baidya', occ:'Engineer', edu:'BSc Eng'},
    {id:3, name:'Chandra', occ:'Engineer', edu:'BSc Eng'},
]
app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    res.send(users)
})

app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hit the post', req.body)
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const user = users[id]
    res.send(user)
})
app.listen(port,()=>{
    console.log(`listining port,${port}`)
})
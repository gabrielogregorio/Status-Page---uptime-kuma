import express from 'express'

const app = express()

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World')
})



app.get('/health', (req, res) => {
    console.log(req.body)
    res.status(200).json( {status: 'success'})
})


app.listen(3334, () => {
  console.log('Server is running on http://localhost:3333')
})

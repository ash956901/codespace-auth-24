
const app=require('./app');
require('dotenv').config();

//listen to a port

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port no: ${process.env.PORT}`);
})
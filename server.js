const express= require('express');
const child_process= require('child_process');
const app= express();
app.get('/',(req, res)=>{
    //res.send('Hello World!');
    child_process.exec('fortune',(error, message)=> {
        if(error===null){
            res.send("Your fortune is" + message+ "Right now it is: " + Date());
        } else{
            res.send('Error: '+ error);
        }
    })
})

app.listen(3000, () => {
    console.log('servver started');
})
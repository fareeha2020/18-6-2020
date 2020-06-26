
const express=require('express');
const { response } = require('express');
const app=express();
//allow for static files .html.css.js to be requested and returned in a response
app.use(express.static('public'));
//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
// app.get('/riddle.html',function(request,response){
//     response.send('hello world');
// });
const port=4000;
app.listen(port,function(){
    console.log(`the express server is listening :http://localhost:${port}`);
});

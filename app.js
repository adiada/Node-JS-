
let express = require('express')
let bodyParser = require('body-parser')

let app = express()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs')


app.get('/',function(req,res){
    res.render('index');
})

app.get('/contact',function(req,res){
    // console.log(req.query);
    res.render('contact',{qs:req.query});
})

app.post('/contact',urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success',{data:req.body});
})

app.get('/profile/:name',function(req,res){
    // res.send('You requested to see a profile with the id of ' + req.params.name)
    let data = {age : 29 , job : 'ninja',hobbies : ['biking','skiing','rock-climbing']}
    res.render('profile',{person:req.params.name, data : data});
})



 app.use('/assets',express.static('assets'))
// app.use('/assets',function(req,res,next){

//     res.sendFile(__dirname+'/assets' + req.url)
//     return ;
// })


app.use(function(req, res, next) {    
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

  


app.listen(3000)

 

//Basic Routing

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer((req,res)=>{
//     if(res.url === '/home' || req.url === '/'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname+'/index.html').pipe(res);
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }
//     else if(req.url === '/api/ninjas'){
//         res.writeHead(200,{'Content-type':'application/json'});
//         let ninjas = [{name : 'ryu', age : 29}, {name : 'oyoshi', age : 30} , {name : 'machuba', age : 25}];
//         res.end(JSON.stringify(ninjas))
//     }
//     else{
//         res.writeHead(200,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname + '/error.html').pipe(res)
//     }
// });

// server.listen(3000,'127.0.0.1')

//serving JSON

// let http = require('http')
// let fs = require('fs')

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'application/json'});
//     let myObj = {
//         name:'Ryu',
//         job:'Ninja',
//         age: 29
//     }
//     res.end(JSON.stringify(myObj))
// })

// server.listen(3000,'127.0.0.1')

//Pipe and serving HTML

// let fs = require('fs');
// let http = require('http');


// let server = http.createServer(function(req,res){
//     console.log('request was made ' + req.url);
//     res.writeHead(200,{'Content-type':'text/html'});
//     let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
//     myReadStream.pipe(res);
//     // res.end('-------- Document ends here -----------')
// })

// server.listen(3000,'127.0.0.1');


//Writeable Strams

// let fs = require('fs')

// let myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8')
// let myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')

// myReadStream.on('data',function(chunk){
//     console.log('new chunk recieved')
//     myWriteStream.write(chunk)
// })


//Readable Streams 

// let http = require('http')

// let fs = require('fs')

// let myReadStream = fs.createReadStream(__dirname +'/readMe.txt','utf8')


// myReadStream.on('data',function(chunk){
//     console.log('-------------------------')
//     console.log('new chunk recieved')
//     console.log('-------------------------')
//     console.log(chunk)
// })


//Creating a server

// let http = require('http')

// let server = http.createServer(function(req,res){
//     console.log(`request was made: ${req.url}`)
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey Ninjas!');

// })

// server.listen(3000,'127.0.0.1');

// console.log('yo dawgs now listening to port 3000');



//Creating and Removing directories

// let fs = require('fs')

// fs.mkdir('newDir',(err)=>{
//     if(err)
//     console.log(err.message)
// })


// fs.unlink('./newDir/writeMe.txt',(err)=>{
//     if(err)
//     console.log(err.message)
// })

// fs.unlink('writeMe.txt',(err)=>{
//     if(err)
//     console.log(err.message)
// })

// fs.writeFile('writeMe.txt','Yay! we wrote intoooo this file','utf8',(err)=>{
//     if(err)
//     console.log(err.message)
//     else
//     console.log('succesfully written into file!')
// })
// let readMe = fs.readFileSync('readMe.txt','utf8')
// console.log(readMe)
// fs.unlink('writeMe.txt',()=>{});



//Reading and writing files

// let fs = require('fs')

// let readMe = fs.readFileSync('readMee.txt','utf8')
// fs.writeFileSync('writeMe.txt',readMe)

// console.log(readMe)

// fs.readFile('readMe.txt','utf-8',(err,data)=>{
//     if(data)
//     console.log(data)
//     else
//     console.log(err.message)
// });

//event emitter in node

// let events = require('events');
// const { memoryUsage } = require('process');
// let util = require('util')
// // let myEmitter = new events.EventEmitter();


// let Person = function(name){
//     this.name = name;
// };

// util.inherits(Person,events.EventEmitter);

// let james = new Person('james')
// let mary = new Person('mary')
// let ryu = new Person('ryu')

// let people = [james,mary,ryu]

// people.forEach((person)=>{
//     person.on('speak',(msg)=>{
//         console.log(`${person.name} says : ${msg}`);
//     })
// })
 
// james.emit('speak','hey how are you guys?')
// mary.emit('speak','\'I am fine, what about you?\'')
// ryu.emit('speak','I am kinda hungry!')

// myEmitter.on('someEvent',function(mssg){
//     console.log(mssg);
// });


// myEmitter.emit('someEvent','the event was emitted');



//module exports
// let counter = require('./counter')

// console.log(counter.ct1(['a','b','c','d','e']))
// console.log(counter.ct2(['a','b','c','d','e']))
// console.log(counter.sum(2,3));

//get filename and dirname
// console.log(__dirname)
// console.log(__filename)

// let time = 0;

// let intervalID = setInterval(()=>{
//     time++;
//     if(time ===11)
//         clearInterval(intervalID);
//     else
//         console.log(`${time} seconds have passed`)
// },1000);
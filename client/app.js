//         .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
//        xM                              Mk
//       kM                                MO
//      OM                                  M0
//     0W                                    WK
//    ,MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
//    ,M'                                    .M;
//    ,M'  :O  ox  xo  Oc  K:         xMMM'  .M;
//    ,M'  xW  OX  KO  Nx  Md         NK.Ml  .M;
//    'M;                                    ,M'
//     lMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo
//    ,M'                               l    .M;
//    ,M'  xW  OX  K0  Nx  Md KMMMMM; M: 0x  .M;
//    ,M'                             .MM0   .M;
//     XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN
//    .Mx                                    xM.
//    ,M'  :O  ox  xo  Oc  K:         xMMM'  .M;
//    ,M'  xW  OX  KO  Nx  Md         NO.Ml  .M;
//    'M,                                    ,M,
//      NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW
//
  //declare vars
const express = require('express');
const app = express();
const port = 3000;




//express routing and stuff
app.use(express.urlencoded({
  extended: true 
}));
app.use(express.json());

app.get('/',(req, res) =>{
  res.sendFile(__dirname +'/index.html')
})

app.get('/',(req, res) =>{
  res.sendFile(__dirname +'/dbManagers')
})

app.get('/',(req, res) =>{
  res.sendFile(__dirname +'/images')
})


//listen
app.listen(port, ()=>{
  console.log('port opened on ' + port) 

})

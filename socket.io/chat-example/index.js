"use strict";
var port = Number(process.env.PORT || 3000);
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var dateFormat = require('dateformat');
var now = new Date();

let stats = {
    "st_date": 0,
    "cur_date": 0
};

app.get('/', function(req, res){
  console.log(req.headers['user-agent']);
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      if (!stats["st_date"]) {
        stats["st_date"] = Date.now();
      }
      stats["cur_date"] = Date.now();
      console.log( stats["st_date"] );
      let client_ip = socket.request.connection.remoteAddress;
      if (client_ip in stats) {
          /* count messages per ip */
          stats[client_ip]++;
      } else {
          stats[client_ip] = 1;
      }
    let tm = dateFormat(Date(), "isoDateTime")
    console.log(client_ip, stats[client_ip], tm, msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:', port);
});

# chat-example

This is the source code for a very simple chat example used for 
the [Getting Started](http://socket.io/get-started/chat/) guide 
of the Socket.IO website.

Please refer to it to learn how to run this application.

=========

I have modified following changes to the above source from http://socket.io/get-started/chat/
--added statistics
--added client source ip address
--added client message count per ip address
--added client message time stamp
--added port number to pick from environment

Run:
$ node index.js
listening on *: 3001
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/51.0.2704.79 Chrome/51.0.2704.79 Safari/537.36
Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0
1471589609021
::ffff:192.168.1.5 1 2016-08-18T23:53:29-0700 Ping Foobar!
1471589609021
::ffff:192.168.1.5 2 2016-08-18T23:54:04-0700 Pong Barfoo!
1471589609021
::ffff:192.168.1.5 3 2016-08-18T23:57:01-0700 Can you upgrade sw to v2.1
1471589609021
::ffff:192.168.1.5 4 2016-08-18T23:57:54-0700 Yes, It can be done today evening.


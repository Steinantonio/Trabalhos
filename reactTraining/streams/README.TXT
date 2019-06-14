<h2>STREAMS APP made by React and Redux</h2>

Ok so to run this app you first need to run the 3 servers that compose it. inside the client folder
you will run the following procedures :

npm start - inside the client folder, starts ou front-end server.



npm start - inside the SERVER folder, starts our fake DB server.


npm start - inside the RmtpServer Folder, starts our streaming  video.



OK after you started all 3 servers you can begin to see the CRUD operations on the server.


After that, to stream, you must create a stream, and go inside it, there you will get the STREAM-ID present on the URL
The url will be something like : http://localhost:3000/streams/1     ==== > The number here is the ID.


After getting the ID you can go to OBS, the only player supported by this, go to stream settings :

Service : Custom
Server : rtmp://localhost/live
StreamKey : STREAM_ID in my case : 1  ( just the number, nothing else.)

After that just press start streaming you should see your stream up and going.

This was made for learning purposes. Thanks :D 
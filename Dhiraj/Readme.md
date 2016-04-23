Week 1:
Commit 1:

Steps for installation Heroku on Local Machine

Week 2: 
Commit 1:

Made login app in NodeJS with MongoDB backend.
MongoDB is currently running on the local machine.

Week 2:
Commit 2:

Created an api document for the Registration, login and log out.

Week 2:
Commit 3:

Updated the couch db ppt added map-reduce functionality and examples in it

Week 3:
Commit 1:

Connecting couch db with node js

Week 3:
Commit 2:

installed client session node modules, 
logout operation of destroying sessions.
----------------------------------------------------------------------------------------------------------------------------------------

Journal

week 1:

Heroku: Front-end:

Intro:

Heroku is cloud based paas service supporting several programing languages. Heroku was acquired by salesforce.com initially it was only supported for Ruby but after adding sources node js and all are also supported.

 

Installing heroku.:

 

How does it work.

https://devcenter.heroku.com/articles/getting-started-with-nodejs (Links to an external site.)

introduction

Official website of heroku where we get the tutorials of how to do it. This link gives you the idea of how to install the heroku downloading the heroku tool belt. Further we have to upload the whole code in the git and then deploy the app into heroku. So heroku will generate a link by going to that link we can open your project in the web browser. I got the whole thing from the above site and also referring the videos.

 

Other installing tips I got from the following video:

Here are there links:

 

https://www.codeschool.com/screencasts/heroku

https://www.youtube.com/watch?v=uLF_hmtxAsY

https://blog.codeship.com/heroku-github-nodejs-deployment/ (Links to an external site.)

week 2:

Last week I worked on the front end which was installation of heroku on the local machine.
This week I started with the node js application. I created a nodeexpress project in eclipse on the local machine. It was a mixture of html and javascript files which were distributed under views and routes folder respectively.
I made the html5 the page that is visible to the client and while the functionality was written under the routes folder.
The routes and the views folder come in built.
The direction or the flow of the program is managed between the views and the routes with the help of app.js which is a javascript file that also comes in-built.
When we run the code it first starts from the app.js file. Further in the app.js file with the help of app.get("/") the code goes to the index.js file in the routes and within the index.js file there is an instruction res.render it directs to the index.ejs file which is an html file with the extension ejs and with the help of action instruction it directs back to app.js and the follow and further followed.
Mongodb implemented in the back end we were confused with which db to go on and I decide to do with mongo still not sure that whether it  is better than couch we might be switching back to the couch db but for the time being did mongo
Mongo I installed and started in my local machine further I installed a node mongo module with the help of it I was able to connect my login application made in node express to the mongo running on local machine.
Wrote an API doc of all the parameters required for the registration (signup), login and logout with the returning status code.
Made some slides on Map-Reduce function in the couch db and gave some examples with it the slides where for the extra credit presentation.


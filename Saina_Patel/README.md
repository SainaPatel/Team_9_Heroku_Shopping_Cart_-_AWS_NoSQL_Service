Week 1:
We discussed above the entire design of our project and the idea of the app which we want to implement. Also I have researched about heroku and how to build a connection between heroku and aws. The entire research is in my file Research_about_Heroku.

FrontEnd:
On heroku we will have our nodejs application deployed

Backend:
On aws account we will have S3 BUCKETS and our database

1. We will create a nodejs application, and push it on git. This application we will put on heroku, which will then act as our web server.
2. On the backend we will have AWS where our database will be present. Now in this we will create multiple instances and have our database on each instance. All these instances will be behind a load balancer. 
3. The web server will then everytime make call to this load balancer from which the healthy and available node will respond with updated data. The call which we make from web server to load balancer will be REST call.


Week 2 :
1. Written code for user sign_up and storing all the details in mongoDB
2. Updated Api Document for Api's(addToCart, viewCart, removeFromCart)
3. Worked on Presentation of CouchDB and installed and ran various queries to test the database

Week 3 :
1. Created a user interface page for View Cart of books and created an API for viewCART.
2. Deployed our nodejs code on heroku and all the steps are in Heroku installation steps in my folder.

## ✨This is a challenge from course Full Cycle 3.0
### Desafio Nginx Node and Mysql Databse

- The challenge is to create a docker-compose file to raise up an application with a database mysql, an application node and nginx doing a reverse proxy.
<hr>

* ### ▶️ To run this image just type in your terminal
 > **docker-compose up**


Now you have a server running at port 8080 and if you call localhost:8080/ you receive a message: **Full Cycle Rocks!** and a list of names
from table people inside database.

📦 Images from dockerhub: 
  - mysql:5.7
  - lcassiol/nginx-node:latest
  - nginx:1.15.0-alpine

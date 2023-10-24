
http://localhost:3000/users/1

npx liquibase update

CLEAR DOCKER VOLUMES TO CLEAR DOCKER DATA
docker volumes ls
docker volums rm

To Run Back End

Install Docker

In persistence directory:
npm run persistence
npm run migrate
npm run serve
npm run flask

To Run Front End

In front-end directory
npm run dev

Sample Flask Query
http://127.0.0.1:5000/?garage1=10&garage2=10&garage3=7
http://localhost:3000/users/1
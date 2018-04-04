# Sample application using mongo, express, react and node (MERN)
I built this application by following along with the udemy course: Following along with udemy course : https://www.udemy.com/node-with-react-fullstack-web-development. The application will make a good template for future applications I want to build.

## Live Demo
[Click here to see live demo hosted on Heroku](https://safe-cove-62380.herokuapp.com/)
(Free tier of service used to send emails may expire)

## Getting Started

### Prerequisites

This sample application integrates with free services for authentication([Google](https://console.developers.google.com)), email([SendGrid](https://sendgrid.com/)) and test payments([Stripe](https://dashboard.stripe.com/test/dashboard)). In developing the application, I also used [mlab](https://mlab.com/) to host the mongo database and [Heroku](https://dashboard.heroku.com) for deployment but these are not hard requirements. 

For local development you need to have node and npm installed.

### Installing

To run locally.

Clone the project:
```
git clone https://github.com/darrenjl/sample-mern-app.git
```

Copy prod.js to dev.js: 
```
cp config/prod.js config/dev.js
```

Replace all the keys in dev.js with your own. Also need to replace the Stripe public key in .env.development and .env.production.

Install all server and client dependencies:
```
npm install
(cd client/ && npm install)
```

Run the application locally in watch mode (also opens a localtunnel to listen to sendgrid webhook calls):
```
npm run dev
```

App will be available at:
```
http://localhost:3000/
```

## Deployment

Configure git remotes to point to a new heroku app:
```
heroku git:remote -a <name of app>
```

Push changes to heroku remote:
```
git push heroku master
```


## Acknowledgments

* Thanks to Stephen Grider for developing the excellent udemy course: https://www.udemy.com/node-with-react-fullstack-web-development

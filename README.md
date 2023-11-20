# Running the app and deploying

To start the app, run  

```npm run start```

This app requires the backend service developed in `kanbas-node-server-app` (a separate github repo). The URL to this backend service is stored as an environment variable called `REACT_BASE_APP`.

Add this environment variable and set it to the backend URL.

When running the backend locally, you can set the environment variable to:

```REACT_BASE_APP=http://localhost:4000```

But, if you are hosting the backend remotely (using onrender or Heroku), the environment variable must be set to the backend service's URL.

For example, my onrender site's link is: `https://kanbas-node-server-app-riddhigupta06.onrender.com`. So, if I wanted to use this deployed backend, I would set:

```REACT_BASE_APP=https://kanbas-node-server-app-riddhigupta06.onrender.com```

Note, there are no routes like `/api` or `/a5` added to the environment variable URL - this is taken care of in the code.

If the above onrender site is unavailable, you can create your own by connecting to the `kanbas-node-server-app` repo and following the instructions in its `README.md`.
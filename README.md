# Deploying

`REACT_BASE_APP` is a required environment variable which links to the backend service. Add this environment variable and set it to the deployed backend URL.

For example, my onrender site's link is: `https://kanbas-node-server-app-riddhigupta06.onrender.com`. Note, there are no routes like `/api` added to the environment variable URL - this is taken care of in the code.

If the above onrender site is unavailable, you can create your own using the `kanbas-node-server-app` repo and by following the instructions in its `README.md`.
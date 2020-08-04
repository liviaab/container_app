# Container App

This is a React application created with `create-react-app` and is an entrypoint to the rendering of other two microfrontends:

* [`List`](https://github.com/liviaab/list-component)
* [`Detail`](https://github.com/liviaab/detail-component)

### Getting Started
1. Clone the repo
2. Go to `container_app` directory and run `npm install`
3. Change the hardcoded microfrontends urls in `src/Microfrontend.jsx` to the ones created by webpack-server
4. Start the application with `npm start`

### To do
- [ ] Change hardcoded urls to .envs
- [ ] Add tests
- [ ] Add configuration to deploy on Heroku

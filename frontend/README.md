# Dream Journal Frontend

This front is built using ReasonReact using the `bsb` theme `react-hooks`.

> To create your own ReasonReact project with bucklescript, use `bsb -init projectName -theme react-hooks`

The project currently uses Bootstrap for styling, but I plan on swapping that out with [tailwindcss](https://tailwindcss.com/), [styled-components](https://styled-components.com/) or [material](https://material.io/) (or more specifically [material-ui](https://material-ui.com/) with Reason bindings [bs-material-ui](https://redex.github.io/package/bs-material-ui)) eventually.

> **NOTE:** It looks like `bs-material-ui` is no longer maintained.

## Plan

- [ ] Design base ui
- [ ] Design create new entry button
- [ ] Render new entry component
- [ ] Replace styling with `tailwindcss`
- [ ] Display existing entries from database
- [ ] Save new entries to database

## Run

```sh
npm install
npm run server
# in a new tab
npm start
```

Open a new web page to `http://localhost:8000/`. Change any `.re` file in `src` to see the page auto-reload. **You don't need any bundler when you're developing**!

**How come we don't need any bundler during development**? We highly encourage you to open up `index.html` to check for yourself!

# Bundle for Production

We've included a convenience `UNUSED_webpack.config.js`, in case you want to ship your project to production. You can rename and/or remove that in favor of other bundlers, e.g. Rollup.

We've also provided a barebone `indexProduction.html`, to serve your bundle.

```sh
npm install webpack webpack-cli
# rename file
mv UNUSED_webpack.config.js webpack.config.js
# call webpack to bundle for production
./node_modules/.bin/webpack
open indexProduction.html
```

# Handle Routing Yourself

To serve the files, this template uses a minimal dependency called `moduleserve`. A URL such as `localhost:8000/scores/john` resolves to the file `scores/john.html`. If you'd like to override this and handle URL resolution yourself, change the `server` command in `package.json` from `moduleserve ./ --port 8000` to `moduleserve ./ --port 8000 --spa` (for "single page application"). This will make `moduleserve` serve the default `index.html` for any URL. Since `index.html` loads `Index.bs.js`, you can grab hold of the URL in the corresponding `Index.re` and do whatever you want.

By the way, ReasonReact comes with a small [router](https://reasonml.github.io/reason-react/docs/en/router) you might be interested in.

# Sources

- [This came in handy for floating action buttons](https://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float)

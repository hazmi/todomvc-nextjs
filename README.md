# TodoMVC - Next.js

Another [TodoMVC](http://todomvc.com/) app.

## Framework
Built using [Next.js](https://nextjs.org/). A React Framework that works perfectly for SSR (Server Side Rendering) application.

## Deployment
Deployed using Zeit’s [Now](https://zeit.co/now).

## Key Features
* **Component Based React App**. All features inside the app was grouped into components, each components has single folder contained the necessary items, in this case, the React script and CSS file. Should the feature no longer needed in the future, it will be easier to remove, just remove the folder!
* [**Redux**](https://redux.js.org/).  Needed for easy sharing data between pages.
* **SSR (Server Side Rendering)**. See the view source to confirm the initial todos are rendered in server. Rendered faster, good for SEO.
* [**SASS**](https://sass-lang.com/), A CSS library. Allow me to nested styles, make it easier to write [BEM](http://getbem.com/)-like syntax.
* [**React Hooks**](https://reactjs.org/docs/hooks-intro.html): useState, useRef.

## Other Implementation
* [**TodoMVC using Create React App**](https://github.com/hazmi/todomvc-cra), its using almost the exact same component (apart redux and custom router), but using [Create React App](https://github.com/facebook/create-react-app), a React framework from facebook team.

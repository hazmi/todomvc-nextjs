# TodoMVC - Next.js

Another [TodoMVC](http://todomvc.com/) app.

## Framework
Built using [Next.js](https://nextjs.org/). A React Framework that works perfectly for SSR (Server Side Rendering) application.

## Deployment
Deployed using Zeit’s [Now](https://zeit.co/now).

## Key Features
* **Component Based React App**. All features inside the app was grouped into components, each components has single folder contained the necessary items, in this case, the React script and CSS file. Should the feature no longer needed in the future, it will be easier to remove, just remove the folder!
* **Redux**.  Needed for easy sharing data between pages.
* **SSR (Server Side Rendering)**. See the view source to confirm the initial todos are rendered in server. Rendered faster, good for SEO.

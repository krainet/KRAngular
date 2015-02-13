# The `src` Directory

## Overview

The `src/` directory contains all code used in the application along with all
tests of such code.

```
src/
  |- app/
  |  |- about/
  |  |- home/
  |  |- some-module-examples .../
  |  |- app.js
  |  |- app.spec.js
  |- assets/
  |- common/
  |- less/
  |  |- main.less
  |  |- variables.less
  |- index.html
```

- `src/app/` - application-specific code, i.e. code not likely to be reused in
  another application. [Read more &raquo;](app/README.md)
- `src/assets/` - static files like fonts and images. 
  [Read more &raquo;](assets/README.md)
- `src/common/` - third-party libraries or components likely to be reused in
  another application. [Read more &raquo;](common/README.md)
- `src/less/` - LESS CSS files. [Read more &raquo;](less/README.md)
- `src/index.html` - this is the HTML document of the single-page application.
  See below.

See each directory for a detailed explanation.

## `index.html`

The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that this is `KRAngular`,
specifies the main `AppController` controller, and contains the `ngView` directive
into which route templates are placed.

For more usable projects, we are modified base-views from ngBoilerplate. And now
KRAngular insert 3 views in index.html: 

index.html now includes 3 view's with 3 controllers:
- header FrontController
- container xxxController
- footer FooterController

Unlike any other HTML document (e.g. the templates), `index.html` is compiled as
a Grunt template, so variables from `Gruntfile.js` and `package.json` can be
referenced from within it. Changing `name` in `package.json` from
"KRAngular" will rename the resultant CSS and JavaScript placed in `build/`,
so this HTML references them by variable for convenience.

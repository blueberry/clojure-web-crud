# clojure-webapp

The goal of this project is to make web application with CRUD operations.

The application uses Mustache logic-less templates for html pages, Clostache is Mustache for Clojure. Ring is used as a basis for this web application.  It uses Compojure as routing library for Ring. 
Application should allow a user to create a new employee, update, delete and read all the employees from database. It should also allow for creation of a new project, update, delete and read all the projects from database.

## License

Copyright © 2018

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

##  Prerequisites

You will need <a href="https://github.com/technomancy/leiningen">Leiningen</a> 1.8.0 or above installed.

##  Running

To start a web server for the application, run:

<code>lein ring server</code>

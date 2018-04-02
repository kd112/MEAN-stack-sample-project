# Video APP

First Venture into full stack devops. This project follows the MEAN stack 
Clone the repository to destination either by download the zip file of the repository or clone the repository using 
```
git clone https://github.com/kd112/MEAN-stack-sample-project.git
```
To modify the angular front end , install the angular client
```
npm i g @angular/cli
```
Open the command line and cd into the directory
```
    cd MEAN-stack-sample-project
```
## Development server
## Requirements
  * Create a file called `config.json` placed in the root directory.
  ```
            {"authenticate":{
            "user":"username",
            "password":"password"
            },
            "uri":"uri"
        }
   ```
  * Run `npm install` to install all dependencies.

### Start Server
```
        node server.js
```
  * The port can be specified by running`export PORT=3002` on mac or linux or 
  `set PORT=3002` on windows to change the port number. Default port is 3000

  * Navigate to `http://localhost:3000` to view the application


## Modifying the Application
### Modifying the Express backend
  * Run `ctr C or command C` to stop the application and run `node server.js` to restart the application with the new modification
### Modifying the Angular Front End
  * Run `ng build` to recompile the front end with the new changes
## To Do
  * Handle Youtube urls which cannot be embedded.
  * Create a search bar to search the video list
  * Style the web page further - Make it more responsive.
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

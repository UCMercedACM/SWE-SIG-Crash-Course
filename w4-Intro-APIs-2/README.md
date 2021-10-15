# NodeJS-API-Workshop

This is the project I have showed in the Workshop. 
If you want to practice yourself there are 2 choices: Basketball Players API and Covid API. 
They each have their own explanation in the files and there is also explanation below.

## Getting Started
* Run the server
  ```sh
  node server.js
  ```

### Prerequisites
You need these for the project.
* npm
  ```sh
  npm install npm@latest -g
  ```
 * NodeJS
  ```sh
  https://nodejs.org/en/ go to this website and download LTS version. (any version is fine)
  ```

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/SalihSaygi/NodeJS-API-Workshop.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
### Practice
   #### Basketball API
  Sign up at rapidapi.com and then visit this link "https://rapidapi.com/theapiguy/api/free-nba"

  api link's base is "https://free-nba.p.rapidapi.com/" (the link you fetch from)

  Sample Code:
   const axios = require("axios").default;

   const options = {
     method: 'GET',
     url: 'https://free-nba.p.rapidapi.com/players',
     params: {page: '0', per_page: '25', search: 'lebron'},
     headers: {
       'x-rapidapi-host': 'free-nba.p.rapidapi.com',
       'x-rapidapi-key': '706f21a929msha2d95a17ec34dd7p1238f9jsnde2668804a60'
     }
   };
  this will give you players with people whose first name are lebron

  //copy your own code from the link (https://rapidapi.com/theapiguy/api/free-nba") with your own paramaters
   #### Covid API
  Covid api link is "https://covid-api.mmediagroup.fr/v1"

  To learn how to navigate and get your specific data, go to this link: "https://github.com/M-Media-Group/Covid-19-API/blob/master/README.md"

  For example https://covid-api.mmediagroup.fr/v1/cases shows you cases
  

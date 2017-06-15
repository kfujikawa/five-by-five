# [Five By Five](https://fivebyfive.herokuapp.com/)

## Summary 

Users can create a list of goals under Relationships, Career, Health and Wealth.  Radio operators give a subjective scale from one to five for the strength of a signal and its clarity. "I read you five by five" means the speaker is hearing a voice at full strength and clarity.  If we are going to accomplish goals we need them to be clear and defined!

## Technology

* Use Node.js and Express.js for backend.  RESTful API’s.  
* Client utilization of API’s 
* Serve static files (i.e. images)
* API Tests
* Continuous integration testing 
* Mobile first responsive design
* Landing page 

## API Documentation 
**Show Goals**
----
  Returns json data about a user entered goals.

* **URL**

  /goals

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ _id : 593af0d253e67b7d453cfcad, name : "My Awesome Goal", type: 'career', isChecked: true }]`
 
* **Error Response:**

  * **Code:** 401 UnauthorizedError <br />
    **Content:** `{ error : "You need a token to access that resource." }`

  `POST`
  
*  **URL Params**

  None

* **Data Params**

    **Required:**
 
   `name: "String", type: {type: String, enum: types }, isChecked: {type: Boolean, default: false }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ _id : 593af0d253e67b7d453cfcad, name : "My Awesome Goal", type: 'career', isChecked: true }]`
 
* **Error Response:**

  * **Code:** 401 UnauthorizedError <br />
    **Content:** `{ error : "You need a token to access that resource." }`

**Update/Delete Goal**
----
  Mark a goal as "done" and delete existing goals.

* **URL**

  /goals/:id

* **Method:**

  `PUT`
  
*  **URL Params**

    **Required:**
 
   `_id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `[{ _id : 593af0d253e67b7d453cfcad, name : "My Awesome Goal", type: 'career', isChecked: true }]`
 
* **Error Response:**

  * **Code:** 401 UnauthorizedError <br />
    **Content:** `{ error : "You need a token to access that resource." }`


  `DELETE`
  
*  **URL Params**

    **Required:**
 
   `_id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
 
* **Error Response:**

  * **Code:** 401 UnauthorizedError <br />
    **Content:** `{ error : "You need a token to access that resource." }`

**Show User**
----
  Returns json data about a single user.

* **URL**

  /authenticated

* **Method:**

  `GET`
  
*  **URL Params**

    **Required:**
 
   `_id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ _id : 12 }`
 
* **Error Response:**

  * **Code:** 401 UnauthorizedError <br />
    **Content:** `{ error : "You need a token to access that resource." }`


## Screenshot
![Old Military Radio](./public/assets/images/screenshot_home.png?raw=true "Homepage")


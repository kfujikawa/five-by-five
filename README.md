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
**Show User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


### Users


## Screenshots

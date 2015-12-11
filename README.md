# TextbookXchange

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/home.png)

Description:
This app was created to help students find a more efficient way to sell or rent out their textbooks. Our app allows users to view a catalog of current book listings and search for a specific textbook before registering. After registering, users are allowed to list books for sale, request a textbook and edit their requests and listed textbooks. 

#Search:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/search2.png)
![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/search1.png)
![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/search3.png)

The Search feature is available on the 'Home' page as well as the 'Catalog' page. It allows users to search for a textbook by the title of the book, the course number or the author. After searching, the user will be redirected to the Catalog page where any results will be displayed. 

#Catalog:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/catalog.png)

The catalog page allows anyone -- registered or not registered -- to view the list of available books and each book's corresponding information. Each item in the catalog has an arrow button to control how much of a textbook's information is available. The catalog page also has a search bar in place so that users can find what they're looking for more quickly. 

#Request:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/request1.png)
![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/request2.png)

The request page allows registered users to request a textbook by book title and course number. Once a request has been submitted by a user, that request will be posted to the user's dashboard. From the dashboard, the user will be able to see the status of his request (i.e. if the book has been posted or become available yet) If the book is not available in the catalog, the request will state that the item is not available. Requests are also removable from the dashboard.

#List a Book:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/listbook1.png)
![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/listbook2.png)

Registered users can list a textbook to TextbookXchange from the 'List Book' page. The accompanying form requires the user to submit the book title, course number for the textbook (example: CS360), textbook author, textbook edition, whether the book is for rent or for sale, an asking price, and any additional notes. All of this information as well as the seller's name and email address will be posted with the textbook in the catalog. Listed books can be viewed, updated and/or removed from the user's dashboard.

#Dashboard:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/dashboard1.png)

After logging in, a user's book requests and listed textbooks will show up in the 'Dashboard' page. Request statuses can be viewed here and will update instantly if the requested textbook is added. In addition, a user's listed textbooks can be removed or deleted here.

#Login / Registration:

Users can login or register for TextbookXchange. Registered users will have their information maintained by TextbookXchange, which includes all of their listed books and requests. Once they are finished with their session, they can logout and their private information will no longer be viewable. Registration requires a name, email address, username and password. Usernames are unique to a given person.

#Contact Us:

![Alt text](https://github.com/ekisu/TextBookXchange/blob/master/app/img/contact.png)

Last of all, there is a 'Contact' page for users to email us if they have a problem with the app or in case they have a question.


#Database Schema:
Data is stored in our website through MongoDB. MongoDB is a document-based database system which allows one specific object (i.e. a textbook, user or request) to have its own unique document stored in the database. A document will contain all of the corresponding schema, or information for the object. For example, a textbook entry would be stored on a separate document that would contain a textbook title, edition, course number, author, type of listing (Rent or Sell), asking price and seller information. 

Our models for document storage were: textbook, user and request.

Textbook Schema:
    var textBookSchema = new Schema({
    	title: String,
    	courseNumber: String,
    	edition: String,
    	list_type: String,
    	author: String,
    	price: String,
    	notes: String,
    	user: String,
    	userEmail: String
    });

User Schema: 
    var userSchema = new Schema({
      name: String,
      username: {type: String, index: true, unique: true},
      password_hash: String,
      email: String
    });
    
Request Schema:
    var requestSchema = new Schema({
    	title: String,
    	course: String,
    	user: String
    });


#Future Work:

We believe that this application could be expanded in many ways. Our first step to improving the application would be to send the user an email if one of his/her requested textbooks arrives. Another way that we would like to improve the site would be to include a place where a user can post an actual picture of the textbook that is being listed. Last of all, for each book that a user has listed, keeping track of the views that a book has had would help the user to know if a book needs to have more information or be listed at a cheaper price. 







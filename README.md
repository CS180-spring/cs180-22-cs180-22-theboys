# E-Commerce NFT Website

For this project, our team decided to create a full-stack E-commerce web application that allows users to purchase NFTs. Our user interface will have a similar design as those of other companies. Users will be able to sign in to their unqiue account and make purchases. The web application will also allow users to be able to view their purchase history and view the items in their cart. Payment information will also be handled so that payments can be made successfully. 

## Languages

The primary languages we used in this project are JavaScript, PostgreSQL, HTML, and CSS. All of our files are sent to and retrieved from the Amazon Web Service in a JSON format. PostgreSQL is used in order to query specific information regarding a user, a product, and any other relevant entities. HTML and CSS are primarily used as tools to develop the website that is used as our user interface.

## Project Features

### Home Page

Once a customer loads our web application, a Home page will be loaded and displayed. The Home page contains various features such as a Sign In link, a Cart Icon, and a Shop link. This Home page allows customers to also be able to view recommended NFTs as well as new arrivals. It also contains an About Us page as well as a Contact information.

### View NFTs

A customer is able to view all of the NFTs that are currently being offered in two areas of the web application. The first area involves a carousel that can be seen on the Home page. This carousel has a select amount of NFTs that are taken from our inventory based on previously purchased NFTs. 

<img width="1177" alt="Screenshot 2023-06-01 at 9 46 48 PM" src="https://github.com/CS180-spring/cs180-22-theboys/assets/72373261/939abc98-a0f0-4de0-8772-543122637270">

The second area involves a Shop section that can be found at the top of our Home page. On this page, a customer can view all of the NFTs that are available for purchase. The customer can also click on individual NFTs to view its unique details.

### View Cart

A customer can view their cart at any time. They simply need to click on the Cart that can be found in the top right corner of the website. Here, the customer can see all the NFTs that are currentyl in their cart.

### Make Purchases

Once a customer views their cart and is satisfied, they can make a purchase. Our website is able to process payment information efficently and securely. Once a transaction is made, it can be found in the customer's Order History.



## Available Scripts

For this project, we utilized React.js for our front-end development. In order to start our web application,you can run:

### `npm start`

This command runs the app in development mode.\
You can open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make any changes.\
You may also see any lint errors in the console.

### `npm test`

This command launches the test runner in the interactive watch mode.\

### `npm run build`

This command builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
After this instruction, our web application is ready to be deployed.

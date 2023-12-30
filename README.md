# -rest-api

Free Open source REST API built with | Nodejs + Express + Mongodb ⚡️ Made with developer experience first Prettier + VSCode setup.

> - C.R.U.D, Filter, Paginate, Sort and Search API

# Table of contents

# Author

# Technologies

- Node.js
- Express
- MongoDB
- JSON Web Token (JWT)
- bcryptjs
- Heroku Hosting

# Demo

#### Testing Email: testverstion@gmail.com

#### Testing Password: 12345test

# Features

##### (Users)

- Complete user authentication
- Users can sign in
- Users can sign out
- Users can verify email
- Users can Change Password
- View all products
- View products detail
- Filter products by category
- Search for products
- Add products to their basket
- Checkout total payment
- Checkout order page
- Products pagination

##### (Admin)

- Complete Admin Authorization
- Add products
- Update products
- Delete products
- Limit Products
- Add Users
- Update Users
- Delete Users
- Update User Role

# API_Reference

#### Get all products

| Parameter  | Type     | Description           |
| :--------- | :------- | :-------------------- |
| `limit`    | `number` | default= 100          |
| `category` | `string` | default= All Products |
| `page`     | `number` | default= 1            |
| `search`   | `string` | search string         |
| `sortBy`   | `string` | default= createdAt    |
| `OrderBy`  | `string` | default= desc         |

#### example (Paginate - Sort - Filter - Full-text search

#### Get single product

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Add new product (Only admins)

| Parameter      | Type     | Description                                           |
| :------------- | :------- | :---------------------------------------------------- |
| `name`         | `string` | **Required**. product name                            |
| `price`        | `number` | **Required**. product price                           |
| `description`  | `string` | **Required**. product description                     |
| `productImage` | `img`    | **Required**. product Image                           |
| `category`     | `string` | **Required**. product category                        |
| `count`        | `number` | **Optional**. default value = 1                       |
| `stock       ` | `string` | **Optional**. default value = 'in stock - order soon' |

#### Update product (Only admins)

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of product to update   |
| `token`   | `string` | **Required**. JWT token pass in headers |

#### Delete product (Only admins)

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of product to delete   |
| `token`   | `string` | **Required**. JWT token pass in headers |

#### User signup

| Parameter         | Type      | Description   |
| :---------------- | :-------- | :------------ |
| `firstName`       | `string`  | **Required**. |
| `lastName`        | `string`  | **Required**. |
| `familyName`      | `string`  | **Optional**. |
| `email`           | `string`  | **Required**. |
| `password`        | `string`  | **Required**. |
| `confirmPassword` | `string`  | **Required**. |
| `gender`          | `string`  | **Optional**. |
| `dateOfBirth`     | `string`  | **Optional**. |
| `acceptTerms`     | `boolean` | **Required**. |
| `mobileNumber`    | `number`  | **Optional**. |
| `nationality`     | `string`  | **Optional**. |
| `favoriteAnimal`  | `string`  | **Optional**. |
| `address`         | `string`  | **Optional**. |
| `bio`             | `string`  | **Optional**. |
| `jobTitle`        | `string`  | **Optional**. |

```http
  After signup you will receive email to verify your account
```

#### User Login

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### User Verify Email

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `userId`  | `string` | **Required**. |
| `token`   | `string` | **Required**. |

# Environment

- To run this project, you will need to add the following environment variables to your .env file (check environment.config.js file for more examples)

- MONGODB_CONNECTION_STRING
- TOKEN_SECRET
- WEBSITE_URL
- API_VERSION ="v1"
- JWT_EXPIRE_TIME
- SEND_GRID_API_KEY
- ADMIN_SEND_GRID_EMAIL
- ADMIN_ROLE
- ADMIN_EMAIL
- NODE_ENV = 'development'
- CLIENT_URL
- ACCESS_TOKEN_SECRET_KEY
- REFRESH_TOKEN_SECRET_KEY
- ACCESS_TOKEN_KEY_EXPIRE_TIME
- REFRESH_TOKEN_KEY_EXPIRE_TIME

# Contributing

Contributions are always welcome!

# Deployment

# Run_Locally

Go to the project directory

```bash
  cd node-express-rest-api
```

Install dependencies

```bash
yarn install
# or
npm install
```

Start the server

```bash
  node app.js
  or
  nodemon app.js
```

# Status

Project is: in progress I'm working on it in my free time

# Screenshots

```bash



npm run test:coverage

> node-express-typescript-api@1.2.0 test:coverage
> export NODE_ENV=testing || SET "NODE_ENV=testing" && jest --coverage --detectOpenHandles

GET /api/v1/products/63a449d6f4cf592dedf5c60b 400 13.270 ms - 333
GET /api/v1/products/product-123 422 2.909 ms - 17903
POST /api/v1/auth/login 200 248.846 ms - 1045
GET /api/v1/products/658fe1470b513a383b2b2e3a 200 3.370 ms - 765
GET /api/v1/products 200 8.826 ms - 192
GET /api/v1/products 200 12.119 ms - 1525
POST /api/v1/admin/products/add 401 2.102 ms - 17969
POST /api/v1/auth/login 200 233.318 ms - 1045
POST /api/v1/admin/products/add 403 4.899 ms - 346
POST /api/v1/auth/login 200 254.772 ms - 1041
POST /api/v1/admin/products/add 422 19.057 ms - 360
POST /api/v1/auth/login 200 279.683 ms - 1041
POST /api/v1/admin/products/add 403 3.737 ms - 346
  console.log
    Error: expected 422 "Unprocessable Entity", got 403 "Forbidden"
        at Object.<anonymous> (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/__tests__/integration/product.test.ts:311:16)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
    ----
        at Test._assertStatus (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:252:14)
        at /Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:308:13
        at Test._assertFunction (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:285:13)
        at Test.assert (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:164:23)
        at Server.localAssert (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:120:14)
        at Object.onceWrapper (node:events:628:28)
        at Server.emit (node:events:514:28)
        at emitCloseNT (node:net:2273:8)
        at processTicksAndRejections (node:internal/process/task_queues:81:21)

      at __tests__/integration/product.test.ts:323:25

POST /api/v1/auth/login 200 231.656 ms - 1041
POST /api/v1/admin/products/add 403 2.179 ms - 346
  console.log
    Error: expected 201 "Created", got 403 "Forbidden"
        at Object.<anonymous> (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/__tests__/integration/product.test.ts:361:16)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
    ----
        at Test._assertStatus (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:252:14)
        at /Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:308:13
        at Test._assertFunction (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:285:13)
        at Test.assert (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:164:23)
        at Server.localAssert (/Users/mohamed/Documents/HomeWork/Test/monexpnode-ts-ecom-social-rest-api/node_modules/.pnpm/supertest@6.3.3/node_modules/supertest/lib/test.js:120:14)
        at Object.onceWrapper (node:events:628:28)
        at Server.emit (node:events:514:28)
        at emitCloseNT (node:net:2273:8)
        at processTicksAndRejections (node:internal/process/task_queues:81:21)

      at __tests__/integration/product.test.ts:377:25

 PASS  __tests__/integration/product.test.ts (7.696 s)
  product
    GET /api/v1/products/:productId
      given the product does not exist
        ✓ should return a 400 status (77 ms)
      given invaild product id
        ✓ should return a 422 status (66 ms)
      given the product does exist
        ✓ should return a 200 status and the product (739 ms)
    GET /api/v1/products
      given no product in db
        ✓ should return empty array with a 200 (24 ms)
      given added 2 product in db
        ✓ should return array of 2 product with a 200 (473 ms)
    POST /api/v1/admin/products/add
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (31 ms)
      given the user is logged in and the logged user is not admin
        ✓ should return a 403 status with a json message - unauthorized (707 ms)
      given the user is logged in and authorized
        given invaild product
          ✓ should validated product schema and return a 422 status with validation message (761 ms)
        given invaild product with no images been attached
          ✓ should validated file upload and return a 422 status with validation message (947 ms)
        given vaild product
          ✓ should return a 201 status and create the product (728 ms)

GET /api/v1/feed/posts 200 9.185 ms - 177
GET /api/v1/feed/posts 200 16.724 ms - 2030
GET /api/v1/feed/posts/timeline 401 9.237 ms - 17968
POST /api/v1/auth/login 200 281.564 ms - 1041
GET /api/v1/feed/posts/timeline 200 12.636 ms - 89
POST /api/v1/auth/login 200 233.195 ms - 1041
GET /api/v1/feed/posts/timeline 200 15.788 ms - 3823
GET /api/v1/feed/posts/user-posts 401 1.784 ms - 17968
POST /api/v1/auth/login 200 232.438 ms - 1045
GET /api/v1/feed/posts/user-posts 200 5.453 ms - 129
POST /api/v1/auth/login 200 241.998 ms - 1045
GET /api/v1/feed/posts/user-posts 200 9.960 ms - 1988
GET /api/v1/feed/posts 200 7.261 ms - 2030
GET /api/v1/feed/posts/notvaild 422 1.697 ms - 472
GET /api/v1/feed/posts/658fe14c2a542b220c4891f2 400 11.146 ms - 328
GET /api/v1/feed/posts/658fe1512a542b220c48927c 200 6.488 ms - 706
POST /api/v1/auth/login 200 232.720 ms - 1041
DELETE /api/v1/feed/posts/658fe1522a542b220c489286 200 12.369 ms - 124
DELETE /api/v1/feed/posts/userId 401 2.031 ms - 17949
POST /api/v1/auth/login 200 234.581 ms - 1041
DELETE /api/v1/feed/posts/658fe14c2a542b220c4891f2 400 5.307 ms - 331
POST /api/v1/auth/login 200 230.329 ms - 1041
DELETE /api/v1/feed/posts/postId 422 2.433 ms - 468
POST /api/v1/auth/login 200 230.245 ms - 1036
DELETE /api/v1/feed/posts/658fe1532a542b220c4892b4 403 5.431 ms - 360
PUT /api/v1/feed/posts/63d7d3ce0ba02465093d3d36/like 401 2.253 ms - 17950
POST /api/v1/auth/login 200 229.853 ms - 1041
PUT /api/v1/feed/posts/invalid/like 422 2.680 ms - 470
POST /api/v1/auth/login 200 235.362 ms - 1041
PUT /api/v1/feed/posts/658fe14c2a542b220c4891f2/like 400 4.515 ms - 329
POST /api/v1/auth/login 200 231.547 ms - 1041
PUT /api/v1/feed/posts/658fe1562a542b220c4892e3/like 200 12.437 ms - 923
POST /api/v1/auth/login 200 232.409 ms - 1041
PUT /api/v1/feed/posts/658fe1572a542b220c4892f8/like 200 9.982 ms - 709
PUT /api/v1/feed/posts/comment 401 2.393 ms - 17969
POST /api/v1/auth/login 200 254.244 ms - 1041
PUT /api/v1/feed/posts/comment 422 5.439 ms - 366
PUT /api/v1/feed/posts/comment 422 4.160 ms - 364
POST /api/v1/auth/login 200 230.598 ms - 1041
PUT /api/v1/feed/posts/comment 422 3.753 ms - 472
POST /api/v1/auth/login 200 232.297 ms - 1041
PUT /api/v1/feed/posts/comment 422 3.578 ms - 426
POST /api/v1/auth/login 200 230.589 ms - 1041
PUT /api/v1/feed/posts/comment 400 6.950 ms - 337
POST /api/v1/auth/login 200 229.768 ms - 1041
PUT /api/v1/feed/posts/comment 200 8.818 ms - 951
PATCH /api/v1/feed/posts/comment 401 1.592 ms - 17969
POST /api/v1/auth/login 200 251.358 ms - 1041
PATCH /api/v1/feed/posts/comment 422 3.970 ms - 366
PATCH /api/v1/feed/posts/comment 422 4.288 ms - 364
PATCH /api/v1/feed/posts/comment 422 3.261 ms - 370
POST /api/v1/auth/login 200 230.882 ms - 1041
PATCH /api/v1/feed/posts/comment 422 3.602 ms - 472
PATCH /api/v1/feed/posts/comment 422 4.045 ms - 486
POST /api/v1/auth/login 200 230.970 ms - 1041
PATCH /api/v1/feed/posts/comment 422 4.000 ms - 426
POST /api/v1/auth/login 200 247.071 ms - 1041
PATCH /api/v1/feed/posts/comment 400 5.558 ms - 340
POST /api/v1/auth/login 200 230.564 ms - 1041
PATCH /api/v1/feed/posts/comment 403 6.789 ms - 369
POST /api/v1/auth/login 200 229.724 ms - 1041
PATCH /api/v1/feed/posts/comment 200 13.670 ms - 957
GET /api/v1/feed/posts/comment/postId/commentId 401 3.535 ms - 17948
POST /api/v1/auth/login 200 234.808 ms - 1041
GET /api/v1/feed/posts/comment/notvaild/658fe14c2a542b220c4891f2 422 2.654 ms - 472
GET /api/v1/feed/posts/comment/notvaild/658fe14c2a542b220c4891f2 422 2.482 ms - 472
POST /api/v1/auth/login 200 230.143 ms - 1041
GET /api/v1/feed/posts/comment/658fe14c2a542b220c4891f2/658fe14c2a542b220c4891f2 400 4.115 ms - 337
POST /api/v1/auth/login 200 229.521 ms - 1041
GET /api/v1/feed/posts/comment/658fe1612a542b220c4893d1/658fe14c2a542b220c4891f2 400 7.230 ms - 337
POST /api/v1/auth/login 200 231.084 ms - 1041
GET /api/v1/feed/posts/comment/658fe1622a542b220c4893e1/658fe1622a542b220c4893e3 200 8.578 ms - 470
GET /api/v1/feed/posts/comment/postId 401 3.008 ms - 17949
POST /api/v1/auth/login 200 230.096 ms - 1041
GET /api/v1/feed/posts/comment/notvaild 422 2.496 ms - 472
POST /api/v1/auth/login 200 229.757 ms - 1041
GET /api/v1/feed/posts/comment/658fe14c2a542b220c4891f2 400 3.635 ms - 340
POST /api/v1/auth/login 200 230.566 ms - 1041
GET /api/v1/feed/posts/comment/658fe1642a542b220c489413 200 6.900 ms - 952
GET /api/v1/feed/posts/user-comment/postId 401 3.757 ms - 17949
POST /api/v1/auth/login 200 230.748 ms - 1041
GET /api/v1/feed/posts/user-comment/notvaild 422 2.718 ms - 472
POST /api/v1/auth/login 200 231.101 ms - 1041
GET /api/v1/feed/posts/user-comment/658fe14c2a542b220c4891f2 400 3.874 ms - 341
POST /api/v1/auth/login 200 246.249 ms - 1041
GET /api/v1/feed/posts/user-comment/658fe1662a542b220c489445 200 10.061 ms - 955
DELETE /api/v1/feed/posts/comment/postId 401 1.498 ms - 17949
POST /api/v1/auth/login 200 230.485 ms - 1041
DELETE /api/v1/feed/posts/comment/notvaild 422 2.444 ms - 472
POST /api/v1/auth/login 200 230.213 ms - 1041
DELETE /api/v1/feed/posts/comment/658fe14c2a542b220c4891f2 400 3.799 ms - 343
POST /api/v1/auth/login 200 230.777 ms - 1041
DELETE /api/v1/feed/posts/comment/658fe1682a542b220c489477 200 7.907 ms - 577
DELETE /api/v1/feed/posts/user-comment/postId 401 6.181 ms - 14674
POST /api/v1/auth/login 200 230.457 ms - 1041
DELETE /api/v1/feed/posts/user-comment/postId 422 3.566 ms - 468
POST /api/v1/auth/login 200 248.043 ms - 1041
DELETE /api/v1/feed/posts/user-comment/658fe14c2a542b220c4891f2 400 5.681 ms - 344
POST /api/v1/auth/login 200 241.640 ms - 1041
DELETE /api/v1/feed/posts/user-comment/658fe16b2a542b220c4894ac 200 15.800 ms - 1001
DELETE /api/v1/feed/posts/comment 401 2.349 ms - 17968
POST /api/v1/auth/login 200 230.463 ms - 1041
DELETE /api/v1/feed/posts/comment 422 3.390 ms - 364
DELETE /api/v1/feed/posts/comment 422 3.988 ms - 370
POST /api/v1/auth/login 200 229.894 ms - 1041
DELETE /api/v1/feed/posts/comment 422 3.427 ms - 472
DELETE /api/v1/feed/posts/comment 422 3.837 ms - 486
POST /api/v1/auth/login 200 229.837 ms - 1041
DELETE /api/v1/feed/posts/comment 400 5.847 ms - 340
POST /api/v1/auth/login 200 229.260 ms - 1041
DELETE /api/v1/feed/posts/comment 403 7.687 ms - 369
POST /api/v1/auth/login 200 229.912 ms - 1041
DELETE /api/v1/feed/posts/comment 200 11.039 ms - 949
DELETE /api/v1/feed/posts/63e87ee 401 1.489 ms - 17949
POST /api/v1/auth/login 200 230.817 ms - 1041
DELETE /api/v1/feed/posts/postId 422 2.516 ms - 468
POST /api/v1/auth/login 200 229.911 ms - 1045
DELETE /api/v1/feed/posts/658fe14c2a542b220c4891f2 400 3.648 ms - 331
POST /api/v1/auth/login 200 230.660 ms - 1042
DELETE /api/v1/feed/posts/658fe1712a542b220c489538 403 5.928 ms - 360
POST /api/v1/auth/login 200 229.888 ms - 1045
DELETE /api/v1/feed/posts/658fe1722a542b220c489548 200 7.814 ms - 124
PATCH /api/v1/feed/posts/63e87ee 401 3.041 ms - 17960
POST /api/v1/auth/login 200 246.146 ms - 1041
PATCH /api/v1/feed/posts/postId 422 2.240 ms - 468
POST /api/v1/auth/login 200 229.292 ms - 1045
PATCH /api/v1/feed/posts/658fe14c2a542b220c4891f2 400 4.040 ms - 331
POST /api/v1/auth/login 200 230.053 ms - 1042
PATCH /api/v1/feed/posts/658fe1742a542b220c489578 403 5.574 ms - 360
POST /api/v1/auth/login 200 229.413 ms - 1045
PATCH /api/v1/feed/posts/658fe1752a542b220c489588 200 11.642 ms - 709
POST /api/v1/feed/posts 401 7.594 ms - 1794
POST /api/v1/auth/login 200 246.673 ms - 1045
POST /api/v1/feed/posts 422 4.050 ms - 426
POST /api/v1/feed/posts 422 11.111 ms - 362
POST /api/v1/feed/posts 422 15.802 ms - 366
POST /api/v1/auth/login 200 231.700 ms - 1045
POST /api/v1/feed/posts 422 5.243 ms - 422
POST /api/v1/auth/login 200 229.707 ms - 1045
POST /api/v1/feed/posts 422 7.053 ms - 426
POST /api/v1/auth/login 200 246.824 ms - 1045
POST /api/v1/feed/posts 201 881.990 ms - 723
 PASS  __tests__/integration/post.test.ts (45.842 s)
  Post
    GET /api/v1/feed/posts
      given no post in db
        ✓ should return a 200 status with a json contain empty array (59 ms)
      given added 3 posts in db
        ✓ should return a 200 status with a json contain array of 3 posts (499 ms)
    GET /api/v1/feed/posts/timeline
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (55 ms)
      given the user is logged in and authorized but no post exist in DB
        ✓ should return a 200 status with a json contain empty array (790 ms)
      given the user is logged and we have 10 posts in DB (2 for him,3 for the user that he is already following and 5 for users that are not following or friends)
        ✓ should return a 200 status with a json contain array of 5 posts (1247 ms)
    GET /api/v1/feed/posts/user-posts
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (17 ms)
      given no post in db
        ✓ should return a 200 status with a json contain empty array (698 ms)
      given the user is logged in and has 3 post in DB
        ✓ should return a 200 status with a json contain array of 3 posts (719 ms)
      given added 3 posts in db
        ✓ should return a 200 status with a json contain array of 3 posts (476 ms)
    GET /api/v1/feed/posts/:postId
      given post id is not valid
        ✓ should return a 422 status with validation message (13 ms)
      given the post does not exist
        ✓ should return a 400 status (24 ms)
      given the post does exist
        ✓ should return a 200 status and the product (472 ms)
    DELETE /api/v1/feed/posts/:postId
      given the user is logged in and authorized and the given postId to removed does exist in DB
        ✓ should return a 200 status with a json message - success (716 ms)
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (14 ms)
      given the user is logged in but the given postId to removed does not exist in DB
        ✓ should return a 401 status with a json message - Bad Request (781 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (694 ms)
      given the user is logged in and the given postId to removed does exist in DB but the user is Unauthorized to remove
        ✓ should return a 403 status with a json message - Unauthorized (1141 ms)
    PUT  /api/v1/feed/posts/:postId/like
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given invaild post id
        ✓ should return a 422 status with validation message (693 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (706 ms)
      given the user is logged in and authorized and the post does exist but not been liked by user before
        ✓ should return a 200 status with the liked post (707 ms)
      given the user is logged in and authorized and the post does exist and been liked by the user before
        ✓ should unlike the post and return a 200 status with a json contain user info (708 ms)
    PUT  /api/v1/feed/posts/comment
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given any of the flowing filed is missing (postId,comment)
        ✓ should return a 422 status with validation message (733 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (695 ms)
      given the post id is less than 3 characters
        ✓ should return a 422 status with validation message (698 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (695 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should add comment to the post and return a 200 status with the updated post (700 ms)
    PATCH  /api/v1/feed/posts/comment
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given any of the flowing filed is missing (postId,commentId,comment)
        ✓ should return a 422 status with validation message (734 ms)
      given post id or comment id is not valid
        ✓ should return a 422 status with validation message (711 ms)
      given the comment is less than 3 characters
        ✓ should return a 422 status with validation message (693 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (711 ms)
      given the user is logged in and authorized and the given post does exist in DB but not the comment does not exist
        ✓ should return a 403 status with a json message - Auth Failed (698 ms)
      given the user is logged in and authorized and the post and comment does exist
        ✓ should update the comment and return a 200 status with the updated post (705 ms)
    GET  /api/v1/feed/posts/comment/{postId}/{commentId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (8 ms)
      given post id or comment id is not valid
        ✓ should return a 422 status with validation message (706 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (691 ms)
      given the user is logged in and authorized and the given post does exist in DB but not the comment does not exist
        ✓ should return a 400 status with a json message (698 ms)
      given the user is logged in and authorized and the post and comment does exist
        ✓ should return a 200 status with the post with only one comment (705 ms)
    GET /api/v1/feed/posts/comment/{postId}/{commentId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (10 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (695 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (696 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should return a 200 status and array of comments (700 ms)
    GET /api/v1/feed/posts/user-comment/{postId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (7 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (695 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (692 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should return a 200 status and array of comments (722 ms)
    DELETE /api/v1/feed/posts/comment/{postId}/{commentId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (40 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (691 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (693 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should remove all the comment from post and return 200 status (700 ms)
    DELETE /api/v1/feed/posts/comment/{postId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (14 ms)
        ✓ should return a 401 status with a json message - Auth Failed (12 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (693 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (711 ms)
        ✓ should return a 400 status with a json message - bad request (692 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should remove all comments which belong to the given user and return 200 status with updated post (1166 ms)
      given any of the flowing filed is missing (postId,commentId)
        ✓ should return a 422 status with validation message (718 ms)
      given post id or comment id is not valid
        ✓ should return a 422 status with validation message (714 ms)
      given the user is logged in and authorized and the given post does exist in DB but not the comment does not exist
        ✓ should return a 403 status with a json message - Auth Failed (699 ms)
      given the user is logged in and authorized and the post and comment does exist
        ✓ should delete the comment and return a 200 status with the updated post (705 ms)
    DELETE /api/v1/feed/posts/{postId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (692 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (691 ms)
      given the user is logged in and the post does exist in DB but the user is not authorized to remove that post
        ✓ should return a 403 status with a json message - unauthorized (1155 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should delete the post and return a 200 status (698 ms)
    PATCH  /api/v1/feed/posts/{postId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (12 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (709 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (691 ms)
      given the user is logged in and the post does exist in DB but the user is not authorized to update that post
        ✓ should return a 403 status with a json message - unauthorized (1146 ms)
      given the user is logged in and authorized and the given postId to updated does exist in DB
        ✓ should return a 200 status with the updated post (704 ms)
    POST /api/v1/feed/posts/
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (19 ms)
      given the user is logged in and authorized
        given any of the flowing filed is missing (title,content,postImage)
          ✓ should return a 422 status with validation message (766 ms)
        given the title is less than 3 characters
          ✓ should return a 422 status with validation message (712 ms)
        given the content is less than 5 characters
          ✓ should return a 422 status with validation message (697 ms)
        given all the post information are valid
          ✓ should create post and return a 201 status (1600 ms)

POST /api/v1/auth/signup 422 6.749 ms - 426
POST /api/v1/auth/signup 422 7.764 ms - 360
POST /api/v1/auth/signup 422 5.092 ms - 291
POST /api/v1/auth/signup 422 5.467 ms - 287
POST /api/v1/auth/signup 422 5.577 ms - 368
POST /api/v1/auth/signup 422 4.198 ms - 307
POST /api/v1/auth/signup 422 3.346 ms - 3279
POST /api/v1/auth/signup 422 4.394 ms - 353
POST /api/v1/auth/signup 422 3.611 ms - 329
POST /api/v1/auth/signup 422 3.605 ms - 307
POST /api/v1/auth/signup 409 15.829 ms - 474
POST /api/v1/auth/signup 201 475.720 ms - 1167
POST /api/v1/auth/login 422 7.330 ms - 362
POST /api/v1/auth/login 422 1.361 ms - 368
POST /api/v1/auth/login 422 1.514 ms - 428
POST /api/v1/auth/login 422 1.302 ms - 382
POST /api/v1/auth/login 401 4.563 ms - 372
POST /api/v1/auth/login 200 230.573 ms - 1045
GET /api/v1/auth/verify-email/658fe17af0839ae15437dc8a/to 422 0.732 ms - 422
GET /api/v1/auth/verify-email/invaild/658fe17af0839ae15437dc8a 422 0.554 ms - 470
GET /api/v1/auth/verify-email/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 400 3.096 ms - 504
GET /api/v1/auth/verify-email/658fe17cf0839ae15437dcd3/658fe17af0839ae15437dc8a 200 2.465 ms - 120
GET /api/v1/auth/verify-email/658fe17cf0839ae15437dcda/658fe17af0839ae15437dc8a 400 3.853 ms - 412
POST /api/v1/auth/login 401 231.056 ms - 1163
GET /api/v1/auth/verify-email/658fe17df0839ae15437dce2/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThmZTE3ZGYwODM5YWUxNTQzN2RjZTIiLCJpYXQiOjE3MDM5MjgxOTAsImV4cCI6MTczNTQ4NTc5MCwiYXVkIjoiNjU4ZmUxN2RmMDgzOWFlMTU0MzdkY2UyIiwiaXNzIjoiZ21kdC1pc3N1ZXIifQ.y6Z1XjbMEizqcK7TCPeYuwHhQ9ZmsN5Gq5ugZN06n8s 200 9.242 ms - 128
POST /api/v1/auth/logout 400 4.117 ms - 327
POST /api/v1/auth/login 200 269.015 ms - 1045
POST /api/v1/auth/logout 200 5.056 ms - 101
POST /api/v1/auth/logout 422 1.519 ms - 376
POST /api/v1/auth/login 200 230.280 ms - 1045
GET /api/v1/auth/me 200 7.149 ms - 467
GET /api/v1/auth/me 401 4.151 ms - 17968
POST /api/v1/auth/login 200 231.196 ms - 1041
DELETE /api/v1/auth/remove/658fe17ff0839ae15437dd18 200 6.002 ms - 124
DELETE /api/v1/auth/remove/userId 401 0.928 ms - 17949
POST /api/v1/auth/login 200 236.967 ms - 1041
DELETE /api/v1/auth/remove/658fe17af0839ae15437dc8a 400 3.678 ms - 331
POST /api/v1/auth/login 200 229.160 ms - 1037
DELETE /api/v1/auth/remove/658fe17af0839ae15437dc8a 403 3.723 ms - 360
PATCH /api/v1/auth/update/userId 401 0.922 ms - 17950
POST /api/v1/auth/login 200 229.591 ms - 1041
PATCH /api/v1/auth/update/658fe17af0839ae15437dc8a 400 4.103 ms - 331
POST /api/v1/auth/login 200 248.724 ms - 1041
PATCH /api/v1/auth/update/658fe182f0839ae15437dd58 200 8.215 ms - 531
POST /api/v1/auth/refresh-token 422 1.733 ms - 376
POST /api/v1/auth/refresh-token 422 1.482 ms - 436
POST /api/v1/auth/login 200 246.222 ms - 1045
POST /api/v1/auth/refresh-token 200 7.932 ms - 629
POST /api/v1/auth/forget-password 422 1.683 ms - 362
POST /api/v1/auth/forget-password 422 1.291 ms - 382
POST /api/v1/auth/forget-password 401 4.162 ms - 555
POST /api/v1/auth/login 200 247.160 ms - 1045
POST /api/v1/auth/forget-password 200 8.577 ms - 626
POST /api/v1/auth/reset-password/658fe17af0839ae15437dc8a/to 422 2.194 ms - 422
GET /api/v1/auth/verify-email/invaild/658fe17af0839ae15437dc8a 422 0.468 ms - 470
GET /api/v1/auth/verify-email/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 400 2.242 ms - 504
POST /api/v1/auth/reset-password/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 422 2.311 ms - 368
POST /api/v1/auth/reset-password/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 422 1.893 ms - 382
POST /api/v1/auth/reset-password/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 422 2.143 ms - 428
POST /api/v1/auth/reset-password/658fe17af0839ae15437dc8a/658fe17af0839ae15437dc8a 422 1.421 ms - 404
POST /api/v1/auth/reset-password/658fe184f0839ae15437dd9f/658fe17af0839ae15437dc8a 401 4.999 ms - 408
POST /api/v1/auth/forget-password 200 9.716 ms - 626
POST /api/v1/auth/reset-password/658fe185f0839ae15437dda7/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThmZTE4NWYwODM5YWUxNTQzN2RkYTciLCJpYXQiOjE3MDM5MjgxOTcsImV4cCI6MTcwNDUzMjk5NywiYXVkIjoiNjU4ZmUxODVmMDgzOWFlMTU0MzdkZGE3IiwiaXNzIjoiZ21kdC1pc3N1ZXIifQ.Do_bRfUvT7aSXqQ_NbQiipOIs5ChMpgsSnOlwCdwsqE 200 450.949 ms - 168
PUT /api/v1/users/63d7d3ce0ba02465093d3d36/follow 401 0.910 ms - 17950
POST /api/v1/auth/login 200 230.537 ms - 1041
PUT /api/v1/users/invaildid/follow 422 2.592 ms - 474
POST /api/v1/auth/login 200 231.626 ms - 1041
PUT /api/v1/users/658fe17af0839ae15437dc8a/follow 400 6.075 ms - 336
POST /api/v1/auth/login 200 231.592 ms - 1041
PUT /api/v1/users/658fe187f0839ae15437ddd3/follow 403 3.354 ms - 1007
POST /api/v1/auth/login 200 230.267 ms - 1041
PUT /api/v1/users/658fe188f0839ae15437dde1/follow 403 9.514 ms - 367
POST /api/v1/auth/login 200 230.401 ms - 1041
PUT /api/v1/users/658fe189f0839ae15437ddf2/follow 200 15.345 ms - 651
PUT /api/v1/users/63d7d3ce0ba02465093d3d36/un-follow 401 2.312 ms - 17950
POST /api/v1/auth/login 200 231.243 ms - 1041
PUT /api/v1/users/invaildid/un-follow 422 2.281 ms - 474
POST /api/v1/auth/login 200 229.671 ms - 1041
PUT /api/v1/users/658fe17af0839ae15437dc8a/follow 400 3.964 ms - 336
POST /api/v1/auth/login 200 229.900 ms - 1041
PUT /api/v1/users/658fe18bf0839ae15437de21/un-follow 403 2.776 ms - 1014
POST /api/v1/auth/login 200 230.933 ms - 1041
PUT /api/v1/users/658fe18df0839ae15437de2f/un-follow 403 6.673 ms - 380
POST /api/v1/auth/login 200 244.596 ms - 1041
PUT /api/v1/users/658fe18ef0839ae15437de3f/un-follow 200 13.486 ms - 479
 PASS  __tests__/integration/user.test.ts (21.489 s)
  User
    POST /api/v1/auth/signup
      given any of the flowing filed is missing (name,surname,email,password,confirmPassword,profileImage)
        ✓ should return a 422 status with validation message (129 ms)
      given invaild image type been attached in the profile filed
        ✓ should return a 422 status with validation message (19 ms)
      given the password is less than 6 characters
        ✓ should return a 422 status with validation message (18 ms)
      given the confirmPassword do not match
        ✓ should return a 422 status with validation message (19 ms)
      given the email is not valid
        ✓ should return a 422 status with validation message (19 ms)
      given the email address already been taken by other user
        ✓ should return a 409 status with validation message (41 ms)
      given all the user information are valid
        ✓ should create user, send email verification and return a 201 status (491 ms)
    POST /api/v1/auth/login
      given the email or password is missing)
        ✓ should return a 422 status with validation message (24 ms)
      given the password is less than 6 characters
        ✓ should return a 422 status with validation message (12 ms)
      given the email is invaild
        ✓ should return a 422 status with validation message (12 ms)
      given the email and password are valid schema but the user with the given email don't exists in DB
        ✓ should return a 422 status with validation message (15 ms)
      given the email and password are valid
        ✓ should authorized the user, set cookies and return a 200 status with access and refresh token (686 ms)
    GET /api/v1/auth/verify-email/:userId/:token
      given the userId or token is invaild
        ✓ should return a 422 status with validation message (133 ms)
      given the user email has already been verified
        ✓ should return a 200 status with message your email has already been verified. Please Login (471 ms)
      given the refresh token is expired
        ✓ should return a 400 status with message token is invalid or has expired (459 ms)
      given the userId and token are valid
        ✓ should verify the user, and return a 200 status with message your account has been successfully verified . Please Login  (697 ms)
    POST /api/v1/auth/logout
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (12 ms)
      given the user is logged in and the refresh token is valid
        ✓ should logged out the user, and return a 200 status with a json message - logged out success (741 ms)
      given the refresh token is invaild
        ✓ should return a 422 status with validation message (13 ms)
    GET /api/v1/auth/me
      given the user is logged in
        ✓ should return a 200 status with a json containing user profile (695 ms)
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (15 ms)
    DELETE /api/v1/auth/remove/:userId
      given the user is logged in and authorized and the given userId to removed does exist in DB
        ✓ should return a 200 status with a json message - success (697 ms)
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (10 ms)
      given the user is logged in but the given userId to removed does not exist in DB
        ✓ should return a 401 status with a json message - Bad Request (712 ms)
      given the user is logged in and the given userId to removed does exist in DB but the user is Unauthorized to remove
        ✓ should return a 403 status with a json message - Unauthorized (697 ms)
    PATCH  /api/v1/auth/update/:userId
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given invaild user id
        ✓ should return a 400 status with a json message - bad request (698 ms)
      given the user is logged in and authorized and the given userId to updated does exist in DB
        ✓ should return a 200 status with the updated user (718 ms)
    POST /api/v1/auth/refresh-token
      given the refresh token is invaild or missing
        ✓ should return a 422 status with validation message (19 ms)
      given the token is valid
        ✓ should return a 200 status with refresh and access token (717 ms)
    POST /api/v1/auth/forget-password
      given the email is invaild or missing
        ✓ should return a 422 status with validation message (19 ms)
      given the email does not exist in DB
        ✓ should return a 401 status with validation message (14 ms)
      given the email is valid
        ✓ should send reset password link to user email and return a 200 status with reset password link (721 ms)
    GET /api/v1/auth/reset-password/:userId/:token
      given the userId or token is invaild
        ✓ should return a 422 status with validation message (26 ms)
      given password or confirmPassword is missing
        ✓ should return a 422 status with validation message (22 ms)
      given the password is less than 6 characters
        ✓ should return a 422 status with validation message (13 ms)
      given the confirmPassword do not match
        ✓ should return a 422 status with validation message (13 ms)
      given the user id or refresh token is invaild or expired
        ✓ should return a 401 status with message token is invalid or has expired (463 ms)
      given the userId and token are valid
        ✓ should verify the user, and return a 200 status with message your account has been successfully verified . Please Login  (922 ms)
    PUT  /api/v1/user/:userId/follow
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (11 ms)
      given invaild user id
        ✓ should return a 422 status with validation message (695 ms)
      given the user does not exist
        ✓ should return a 400 status with a json message - bad request (701 ms)
      given the user is trying to follow themselves
        ✓ should return a 403 status with a json message - You cant follow yourself (696 ms)
      given the user is already been followed
        ✓ should return a 403 status with a json message - You already follow this user (1146 ms)
      given the user is logged in and authorized and the given userId to follow does exist in DB
        ✓ should return a 200 status with the followed user (1149 ms)
    PUT  /api/v1/user/:userId/un-follow
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (12 ms)
      given invaild user id
        ✓ should return a 422 status with validation message (707 ms)
      given the user does not exist
        ✓ should return a 400 status with a json message - bad request (691 ms)
      given the user is trying to un follow themselves
        ✓ should return a 403 status with a json message - You cant un follow yourself (692 ms)
      given the user is not been followed
        ✓ should return a 403 status with a json message - You haven't follow this user before (1137 ms)
      given the user is logged in and authorized and the given userId to un follow does exist in DB and already been followed
        ✓ should return a 200 status with user profile with out un followed user (1165 ms)

  console.log
    Connected to DB

      at Object.<anonymous> (__tests__/integration/admin.test.ts:16:13)

DELETE /api/v1/admin/feed/posts/comment/postId 401 4.181 ms - 17949
POST /api/v1/auth/login 200 241.477 ms - 1041
DELETE /api/v1/admin/feed/posts/comment/notvaild 422 5.245 ms - 472
POST /api/v1/auth/login 200 231.526 ms - 1041
DELETE /api/v1/admin/feed/posts/comment/658fe18ffbc75b455eb86fd9 400 14.590 ms - 350
POST /api/v1/auth/login 200 233.857 ms - 1041
DELETE /api/v1/admin/feed/posts/comment/658fe192fbc75b455eb86ffc 200 8.308 ms - 578
DELETE /api/v1/admin/feed/posts/comment 401 1.004 ms - 17968
POST /api/v1/auth/login 200 232.887 ms - 1041
DELETE /api/v1/admin/feed/posts/comment 422 3.608 ms - 364
DELETE /api/v1/admin/feed/posts/comment 422 3.655 ms - 370
POST /api/v1/auth/login 200 231.479 ms - 1041
DELETE /api/v1/admin/feed/posts/comment 422 3.792 ms - 472
DELETE /api/v1/admin/feed/posts/comment 422 4.261 ms - 486
POST /api/v1/auth/login 200 230.524 ms - 1041
DELETE /api/v1/admin/feed/posts/comment 400 7.450 ms - 347
POST /api/v1/auth/login 200 230.889 ms - 1041
DELETE /api/v1/admin/feed/posts/comment 403 10.408 ms - 376
POST /api/v1/auth/login 200 280.536 ms - 1041
DELETE /api/v1/admin/feed/posts/comment 200 45.001 ms - 950
 PASS  __tests__/integration/admin.test.ts (7.148 s)
  Admin
    DELETE /api/v1/admin/feed/posts/comment/{postId}/{commentId}
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (42 ms)
      given post id is not valid
        ✓ should return a 422 status with validation message (715 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (711 ms)
      given the user is logged in and authorized and the post does exist
        ✓ should remove all the comment from post and return 200 status (708 ms)
    DELETE  /api/v1/admin/feed/posts/comment
      given the user is not logged in
        ✓ should return a 401 status with a json message - Auth Failed (12 ms)
      given any of the flowing filed is missing (postId,commentId)
        ✓ should return a 422 status with validation message (702 ms)
      given post id or comment id is not valid
        ✓ should return a 422 status with validation message (700 ms)
      given the post does not exist
        ✓ should return a 400 status with a json message - bad request (707 ms)
      given the user is logged in and authorized and the given post does exist in DB but not the comment does not exist
        ✓ should return a 403 status with a json message - Auth Failed (705 ms)
      given the user is logged in and authorized and the post and comment does exist
        ✓ should delete the comment and return a 200 status with the updated post (801 ms)

GET /api/v1 200 1.858 ms - 106
GET /api/v1/healthChecker 200 0.882 ms - 129
GET /not-found-endpoint 404 4.562 ms - 18060
 PASS  __tests__/app.test.ts
  app
    GET /api/v1
      given the endpoint exist
        ✓ should return a 200 status with with a json message (21 ms)
    GET /api/v1/healthChecker
      given the endpoint exist
        ✓ should return a 200 status with with a json message (15 ms)
    GET /not-found-endpoint
      given the endpoint does not exist
        ✓ should return a 404 status with not found message (19 ms)

 PASS  __tests__/ unit /index.test.ts
  Testing to see if Jest works
    given two plus two
      ✓ should return 4 (1 ms)
    given true === true
      ✓ should return true
  utils
    getRandomIntNumberInBetween
      given function call with no arguments
        ✓ should return number between one and 5
      given the value 10 and 100
        ✓ should return number between 10 and 100 (1 ms)
    getImageExtension
      given the mimetype "image/png"
        ✓ should return .png
      given the mimetype "image/webp"
        ✓ should return .webp (5 ms)
      given invaild mimetype
        ✓ should return false
    generateSecretKey
      given no arguments
        ✓ should return random secret key
    isValidMongooseObjectId
      given the mongoose object Id is valid
        ✓ should return true (1 ms)
      given the mongoose object Id is invaild
        ✓ should return false

  console.log
    MongoDB connection error. Please make sure MongoDB is running:

      at log (src/server.ts:24:13)

{"level":"error","message":"MongoDB connection error. Please make sure MongoDB is running: Cannot read properties of undefined (reading 'underline')","service":"user-service","timestamp":"2023-12-30T09:23:36.736Z"}
  console.log
    MongoDB connection error. Please make sure MongoDB is running:

      at log (src/server.ts:24:13)

{"level":"error","message":"MongoDB connection error. Please make sure MongoDB is running: Cannot read properties of undefined (reading 'underline')","service":"user-service","timestamp":"2023-12-30T09:23:36.741Z"}
 PASS  __tests__/server.test.ts
  startServer
    ✓ should start the server and connect to MongoDB (6 ms)

 PASS  __tests__/db.config.test.ts
  connectDB
    ✓ should handle the connected event (14 ms)
    ✓ should handle the reconnected event
    ✓ should handle the error event
    ✓ should handle the close event
    ✓ should handle the disconnected event (1 ms)
    ✓ should handle the SIGINT event

----------------------------------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------
File                                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------
All files                                     |   61.93 |    35.67 |   46.57 |   58.84 |
 src                                          |   95.45 |       50 |      50 |   95.34 |
  app.ts                                      |     100 |      100 |     100 |     100 |
  server.ts                                   |   86.66 |       50 |      50 |   85.71 | 20-21
 src/api                                      |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
 src/configs                                  |    62.5 |    28.57 |   22.22 |   61.29 |
  custom-environment-variables.config.ts      |     100 |       50 |     100 |     100 | 13-16
  db.config.ts                                |   53.84 |        0 |   22.22 |      52 | 9,13,18-19,24,29-33,48-52
  index.ts                                    |     100 |      100 |     100 |     100 |
 src/constants                                |     100 |      100 |     100 |     100 |
  auth.ts                                     |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  order.ts                                    |     100 |      100 |     100 |     100 |
  post.ts                                     |     100 |      100 |     100 |     100 |
  product.ts                                  |     100 |      100 |     100 |     100 |
  testData.ts                                 |     100 |      100 |     100 |     100 |
 src/controllers                              |   81.88 |      100 |   41.02 |   74.54 |
  admin.controller.ts                         |   69.87 |      100 |     7.4 |   58.49 | 45,50,53,56,59,64,67,73,76,82,85,88,94,100,106,112,117,120,123,126,132,147
  auth.controller.ts                          |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  manager.controller.ts                       |   72.72 |      100 |       0 |   71.42 | 8,11
  moderator.controller.ts                     |      75 |      100 |       0 |   66.66 | 6
  order.controller.ts                         |   68.42 |      100 |       0 |   53.84 | 14,16,22,25,28,31
  payment.controller.ts                       |      70 |      100 |       0 |   57.14 | 11,17,23
  post.controller.ts                          |   98.07 |      100 |   94.11 |   97.05 | 48
  product.controller.ts                       |   75.86 |      100 |   22.22 |   63.15 | 31,37,40,46,52,55,58
  user.controller.ts                          |     100 |      100 |     100 |     100 |
 src/interfaces                               |       0 |      100 |     100 |       0 |
  index.ts                                    |       0 |      100 |     100 |       0 | 1-8
 src/logger                                   |    87.5 |       50 |      50 |    87.5 |
  devLogger.ts                                |   66.66 |      100 |       0 |   66.66 | 10
  index.ts                                    |   88.88 |       50 |     100 |   88.88 | 10
  prodLogger.ts                               |     100 |      100 |     100 |     100 |
 src/middlewares                              |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
 src/middlewares/auth                         |   79.36 |       60 |    87.5 |   77.96 |
  checkIsAdmin.ts                             |      50 |        0 |       0 |   45.45 | 9-18
  checkIsAuth.ts                              |   86.36 |    78.57 |     100 |   85.71 | 23-25,41
  customRole.ts                               |   83.33 |    83.33 |     100 |   81.81 | 14,18
  index.ts                                    |     100 |      100 |     100 |     100 |
  verifyRefreshToken.ts                       |   84.61 |       50 |     100 |   83.33 | 12,16
 src/middlewares/errors                       |   77.77 |       30 |      50 |   76.47 |
  errorHandler.ts                             |     100 |       50 |     100 |     100 | 11-18
  index.ts                                    |     100 |      100 |     100 |     100 |
  notFound.ts                                 |     100 |      100 |     100 |     100 |
  unhandledRejection.ts                       |   42.85 |        0 |       0 |   42.85 | 4-6,10-12
 src/middlewares/file-upload                  |   82.14 |    81.81 |   66.66 |   82.14 |
  cloudinary.ts                               |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  multer.ts                                   |   76.19 |    81.81 |   66.66 |   76.19 | 26,53-58
 src/middlewares/sort-filter-pagination       |    54.3 |       25 |   66.66 |   53.14 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  postsFeatures.middleware.ts                 |   77.27 |       50 |      75 |   78.04 | 22-23,53,60,79-83,90-93,107
  productsFeatures.middleware.ts              |   77.77 |       50 |      75 |   78.57 | 22-23,53,60,79-83,90-93,107
  topAliasProduct.ts                          |    37.5 |      100 |      50 |   28.57 | 5-9
  usersFeatures.middleware.ts                 |      12 |        0 |      50 |    10.2 | 9-106
 src/middlewares/validation                   |    90.9 |      100 |     100 |    90.9 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  validator.ts                                |   85.71 |      100 |     100 |   85.71 | 16
 src/middlewares/validation/authValidation    |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  userSchema.ts                               |     100 |      100 |     100 |     100 |
  userValidation.ts                           |     100 |      100 |     100 |     100 |
 src/middlewares/validation/orderValidation   |   81.81 |      100 |       0 |   77.77 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  orderSchema.ts                              |     100 |      100 |     100 |     100 |
  orderValidation.ts                          |   71.42 |      100 |       0 |      60 | 6,9,12,15
 src/middlewares/validation/postValidation    |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  postSchema.ts                               |     100 |      100 |     100 |     100 |
  postValidation.ts                           |     100 |      100 |     100 |     100 |
 src/middlewares/validation/productValidation |   86.36 |      100 |      25 |   83.33 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  productSchema.ts                            |     100 |      100 |     100 |     100 |
  productValidation.ts                        |   78.57 |      100 |      25 |      70 | 17,29,32
 src/models                                   |   57.14 |    66.66 |      50 |   57.14 |
  Order.model.ts                              |     100 |      100 |     100 |     100 |
  Post.model.ts                               |     100 |      100 |     100 |     100 |
  Product.model.ts                            |   85.71 |       80 |     100 |   85.71 | 147
  Token.model.ts                              |      70 |    77.77 |   66.66 |      70 | 50-51,56-57,71,79
  User.model.ts                               |   46.15 |    46.66 |   33.33 |   46.15 | 219,234,239-248,254-287,291-295,299-300
  index.ts                                    |       0 |      100 |     100 |       0 | 2-5
 src/routes                                   |   91.61 |        0 |      50 |   91.61 |
  admin.route.ts                              |     100 |      100 |     100 |     100 |
  auth.route.ts                               |     100 |      100 |     100 |     100 |
  cart.route.ts                               |     100 |      100 |     100 |     100 |
  feed.route.ts                               |     100 |      100 |     100 |     100 |
  healthCheck.route.ts                        |     100 |      100 |     100 |     100 |
  home.route.ts                               |     100 |      100 |     100 |     100 |
  manager.route.ts                            |     100 |      100 |     100 |     100 |
  moderator.route.ts                          |     100 |      100 |     100 |     100 |
  order.route.ts                              |     100 |      100 |     100 |     100 |
  payment.route.ts                            |     100 |      100 |     100 |     100 |
  pdfDoc.route.ts                             |   33.33 |        0 |       0 |   33.33 | 9-30
  product.route.ts                            |     100 |      100 |     100 |     100 |
  user.route.ts                               |     100 |      100 |     100 |     100 |
 src/services                                 |   49.02 |    33.72 |   41.73 |   46.19 |
  admin.service.ts                            |    19.9 |     2.59 |   10.81 |   14.92 | ...-1012,1017-1047,1060-1096,1105-1160,1169-1199,1208-1243,1252-1278,1287-1343,1387,1448
  auth.service.ts                             |   83.26 |    68.31 |     100 |   82.84 | ...2,370,395,414,436,465,469-475,481,488-497,519,545-549,576,589,602,608,671,741,757,783
  index.ts                                    |     100 |      100 |     100 |     100 |
  manager.service.ts                          |   33.33 |        0 |       0 |   28.12 | 11-28,37-61,66-98
  moderator.service.ts                        |      50 |        0 |       0 |   45.45 | 9-28
  order.service.ts                            |      20 |        0 |       0 |    15.3 | 15-38,43-75,84-166,175-205,214-232,237-276
  payment.service.ts                          |   40.74 |      100 |       0 |   33.33 | 25-40,45-69,79-169
  post.service.ts                             |   82.64 |    68.14 |   88.88 |   82.04 | ...8,286,308,319,332,373,382-418,432,477,538,604,660,705,730,762,780,807,866,889,899,930
  product.service.ts                          |    28.1 |    30.43 |   16.66 |   23.91 | 30,33,61-65,103,112-142,151-184,193-247,256-306,315-344,349-376,381-403
  user.service.ts                             |   88.37 |     87.5 |     100 |   87.17 | 25,62,74,81,118
 src/utils                                    |   57.94 |    26.66 |   44.44 |   53.12 |
  customResponse.ts                           |     100 |      100 |     100 |     100 |
  file.ts                                     |   69.23 |    46.66 |     100 |   66.66 | 6,9,14,18
  generateSecretKey.ts                        |     100 |      100 |     100 |     100 |
  getImageExtension.ts                        |   66.66 |       50 |     100 |   63.63 | 7-13
  getRandomIntNumberInBetween.ts              |     100 |      100 |     100 |     100 |
  index.ts                                    |     100 |      100 |     100 |     100 |
  isValidMongooseObjectId.ts                  |   88.88 |      100 |     100 |   85.71 | 6
  promiseWrapper.ts                           |      60 |      100 |       0 |      60 | 3-4
  sendEmail.ts                                |   29.16 |        0 |       0 |   22.72 | 44-58,64-208,214-358,364-508
----------------------------------------------|---------|----------|---------|---------|------------------------------------------------------------------------------------------
Test Suites: 8 passed, 8 total
Tests:       168 passed, 168 total
Snapshots:   0 total
Time:        95.244 s
Ran all test suites.


```

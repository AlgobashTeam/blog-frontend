# Cashier with Member System

Use [SQLite 3](https://www.npmjs.com/package/sqlite3) for the database. The database name is `sqlite.db`, located in the root of the project directory.

> Used HTTP status code: 200, 400, 404, 500

## Member Endpoint

- #### GET `/api/members`

  This endpoint will return list of members from database. The default item count will be displayed is 10, but it can be changed by passing `itemsPerPage` param. To move between pages, use `pageIndex` param.
  **Query Params**

  ```
  pageIndex=1
  itemsPerPage=1
  ```

  **Response**

  ```json
  {
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "gender": "male",
        "phone": "081234567890",
        "poin": 0,
        "created_at": "2021-03-16 01:46:23",
        "updated_at": null
      }
    ]
  }
  ```

- #### POST `/api/members`

  This endpoint will add new member to database. Allowed genders are `male` and `female`. `phone` is unique and has 12 digits.
  **Request Body**

  ```json
  {
    "name": "John Doe",
    "gender": "male",
    "phone": "081234567890"
  }
  ```

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "name": "John Doe",
      "gender": "male",
      "phone": "081234567890",
      "poin": 0,
      "created_at": "2021-03-16 01:46:23",
      "updated_at": null
    }
  }
  ```

- #### GET `/api/members/:memberId`

  This endpoint will return single member data by member ID.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | memberId | 1 |

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "name": "John Doe",
      "gender": "male",
      "phone": "081234567890",
      "poin": 0,
      "created_at": "2021-03-16 01:46:23",
      "updated_at": null
    }
  }
  ```

- #### PATCH `/api/members/:memberId`

  This endpoint will edit specific data of a member. Allowed genders are `male` and `female`. `phone` is unique and has 12 digits. Fields that allowed to edit are `name`, `gender`, `phone`.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | memberId | 1 |

  **Request Body**

  ```json
  {
    "name": "John Does"
  }
  ```

  **Response Body**

  ```json
  {
    "data": {
      "id": 1,
      "name": "John Does",
      "gender": "male",
      "phone": "081234567890",
      "poin": 0,
      "created_at": "2021-03-16 01:46:23",
      "updated_at": "2021-02-16 02:24:31"
    }
  }
  ```

- #### DELETE `/api/members/:memberId`

  This endpoint will delete a member from database.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | memberId | 1 |

  **Response Body**

  ```json
  {
    "data": {
      "id": 1
    }
  }
  ```

## Product Endpoint

- #### GET `/api/products`

  This endpoint will return list of products from database. The default item count will be displayed is 10, but it can be changed by passing `itemsPerPage` param. To move between pages, use `pageIndex` param.
  **Query Params**

  ```
  pageIndex=1
  itemsPerPage=1
  ```

  **Response**

  ```json
  {
    "data": [
      {
        "id": 1,
        "name": "Apple Pen",
        "price": 10000,
        "created_at": "2021-03-15 10:21:28",
        "updated_at": null
      }
    ]
  }
  ```

- #### POST `/api/products`

  This endpoint will add new product to database. `price` must be above 0.
  **Request Body**

  ```json
  {
    "name": "Apple Pen",
    "price": 10000
  }
  ```

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "name": "Apple Pen",
      "price": 10000,
      "created_at": "2021-03-15 10:21:28",
      "updated_at": null
    }
  }
  ```

- #### GET `/api/products/:productId`

  This endpoint will return single product data by product ID.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | productId | 1 |

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "name": "Apple Pen",
      "price": 10000,
      "created_at": "2021-03-15 10:21:28",
      "updated_at": null
    }
  }
  ```

- #### PATCH `/api/products/:productId`

  This endpoint will edit specific data of a product. `price` must be above 0. Fields that allowed to edit are `name`, `price`.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | productId | 1 |

  **Request Body**

  ```json
  {
    "name": "Apple Pencil"
  }
  ```

  **Response Body**

  ```json
  {
    "data": {
      "id": 1,
      "name": "Apple Pencil",
      "price": 10000,
      "created_at": "2021-03-15 10:21:28",
      "updated_at": "2021-02-16 02:39:18"
    }
  }
  ```

- #### DELETE `/api/products/:productId`

  This endpoint will delete a product from database.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | productId | 1 |

  **Response Body**

  ```json
  {
    "data": {
      "id": 1
    }
  }
  ```

## Order Endpoint

- #### GET `/api/orders`

  This endpoint will return a list of order from database.
  **Query Params**

  ```
  pageIndex=1
  itemsPerPage=1
  ```

  **Response**

  ```json
  {
    "data": [
      {
        "id": 1,
        "member_id": 1,
        "total_gross": 21000,
        "total_net": 23100,
        "ppn": 2100,
        "paid_amount": 120000,
        "created_at": "2021-03-16 07:24:31"
      }
    ]
  }
  ```

- #### POST `/api/orders`

  This endpoint will add new order to database. `paid_amount` is the amount of customer's money. `member_id` is nullable. `items` is an array containing the customer's cart.
  **Request Body**

  ```json
  {
    "paid_amount": 120000,
    "member_id": 1,
    "items": [
      {
        "product_id": 1,
        "quantity": 2
      }
    ]
  }
  ```

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "member_id": 1,
      "total_gross": 21000,
      "total_net": 23100,
      "ppn": 2100,
      "paid_amount": 120000,
      "created_at": "2021-03-16 07:24:31"
    }
  }
  ```

  - `ppn` is 10% of the `total_gross`
  - `total_net` is `total_gross` + `ppn`
  - `member_id` is nullable
  - If the customer is already a member, Every purchase of 200 will get 1 point. E.g.: if the purchase is 10500 (without PPN), you will get 52 points

- #### GET `/api/orders/:orderId`

  This endpoint will return a list of order from database.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | orderId | 1 |

  **Response**

  ```json
  {
    "data": {
      "id": 1,
      "member_id": 1,
      "total_gross": 21000,
      "total_net": 23100,
      "ppn": 2100,
      "paid_amount": 120000,
      "created_at": "2021-03-16 07:24:31",
      "items": [
        {
          "id": 1,
          "order_id": 1,
          "product_id": 1,
          "product_price": 10500,
          "quantity": 2,
          "created_at": "2021-03-16 07:24:31"
        }
      ]
    }
  }
  ```

- #### GET `/api/members/:memberId/orders`

  This endpoint will return a list of order of specific member by memberId.
  **Path Variables**
  | Key | Value |
  |:---:|:-----:|
  | memberId | 1 |

  **Query Params**

  ```
  pageIndex=1
  itemsPerPage=1
  ```

  **Response**

  ```json
  {
    "data": [
      {
        "id": 1,
        "member_id": 1,
        "total_gross": 21000,
        "total_net": 23100,
        "ppn": 2100,
        "paid_amount": 120000,
        "created_at": "2021-03-16 07:24:31"
      }
    ]
  }
  ```

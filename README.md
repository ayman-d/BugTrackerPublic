
# Bug Tracker App

This personal project is a demo that mimicks a bug/ticket tracking system where employees of a company can log technical bugs/errors. The tickets support full CRUD functionality and are sorted by date and open/closed status. Future development of the app will include user authentication/authorization.

---

## API Reference

#### Get all bugs

```http
  GET /api/bugs
```

#### Get bug

```http
  GET /api/bugs/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of bug to get    |


#### Create bug

```http
  POST /api/bugs

  sample request body
  {
    "title": string,
    "description": string,
    "admin": string,
    "developer": string,
    "category": string["Hardware","Software"],
    "priority": string["High","Medium","Low"],
    "status": string["Open","Closed"]
  }
```


#### Edit bug

```http
  PUT /api/bugs/${id}

  sample request body
  {
    "title": string,
    "description": string
  }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of bug to edit   |

#### Delete bug

```http
  DELETE /api/bugs/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of bug to delete |

---

## Features

#### Create/Edit Bug

<img src="https://puu.sh/HLDWG/831771c611.png" alt="register page" />

### Bug Listing/Sorting

<img src="https://puu.sh/HLKAl/dab64c174a.png" alt="register page" />

### Bug Detailed View

<img src="https://puu.sh/HLKAL/266aae96a2.png" alt="register page" />
  

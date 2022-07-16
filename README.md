<h1 align="center">CLC Portal</h1>

## Problem Statement

<p align="center">When a student leaves a college then he/she requires a college leaving certificate to join higher institutions or organisations.Most of the time there is a delay while issuing the certificate due to negligence or lack of proper management, also the student might have already shifted to a new location which makes it more difficult to get the certificate on its own. Sending request through mail also leads to delay if there are other requests already in the queue. So we need to solve this problem by creating a portal only meant for issuing of certificate.</p>

## Solution

<p align="center">CLC Portal solves the previous cumbersome manual process of getting certificates by providing a platform through which students can request their certificates online and at the other end admin can manage the requests efficiently and issue the certificate.</p>

## Tech Stack
### Frontend
- React Js
- Chakra UI

### Backend
- Node Js
- Express Js
- MongoDB
- NodeMailer



## Features

- Student & Admin Interfaces.
- Allows students to apply for the college leaving certificate. Students can check their application status.
- College adminstrator can accept/decline requests.
- Admin can issue the certificate which will be sent to the respective student through email.
- In-built mail feature using **NodeMailer** .
- Customizable as per the need of adminstration or student.

## Install the frontend

```bash
git clone git@github.com:Srutip04/CLC.git
cd client
npm install
npm start
```

## Install the backend

```bash
git clone git@github.com:Srutip04/CLC.git
cd server
npm install
npm start
```
## Set the enviroment variables

```
DB_URL = 
JWT_SECRET=
USER=
PASS=
```

## Contributors
- [Shruti](https://github.com/Srutip04)
- [Aditi](https://github.com/AditiRout)

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

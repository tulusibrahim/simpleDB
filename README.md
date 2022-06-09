
# SimpleDB

Simplify your way to store simple data.

## Getting started

- Fork the project
- Clone to your machine
```
git clone https://github.com/<githubUsername>/simpleDB.git
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Reference

Base URL: ```https://simpledb.vercel.app/api```

### Add new property

GET `/add/{propertyName} `

### Add new data

GET `/add/{propertyName}/{data}`   
`note` Property must exist first 

### Get all stored property

GET `/select/properties` 

### Get all data based on property

GET `/select/{propertyName}` 

### Get specific data

GET `/select/{propertyName}/{data}` 

### Update data

GET `/update/{propertyName}/{oldData}/{newData}` 

### Delete data

GET `/delete/{propertyName}/{data}`    

Credits

Copyright © 2022 Tulus Ibrahim
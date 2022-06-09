This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Reference

POST <br />
add new property <br />
/add/{propertyName} <br />
<br />
POST <br />
add new data *property must exist first <br />
/add/{propertyName}/{data} <br />
<br />
GET <br />
get all stored property <br />
/select/properties <br />
<br />
GET <br />
get all data based on property <br />
/select/{propertyName} <br />
<br />
GET <br />
get data based on search/query data <br />
/select/{propertyName}/{data} <br />
<br />
UPDATE <br />
update data based on search/query data <br />
/update/{propertyName}/{oldData}/{newData} <br />
<br />
DELETE <br /> 
delete specific data on a property <br />
/delete/{propertyName}/{data} <br />

<!-- DELETE
delete property and also the whole data attached to it
/delete/{propertyName} -->

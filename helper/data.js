export const data = [
    [
        "async function addProperty(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/add/{propertyName}'",
        "\n",
        "   let insert = await fetch(url, {headers: header})",
        "\n",
        "   let json = await insert.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function addData(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/add/{propertyName}/{data}'",
        "\n",
        "   let insert = await fetch(url, {headers: header})",
        "\n",
        "   let json = await insert.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function getProperty(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/select/properties'",
        "\n",
        "   let data = await fetch(url, {headers: header})",
        "\n",
        "   let json = await data.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function getDataBasedOnProperty(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/select/{propertyName}'",
        "\n",
        "   let data = await fetch(url, {headers: header})",
        "\n",
        "   let json = await data.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function getSpecificData(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/select/{propertyName}/{data}'",
        "\n",
        "   let data = await fetch(url, {headers: header})",
        "\n",
        "   let json = await data.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function updateData(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/update/{propertyName}/{oldData}/{newData}'",
        "\n",
        "   let update = await fetch(url, {headers: header})",
        "\n",
        "   let json = await update.json()",
        "   console.log(json)",
        "}"
    ],
    [
        "async function deleteData(){",
        "   let header = {",
        "     userid: yourToken",
        "   }",
        "\n",
        "   let url = 'https://simpledb.vercel.app/api/delete/{propertyName}/{data}'",
        "\n",
        "   let delete = await fetch(url, {headers: header})",
        "\n",
        "   let json = await delete.json()",
        "   console.log(json)",
        "}"
    ]]

export const exampleTitle = [
    'Add new property',
    'Add new data',
    'Get all stored properties',
    'Get data based on property',
    'Get specific data',
    'Update data',
    'Delete data'
]

export const description = [
    {
        definition: 'Add new property to database.',
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the property you want to add.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
    {
        definition: "Add new data to database based on property.",
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the existing property.',
        },
        {
            name: 'data',
            type: 'Required',
            parameterDesc: 'Value you want to add.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: "A property must be added first otherwise it won't work."
    },
    {
        definition: 'Get all stored properties.',
        parameter: [],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
    {
        definition: 'Get data based on property name.',
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the existing property.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
    {
        definition: 'Get specific data.',
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the existing property.',
        },
        {
            name: 'data',
            type: 'Required',
            parameterDesc: 'Value of the data.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
    {
        definition: 'Update data.',
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the existing property.',
        },
        {
            name: 'oldData',
            type: 'Required',
            parameterDesc: 'Data you want to change.',
        },
        {
            name: 'newData',
            type: 'Required',
            parameterDesc: 'Value of the new data.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
    {
        definition: 'Delete data.',
        parameter: [{
            name: 'propertyName',
            type: 'Required',
            parameterDesc: 'Name of the existing property.',
        },
        {
            name: 'data',
            type: 'Required',
            parameterDesc: 'Value of the data you want to delete.',
        }],
        header: [{
            name: 'userid',
            type: 'Required'
        }],
        headerDesc: 'The token you get after create a new one.',
        note: ''
    },
]
import { supabase } from "../../../../../helper/helper"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    let dbData = process.env.DB_DATA
    let property = req.query.property
    let oldData = req.query.oldData
    let newData = req.query.newData
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let select = await supabase.from(dbData).update({ data: newData }).match({ userId: id, property: property, data: oldData })
        console.log(select)

        if (select.error) {
            res.status(select.status).json({ message: `${select.statusText}` })
        }
        else {
            res.json(select.data)
        }
    }
}
import { supabase } from "../../../../helper/helper"
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
    let data = req.query.data
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let select = await supabase.from(dbData).select().match({ userId: id, property: property, data: data })
        console.log(select)

        if (select.error) {
            res.status(select.status).json({ message: `Error ${select.error.code}` })
        }
        else {
            res.json(select.data)
        }
    }
}
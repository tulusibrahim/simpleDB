import { supabase } from "../../../helper/helper"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    let id = req.headers.userid
    let dbProperty = process.env.DB_PROPERTY

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let data = await supabase.from(dbProperty).select().match({ userId: id })
        console.log(data)
        if (data.error) {
            res.status(data.status).json(data.error.message)
        }
        else {
            res.json(data.body)
        }
    }

}
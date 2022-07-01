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
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let select = await supabase.from(dbData).delete().match({ userId: id, property: property })
        console.log(select)

        if (select.data.length == 0) {
            if (!select.error) {
                return res.json({ message: 'You might have typo in property name or the property has been deleted' })
            }
        }

        if (select.error) {
            res.status(select.status).json({ message: `${select.error.code}` })
        }
        else {
            res.json(select.data)
        }
    }
}
import { supabase } from "../../../../helper/helper"
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    let dbProperty = process.env.DB_PROPERTY
    let dbToken = process.env.DB_TOKEN
    let property = req.query.property
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let checkToken = await supabase.from(dbToken).select().match({ token: id })

        if (checkToken.data.length > 0) {
            let checkProperty = await supabase.from(dbProperty).select().match({ userId: id, property: property })

            if (checkProperty.data.length > 0) {
                res.status(400).json({ message: `${property} has been defined. Please try another name.` })
            }
            else {
                let insert = await supabase.from(dbProperty).insert({ userId: id, property: property })
                console.log(insert)

                if (insert.error) {
                    res.status(insert.status).json({ message: 'Failed to add new property. Please try again' })
                }
                else {
                    res.status(insert.status).json(insert)
                }
            }
        }
        else {
            res.status(403).json({ message: 'No match token found.' })
        }
    }

}
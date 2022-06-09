import { supabase } from "../../../../helper/helper"

export default async function handler(req, res) {
    let dbData = process.env.DB_DATA
    let property = req.query.property
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let select = await supabase.from(dbData).select().match({ userId: id, property: property })
        console.log(select)

        if (select.error) {
            res.status(select.status).json({ message: `Error ${select.error.code}` })
        }
        else {
            res.json(select.data)
        }
    }
}
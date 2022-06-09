import { supabase } from "../../../../helper/helper"

export default async function handler(req, res) {
    let dbData = process.env.DB_DATA
    let property = req.query.property
    let data = req.query.data
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
        let select = await supabase.from(dbData).delete().match({ userId: id, property: property, data: data })
        console.log(select)

        if (select.error) {
            res.status(select.status).json({ message: `${select.error.code}` })
        }
        else {
            res.json(select.data)
        }
    }
}
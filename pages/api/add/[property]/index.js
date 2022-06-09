import { supabase } from "../../../../helper/helper"

export default async function handler(req, res) {
    let dbProperty = process.env.DB_PROPERTY
    let property = req.query.property
    let id = req.headers.userid

    if (id == undefined) {
        res.status(401).json({ message: 'Unauthorized' })
    }
    else {
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

}
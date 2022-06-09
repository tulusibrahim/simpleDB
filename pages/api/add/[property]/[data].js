// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from "../../../../helper/helper"

export default async function handler(req, res) {
  let property = req.query.property
  let data = req.query.data
  let id = req.headers.userid
  let dbProperty = process.env.DB_PROPERTY
  let dbData = process.env.DB_DATA

  if (id == undefined) {
    res.status(401).json({ message: 'Unauthorized' })
  }
  else {
    let checkProperty = await supabase.from(dbProperty).select().eq('userId', id).eq('property', property)
    console.log(checkProperty)

    if (checkProperty.data == '') {
      res.status(400).json({ message: 'No existing property found' })
    }
    else {
      let insert = await supabase.from(dbData).insert({ userId: id, property: property, data: data })
      if (insert.error) {
        res.json(insert.error.message)
      }
      else {
        res.json(insert)
      }
    }
  }

}

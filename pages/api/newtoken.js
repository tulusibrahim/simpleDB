import NextCors from 'nextjs-cors';
import { supabase } from '../../helper/helper';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    let dbToken = process.env.DB_TOKEN
    let token = Math.random().toString(36).substr(2, 6)

    let select = await supabase.from(dbToken).insert({ token: token })
    console.log(select)

    res.json({ token: token })
}
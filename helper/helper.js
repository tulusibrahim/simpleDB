import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
let url = process.env.NEXT_PUBLIC_SUPABASE_URL
let key = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(url, key)
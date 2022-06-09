import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://bbgnpwbarxehpmmnyfgq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzE4NzU2NywiZXhwIjoxOTQyNzYzNTY3fQ.HtwezwLxcXQEMTOl-vH6b9SszRtByhX1FSF-dOEqrBc')
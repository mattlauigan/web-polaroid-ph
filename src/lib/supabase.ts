import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.BASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

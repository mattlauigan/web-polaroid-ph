import { createClient } from '@supabase/supabase-js';
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from "$env/static/public"

const supabase_url = 'https://fywujgcodjnslxizvoml.supabase.co'
const publishable_key = 'sb_publishable_wh9O9n8cZOGGW0X05vEMHw_Lfm0Cfrq'

export const supabase = createClient(supabase_url, publishable_key);

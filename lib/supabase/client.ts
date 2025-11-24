"use client"

import { createBrowserClient } from "@supabase/ssr"
import { env } from "../../env.mjs"

export function createSupabaseBrowserClient() {
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("Supabase env vars are not set")
  }

  return createBrowserClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

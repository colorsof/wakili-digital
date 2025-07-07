import { createClient } from '@/lib/supabase/client'

export async function signInWithEmail(email: string, password: string) {
  const supabase = createClient()
  return await supabase.auth.signInWithPassword({ email, password })
}

export async function signUpWithEmail(email: string, password: string, metadata: any) {
  const supabase = createClient()
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata
    }
  })
}

export async function signInWithGoogle() {
  const supabase = createClient()
  return await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })
}

export async function signOut() {
  const supabase = createClient()
  return await supabase.auth.signOut()
}

export async function getUser() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
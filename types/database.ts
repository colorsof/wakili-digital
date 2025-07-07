export type Plan = 'basic' | 'standard' | 'premium'
export type ProfessionType = 'lawyer' | 'doctor' | 'dentist' | 'accountant'
export type UserRole = 'super_admin' | 'org_admin' | 'org_user' | 'client'

export interface Organization {
  id: string
  name: string
  slug: string
  domain?: string
  subdomain: string
  plan: Plan
  profession_type: ProfessionType
  status: 'active' | 'suspended' | 'cancelled'
  settings: {
    theme?: {
      primaryColor: string
      secondaryColor: string
    }
    logo?: string
    contact?: {
      phone: string
      email: string
      address: string
    }
  }
  created_at: string
  updated_at: string
}

export interface Site {
  id: string
  organization_id: string
  template: string
  content: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    about: {
      description: string
      team: Array<{
        name: string
        role: string
        bio: string
        image?: string
      }>
    }
    services: Array<{
      title: string
      description: string
      features: string[]
      price?: string
    }>
  }
  theme: {
    colors: {
      primary: string
      secondary: string
      accent: string
    }
    fonts: {
      heading: string
      body: string
    }
  }
  features: {
    booking: boolean
    blog: boolean
    portal: boolean
    payments: boolean
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  published: boolean
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  organization_id: string
  client_name: string
  client_email?: string
  client_phone: string
  service_type: string
  preferred_date: string
  preferred_time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
}
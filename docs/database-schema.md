# Wakili SaaS Database Schema

## Multi-Tenant Architecture

### Core Tables

#### 1. `organizations` (Tenants)
```sql
- id: uuid PRIMARY KEY
- name: text NOT NULL -- "Adv. Wanjiru & Co."
- slug: text UNIQUE NOT NULL -- "wanjiru-co"
- domain: text UNIQUE -- "wanjirulaw.com"
- subdomain: text UNIQUE NOT NULL -- "wanjiru"
- plan: enum ('basic', 'standard', 'premium')
- profession_type: enum ('lawyer', 'doctor', 'dentist', 'accountant')
- status: enum ('active', 'suspended', 'cancelled')
- settings: jsonb -- theme colors, logo, etc.
- created_at: timestamp
- updated_at: timestamp
```

#### 2. `users`
```sql
- id: uuid PRIMARY KEY
- email: text UNIQUE NOT NULL
- organization_id: uuid REFERENCES organizations(id)
- role: enum ('super_admin', 'org_admin', 'org_user', 'client')
- profile: jsonb
- created_at: timestamp
```

#### 3. `sites` (Website configurations)
```sql
- id: uuid PRIMARY KEY
- organization_id: uuid REFERENCES organizations(id)
- template: text -- 'lawyer_v1', 'doctor_v1'
- content: jsonb -- All page content
- theme: jsonb -- Colors, fonts, etc.
- features: jsonb -- Enabled features based on plan
- seo: jsonb -- Meta tags, etc.
- published: boolean DEFAULT false
- created_at: timestamp
- updated_at: timestamp
```

#### 4. `bookings`
```sql
- id: uuid PRIMARY KEY
- organization_id: uuid REFERENCES organizations(id)
- client_name: text NOT NULL
- client_email: text
- client_phone: text NOT NULL
- service_type: text
- preferred_date: date
- preferred_time: time
- status: enum ('pending', 'confirmed', 'completed', 'cancelled')
- notes: text
- created_at: timestamp
```

#### 5. `clients` (Premium feature)
```sql
- id: uuid PRIMARY KEY
- organization_id: uuid REFERENCES organizations(id)
- user_id: uuid REFERENCES users(id)
- name: text NOT NULL
- email: text
- phone: text
- cases: jsonb
- documents: jsonb
- created_at: timestamp
```

#### 6. `invoices`
```sql
- id: uuid PRIMARY KEY
- organization_id: uuid REFERENCES organizations(id)
- amount: decimal
- currency: text DEFAULT 'KES'
- status: enum ('draft', 'sent', 'paid', 'overdue')
- due_date: date
- items: jsonb
- created_at: timestamp
```

#### 7. `payments`
```sql
- id: uuid PRIMARY KEY
- organization_id: uuid REFERENCES organizations(id)
- invoice_id: uuid REFERENCES invoices(id)
- amount: decimal
- payment_method: enum ('mpesa', 'bank', 'card')
- transaction_ref: text
- status: enum ('pending', 'successful', 'failed')
- created_at: timestamp
```

### Row Level Security (RLS) Policies

```sql
-- Users can only see data from their organization
CREATE POLICY "Tenant Isolation" ON bookings
  FOR ALL USING (organization_id = auth.jwt()->>'organization_id');

-- Super admins can see everything
CREATE POLICY "Super Admin Access" ON organizations
  FOR ALL USING (auth.jwt()->>'role' = 'super_admin');
```

### Features by Plan

#### Basic Plan
- Static website
- Contact form → Email
- Basic analytics

#### Standard Plan
- Everything in Basic
- Booking calendar
- Client management (basic)
- Email notifications
- Blog/News section

#### Premium Plan
- Everything in Standard
- Client portal
- Document management
- Payment processing
- Advanced analytics
- Custom domain
- Priority support
```
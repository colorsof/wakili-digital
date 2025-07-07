# Deployment Guide - Wakili Digital

## Option 1: Deploy to Vercel (Recommended - Free)

### Steps:

1. **Create Vercel Account**
   - Go to https://vercel.com/signup
   - Sign up with GitHub (recommended) or email

2. **Deploy via GitHub (Easiest)**
   ```bash
   # Create GitHub repository
   gh repo create wakili-digital --public
   
   # Or manually:
   # Go to https://github.com/new
   # Create repository named "wakili-digital"
   
   # Push code
   git remote add origin https://github.com/YOUR_USERNAME/wakili-digital.git
   git push -u origin main
   ```

3. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your wakili-digital repo
   - Click "Deploy"

4. **Add Environment Variables**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add these (get from Supabase):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Your site will be live at: `https://wakili-digital.vercel.app`

---

## Option 2: Deploy via Vercel CLI

1. **Login to Vercel**
   ```bash
   vercel login
   ```
   - Enter your email
   - Check email for verification

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts
   - Choose defaults

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

---

## Option 3: Deploy to Railway (Alternative)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **New Project from GitHub**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Environment Variables**
   - Add same variables as above
   - Railway provides free PostgreSQL

---

## Option 4: Deploy to Render

1. **Create Render Account**
   - Go to https://render.com
   - Sign up free

2. **New Web Service**
   - Connect GitHub
   - Select repository
   - Build Command: `npm run build`
   - Start Command: `npm start`

---

## Quick Deploy (Without Git)

If you want to deploy RIGHT NOW without GitHub:

1. **Create a Vercel account** at https://vercel.com

2. **Use Vercel CLI**
   ```bash
   npx vercel login
   # Enter email and verify
   
   npx vercel
   # Answer prompts (just press Enter for defaults)
   ```

3. **Your app will deploy and give you a URL!**

---

## After Deployment

1. **Custom Domain** (Optional)
   - In Vercel: Settings > Domains
   - Add your domain (e.g., wakili.digital)
   - Update DNS records

2. **Set up Supabase**
   - Create project at https://supabase.com
   - Get your API keys
   - Add to environment variables

3. **Monitor Performance**
   - Vercel Analytics (built-in)
   - Check deployment logs

---

## Troubleshooting

**Build Fails?**
- Check Node version (should be 18+)
- Ensure all dependencies installed
- Check for TypeScript errors

**Environment Variables Not Working?**
- Redeploy after adding them
- Use NEXT_PUBLIC_ prefix for client-side vars

**Domain Not Working?**
- DNS propagation takes 24-48 hours
- Check nameservers are correct

---

## Cost Breakdown

**Vercel Free Tier Includes:**
- Unlimited personal projects
- 100GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Serverless functions

**When to Upgrade:**
- Over 100GB bandwidth (unlikely initially)
- Need team features
- Custom analytics

---

## Next Steps After Deploy

1. Share your live URL for feedback
2. Set up Google Analytics
3. Add your first real client
4. Start marketing!

Remember: The hardest part is getting started. Once deployed, iterate based on user feedback!
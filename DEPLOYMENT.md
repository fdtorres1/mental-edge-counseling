# Deployment Guide

## Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Astro
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Build Settings
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Formsubmit Configuration

The contact form is configured to send emails to `felix@elarenstudio.com` via Formsubmit.

### To Change Email Address

1. Update `src/components/ContactForm.tsx`:
   - Change `felix@elarenstudio.com` to your desired email
   - Update the hidden `_next` field if needed

2. Verify the email:
   - Formsubmit will send a verification email
   - Click the verification link

### Formsubmit Features
- Free tier: 50 submissions/month
- No backend required
- Spam protection included
- Email notifications

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify Google Maps embed
- [ ] Check SEO metadata
- [ ] Test form validation
- [ ] Verify accessibility features

## Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify Formsubmit email is confirmed
- Check CORS settings if using custom domain

### Build Errors
- Ensure Node.js 18+ is installed
- Run `npm install` to update dependencies
- Check `astro.config.mjs` for correct settings

### Performance Issues
- Enable Vercel Analytics
- Check image optimization
- Review bundle size in build output


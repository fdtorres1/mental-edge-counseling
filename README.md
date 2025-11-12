# Mental Edge Counseling LLC Website

A modern, responsive website for Mental Edge Counseling LLC built with Astro, React, and Tailwind CSS.

## Features

- 🚀 **Fast & Modern**: Built with Astro for optimal performance
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ♿ **Accessible**: WCAG-compliant with proper ARIA labels and semantic HTML
- 🔍 **SEO Optimized**: Includes structured data, meta tags, and sitemap
- 🎨 **Beautiful Design**: Modern UI with a calming color palette
- ⚡ **Performance**: Optimized images, lazy loading, and minimal JavaScript

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://react.dev/) - Interactive components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/ # React components
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── TherapistCard.tsx
│   ├── layouts/     # Astro layouts
│   │   └── BaseLayout.astro
│   ├── pages/       # Route pages
│   │   ├── index.astro (Home)
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── paperwork.astro
│   │   └── contact.astro
│   └── styles/      # Global styles
│       └── global.css
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── vercel.json      # Vercel deployment config
```

## Pages

- **Home** (`/`) - Hero section, services preview, key information
- **About Us** (`/about`) - Therapist profiles and mission statement
- **Services** (`/services`) - Detailed services, insurance information
- **New Client Paperwork** (`/paperwork`) - Forms and documentation
- **Contact Us** (`/contact`) - Contact form and location map

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Astro and configure the build settings
4. Your site will be live!

The `vercel.json` file is already configured for optimal deployment.

### Environment Variables

If you need to add form handling or other integrations, create a `.env` file:

```env
PUBLIC_CONTACT_FORM_API_URL=your_api_url
```

## Customization

### Colors

Edit `tailwind.config.mjs` to customize the color palette:

```js
colors: {
  primary: { /* ... */ },
  secondary: { /* ... */ }
}
```

### Content

- Update therapist information in `src/pages/about.astro`
- Modify services in `src/pages/services.astro`
- Edit contact information in `src/components/Footer.tsx` and `src/pages/contact.astro`

## Form Integration

The contact form (`src/components/ContactForm.tsx`) currently uses a simulated submission. To integrate with a real service:

1. **Email Service** (e.g., SendGrid, Mailgun):
   - Create an API endpoint
   - Update the `handleSubmit` function in `ContactForm.tsx`

2. **Form Service** (e.g., Formspree, Netlify Forms):
   - Update the form action URL
   - Configure the service settings

3. **HIPAA-Compliant Forms** (e.g., Jotform, IntakeQ):
   - Embed the form service
   - Update the paperwork page with embedded forms

## Google Maps

The Google Maps embed on the contact page uses a placeholder URL. Update it with your actual location coordinates:

1. Get coordinates from [Google Maps](https://www.google.com/maps)
2. Update the iframe `src` in `src/pages/contact.astro`

## SEO

The site includes:
- Structured data (JSON-LD) for local business
- Meta tags (Open Graph, Twitter Cards)
- Semantic HTML
- Sitemap (to be generated)
- robots.txt

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images (add when images are added)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Mental Edge Counseling LLC. All rights reserved.

## Repository

- **GitHub:** https://github.com/fdtorres1/mental-edge-counseling
- **Issues:** See [GitHub Issues](https://github.com/fdtorres1/mental-edge-counseling/issues) for current tasks and enhancements

## Support

For questions or issues, contact:
- Email: mentaledgecounseling@gmail.com
- Phone: 815-277-1092

## Current Status

✅ **Version 1.0.0 - Released:**
- Website rebuild with Astro, React, and Tailwind CSS
- All pages implemented (Home, About, Services, Paperwork, Contact)
- Individual therapist pages with full bios
- Formsubmit integration for contact form
- Therapist headshots downloaded and served locally
- Custom image positioning for optimal framing
- SEO optimization and structured data
- Responsive design and accessibility features
- GitHub repository created and pushed

📋 **Open Issues:**
- Add PDF forms for New Client Paperwork
- Update Google Maps embed with correct coordinates
- Integrate online scheduling/booking system
- Update Formsubmit email address (currently: felix@elarenstudio.com)
- Optimize and add additional images

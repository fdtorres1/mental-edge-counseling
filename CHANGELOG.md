# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-11-12

### Added
- Initial website rebuild with Astro, React, and Tailwind CSS
- Home page with hero section and services preview
- About page with clickable therapist preview cards
- Individual therapist pages for Nathan Lagacy, Kimberly Briney, and Eduardo Castillo
- Services page with mission, background, and insurance information
- New Client Paperwork page with form download links
- Contact page with form and Google Maps integration
- Responsive navigation with mobile menu
- Footer component with contact information
- Formsubmit integration for contact form (configured to felix@elarenstudio.com)
- Therapist headshots downloaded and served locally
- SEO optimization with structured data (JSON-LD)
- Accessibility features (ARIA labels, semantic HTML)
- Vercel deployment configuration
- GitHub repository setup with issues tracking

### Features
- Fully responsive design (mobile-first approach)
- Modern UI with custom color palette (primary green, secondary blue)
- Performance optimized (Astro static generation, minimal JavaScript)
- WCAG 2.1 compliant accessibility
- SEO friendly (meta tags, Open Graph, Twitter Cards, structured data)
- Custom image positioning for therapist headshots
- Clickable therapist cards with hover effects
- Individual pages for each therapist with full bios and specialties

### Components
- `Navigation.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Footer with contact information and links
- `TherapistPreviewCard.tsx` - Clickable therapist preview cards for About page
- `TherapistCard.tsx` - Full therapist profile card with image, specialties, and bio
- `ContactForm.tsx` - Accessible contact form with Formsubmit integration

### Pages
- `/` - Home page
- `/about` - Team overview with clickable cards
- `/about/nathan-lagacy` - Nathan's individual page
- `/about/kimberly-briney` - Kimberly's individual page
- `/about/eduardo-castillo` - Eduardo's individual page
- `/services` - Services and insurance information
- `/paperwork` - New client paperwork forms
- `/contact` - Contact form and location map

### Technical Details
- Built with Astro 5.15.5
- React 19.2.0 for interactive components
- Tailwind CSS 4.1.17 for styling
- TypeScript for type safety
- Formsubmit for contact form handling
- Local image serving for therapist headshots
- Custom object-position adjustments for optimal image framing


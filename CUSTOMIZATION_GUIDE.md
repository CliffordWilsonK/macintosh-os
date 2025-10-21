# Customization Guide

This document explains the changes made to personalize this fork and what you should customize further.

## Changes Made

All references to the original author (fabiconcept/Favour Ajokubi) have been updated to **CliffordWilsonK**. Here's what was changed:

### 1. README.md
- Updated GitHub badges to point to CliffordWilsonK/macintosh-os
- Updated clone URL
- Added credit to both CliffordWilsonK (customizer) and fabiconcept (original creator)

### 2. Constants/metadata.ts
- Changed title, description, and keywords
- Updated author information to CliffordWilsonK
- Changed URLs to point to github.com/CliffordWilsonK
- Updated OpenGraph and Twitter card metadata

### 3. app/components/Header.tsx
- Changed display name from "Favour Tochukwu Ajokubi" to "CliffordWilsonK"
- Changed initials from "FA" to "CW"
- Updated email to placeholder: `your-email@example.com`
- Changed header link to GitHub profile

### 4. app/components/Windows/Mail.tsx
- Updated recipient email to placeholder: `your-email@example.com`

### 5. app/components/Windows/Terminal.tsx
- Changed terminal prompt from `macbook@Fabiconcepts-Machine` to `macbook@CliffordWilsonK-Machine`

### 6. Constants/constants.ts (Social Links)
- Updated GitHub URL to CliffordWilsonK
- Updated LinkedIn URL (placeholder)
- Updated X/Twitter URL (placeholder)
- Removed specific personal links from other social platforms (Facebook, Instagram, etc.)

### 7. Constants/projects.ts
- Updated all project URLs to point to your GitHub or placeholder URLs
- Changed project descriptions to generic placeholders
- You can customize these with your actual projects

### 8. Constants/art.ts
- Cleared all CSS art references (these were specific to the original author)
- Left as empty array with commented example

## What You Should Customize

### High Priority (Required)
1. **Email Address**: Replace `your-email@example.com` in:
   - `app/components/Header.tsx`
   - `app/components/Windows/Mail.tsx`

2. **Social Media Links** in `Constants/constants.ts`:
   - Add your actual LinkedIn URL
   - Add your actual X/Twitter handle
   - Add your other social media profiles (Facebook, Instagram, Threads, WhatsApp)

3. **Projects** in `Constants/projects.ts`:
   - Replace example projects with your actual projects
   - Update project names, descriptions, URLs, and technologies
   - Add screenshots/images for your projects

### Medium Priority (Recommended)
4. **Metadata URLs** in `Constants/metadata.ts`:
   - Update `metadataBase` URL if you're deploying to a custom domain
   - Update OpenGraph image URL to your own preview image
   - Update Twitter creator handle

5. **About/Bio Information**:
   - Add more personal information about yourself
   - Update keywords relevant to your skills

6. **Display Name**: 
   - If you prefer a different display name than "CliffordWilsonK", update it in:
     - `app/components/Header.tsx`
     - `Constants/metadata.ts`

### Low Priority (Optional)
7. **CSS Art** in `Constants/art.ts`:
   - Add your own CSS art projects if you have any

8. **Graphic Design** in `Constants/art.ts`:
   - Update the graphic design portfolio items

9. **Spotify Artists** in `Constants/artists.ts`:
   - Update with your favorite artists

10. **Terminal Hostname** in `app/components/Windows/Terminal.tsx`:
    - Change `macbook@CliffordWilsonK-Machine` to your preferred hostname

## Deployment

After customizing the above, you can deploy this portfolio to:
- **GitHub Pages**: Update the URL in metadata.ts to `https://cliffordwilsonk.github.io/macintosh-os/`
- **Vercel**: The easiest option - just connect your GitHub repo
- **Netlify**: Another great option for easy deployment
- **Custom Domain**: Update all URLs in metadata.ts to your custom domain

## Testing Locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000` to see your changes.

## Building for Production

```bash
npm run build
npm start
```

Note: The build may fail if you don't have internet access to Google Fonts. This is normal in restricted environments.

---

**Original Project**: [fabiconcept/macintosh-os](https://github.com/fabiconcept/macintosh-os)  
**Your Fork**: [CliffordWilsonK/macintosh-os](https://github.com/CliffordWilsonK/macintosh-os)

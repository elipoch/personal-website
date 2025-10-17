# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** - Hero section, skills showcase, and featured projects
- 👤 **About Page** - Personal story, work experience, and education
- 📞 **Contacts Page** - Contact form and information
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful gradients and animations
- ⚡ **Fast Performance** - Built with Next.js for optimal speed

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elipoch/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Customization

1. **Update Personal Information**: 
   - Edit the content in each component file
   - Replace placeholder text with your actual information
   - Update contact details in `src/components/ContactInfo.tsx`

2. **Styling**:
   - Modify colors in `tailwind.config.ts`
   - Update gradients and themes in component files
   - Add your own CSS in `src/app/globals.css`

3. **Content**:
   - Update the navigation title in `src/components/Navigation.tsx`
   - Modify skills, projects, and experience in respective components
   - Add your own images and assets

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contacts/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── AboutHero.tsx
    ├── ContactForm.tsx
    ├── ContactHero.tsx
    ├── ContactInfo.tsx
    ├── Education.tsx
    ├── Experience.tsx
    ├── Hero.tsx
    ├── Navigation.tsx
    ├── Projects.tsx
    └── Skills.tsx
```

## Contributing

Feel free to fork this project and customize it for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).

# Claude.md - Personal Portfolio Website

## Project Overview

This is the personal portfolio website for James Kruck, PhD, an Educational Development Specialist focusing on curriculum design, faculty development, and inclusive learning. The site showcases his academic background in Classical Studies, professional experience in educational leadership, and current work in instructional design and accessibility.

**Live Site**: https://jameskruck.com

## Site Structure

### Main Pages
- `index.html` - Homepage with hero section, about, academic foundations, educator development, leadership experience, and featured projects
- `education.html` - Academic credentials and professional development certifications  
- `teaching.html` - University teaching experience across multiple institutions
- `leadership.html` - Educational leadership philosophy and management experience
- `scholarly.html` - Academic publications, conference papers, and research themes
- `projects.html` - Featured educational development projects and tools
- `resources.html` - Curated instructional design resources (books, podcasts, guides)
- `contact.html` - Contact information and professional links
- `instructionaldesign.html` - Specialized instructional design resources

### Additional Content Pages
- `ai-in-education.html` - AI in education content
- `edida.html` - EDIDA (Educational Design) related content
- `graduate.html` - Graduate-level content
- `human.html` - Human-centered design content
- `scholarlyactivity.html` - Additional scholarly activities
- `teachingandlearning.html` - Teaching and learning methodologies

## Technical Stack

### Frontend Technologies
- **HTML5** - Semantic markup with strong accessibility focus
- **CSS3** - Modern styling with Tailwind CSS framework
- **JavaScript (ES6+)** - Interactive functionality via `common.js`
- **Tailwind CSS 2.2.19** - Utility-first CSS framework via CDN
- **Inter Font** - Typography from Google Fonts

### Key Features
- **Responsive Design** - Mobile-first approach with Tailwind responsive classes
- **Accessibility** - WCAG 2.1 AA compliant with skip links, ARIA labels, focus management
- **Interactive Elements** - Mobile menu, scroll-to-top button, sidebar navigation
- **Maps Integration** - Leaflet.js for educational institution mapping (conditionally loaded)
- **Analytics** - GoatCounter for privacy-focused analytics
- **SEO Optimized** - Structured data, meta tags, Open Graph, Twitter Cards

### File Organization
```
/
├── css/
│   └── styles.css          # Custom styles and animations
├── js/
│   └── common.js          # Shared JavaScript functionality
├── images/                # Profile images, project screenshots, badges
├── resources/             # Academic papers, certificates, CVs (PDFs)
├── backup (original)/     # Backup of original files
├── css (original)/        # Original CSS backup
├── *.html                # All HTML pages
└── CNAME                 # GitHub Pages custom domain configuration
```

## Development Practices

### Code Standards
- **Semantic HTML** - Proper heading hierarchy, meaningful structure
- **Modern CSS** - Flexbox, Grid, CSS custom properties, smooth animations
- **Vanilla JavaScript** - No framework dependencies, progressive enhancement
- **Clean Architecture** - Modular CSS classes, reusable components

### Accessibility Features
- Skip navigation links for keyboard users
- ARIA labels and landmarks throughout
- Proper heading structure (h1 → h2 → h3)
- Focus management and visible focus indicators
- High contrast color choices meeting WCAG standards
- Screen reader friendly content structure

### Performance Optimizations
- Minimal external dependencies (Tailwind via CDN)
- Efficient image optimization
- Smooth CSS animations with hardware acceleration
- Conditional resource loading (maps only when needed)

## Content Management

### Academic Content
- **Scholarly Publications** - PDFs stored in `/resources/` directory
- **Conference Papers** - Organized chronologically with abstracts
- **Professional Certifications** - Quality Matters, ISW credentials with verification links
- **CV/Resume** - Current version available for download

### Project Showcases
- **AI Chatbot Strategy Course** - Interactive business simulation
- **Memory Garden** - Cultural preservation learning module  
- **GenAI Workshop** - Faculty development for AI integration
- **UDL Plus One Workshop** - Universal Design for Learning implementation
- **Case Study Tools** - Adaptive safety training scenarios

## Design System

### Color Palette
- **Primary Blue**: #3b82f6 (blue-600)
- **Secondary Colors**: Various semantic colors for tags and categories
- **Neutral Grays**: #f9fafb (background) to #111827 (text)
- **Accent Colors**: Green, purple, orange, amber for categorization

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700 weights)
- **Font Scale**: Responsive typography with proper contrast ratios
- **Line Height**: 1.6 for body text, 1.3 for headings

### Components
- **Tags**: Color-coded skill/topic indicators
- **Cards**: Project and experience containers with hover effects
- **Timelines**: Visual progression for career history
- **Navigation**: Sticky header with mobile hamburger menu

## Git Workflow

### Current Status
- **Main Branch**: Production-ready code
- **Modified Files**: CSS styles, HTML content, instructional design page, scholarly activity
- **Untracked**: `.vs/` directory (Visual Studio files)

### Deployment
- **Platform**: GitHub Pages
- **Domain**: Custom domain `jameskruck.com` via CNAME
- **Analytics**: GoatCounter integration with admin toggle

## Usage Notes

### For Content Updates
1. **Academic Content**: Update scholarly.html for new publications
2. **Projects**: Add new entries to projects.html with consistent card structure  
3. **Resources**: Maintain instructionaldesign.html with curated learning materials
4. **Professional Updates**: Modify index.html hero section and experience timeline

### For Development
1. **Testing**: Ensure accessibility compliance with tools like WAVE
2. **Performance**: Optimize images and maintain minimal dependency footprint
3. **Cross-browser**: Test interactive elements across modern browsers
4. **Mobile-first**: Verify responsive behavior on various device sizes

### For AI Assistant Collaboration
- **Consistency**: Maintain existing design patterns and semantic structure
- **Accessibility**: Always preserve or enhance WCAG compliance
- **Content Integrity**: Respect the professional academic tone
- **Technical Debt**: Avoid introducing unnecessary complexity or dependencies

## Key Strengths
1. **Professional Focus** - Clear positioning as educational development specialist
2. **Academic Credibility** - Strong scholarly foundation with verifiable credentials  
3. **Practical Applications** - Balance of theory and hands-on project examples
4. **Accessibility Leadership** - WCAG 2.1 AA compliance demonstrates expertise
5. **Modern Web Standards** - Clean, semantic code following current best practices

This website effectively bridges academic scholarship with practical educational development, showcasing both the depth of classical training and the application of evidence-based teaching practices in contemporary contexts.
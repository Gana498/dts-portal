# DTS Portal - Dharma Teja Solutions

A modern, responsive company portal built with ReactJS showcasing our services, team, and capabilities in web development, mobile applications, AI solutions, and robotics.

## 🚀 Live Demo

Visit our portal at: `http://localhost:3000` (when running locally)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Gradient Backgrounds**: Beautiful linear gradients and visual effects
- **Smooth Animations**: CSS animations and hover effects
- **Professional Typography**: Google Fonts (Inter) integration

### 🧩 Interactive Components
- **Fixed Navigation**: Sticky navbar with smooth scroll navigation
- **Hero Section**: Animated floating cards showcasing our services
- **Contact Form**: React-powered form with validation and state management
- **Service Cards**: 4 symmetrical service cards in responsive grid layout

### 📱 Responsive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Flexible Grid**: CSS Grid and Flexbox for responsive layouts
- **Touch-Friendly**: Optimized for touch interactions

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Styling**: CSS3 with modern features (Grid, Flexbox, Custom Properties)
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Create React App with React Scripts 5.0.1
- **Testing**: React Testing Library, Jest

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gana498/dts-portal.git
   cd dts-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### WSL Setup
If running from Windows Subsystem for Linux (WSL):

1. **Install Node.js in WSL**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Navigate to project directory**
   ```bash
   cd /mnt/c/path/to/your/project/dts-portal
   ```

3. **Start the server**
   ```bash
   npm start
   ```

## 🎯 Usage

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run eject      # Eject from Create React App (irreversible)
```

### Environment Variables
The project uses `HOST=0.0.0.0` in the start script to allow external connections, useful for WSL and network access.

## 📁 Project Structure

```
dts-portal/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Hero.js         # Hero/landing section
│   │   ├── About.js        # About us section
│   │   ├── Services.js     # Services showcase
│   │   ├── Blog.js         # Blog placeholder
│   │   ├── Careers.js      # Careers section
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer component
│   ├── App.js              # Main App component
│   ├── index.js            # React DOM entry point
│   ├── styles.css          # Global styles
│   └── ...
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🧩 Components

### Navigation (Navbar.js)
- Fixed position navigation bar
- Responsive hamburger menu for mobile
- Smooth scroll to sections
- Company branding

### Hero Section (Hero.js)
- Eye-catching landing area
- Animated floating service cards
- Call-to-action buttons
- Gradient background with overlay

### About Section (About.js)
- Company information
- Team member showcase
- Core values and features list
- Two-column responsive layout

### Services Section (Services.js)
- **4 Main Services**:
  - Web Application Development
  - Mobile Application Development
  - AI-Driven Solutions
  - Robotics Solutions
- Symmetrical 2x2 grid layout
- Hover effects and animations
- Feature lists for each service

### Blog Section (Blog.js)
- Placeholder for future blog content
- Structured for easy content addition
- Consistent styling with other sections

### Careers Section (Careers.js)
- Job opportunities information
- Benefits and perks list
- Call-to-action for applications
- Professional layout

### Contact Section (Contact.js)
- **Interactive Form** with React state management
- **Form Validation**: Email validation and required fields
- **Contact Information**: Email, phone, location, LinkedIn
- **Success/Error Messages**: User feedback
- Responsive grid layout

### Footer (Footer.js)
- Company information
- Quick links and contact details
- Professional dark theme
- Responsive multi-column layout

## 🎨 Styling Features

### CSS Architecture
- **Global Styles**: Consistent typography and spacing
- **Component-Specific**: Modular CSS organization
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Grid, Flexbox, Custom Properties

### Color Scheme
- **Primary**: Blue gradients (#2563eb, #667eea)
- **Secondary**: Purple accents (#764ba2)
- **Neutral**: Grays for text and backgrounds
- **Success/Error**: Green and red for form feedback

### Responsive Breakpoints
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (adjusted grids)
- **Desktop**: > 1024px (full multi-column layouts)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` directory.

### Deployment Options
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload build folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Dharma Teja Solutions**
- **Email**: dharmateja@dts.com
- **Phone**: +91 99512 64256
- **Location**: Srikakulam, India
- **LinkedIn**: [Connect with us](https://linkedin.com)

## 📄 License

This project is proprietary and confidential to Dharma Teja Solutions.

## 🔄 Version History

- **v0.1.0** - Initial release with all core components
  - Complete React migration from HTML/CSS
  - Responsive design implementation
  - Interactive contact form
  - 4-service showcase layout

---

**Built with ❤️ by Dharma Teja Solutions**
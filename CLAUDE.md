# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this module.

## Module Overview

The `people_and_organizations-ui-web` module is a React-based web application that provides the user interface for managing people and organizational data in the ERP system. It offers modern, responsive web interfaces for party management, contact information, relationships, and organizational structures.

## Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: React Scripts 5.0.1
- **UI Components**: Custom components with FontAwesome icons
- **Form Handling**: React Hook Form 7.51.5
- **Routing**: React Router DOM 6.23.1
- **Testing**: Cucumber.js for BDD testing with Selenium WebDriver
- **Package Manager**: npm
- **Browser Support**: Modern browsers with legacy OpenSSL provider support

## Project Structure

```
people_and_organizations-ui-web/
├── package.json                 # npm dependencies and scripts
├── babel.config.js             # Babel configuration
├── docker-compose.yml          # Local development setup
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   ├── manifest.json          # PWA manifest
│   └── favicon.ico            # Application icon
├── src/                       # React source code
│   ├── App.js                 # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # Application entry point
│   ├── ErpTypeComponent/      # ERP type management components
│   ├── Home/                  # Home page components
│   ├── PaginationControl/     # Pagination utilities
│   ├── fields/               # Reusable form field components
│   └── models/               # Data models and API clients
└── features/                  # BDD test specifications
    ├── step_definitions/
    ├── support/
    └── utils.js
```

## Build and Development Commands

### Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build production bundle
npm run build

# Run unit tests
npm test

# Run BDD tests
npm run bdd_test

# Eject from create-react-app (irreversible)
npm run eject
```

### Docker Commands
```bash
# Start development environment
docker-compose up

# Run in background
docker-compose up -d

# Stop services
docker-compose down
```

## React Application Architecture

### Component Structure
- **App.js**: Main application component with routing
- **ErpTypeComponent**: Manages ERP type definitions and hierarchies
- **Home**: Landing page and navigation
- **PaginationControl**: Reusable pagination component
- **Field Components**: BaseField, TextField, NumberField for form handling

### State Management
- **Local Component State**: React hooks for component-level state
- **Form State**: React Hook Form for form management
- **API Integration**: Direct API calls from components
- **Models**: JavaScript classes for data modeling and API interaction

### Routing Configuration
- **React Router**: Client-side routing for single-page application
- **Route Configuration**: Defined in App.js component
- **Navigation**: Programmatic navigation and route guards

## Form Handling and Validation

### React Hook Form Integration
```javascript
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
};
```

### Field Components
- **BaseField**: Common field functionality and styling
- **TextField**: Text input with validation
- **NumberField**: Numeric input with formatting
- **Custom Validation**: Client-side and server-side validation integration

## API Integration

### Data Models
- **ErpType**: Reference data type management
- **API Clients**: Encapsulated API communication
- **Error Handling**: Centralized error handling and user feedback
- **Loading States**: UI feedback for asynchronous operations

### Backend Integration
- **REST/GraphQL**: Integration with backend API endpoints
- **Authentication**: User authentication and session management
- **Authorization**: Role-based UI features and access control
- **Real-time Updates**: WebSocket integration for live data updates

## Styling and UI Components

### CSS Architecture
- **Component Styles**: CSS modules or styled-components approach
- **Global Styles**: Application-wide styling in App.css
- **Responsive Design**: Mobile-first responsive design principles
- **Theme Support**: Consistent color schemes and typography

### FontAwesome Integration
- **Icon System**: FontAwesome SVG icons for consistent iconography
- **Icon Categories**: Solid, regular, and brand icon sets
- **Performance**: Tree-shaking for minimal bundle size

## Development Workflow

### Component Development
1. **Design Review**: Review UI/UX designs and requirements
2. **Component Creation**: Create reusable React components
3. **Props Interface**: Define component props and PropTypes
4. **State Management**: Implement local state and effects
5. **Testing**: Write unit tests and integration tests
6. **Documentation**: Document component usage and examples

### Feature Development
1. **Feature Planning**: Break down features into components
2. **API Integration**: Connect components to backend services
3. **Form Handling**: Implement forms with validation
4. **Error Handling**: Add error boundaries and user feedback
5. **Testing**: BDD testing with Cucumber and Selenium
6. **Performance**: Optimize rendering and bundle size

## Testing Standards

### BDD Testing with Cucumber
- **Gherkin Features**: Business-readable test specifications
- **Step Definitions**: JavaScript step implementations
- **Selenium WebDriver**: Browser automation for UI testing
- **Page Object Model**: Maintainable test automation structure

### Testing Configuration
```javascript
// features/support/config.js
const config = {
  browser: 'chrome',
  timeout: 30000,
  baseUrl: 'http://localhost:3000',
  // Additional test configuration
};
```

### Test Organization
- **Feature Files**: Business scenarios in Gherkin format
- **Step Definitions**: Reusable step implementations
- **Support Files**: Test utilities and configuration
- **Page Objects**: UI interaction abstractions

## Performance Optimization

### React Performance
- **Component Optimization**: React.memo, useMemo, useCallback
- **Code Splitting**: Dynamic imports and lazy loading
- **Bundle Optimization**: Tree-shaking and dead code elimination
- **Image Optimization**: Responsive images and lazy loading

### Build Optimization
- **Production Build**: Minification and optimization
- **Service Worker**: Caching and offline support
- **CDN Integration**: Static asset delivery optimization
- **Bundle Analysis**: webpack-bundle-analyzer for size optimization

## Browser Compatibility

### Legacy Support
- **OpenSSL Legacy Provider**: Support for older Node.js versions
- **Polyfills**: ES6+ feature polyfills for older browsers
- **Browser Testing**: Cross-browser compatibility testing
- **Progressive Enhancement**: Graceful degradation strategies

### Modern Features
- **ES6+ Features**: Modern JavaScript syntax and features
- **CSS Grid/Flexbox**: Modern layout techniques
- **Web APIs**: Modern browser API integration
- **PWA Features**: Progressive Web App capabilities

## Docker Integration

### Development Environment
- **Multi-container Setup**: Frontend, backend, and database containers
- **Hot Reloading**: Development server with live reload
- **Port Mapping**: Consistent development port configuration
- **Volume Mounting**: Source code mounting for development

### Production Deployment
- **Multi-stage Build**: Optimized production Docker images
- **Static Asset Serving**: Nginx or similar for production serving
- **Environment Configuration**: Runtime environment variable support

## Integration Points

### Backend Integration
- **API Endpoints**: RESTful and GraphQL API integration
- **Authentication**: OAuth2/JWT integration with authorization server
- **Real-time Features**: WebSocket connections for live updates
- **File Upload**: Document and image upload capabilities

### External Services
- **Analytics**: Google Analytics, Adobe Analytics integration
- **Monitoring**: Error tracking with Sentry or similar
- **CDN Integration**: Content delivery network for static assets
- **Third-party APIs**: External service integrations

## Important Notes

- **React 18**: Uses modern React features including hooks and concurrent features
- **Legacy OpenSSL**: Requires `--openssl-legacy-provider` flag for compatibility
- **BDD Testing**: Comprehensive browser-based testing with Cucumber
- **Responsive Design**: Mobile-first approach for cross-device compatibility
- **Performance Critical**: User-facing application requiring optimal performance
- **Accessibility**: Implement WCAG 2.1 accessibility guidelines
- **Security**: Client-side security best practices and XSS prevention
# Frontend Base Template

This project is a frontend template built using modern web technologies. Below is a breakdown of the top-level tech stack used in this project.

## Tech Stack

### Core Frameworks & Libraries
- **React**: `^18.3.1` – A declarative, component-based JavaScript library for building user interfaces.
- **React DOM**: `^18.3.1` – The entry point for React to interact with the DOM.
- **React Router DOM**: `^6.26.2` – Provides dynamic routing capabilities in React.
- **Redux Toolkit**: `^1.9.7` – Official, efficient, and easy-to-use state management for React.

### UI & Styling
- **TailwindCSS**: `^3.4.12` – A utility-first CSS framework for rapidly building custom designs.
- **Sass Loader**: `^12.3.0` – Compiles SCSS/SASS into standard CSS.
- **PostCSS & Autoprefixer**: Used for processing and optimizing CSS, ensuring compatibility with different browsers.

### Module Bundler & Build Tools
- **Webpack**: `^5.94.0` – A module bundler that compiles modern JavaScript and assets.
- **Babel**: `^7.16.0` – Transpiles ES6+ JavaScript to ensure compatibility with older browsers.
- **Webpack Dev Server**: `^5.1.0` – Serves the app during development and enables hot reloading.
- **Mini CSS Extract Plugin**: `^2.4.5` – Extracts CSS into separate files for production.

### Testing Framework
- **Jest**: `^27.4.3` – A JavaScript testing framework, with support for mocking and assertions.
- **Testing Library**: Provides utilities for testing React components (e.g., `@testing-library/react` and `@testing-library/jest-dom`).

### Environment & Configuration
- **Dotenv**: `^10.0.0` – Loads environment variables from a `.env` file into `process.env`.
- **ESLint**: `^8.3.0` – A linter for identifying and reporting on code patterns.

### Developer Experience
- **React Refresh Webpack Plugin**: `^0.5.3` – Enables fast refresh of React components without losing state during development.
- **TypeScript**: `^5.6.2` – Provides type safety and developer tooling through static type checking.

### Additional Plugins and Utilities
- **Radix UI**: A library of primitives for building accessible React components.
- **SVGR Webpack**: `^8.1.0` – Transforms SVGs into React components for use in the application.
- **Jest Watch Plugins**: For improving the test development experience with features like test filtering.

## How to Run

1. **Development**:  
   Start the development server using the following command:
   ```bash
   npm start
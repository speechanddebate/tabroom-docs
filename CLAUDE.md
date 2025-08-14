# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for Tabroom.com, built with Docusaurus 3.8.1. The site provides comprehensive help documentation for tournament directors, coaches, and participants using the Tabroom platform for speech and debate tournaments.

## Development Commands

### Package Management
- Uses `yarn` for package management
- Install dependencies: `yarn`

### Development Server
- Start development server: `yarn start`
- Opens browser with live reload enabled

### Build and Deployment
- Build for production: `yarn build`
- Type checking: `yarn typecheck` or `tsc`
- Clear Docusaurus cache: `yarn clear`
- Serve built site locally: `yarn serve`

### Deployment Options
- SSH deployment: `USE_SSH=true yarn deploy`
- HTTPS deployment: `GIT_USER=<username> yarn deploy`
- With legacy OpenSSL: `NODE_OPTION=--openssl-legacy-provider GIT_USER=<username> USE_SSH=false npx yarn deploy`

## Architecture and Structure

### Core Configuration
- **docusaurus.config.ts**: Main Docusaurus configuration
  - Site URL: https://docs.tabroom.com
  - Organization: speechanddebate
  - Future v4 compatibility enabled
  - Custom navbar with link back to tabroom.com

- **sidebars.ts**: Auto-generated sidebar from docs folder structure
- **package.json**: Uses Docusaurus 3.8.1 with React 19 and TypeScript

### Content Organization
- **docs/**: All documentation content in Markdown format
  - Auto-generated sidebar from folder structure
  - Route base path set to `/` (docs serve as homepage)
  - Sidebar collapsed is disabled for better navigation

### Key Features
- TypeScript support with `@docusaurus/tsconfig`
- Custom CSS in `src/css/custom.css`
- Static assets in `static/` including images, fonts, and screenshots
- Extensive screenshot collection in `static/screenshots/` for documentation

### Content Structure
- **index.md**: Main help center landing page with navigation to all features
- **account/**: User account management documentation
- **FAQ and quick-start guides**: Located in root docs directory
- Documentation covers all major Tabroom features: tournaments, registration, judging, results

### Deployment Target
- Hosted at docs.tabroom.com
- GitHub Pages deployment configured
- Repository: speechanddebate/tabroom-docs

## Development Notes

- Uses modern Docusaurus features including future v4 compatibility
- Extensive use of screenshots for visual documentation
- Content focuses on speech and debate tournament management
- No custom React components currently in use - relies on standard Docusaurus features
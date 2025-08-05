# DiceBag Frontend

A modern React application for true random dice rolling, designed for tabletop gamers who demand authentic randomness in their games.

## 🎲 Features

### Core Functionality

- **True Random Dice Rolling**: Uses RANDOM.ORG's atmospheric noise-based API for genuine randomness
- **Multiple Die Types**: Support for d4, d6, d8, d10, d12, d20, and d100
- **Batch Rolling**: Roll multiple dice of different types simultaneously
- **Fallback System**: Graceful degradation to pseudo-random generation when API limits are exceeded

### User Experience

- **Responsive Design**: Modern, intuitive interface that works on desktop and mobile
- **Roll History**: Track and review previous rolls with detailed breakdowns
- **Individual & Batch Rolling**: Roll individual die types or all selected dice at once

### Authentication & User Management

- **User Registration & Login**: Secure JWT-based authentication
- **Profile Management**: Update username, email, and avatar
- **Persistent History**: Logged-in users get extended roll history (200 vs 50 entries)
- **Settings Modal**: Easy access to account management

### Technical Features

- **Progressive Enhancement**: Works for both authenticated and anonymous users
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Smooth user experience with proper loading indicators
- **Accessibility**: Keyboard navigation and screen reader support

## 🏗️ Architecture

### Technology Stack

- **React 19.1.0**: Modern React with hooks and functional components
- **React Router DOM 7.7.1**: Client-side routing
- **Vite 7.0.4**: Build tool and development server

### Key Components

#### Dice Rolling Engine

- **API Integration**: Direct communication with backend dice service
- **Fallback System**: Pseudo-random generation when API unavailable
- **Error Handling**: Graceful degradation with user feedback
- **Result Formatting**: Consistent display formatting across the app

#### History Management

- **Dual Storage**: Server storage for authenticated users, localStorage for guests
- **Automatic Sync**: Real-time synchronization between client and server
- **Limit Management**: Different history limits for different user types
- **Persistence**: Survives page refreshes and browser sessions

## 📝 License

Copyright © 2025 Andrew Croft

- **Backend API**: [DiceBag Backend](https://github.com/ExpiredSunshine/DiceBagBackEnd)
- **RANDOM.ORG**: [True Random Number Service](https://www.random.org/)

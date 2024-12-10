# User Analytics Dashboard

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS for managing users and visualizing analytics data.

## Table of Contents

- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [State Management](#state-management)
- [Testing](#testing)

## Features

### User Management Dashboard

- **User Table**
  - Paginated display with 5 users per page
  - Sortable columns for all user attributes
  - Quick status indicators (active/inactive)
  - Action buttons for view and delete operations

- **Search & Filtering**
  - Real-time search across all user fields
  - Advanced filters for status, region, and registration date
  - Persistent filter state

### Analytics Dashboard

- **Key Metrics Overview**
  - Total users count
  - Active users percentage
  - New registrations (daily/weekly/monthly)
  - Regional distribution

- **Interactive Charts**
  - User Registration Trends (Line Chart)
  - Active vs Inactive Users (Pie Chart)
  - Regional Distribution (Bar Chart)
  - Interactive tooltips and legends

- **Analytics Filters**
  - Date range selector
  - Regional filter
  - Data granularity options (daily/weekly/monthly)

## Technical Stack

- **Frontend Framework**
  - React 18
  - TypeScript
  - Tailwind CSS for styling

- **State Management**
  - Redux Toolkit
  - RTK Query for API calls

- **Visualization**
  - Recharts library
  - Custom SVG components

- **Testing**
  - Jest
  - React Testing Library
  - MSW for API mocking



## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/deepakptdr2209/analytic-dashboard.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```


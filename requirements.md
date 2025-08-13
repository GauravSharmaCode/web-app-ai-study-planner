# AI-Powered Study Planner - Frontend Requirements

## Project Overview
A Next.js frontend for an AI-powered study planner that helps users create, manage, and track personalized study plans through microservices architecture.

## Core Features

### 1. Authentication
- User registration and login interface
- JWT token management
- Protected routes for authenticated users
- Logout functionality

### 2. Study Plan Generation
- Form to request AI-generated study plans
- Input fields: topic/subject, duration (days)
- Display generated study plans in structured format
- Save plans to user's dashboard

### 3. Dashboard
- Overview of all user's study plans
- Progress tracking visualization
- Quick access to active plans
- Plan management (view, delete)

### 4. Study Plan Details
- Day-by-day plan breakdown
- Progress tracking per day/session
- Add session remarks and notes
- Mark days as completed
- Progress percentage calculation

### 5. Progress Tracking
- Session logging interface
- Date picker for session dates
- Text area for remarks/notes
- Progress history view
- Visual progress indicators

## Technical Requirements

### Frontend Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context/useState
- **HTTP Client**: Axios or fetch API
- **Authentication**: JWT token storage (localStorage/cookies)
- **UI Components**: Custom components with Tailwind

### API Integration
Integration with backend microservices:

#### Auth Service
```
POST /auth/register
POST /auth/login
```

#### AI Planner Service
```
POST /plans/generate
```

#### Study Plan Service
```
GET /plans
GET /plans/:planId
```

#### Progress Service
```
POST /progress
GET /progress/:planId
```

### Pages Structure
```
/                    - Landing page
/auth/login          - Login page
/auth/register       - Registration page
/dashboard           - User dashboard
/plans/new           - Create new study plan
/plans/[id]          - Study plan details
/progress/[planId]   - Progress tracking
```

### Components Architecture
```
components/
├── auth/
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
├── dashboard/
│   ├── PlanCard.tsx
│   └── ProgressOverview.tsx
├── plans/
│   ├── PlanGenerator.tsx
│   ├── PlanDetails.tsx
│   └── DayItem.tsx
├── progress/
│   ├── SessionForm.tsx
│   └── ProgressChart.tsx
├── ui/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
└── layout/
    ├── Header.tsx
    └── Navigation.tsx
```

## User Stories

### Authentication
- As a user, I want to register with email/password
- As a user, I want to login to access my study plans
- As a user, I want to stay logged in across sessions

### Study Plan Creation
- As a user, I want to request an AI-generated study plan for any topic
- As a user, I want to specify the duration of my study plan
- As a user, I want to see the generated plan in a clear, day-by-day format

### Plan Management
- As a user, I want to view all my study plans in one dashboard
- As a user, I want to see my progress at a glance
- As a user, I want to access detailed view of any plan

### Progress Tracking
- As a user, I want to log study sessions with dates and remarks
- As a user, I want to mark days as completed
- As a user, I want to see my overall progress percentage
- As a user, I want to view my study history

## Data Models (Frontend Types)

### User
```typescript
interface User {
  userId: string;
  email: string;
  token: string;
}
```

### Study Plan
```typescript
interface StudyPlan {
  planId: string;
  topic: string;
  durationDays: number;
  planJson: Record<string, string>;
  createdAt: string;
}
```

### Progress Session
```typescript
interface ProgressSession {
  progressId: string;
  planId: string;
  sessionDate: string;
  remarks: string;
  completed: boolean;
}
```

## UI/UX Requirements

### Design Principles
- Clean, minimal interface
- Mobile-responsive design
- Intuitive navigation
- Clear visual hierarchy
- Accessible components

### Color Scheme
- Primary: Blue (#3B82F6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)
- Neutral: Gray scale

### Typography
- Headings: Inter/Geist Sans
- Body: System fonts
- Code: Geist Mono

## Performance Requirements
- Initial page load < 3 seconds
- Route transitions < 500ms
- API response handling with loading states
- Error boundary implementation
- Optimistic UI updates where appropriate

## Security Considerations
- JWT token secure storage
- Input validation and sanitization
- Protected route implementation
- HTTPS enforcement
- XSS protection

## Development Phases

### Phase 1: Core Setup
- Project setup with Next.js and Tailwind
- Basic routing structure
- Authentication pages and logic

### Phase 2: Plan Generation
- AI plan generation form
- Plan display components
- Basic dashboard

### Phase 3: Progress Tracking
- Session logging interface
- Progress visualization
- Plan details page

### Phase 4: Polish & Optimization
- UI/UX improvements
- Performance optimization
- Error handling
- Testing

## Environment Variables
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:3002
NEXT_PUBLIC_AI_PLANNER_URL=http://localhost:3003
NEXT_PUBLIC_STUDY_PLAN_URL=http://localhost:3004
NEXT_PUBLIC_PROGRESS_URL=http://localhost:3005
```

## Success Metrics
- User can complete full flow: register → create plan → track progress
- Responsive design works on mobile and desktop
- All API integrations function correctly
- Error states are handled gracefully
- Loading states provide good UX
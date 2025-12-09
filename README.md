# Turbotask AI

AI-Powered Productivity platform providing templates, toolkits, and workflow systems for professionals.

## Technology Stack

- **Frontend**: React 19.2.1 + TypeScript + Vite
- **Backend**: Express 4.21.2 + Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS 4.1.14
- **UI Components**: Radix UI + shadcn/ui
- **API**: tRPC 11.7.2
- **Authentication**: OAuth integration

## Project Structure

```
├── client/              # React frontend
│   ├── src/            # Components and pages
│   └── public/         # Static assets
├── server/             # Express backend
│   ├── _core/          # Core server files
│   └── routers.ts      # API routers
├── shared/             # Shared types and constants
├── drizzle/            # Database schema and migrations
└── dist/               # Build output
```

## Local Development

### Prerequisites

- Node.js 22.x
- pnpm 10.x
- PostgreSQL database

### Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
# Create .env file with:
DATABASE_URL=postgresql://user:password@localhost:5432/turbotask
OAUTH_SERVER_URL=your_oauth_server_url
```

3. Run database migrations:
```bash
pnpm db:push
```

4. Start development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Production Build

Build the application:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

## Deployment

This application is configured for deployment on Render.com using the included `render.yaml` configuration file.

### Deploy to Render

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a free account at [Render.com](https://render.com)
3. Click "New +" and select "Blueprint"
4. Connect your repository
5. Render will automatically detect the `render.yaml` file and set up:
   - Web Service (Node.js)
   - PostgreSQL Database (free tier)
   - Environment variables

### Environment Variables

The following environment variables are automatically configured by Render:
- `NODE_ENV=production`
- `DATABASE_URL` (from Render Postgres)

Optional environment variables you may want to add:
- `OAUTH_SERVER_URL` - OAuth server endpoint
- `PORT` - Server port (default: 3000)

## Database Schema

The application uses a simple user authentication schema:

- **users** table:
  - `id` - Primary key
  - `openId` - OAuth identifier (unique)
  - `name` - User name
  - `email` - User email
  - `loginMethod` - Authentication method
  - `role` - User role (user/admin)
  - `createdAt` - Account creation timestamp
  - `updatedAt` - Last update timestamp
  - `lastSignedIn` - Last sign-in timestamp

## Features

- **AI Productivity Templates** - Daily planners, task organizers, email templates
- **Professional Toolkits** - Communication systems, workflow organizers
- **Workflow Bundles** - End-to-end AI-powered workflow systems
- **User Authentication** - OAuth-based authentication system
- **Responsive Design** - Mobile-friendly interface
- **Modern UI** - Built with Radix UI components

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests
- `pnpm db:push` - Generate and run database migrations

## License

MIT

# PAIR PROGRAMMING APP - DEV FINDER

## Overview

Welcome to the Pair Programming Web App! This application provides a seamless environment for collaborative coding with features such as screen sharing, video calls, participant management, and real-time chat.

## Features

- **Screen Sharing:** Share your screen with participants to collaborate effectively.
- **Video Call:** Integrated video calling to facilitate face-to-face communication.
- **Participant Management:** Add, remove, and manage participants in the room.
- **Pin Participants:** Pin specific participants to focus on their screen.
- **Tag-Based Browsing:** Browse and search through the content using tags.
- **Create Room:** Easily create and manage collaboration rooms.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Component Library:** [Shadcn](https://shadcn.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Chat Integration:** [Stream Chat](https://getstream.io/chat/)
- **Additional Services:** [GetStream.io](https://getstream.io/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alisohail2448/dev-finder

2. **Install Dependency:**

   ```bash
   npm install
   yarn install

3. **Configure environment variables:

:**

   ```bash
    DATABASE_URL=""
    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
    NEXTAUTH_SECRET=""
    NEXT_PUBLIC_GET_STREAM_API_KEY=""
    GET_STREAM_SECRET_KEY=""
    NEXTAUTH_URL=```

4. **Run Docker:**

docker compose up

5. **Drizzle Db Read:**

npm run db:push

npm run dev
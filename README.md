# Flight Booking Application

This is a flight booking application built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Shadcn/ui](https://shadcn.dev/). It leverages the Schiphol Airport API to fetch real-time flight information and uses MongoDB to store user reservations.

## Features

- **Search Flights**: Search for flights by origin, destination, and date.
- **Flight Details**: View available flights with detailed information.
- **Book Flights**: Book flights (user authentication feature to be implemented).
- **Responsive Design**: Optimized for various screen sizes.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/flight-booking-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd flight-booking-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## API Routes

- `GET /api/flights`: Fetch flights based on origin, destination, and date.
- `POST /api/reservations`: Create a new reservation (to be implemented).

## Technologies Used

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Shadcn/ui**: Pre-built UI components.
- **MongoDB**: NoSQL database for storing reservations.
- **Express.js**: Backend API handling.
- **React Query**: For fetching and caching flight data.

```markdown
# Fullstack Authentication Application

This project includes a backend service built with Express and a frontend application built with Next.js.

## Prerequisites

- Node.js
- npm
- Docker (optional for backend)

## Backend Setup

1. Navigate to the `backend` directory:

```sh
cd backend
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the `backend` directory with the following content:

```env
PORT=3001
```

4. Start the backend server:

```sh
npm start
```

The backend server will run at `http://localhost:3001`.

## Frontend Setup

1. Navigate to the `frontend` directory:

```sh
cd ../frontend
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env.local` file in the `frontend` directory with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

4. Start the frontend application:

```sh
npm run dev
```

The frontend application will run at `http://localhost:3000`.

## Available API Endpoints

### `POST /api/login`

Request body:

```json
{
  "email": "user1@example.com",
  "password": "password1"
}
```

Response (success):

```json
{
  "accessToken": "mockToken1"
}
```

Response (failure):

```json
{
  "message": "Invalid email or password"
}
```

### `GET /api/profile`

Requires a valid Bearer token. Use the accessToken obtained from `/login`.

Response (success):

```json
{
  "email": "user1@example.com",
  "username": "user1"
}
```

Response (failure):

```json
{
  "message": "Invalid token"
}
```

# Users Data
- Email: user1@example.com, Password: password1, Token: mockToken1
- Email: user2@example.com, Password: password2, Token: mockToken2



```


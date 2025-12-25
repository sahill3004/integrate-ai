# Integrate AI

A simple Node.js REST API that integrates with Google's Gemini AI for content generation.

## Prerequisites

- Node.js (v14 or higher)
- npm
- Google Gemini API key ([Get one here](https://ai.google.dev/))

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/integrate-ai.git
cd integrate-ai
npm install
```

Create a `.env` file in the root directory with your API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Note:** Make sure `.env` is in your `.gitignore` to avoid committing sensitive credentials.

## Usage

Start the server:

```bash
npm start
```

The server runs on `http://localhost:3000`

## API Endpoints

### POST /myreq

Generate content using Gemini AI.

**Request:**
```json
{
  "text": "Your prompt here"
}
```

**Response:**
```json
{
  "result": "AI generated content"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/myreq \
  -H "Content-Type: application/json" \
  -d '{"text": "Write a short poem about coding"}'
```

## Project Structure

```
integrate-ai/
├── .env               # Environment variables (not tracked)
├── server.js          # Main application
├── package.json       # Dependencies
└── README.md          # Documentation
```

## Dependencies

- `express` - Web framework
- `@google/genai` - Google Generative AI SDK
- `body-parser` - Request body parsing
- `dotenv` - Environment configuration

## Security

- Never commit your `.env` file or expose your API key
- Consider implementing rate limiting for production
- Add CORS middleware if accessing from browsers

## License

ISC


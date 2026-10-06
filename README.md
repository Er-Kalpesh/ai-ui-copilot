# AI UI Copilot 🚀

> An intelligent, screenshot-to-code generator powered by Next.js, Tailwind CSS, and the new Gemini 3 Flash Preview (`gemini-3-flash-preview`).

---

## 🌟 Overview

**AI UI Copilot** is a cutting-edge web application that transforms screenshots into functional, styled UI components instantly. Built by **Er-Kalpesh**, it demonstrates the seamless integration of Google's state-of-the-art GenAI models with modern frontend web technologies.

With a simple API route, you can provide an image of any web design, and the application leverages the `@google/genai` SDK to generate precise, production-ready React and Tailwind CSS code. 

## ✨ Features

- **Screenshot to Code**: Convert wireframes or screenshots into valid React + Tailwind components.
- **Next.js App Router**: Takes advantage of React Server Components and modern Next.js 15+ architectural patterns.
- **Tailwind CSS**: Instant, utility-first styling generated exactly to match your vision.
- **Gemini 3 Flash Integration**: Uses `gemini-3-flash-preview` for lightning-fast multimodal inference.
- **TypeScript Ready**: Strong typing for a robust and maintainable codebase.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI SDK**: `@google/genai` (Google Gen AI SDK)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A valid Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Er-Kalpesh/ai-ui-copilot.git
   cd ai-ui-copilot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📡 API Reference

### `POST /api/generate`

Accepts an image and an optional prompt, and returns React/Tailwind code.

**Request Body** (FormData):
- `image`: Blob / File (The screenshot or design image)
- `prompt` (optional): String (Custom instructions for the AI)

**Response**:
```json
{
  "result": "```tsx\nexport default function Component() { ... }\n```"
}
```

## 👨‍💻 About the Author

Created with ❤️ by **Er-Kalpesh**.

I'm a passionate developer exploring the intersections of generative AI and modern web engineering. If you like this project, consider giving it a ⭐ on GitHub!

---
*This project was scaffolded with `create-next-app`.*

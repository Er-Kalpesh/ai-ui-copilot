import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize the Google Gen AI SDK
// Assumes process.env.GEMINI_API_KEY is set in your .env.local file
const ai = new GoogleGenAI();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');
    const prompt = (formData.get('prompt') as string) || 'Generate React and Tailwind CSS code for this screenshot. Output ONLY the code inside a Markdown code block.';

    if (!image || !(image instanceof Blob)) {
      return NextResponse.json({ error: 'No image provided or invalid format' }, { status: 400 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = image.type;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType,
                data: buffer.toString('base64'),
              },
            },
          ],
        },
      ],
    });

    return NextResponse.json({ result: response.text });
  } catch (error: any) {
    console.error('Error generating UI:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate UI from image' },
      { status: 500 }
    );
  }
}

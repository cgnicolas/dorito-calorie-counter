import { NextResponse } from 'next/server';
export async function GET(request) {
  console.log(request);
  return Response.json({ data: 'Good' });
}

export async function POST(req) {
  try {
    const buffer = await req.arrayBuffer();
    console.log('Received array buffer of size:', buffer.byteLength);

    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'File upload failed' },
      { status: 500 }
    );
  }
}

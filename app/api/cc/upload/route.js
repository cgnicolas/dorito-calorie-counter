import { getDoritoCount } from '@/lib/roboflow/actions';
import { NextResponse } from 'next/server';
export async function GET(request) {
  console.log(request);
  return Response.json({ data: 'Good' });
}

export async function POST(req) {
  try {
    const { image } = await req.json();
    const doritoCount = await getDoritoCount(image);
    return NextResponse.json({ doritoCount });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'File upload failed' },
      { status: 500 }
    );
  }
}

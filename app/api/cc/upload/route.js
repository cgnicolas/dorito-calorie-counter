import { addServingToDb, countCalories } from '@/lib/calorie-counter/utils';
import { getDoritoCount } from '@/lib/roboflow/actions';
import { NextResponse } from 'next/server';
export async function GET(request) {
  return Response.json({ data: 'Good' });
}

export async function POST(req) {
  try {
    const { image, userId } = await req.json();
    const doritoCount = await getDoritoCount(image);
    const serving = {
      calories: countCalories(doritoCount),
      doritoCount,
    };
    addServingToDb(serving, userId);
    return NextResponse.json({
      calories: countCalories(doritoCount),
      doritoCount,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'File upload failed' },
      { status: 500 }
    );
  }
}

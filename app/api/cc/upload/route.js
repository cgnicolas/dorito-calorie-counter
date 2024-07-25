import { countCalories } from '@/lib/calorie-counter/utils';
import { getDoritoCount } from '@/lib/roboflow/actions';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { image } = await req.json();
    console.log(image);
    const session = await getSession(req);
    console.log('POST REQUEST SESSION', session);
    const doritoCount = await getDoritoCount(image);
    return res.json({
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
};

import { NextResponse } from 'next/server';
 
export async function GET(request) {
    
const product = 'jdo'
 
  return NextResponse.json({ product });
}
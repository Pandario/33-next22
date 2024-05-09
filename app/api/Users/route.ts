import User from "@/app/(models)/User";
import { NextResponse, NextRequest } from "next/server";



export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const userData = body.dataPay;

        await User.create(userData);
        return NextResponse.json(
            { message: "User Created." }, 
            { status: 201}
        );
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { message: "Error", error }, 
            { status: 500}
        );

    }
}
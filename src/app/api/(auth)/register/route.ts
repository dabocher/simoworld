import { connectDatabase } from "@/libs/connectDb";
import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: NextRequest) => {
  await connectDatabase();
  try {
    const { username, email, password } = await request.json();
    console.log(username, email, password);
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const isUserFound = await User.findOne({ $or: [{ username }, { email }] });
    if (isUserFound) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: `User ${username} created` },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(error);
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

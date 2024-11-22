"use server";

import { AxiosInstance } from "@/api/Axios";
import { GetTokenType, UserCredentialType } from "@/types/AuthTypes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function loginUser(formData: FormData) {
  const user: UserCredentialType = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const tokenData: GetTokenType = await getToken();

  const session = JSON.stringify(tokenData);
  const expires = Date.now() + 100 * 1000;

  (await cookies()).set("session", session, {
    expires: new Date(expires),
    httpOnly: true,
  });

  redirect("/");
}

// export async function loginUser() {
//   const tokenData: GetTokenType = await getToken();
//   return tokenData;
//   //   const session = JSON.stringify(tokenData);
//   //   const expires = Date.now() + 10 * 1000;

//   //   (await cookies()).set("session", session, {
//   //     expires: new Date(expires),
//   //     httpOnly: true,
//   //   });
// }

export async function logoutUser() {
  (await cookies()).set("session", "", { expires: new Date(0) });
  redirect("/login");
}

// export async function updateSession(req: NextRequest) {
//   const session = req.cookies.get("session")?.value;

//   const res = NextResponse.next();

//   if (!session) {
//     await logoutUser();
//     return;
//   }

//   res.cookies.set({
//     name: "session",
//     value: session,
//     expires: new Date(Date.now() + 10 * 1000),
//     httpOnly: true,
//   });
//   return res;
// }

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) {
    return null;
  }
  return session;
}

/////////////////////////////////////////////////

export async function getToken() {
  const res = await AxiosInstance.get("/api/token");
  const data = res.data;
  return data;
}

// export async function getRefreshToken() {
//   const res = await AxiosInstance.get("/api/token/refresh");

//   return res.data;
// }

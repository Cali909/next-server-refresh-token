import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const tokenData = {
    accessToken: "Alireza_Refresh",
    refreshToken: "Garshasbi_Refresh",
  };

  const session = JSON.stringify(tokenData);
  const expires = Date.now() + 100 * 1000;

  cookieStore.set("session", session, {
    expires: new Date(expires),
    httpOnly: true,
  });

  return new Response(JSON.stringify(tokenData), {
    status: 200,
    headers: { "Content-Type": "application/json", session: "asdasdasd" },
  });
}

export async function GET() {
  return new Response(
    JSON.stringify({
      accessToken: null,
      refreshToken: null,
    }),
    {
      status: 403,
      headers: { "Content-Type": "application/json" },
    }
  );
}

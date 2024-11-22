export async function GET() {
  const tokenData = {
    accessToken: "Alireza",
    refreshToken: "Garshasbi",
  };

  return new Response(JSON.stringify(tokenData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `token=${"213"}`,
    },
  });
}

import {
  // getSession,
  // getToken,
  // loginUser,
  logoutUser,
} from "@/auth/AuthService";
import UnAuthReq from "@/components/UnAuthReq";
// import { GetTokenType } from "@/types/AuthTypes";

export default async function Home() {
  // const tokenData: GetTokenType = await getToken();
  // const tokenData: GetTokenType = await loginUser();

  return (
    <div className=" flex flex-col gap-6 border border-stone-300 rounded-2xl w-[360px] mx-auto items-center py-3 px-6">
      <p className="text-xl">Home Page</p>
      <form action={logoutUser} className="w-full flex flex-col gap-3">
        <button
          type="submit"
          className="py-3 px-4 w-full bg-red-500 text-white rounded-2xl"
        >
          Logout
        </button>
        <UnAuthReq />
      </form>
      {/* {tokenData && <p>Access token : {tokenData.accessToken}</p>} */}
      {/* {tokenData && <p>Refresh token : {tokenData.refreshToken}</p>} */}
    </div>
  );
}

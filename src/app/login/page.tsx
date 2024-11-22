import { loginUser } from "@/auth/AuthService";

const LoginPage = async () => {
  return (
    <div className="border border-stone-300 rounded-2xl w-[360px] mx-auto items-center py-3 px-6">
      <form
        action={async (formData) => {
          "use server";
          await loginUser(formData);
        }}
        className="flex flex-col gap-3"
      >
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="border border-stone-300 rounded-2xl w-full p-3 outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border border-stone-300 rounded-2xl w-full p-3 outline-none"
        />
        <button
          type="submit"
          className="py-3 px-4 w-full bg-blue-500 text-white rounded-2xl"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

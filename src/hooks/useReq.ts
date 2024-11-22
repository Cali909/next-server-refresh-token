import { AxiosInstance } from "@/api/Axios";

export async function get403Response() {
  const res = await AxiosInstance.get("/api/forbidden");
  return res.data;
}

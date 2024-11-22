"use client";

import { get403Response } from "@/hooks/useReq";

const UnAuthReq = () => {
  return (
    <button
      type="submit"
      className="py-3 px-4 w-full bg-orange-500 text-white rounded-2xl"
      onClick={get403Response}
    >
      403
    </button>
  );
};

export default UnAuthReq;

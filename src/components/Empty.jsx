import { CalendarFold } from "lucide-react";
import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg shadow-lg p-8">
      <CalendarFold color="#656565" size={30} />
      <p className="text-center text-lg text-gray-500 mt-2">
        아직 작성된 글이 없습니다.
      </p>
      <p className="text-center text-xs text-gray-500">
        새로운 게시글을 작성해 보세요.
      </p>
    </div>
  );
};

export default Empty;

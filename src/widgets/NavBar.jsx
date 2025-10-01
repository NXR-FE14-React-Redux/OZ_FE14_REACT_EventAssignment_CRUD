import { Button } from "@/components/ui/button";
import { ROUTES } from "@/router";
import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 중앙 제목 */}
        <h1 className="text-lg font-semibold mx-auto absolute left-1/2 -translate-x-1/2">
          게시판
        </h1>

        {/* 오른쪽 버튼 */}
        <div className="ml-auto">
          <Link to={ROUTES.POST}>
            <Button
              variant="default"
              className="px-4 py-2 text-sm font-medium bg-indigo-500 hover:bg-indigo-300"
            >
              글쓰기
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

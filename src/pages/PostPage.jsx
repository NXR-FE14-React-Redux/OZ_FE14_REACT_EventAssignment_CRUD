import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePosts } from "@/hooks/usePost";
import { ROUTES } from "@/router";
import React from "react";
import { useNavigate } from "react-router";

const PostPage = () => {
  const { title, content, setTitle, setContent, addPost } = usePosts();
  const navigate = useNavigate();

  /** 게시글 작성버튼 핸들러 */
  const handleSubmit = () => {
    addPost();
    navigate(ROUTES.ROOT);
  };

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 space-y-6">
      {/* 페이지 헤더 */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          새 글 작성
        </h1>
        <p className="text-sm text-muted-foreground">
          자유롭게 글을 작성하고 공유해보세요 ✍️
        </p>
      </div>

      {/* 제목 입력 */}
      <div className="space-y-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 내용 입력 */}
      <div className="space-y-2">
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          placeholder="내용을 입력하세요"
          className="min-h-[200px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* 버튼 */}
      <div className="flex justify-between">
        <Button className="bg-red-500 hover:bg-red-300 ">돌아가기</Button>
        <Button
          onClick={handleSubmit}
          className="bg-indigo-500 hover:bg-indigo-300"
        >
          작성하기
        </Button>
      </div>
    </div>
  );
};

export default PostPage;

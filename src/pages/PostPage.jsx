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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg space-y-4">
      <Label className="block text-sm font-medium mb-1">제목</Label>
      <Input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="내용을 입력하세요"
        className="min-h-[200px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>작성</Button>
      </div>
    </div>
  );
};

export default PostPage;

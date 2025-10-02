import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "@/hooks/usePost";
import { ROUTES } from "@/router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { posts, setPosts, deletePost } = usePosts();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  // 페이지 로드 시 해당 게시글 가져오기
  useEffect(() => {
    const currentPost = posts.find((p) => p.id === id);
    if (currentPost) {
      setPost(currentPost);
      setEditedTitle(currentPost.title);
      setEditedContent(currentPost.content);
    }
  }, [id, posts]);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        존재하지 않는 게시글입니다.
      </div>
    );
  }

  // 수정 저장
  const handleUpdate = () => {
    if (!editedTitle || !editedContent) {
      return alert("제목과 내용을 입력해주세요!");
    }

    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, title: editedTitle, content: editedContent } : p
    );
    setPosts(updatedPosts);
    setIsEditing(false);
  };

  // 삭제
  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deletePost(id);
      navigate(ROUTES.ROOT);
    }
  };

  return (
    <Card className="max-w-4xl w-full p-6 mx-auto mt-10 gap-0">
      <CardHeader className="p-0">
        <CardTitle>
          {isEditing ? (
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          ) : (
            <p className=" text-xl">{post.title}</p>
          )}
        </CardTitle>
      </CardHeader>
      {!isEditing && <p className="text-sm text-gray-400">{post.date}</p>}
      <div className=" w-full h-[2px] bg-muted-foreground my-4 " />
      <CardContent className="space-y-4 p-0 mb-10 ">
        {isEditing ? (
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="min-h-[200px]"
            placeholder="내용을 입력하세요"
          />
        ) : (
          <p className="whitespace-pre-line">{post.content}</p>
        )}
      </CardContent>

      <CardFooter className="flex justify-end space-x-2">
        {isEditing ? (
          <>
            <Button
              onClick={handleUpdate}
              variant="default"
              className="bg-indigo-500"
            >
              저장
            </Button>
            <Button onClick={() => setIsEditing(false)} variant="outline">
              취소
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)} variant="secondary">
              수정
            </Button>
            <Button onClick={handleDelete} variant="destructive">
              삭제
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default DetailPage;

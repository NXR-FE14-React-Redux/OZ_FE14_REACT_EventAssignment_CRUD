import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePosts } from "@/hooks/usePost";
import React from "react";

const HomePage = () => {
  const { posts, deletePost } = usePosts();
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      {posts.length === 0 && (
        <p className="text-center text-gray-500">아직 작성된 글이 없습니다.</p>
      )}

      {posts.map((post) => (
        <Card key={post.id} className="border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deletePost(post.id)}
            >
              삭제
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;

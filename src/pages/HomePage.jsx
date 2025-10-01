import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePosts } from "@/hooks/usePost";
import { ROUTES } from "@/router";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  const { posts, deletePost } = usePosts();

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 space-y-4 px-4">
      {posts.length === 0 && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-center text-gray-500">
            아직 작성된 글이 없습니다.
          </p>
        </div>
      )}

      {posts.map((post) => (
        <Link key={post.id} to={ROUTES.DETAIL(post.id)}>
          <Card className="border w-full">
            <CardHeader>
              <div className="flex items-baseline justify-between">
                <CardTitle className="text-lg font-semibold">
                  {post.title}
                </CardTitle>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{post.content}</p>
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
        </Link>
      ))}
    </div>
  );
};

export default HomePage;

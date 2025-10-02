import Empty from "@/components/Empty";
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
    <div className="max-w-4xl w-full flex flex-col mx-auto mt-5 space-y-4 px-4">
      {posts.length === 0 && <Empty />}

      {posts.map((post) => (
        <Link key={post.id} to={ROUTES.DETAIL(post.id)}>
          <Card className="border w-full gap-0">
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
            <CardContent className="text-muted-foreground">
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

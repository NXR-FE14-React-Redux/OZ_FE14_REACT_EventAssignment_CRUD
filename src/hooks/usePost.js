import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // posts가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  /** 게시글 작성 hook  */
  const addPost = () => {
    if (!title || !content) return alert("제목과 내용을 입력하세요!");
    const newPost = {
      id: nanoid(), // 간단한 unique id
      title,
      content,
      date: dayjs().format("YYYY-MM-DD HH:mm"),
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  /** 게시글 삭제 hook */
  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return {
    posts,
    title,
    content,
    setTitle,
    setContent,
    addPost,
    deletePost,
  };
}

import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 1. 첫 렌더링 시 localStorage에서 데이터 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  // 2. posts가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // 3. 게시글 작성
  const addPost = () => {
    if (!title || !content) return alert("제목과 내용을 입력하세요!");
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  // 4. 게시글 삭제
  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className=" text-center">📌 로컬 게시판</h1>

      {/* 글 작성 */}
      <div className=" flex flex-col">
        <Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=""
        />
        <Textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={addPost}>작성</Button>
      </div>

      {/* 글 목록 */}
      <div className="posts">
        {posts.length === 0 && <p>아직 작성된 글이 없습니다.</p>}
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

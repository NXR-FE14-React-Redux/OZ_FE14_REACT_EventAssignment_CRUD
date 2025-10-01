// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { usePosts } from "@/hooks/usePost";
// import { ROUTES } from "@/router";

// const DetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { posts, setPosts, deletePost } = usePosts();
//   const [post, setPost] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState("");
//   const [editedContent, setEditedContent] = useState("");

//   // 페이지 로드 시 해당 게시글 가져오기
//   useEffect(() => {
//     const currentPost = posts.find((p) => p.id === id);
//     if (currentPost) {
//       setPost(currentPost);
//       setEditedTitle(currentPost.title);
//       setEditedContent(currentPost.content);
//     }
//   }, [id, posts]);

//   if (!post) {
//     return (
//       <div className="flex items-center justify-center h-64 text-gray-500">
//         존재하지 않는 게시글입니다.
//       </div>
//     );
//   }

//   // 수정 저장
//   const handleUpdate = () => {
//     if (!editedTitle || !editedContent) {
//       return alert("제목과 내용을 입력해주세요!");
//     }

//     const updatedPosts = posts.map((p) =>
//       p.id === id ? { ...p, title: editedTitle, content: editedContent } : p
//     );
//     setPosts(updatedPosts);
//     setIsEditing(false);
//   };

//   // 삭제
//   const handleDelete = () => {
//     if (window.confirm("정말 삭제하시겠습니까?")) {
//       deletePost(id);
//       navigate(ROUTES.ROOT); // 삭제 후 홈으로 이동
//     } else {
//       return;
//     }
//   };

//   return (
//     <div className="max-w-4xl w-full mx-auto space-y-6 px-4 py-6">
//       {isEditing ? (
//         <div className="space-y-4">
//           <input
//             className="w-full border rounded p-2"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//           />
//           <textarea
//             className="w-full border rounded p-2"
//             value={editedContent}
//             onChange={(e) => setEditedContent(e.target.value)}
//           />
//           <div className="space-x-2">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={handleUpdate}
//             >
//               저장
//             </button>
//             <button
//               className="px-4 py-2 bg-gray-300 rounded"
//               onClick={() => setIsEditing(false)}
//             >
//               취소
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <h1 className="text-2xl font-bold">{post.title}</h1>
//           <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
//           <p className="text-sm text-gray-400">{post.date}</p>
//           <div className="space-x-2">
//             <button
//               className="px-4 py-2 bg-yellow-500 text-white rounded"
//               onClick={() => setIsEditing(true)}
//             >
//               수정
//             </button>
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded"
//               onClick={handleDelete}
//             >
//               삭제
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetailPage;

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
    <Card className="max-w-4xl w-full mx-auto mt-10">
      <CardHeader>
        <CardTitle>
          {isEditing ? (
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          ) : (
            post.title
          )}
        </CardTitle>
      </CardHeader>
      {!isEditing && <p className="text-sm text-gray-400 px-6">{post.date}</p>}

      <CardContent className="space-y-4">
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
            <Button onClick={handleUpdate} variant="default">
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

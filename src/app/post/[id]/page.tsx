"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@/types/post";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";

export default function FullPost() {
  const [post, setPost] = useState<Post>();
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id]);

  if (!post) return <div className="text-center">Loading...</div>;

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <Button onClick={() => handleClick()}>Back</Button>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
}

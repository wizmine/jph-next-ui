"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@/types/post";
import CardInfo from "@/components/CardInfo";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="p-5 flex flex-wrap gap-5 justify-center">
      {posts.map((post) => (
        <CardInfo post={post} key={post.id} />
      ))}
    </div>
  );
}

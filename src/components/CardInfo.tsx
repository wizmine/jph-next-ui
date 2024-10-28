"use client";

import { Post } from "@/types/post";
import { Card, Button, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  post: Post;
}

const CardInfo: React.FC<Props> = ({ post }) => {
  const router = useRouter();

  const handlePostClick = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <div key={post.id} className="w-full max-w-xs">
      <Card isHoverable className="h-full">
        <CardHeader>
          <h3 className="m-0">{post.title}</h3>
        </CardHeader>
        <CardBody>
          <p>{post.body.slice(0, 50)}...</p>
        </CardBody>
        <CardFooter>
          <Button onClick={() => handlePostClick(post.id)}>Full post</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardInfo;

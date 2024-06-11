"use client";

import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import posts from "@/data/posts";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  auther: z.string().min(1, { message: "Auther is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

interface PostEditProps {
  params: { id: string };
}
const PostEditPage = ({ params }: PostEditProps) => {
  const post = posts.find((post) => post.id === params.id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title ?? "",
      body: post?.body ?? "",
      auther: post?.auther ?? "",
      date: post?.date ?? "",
    },
  });
  console.log(post);
  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
    </>
  );
};

export default PostEditPage;

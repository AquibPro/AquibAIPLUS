"use client";

import * as z from "zod";
import axios from "axios";
import { CrownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

const MagnusPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [displayedMessages, setDisplayedMessages] = useState<
    ChatCompletionRequestMessage[]
  >([]);
  const typewriterTimeouts = useRef<NodeJS.Timeout[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  // Clears the typing effect timeouts when the component unmounts
  useEffect(() => {
    return () => {
      typewriterTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  // Handles the typing effect for bot messages
  const typeMessage = (index: number, content: string) => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        const updatedMessages = prevMessages.map((msg, i) => {
          if (i === index) {
            const newDisplayedText = content.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex > content.length) {
              clearInterval(interval);
              return { ...msg, displayedText: content };
            }
            return { ...msg, displayedText: newDisplayedText };
          }
          return msg;
        });
        return updatedMessages;
      });
    }, 5); // Adjust speed to 30ms per character
  };
  

  // Triggers the typing effect whenever new messages are added
  useEffect(() => {
    displayedMessages.forEach((message, index) => {
      if (message.role === "assistant" && message.content !== messages[index]?.content) {
        typeMessage(index, messages[index].content || "");
      }
    });
  }, [displayedMessages, messages]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/magnus", { messages: newMessages });
      const assistantMessage = response.data;

      setMessages((current) => [...current, userMessage, assistantMessage]);
      setDisplayedMessages((current) => [
        ...current,
        userMessage,
        { ...assistantMessage, content: "" }, // Start typing with an empty string
      ]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Magnus Carlsen"
        description="Play chess with AI grandmaster!"
        icon={CrownIcon}
        iconColor="text-red-700"
        bgColor="bg-red-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Is becoming a grandmaster difficult?"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagnusPage;

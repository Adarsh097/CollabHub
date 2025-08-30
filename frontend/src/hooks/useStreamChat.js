import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { getSreamToken } from "../lib/api";
import * as Sentry from "@sentry/react";


const VITE_STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

//! this hook is used to connect the current user to stream chat API.
//! so that users can see each other in the chat and can send messages to each other.
//! it also handles the disconnection of the user from stream chat API when the component unmounts.

export const useStramChat = () => {
  const { user } = useUser();
  const [chatClient, setChatClient] = useState(null);

  // fetch the stream token for the current user
  const {
    data: tokenData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getSreamToken,
    enabled: !!user?.id, //! this will take object id from clerk and pass it to the api to get the stream token
  });

  useEffect(() => {
    if (!tokenData?.token || !user?.id || !VITE_STREAM_API_KEY) return;

    const client = StreamChat.getInstance(VITE_STREAM_API_KEY);

    let cancelled = false;

    const connect = async () => {
      try {
        await client.connectUser(
          {
            id: user.id,
            name:
              user.fullName ??
              user.username ??
              user.primaryEmailAddress?.emailAddress ??
              user.id,
            image: user.imageUrl ?? undefined,
          },
          tokenData.token
        );
        if (!cancelled) {
          setChatClient(client);
        }
      } catch (error) {
        console.log("Error connecting to stream", error);
        Sentry.captureException(error, {
          tags: { component: "useStreamChat" },
          extra: {
            context: "stream_chat_connection",
            userId: user?.id,
            streamApiKey: STREAM_API_KEY ? "present" : "missing",
          },
        });
      }
    };

    connect();

    return () => {
      cancelled = true;
      client.disconnectUser();
    };
  }, [tokenData?.token, user?.id]);

    return { chatClient, isLoading, error };
};

import { Metadata } from "next";
import React from "react";
import { TextToSpeechView } from "./_components/TextToSpeechView";
import { HydrateClient, prefetch, trpc } from "@/app/trpc/server";

export const metadata: Metadata = { title: "Text to Speech" };

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ voiceId?: string; text?: string }>;
}) => {
  const { text, voiceId } = (await searchParams) ?? {};

  prefetch(trpc.voice.getAll.queryOptions());
  return (
    <HydrateClient>
      <TextToSpeechView initialValue={{ text, voiceId }} />
    </HydrateClient>
  );
};

export default page;

"use client";

import { AppRouter } from "@/app/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";
import { createContext, ReactNode, useContext } from "react";

type TTSVoiceItems =
  inferRouterOutputs<AppRouter>["voice"]["getAll"]["custom"][number];

interface TTSVoiceContextValue {
  customVoices: TTSVoiceItems[];
  systemVoices: TTSVoiceItems[];
  allVoices: TTSVoiceItems[];
}

const TTSVoiceContext = createContext<TTSVoiceContextValue | null>(null);

export const TTSVoiceProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: TTSVoiceContextValue;
}) => {
    return (
        <TTSVoiceContext.Provider value={value}>
            {children}
        </TTSVoiceContext.Provider>
    )
};


export function useTTSVoices() {
    const context = useContext(TTSVoiceContext);

    if(!context) {
        throw new Error("useTTSVoices must be used within a TTSVoiceProvider");
    }

    return context;
}
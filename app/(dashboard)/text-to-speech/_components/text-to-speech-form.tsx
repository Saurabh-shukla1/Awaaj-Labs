'use client';
import { useAppForm } from "@/hooks/use-app-form";
import { formOptions } from "@tanstack/react-form";
import React from "react";
import z from "zod";

const ttsFormSchema = z.object({
  text: z.string().min(1, "Text is required"),
  voiceId: z.string().min(1, "Voice selection is required"),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
});

export type TTSFormValues = z.infer<typeof ttsFormSchema>;

export const defaultTTSFormValues: TTSFormValues = {
  text: "",
  voiceId: "",
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSFormValues,
});

export const TextToSpeechForm = ({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: TTSFormValues;
}) => {
    const form = useAppForm({
        ...ttsFormOptions,
        defaultValues: defaultValues ?? defaultTTSFormValues,
        validators: {
            onSubmit: ttsFormSchema
        },
        onSubmit: async () => {
            // Handle form submission, e.g., call API to generate speech
        }
    })
  return <form.AppForm>{children}</form.AppForm>;
};

"use client";
import { TextToSpeechPanel } from "./text-to-speech-panel";
import { VoicePreviewPlaceholder } from "./voice-preview-placeholder";
import { SettingsPanel } from "./settings-panel";
import {
  defaultTTSFormValues,
  TextToSpeechForm,
  type TTSFormValues,
} from "./text-to-speech-form";
import { useTRPC } from "@/app/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TTSVoiceProvider } from "../contexts/tts-voice-context";

export const TextToSpeechView = ({
  initialValue,
}: {
  initialValue?: Partial<TTSFormValues>;
}) => {
  const trpc = useTRPC();
  const { data: voices } = useSuspenseQuery(trpc.voice.getAll.queryOptions());

  const { custom: customVoices, system: systemVoices } = voices;

  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices.length > 0 ? allVoices[0].id : null;

  // Requested voice may be deleted, fall back to default values in that case
  const resolvedVoiceId =
    initialValue?.voiceId &&
    allVoices.some((v) => v.id === initialValue.voiceId)
      ? initialValue.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    ...defaultTTSFormValues,
    ...initialValue,
    voiceId: resolvedVoiceId!,
  };
  return (
    <TTSVoiceProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm defaultValues={defaultValues}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextToSpeechPanel />
            <VoicePreviewPlaceholder />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechForm>
    </TTSVoiceProvider>
  );
};

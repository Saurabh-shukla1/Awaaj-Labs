'use client';
import { TextToSpeechPanel } from './text-to-speech-panel';
import { VoicePreviewPlaceholder } from './voice-preview-placeholder';
import { SettingsPanel } from './settings-panel';
import { defaultTTSFormValues, TextToSpeechForm } from './text-to-speech-form';

export const TextToSpeechView = () => {
  return (
    <TextToSpeechForm defaultValues={defaultTTSFormValues}>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextToSpeechPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
}

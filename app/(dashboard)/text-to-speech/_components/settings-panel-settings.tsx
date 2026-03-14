'use client'
import { useTypedAppFormContext } from '@/hooks/use-app-form'
import { ttsFormOptions } from './text-to-speech-form'
import { useStore } from '@tanstack/react-form';
import { FieldGroup, FieldLabel, Field } from '@/components/ui/field';
import { sliders } from '../data/sliders';
import { Slider } from '@/components/ui/slider';
import { VoiceSelector } from './voice-selector';

export const SettingsPanelSettings = () => {
    const form = useTypedAppFormContext(ttsFormOptions);
    const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  return (
    <>
      {/* Voice Selection Dropdown */}
      <div className="border-b border-dashed p-4">
        <VoiceSelector />
      </div>
      {/* VOice adjustment Section */}
      <div className="p-4 flex-1">
        <FieldGroup className="gap-8">
          {sliders.map((slider) => (
            <form.Field key={slider.id} name={slider.id}>
              {(field) => (
                <Field>
                  <FieldLabel>{slider.label}</FieldLabel>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {slider.leftLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {slider.leftLabel}
                    </span>
                  </div>
                  <Slider
                    value={[field.state.value]}
                    onValueChange={(value) => field.handleChange(value[0])}
                    step={slider.step}
                    min={slider.min}
                    max={slider.max}
                    disabled={isSubmitting}
                    className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-track]:h-1"
                  />
                </Field>
              )}
            </form.Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
}

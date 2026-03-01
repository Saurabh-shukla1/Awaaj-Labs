"use client";

import { useState } from "react";
import { COST_PER_CHARACTER, TEXT_MAX_LENGTH } from "../text-to-speech/data/constants";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TextInputPanel() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    // Navigate to the generation page with the text as a query parameter
    const trimmed = text.trim();
    if (!trimmed) return;

    router.push(`/text-to-speech/generate?text=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]">
      <div className="rounded-[20px] bg-[#f9f9f9] p-1">
        <div className="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
          <Textarea
            placeholder="Start typing or paste your text here..."
            className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={TEXT_MAX_LENGTH}
          />

          <div className="flex items-center justify-between">
            <Badge variant="outline" className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span className="text-xs">
                {text.length === 0 ? (
                  "Start typing to eastimate"
                ) : (
                  <>
                    <span className="tabular-nums">
                      $ {(text.length * COST_PER_CHARACTER).toFixed(4)}
                    </span>
                  </>
                )}
              </span>
            </Badge>
            <span className="text-xs text-muted-foreground">
              {text.length.toLocaleString()} /{" "}
              {TEXT_MAX_LENGTH.toLocaleString()} characters
            </span>
          </div>
        </div>

        {/* action bar */}
        <div className="flex justify-end items-center p-3">
          <Button
            size="sm"
            disabled={text.trim().length === 0}
            onClick={handleGenerate}
            className="w-full lg:w-auto"
          >
            Generate Speech
          </Button>
        </div>
      </div>
    </div>
  );
}

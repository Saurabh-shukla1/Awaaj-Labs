import { VoiceCategory } from "@/lib/generated/prisma/enums";



export const VOICE_CATEGORY_LABELS: Record<VoiceCategory, string> = {
    AUDIOBOOK: "Audiobook",
    CONVERSATIONAL: "Conversational",
    ADVERTISING: "Advertising",
    CHARACTERS: "Characters",
    CORPORATE: "Corporate",
    CUSTOMER_SERVICE: "Customer Service",
    GENERAL: "General",
    MEDITATION: "Meditation",
    MOTIVATIONAL: "Motivational",
    NARRATIVE: "Narrative",
    PODCAST: "Podcast",
    VOICEOVER: "Voiceover",
}

export const VOICE_CATEGORIES = Object.keys(VOICE_CATEGORY_LABELS) as VoiceCategory[];
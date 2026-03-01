export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
}

export const quickActions: QuickAction[] = [
  {
    title: "Narrate Text",
    description:
      "Bring your text to life with our advanced text-to-speech capabilities.",
    gradient: "from-cyan-400 to-blue-50",
    // marketing story: "Transform your written content into captivating audio experiences with our advanced text-to-speech capabilities. Whether it's for accessibility, content creation, or simply enjoying your favorite articles on the go, our platform brings your text to life with natural-sounding voices and seamless integration.",
    href: "/text-to-speech?text=In a village surrounded by mountains, a young girl named Awaaj discovered an ancient book that whispered secrets of the world. As she read aloud, her voice carried the magic of the words, awakening a hidden power within her. With each story she narrated, Awaaj's voice grew stronger, enchanting listeners and bridging the gap between reality and imagination. Her journey to master this newfound gift led her to uncover forgotten tales and connect with souls across time, proving that sometimes, the most powerful magic lies in the stories we tell.",
  },
  {
    title: "Summarize Content",
    description:
      "Easily condense articles, documents, and more into concise summaries.",
    gradient: "from-pink-400 to-yellow-50",
    href: "/text-to-speech?text=In a world overflowing with information, finding the essence of content can be overwhelming. Our summarization tool is your key to unlocking the core insights of articles, documents, and more. Whether you're a student trying to grasp complex topics, a professional seeking quick overviews, or simply someone who wants to stay informed without the time commitment, our platform condenses information into concise summaries that capture the heart of the matter. Experience the power of clarity and efficiency as you navigate through the sea of information with ease.",
  },
  {
    title: "Direct a Movie Scene",
    description:
      "Unleash your creativity by directing a movie scene with our AI-powered script and storyboard generator.",
    gradient: "from-green-400 to-lime-50",
    href: "/text-to-speech?text=In a world where imagination knows no bounds, our AI-powered movie scene director is your gateway to cinematic creativity. Whether you're an aspiring filmmaker, a storyteller at heart, or simply someone who loves movies, our platform allows you to direct your own movie scenes with ease. From generating scripts to creating storyboards, our tool empowers you to bring your vision to life. Unleash your creativity and embark on a cinematic journey where you are the director of your own story.",
  },
  {
    title: "Voice a Game Character",
    description:
      "Give life to your game characters with our voice generation technology, creating immersive gaming experiences.",
    gradient: "from-purple-400 to-pink-50",
    href: "/text-to-speech?text=In the realm of gaming, characters are more than just pixels on a screen—they are the heart and soul of immersive experiences. Our voice generation technology allows you to give life to your game characters, creating rich and dynamic personalities that resonate with players. Whether you're a game developer looking to enhance your storytelling or a gamer seeking to customize your avatar's voice, our platform empowers you to craft unique vocal identities for your characters. Dive into a world where every character has a voice, and every voice tells a story.",
  },
  {
    title: "Record a Ad",
    description:
      "Create compelling advertisements with our AI-driven ad recording and editing tools.",
    gradient: "from-yellow-400 to-orange-50",
    href: "/text-to-speech?text=In the fast-paced world of advertising, capturing attention is key. Our AI-driven ad recording and editing tools empower you to create compelling advertisements that resonate with your audience. Whether you're a marketer looking to craft the perfect campaign or a business owner seeking to promote your brand, our platform provides the tools you need to bring your vision to life. From scripting to voiceovers and editing, we make it easy to produce high-quality ads that stand out in a crowded marketplace. Unleash your creativity and watch your ideas come to life with our ad creation platform.",
  },
  {
    title: "Transcribe Audio",
    description:
      "Convert your audio content into accurate and searchable text transcripts effortlessly.",
    gradient: "from-indigo-400 to-violet-50",
    href: "/text-to-speech?text=In a world where audio content is abundant, having the ability to convert it into accurate and searchable text transcripts is invaluable. Our transcription tool effortlessly transforms your audio into written words, making it easier to access, share, and analyze your content. Whether you're a journalist transcribing interviews, a student taking notes from lectures, or a business professional documenting meetings, our platform provides a seamless transcription experience. Unlock the full potential of your audio content with our accurate and efficient transcription services.",
  },
];
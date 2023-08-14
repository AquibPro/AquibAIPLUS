import { Code, ImageIcon, MessageSquare, Music, VideoIcon, SparklesIcon, AtomIcon, Target, CrownIcon, SuperscriptIcon, LibraryIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 500;

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
  {
    label: 'ElementZ',
    icon: AtomIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/elementz',
  },
  {
    label: 'Albert Einstein',
    icon: SuperscriptIcon,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: '/einstein',
  },
  {
    label: 'Leonardo da Vinci',
    icon: SparklesIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/leonardo',
  },
  {
    label: 'Lionel Messi',
    icon: Target,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/messi',
  },
  {
    label: 'Magnus Carlsen',
    icon: CrownIcon,
    color: "text-red-700",
    bgColor: "bg-red-700/10",
    href: '/magnus',
  },
  {
    label: 'William Shakespeare',
    icon: LibraryIcon,
    color: "text-lime-700",
    bgColor: "bg-lime-700/10",
    href: '/shakespeare',
  },
];

import type { ReactNode } from "react"
import {
  AppWindow,
  BarChart3,
  BookOpen,
  Calculator,
  Camera,
  CloudSun,
  Download,
  FileText,
  FolderOpen,
  LineChart,
  Mail,
  Map,
  MessageCircle,
  Music2,
  Newspaper,
  PenLine,
  Phone,
  Podcast,
  Presentation,
  Send,
  Settings,
  Smartphone,
  Trash2,
  Tv,
  Video,
} from "lucide-react"

interface IconTileProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

function IconTile({ children, className = "", innerClassName = "" }: IconTileProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[22%] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-10px_20px_rgba(0,0,0,0.16),0_5px_12px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="absolute inset-0 rounded-[22%] border border-white/26" />
      <div className="absolute inset-x-[10%] top-[4%] h-[23%] rounded-full bg-white/22 blur-md" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
      <div className={`relative flex h-full w-full items-center justify-center ${innerClassName}`}>{children}</div>
    </div>
  )
}

export function PineappleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 112" className={className} fill="currentColor" aria-hidden="true">
      <path d="M47.9 22.5c5.8-9.8 14.9-16.9 27.3-21.4 1.3 12-2.8 21-12.3 27.1 10.6-1 20.4 2.2 29.4 9.7-9.8 7.8-20.6 9.8-32.4 6.1 4.4 6.9 5.8 14.5 4.1 22.8-6.8-3-12.1-7.8-15.9-14.5-4.1 6.8-9.7 11.7-16.9 14.7-1.6-8.9.1-16.8 5.1-23.7-11.4 3-21.8.9-31.1-6.2 8.7-7.3 18.3-10.4 28.9-9.4C24.8 21.8 20.7 12.9 21.8 1c11.9 4.2 20.6 11.4 26.1 21.5Z" />
      <path d="M48 47.3c18.7 0 33.9 14.2 33.9 31.7 0 18.3-13.6 31.4-33.9 31.4S14.1 97.3 14.1 79c0-17.5 15.2-31.7 33.9-31.7Zm-17.5 22 10.2 8.4 7.6-8.4-10.2-8.4-7.6 8.4Zm17.4 15.3-7.7 8.5 7.7 6.4 7.8-6.4-7.8-8.5Zm.4-29.3-7.6 8.3 7.6 6.3 7.6-6.3-7.6-8.3Zm17.3 14-7.6-8.4-10.1 8.4 7.6 8.4 10.1-8.4Zm-35.2 14.9 7.3 6 7-7.7-9.2-7.6-5.1 9.3Zm35.2 0-5.1-9.3-9.2 7.6 7 7.7 7.3-6Z" />
    </svg>
  )
}

export const FinderIcon = () => (
  <IconTile className="bg-[#f8fbff]">
    <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
      <path d="M8 8h40v80H8z" fill="#5fc9ff" />
      <path d="M48 8h40v80H48z" fill="#f9fbff" />
      <path d="M48 8v80" stroke="#0d76c9" strokeWidth="1.8" />
      <path d="M24 31h8M64 31h8" stroke="#14233b" strokeLinecap="round" strokeWidth="4.5" />
      <path d="M29 61c8.7 7 29.2 7 38 0" fill="none" stroke="#14233b" strokeLinecap="round" strokeWidth="3.6" />
      <path d="M47 17c-4 7-7 17-8 30" fill="none" stroke="#1277c9" strokeLinecap="round" strokeWidth="2" opacity=".65" />
    </svg>
  </IconTile>
)

export const LaunchpadIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#f4f5f7] via-[#d5d8de] to-[#969ba4]" innerClassName="p-[17%]">
    <div className="grid h-full w-full grid-cols-3 gap-[11%]">
      {["#ff5f57", "#ffbd2e", "#28c840", "#0a84ff", "#bf5af2", "#ff9f0a", "#32d74b", "#64d2ff", "#f7f7f7"].map(
        (color) => (
          <span key={color} className="rounded-[32%] shadow-[0_1px_2px_rgba(0,0,0,0.22)]" style={{ background: color }} />
        ),
      )}
    </div>
  </IconTile>
)

export const NotionIcon = () => (
  <IconTile className="bg-[#f8f8f7] text-[#151515]" innerClassName="p-[16%]">
    <div className="flex h-full w-full items-center justify-center rounded-[14%] border-[3px] border-[#151515] bg-white font-serif text-[min(58px,78%)] font-bold leading-none">
      N
    </div>
  </IconTile>
)

export const SafariIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#f9fdff] via-[#31c4ff] to-[#006be6]">
    <svg viewBox="0 0 96 96" className="h-[88%] w-[88%]" aria-hidden="true">
      <circle cx="48" cy="48" r="38" fill="#16b8ff" stroke="white" strokeWidth="5" />
      <circle cx="48" cy="48" r="30" fill="none" stroke="white" strokeDasharray="1.5 5.2" strokeWidth="2" opacity=".9" />
      <path d="M48 13v8M48 75v8M13 48h8M75 48h8M23 23l6 6M67 67l6 6M73 23l-6 6M29 67l-6 6" stroke="white" strokeLinecap="round" strokeWidth="2" opacity=".8" />
      <path d="m54 42 19-19-18 51-7-20-20-7 51-18-19 19Z" fill="#ff3b30" />
      <path d="m42 54-19 19 18-51 7 20 20 7-51 18 19-19Z" fill="white" />
      <circle cx="48" cy="48" r="4.6" fill="#0b4e9f" />
    </svg>
  </IconTile>
)

export const TelegramIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#6ee7ff] via-[#1799ea] to-[#1664db]">
    <Send className="h-[58%] w-[58%] -translate-x-0.5 translate-y-0.5 fill-white text-white drop-shadow" strokeWidth={1.4} />
  </IconTile>
)

export const ChromeIcon = () => (
  <IconTile className="bg-white">
    <div
      className="flex h-[86%] w-[86%] items-center justify-center rounded-full shadow-inner"
      style={{
        background:
          "conic-gradient(#db4437 0 34%, #f4b400 0 66%, #0f9d58 0 84%, #db4437 0 100%)",
      }}
    >
      <div className="flex h-[45%] w-[45%] items-center justify-center rounded-full bg-[#4285f4] ring-[6px] ring-white">
        <div className="h-[32%] w-[32%] rounded-full bg-white/70" />
      </div>
    </div>
  </IconTile>
)

export const MessagesIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#9cff72] via-[#32d74b] to-[#02a52e]">
    <svg viewBox="0 0 96 96" className="h-[72%] w-[72%]" aria-hidden="true">
      <path d="M48 19c18.8 0 34 12.7 34 28.4S66.8 75.8 48 75.8c-3.7 0-7.2-.5-10.5-1.4L23.7 81l3.3-12.2c-8-5.2-13-13-13-21.4C14 31.7 29.2 19 48 19Z" fill="white" />
    </svg>
  </IconTile>
)

export const WhatsAppIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#43f07a] via-[#14c759] to-[#009544]">
    <div className="relative h-[72%] w-[72%] rounded-full border-[5px] border-white">
      <Phone className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rotate-[-16deg] fill-white text-white" strokeWidth={1.7} />
      <span className="absolute bottom-0 left-1.5 h-4 w-4 rotate-[-28deg] rounded-sm bg-white" />
    </div>
  </IconTile>
)

export const FaceTimeIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#7bff9a] via-[#30d158] to-[#00a838]">
    <svg viewBox="0 0 96 96" className="h-[70%] w-[70%]" aria-hidden="true">
      <rect x="17" y="29" width="45" height="38" rx="10" fill="white" />
      <path d="M61 43 80 32v32L61 53Z" fill="white" />
    </svg>
  </IconTile>
)

export const MailIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#77d7ff] via-[#168cff] to-[#0067dc]">
    <svg viewBox="0 0 96 96" className="h-[72%] w-[72%]" aria-hidden="true">
      <rect x="14" y="24" width="68" height="48" rx="8" fill="white" />
      <path d="M18 29 48 52 78 29" fill="none" stroke="#0a84ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      <path d="m19 68 22-21M77 68 55 47" stroke="#0a84ff" strokeLinecap="round" strokeWidth="3" opacity=".55" />
    </svg>
  </IconTile>
)

export const MapsIcon = () => (
  <IconTile className="bg-[#e9f7ed]">
    <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
      <path d="M0 0h96v96H0z" fill="#eef7ef" />
      <path d="m0 34 40-14 22 18 34-12v70H0Z" fill="#ffe58a" />
      <path d="m0 58 36-14 26 20 34-10v42H0Z" fill="#70d47c" />
      <path d="M38 0 24 96M66 0 54 96" stroke="#ffffff" strokeWidth="10" />
      <path d="M0 42h96" stroke="#2f8cff" strokeWidth="9" />
      <Map className="absolute h-[48%] w-[48%] text-white" strokeWidth={1.7} />
    </svg>
  </IconTile>
)

export const PhotosIcon = () => (
  <IconTile className="bg-[#f8f9fb]">
    <div className="relative h-[70%] w-[70%]">
      {[
        ["#ff3b30", "0deg"],
        ["#ff9500", "45deg"],
        ["#ffcc00", "90deg"],
        ["#34c759", "135deg"],
        ["#5ac8fa", "180deg"],
        ["#007aff", "225deg"],
        ["#af52de", "270deg"],
        ["#ff2d55", "315deg"],
      ].map(([color, rotation]) => (
        <span
          key={color}
          className="absolute left-1/2 top-1/2 h-[42%] w-[24%] origin-[50%_118%] rounded-full opacity-95"
          style={{ background: color, transform: `translate(-50%, -96%) rotate(${rotation})` }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </div>
  </IconTile>
)

export const CalendarIcon = () => {
  const today = new Date()
  const day = today.getDate()
  const month = today.toLocaleString("en-US", { month: "short" }).toUpperCase()

  return (
    <IconTile className="bg-white text-[#1d1d1f]" innerClassName="flex-col">
      <div className="flex h-[30%] w-full items-center justify-center bg-[#ff3b30] text-[11px] font-semibold tracking-wide text-white">
        {month}
      </div>
      <div className="flex flex-1 items-center justify-center text-[40px] font-light leading-none">{day}</div>
    </IconTile>
  )
}

export const ContactsIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#c79c58] via-[#a67932] to-[#7b5420]">
    <div className="h-[82%] w-[68%] rounded-[10%] bg-[#a87c3d] shadow-inner">
      <div className="ml-[14%] h-full border-l border-black/18 bg-gradient-to-r from-[#c99a56] to-[#94692c]">
        <div className="flex h-full items-center justify-center">
          <div className="h-[44%] w-[44%] rounded-full bg-black/18" />
        </div>
      </div>
    </div>
  </IconTile>
)

export const RemindersIcon = () => (
  <IconTile className="bg-white">
    <div className="w-[70%] space-y-[8%]">
      {["#ff3b30", "#ff9500", "#007aff", "#34c759"].map((color) => (
        <div key={color} className="flex items-center gap-[10%]">
          <span className="h-[10px] w-[10px] rounded-full" style={{ background: color }} />
          <span className="h-[3px] flex-1 rounded-full bg-[#b6bcc6]" />
        </div>
      ))}
    </div>
  </IconTile>
)

export const NotesIcon = () => (
  <IconTile className="bg-[#fbfbfb]" innerClassName="flex-col justify-start">
    <div className="h-[27%] w-full bg-gradient-to-b from-[#ffe071] to-[#ffc82e]" />
    <div className="mt-[9%] w-[74%] space-y-[8%]">
      <span className="block h-[2px] rounded-full bg-[#cfd2d8]" />
      <span className="block h-[2px] rounded-full bg-[#cfd2d8]" />
      <span className="block h-[2px] rounded-full bg-[#cfd2d8]" />
      <span className="block h-[2px] w-[68%] rounded-full bg-[#cfd2d8]" />
    </div>
  </IconTile>
)

export const FreeformIcon = () => (
  <IconTile className="bg-white">
    <svg viewBox="0 0 96 96" className="h-[72%] w-[72%]" aria-hidden="true">
      <path d="M16 58c18-32 30 22 46-6 7-12 3-26 18-25" fill="none" stroke="#21c7d9" strokeLinecap="round" strokeWidth="8" />
      <path d="M15 38c20-8 30 18 54 7" fill="none" stroke="#fa764d" strokeLinecap="round" strokeWidth="8" />
      <path d="M26 73h36" stroke="#7a5cff" strokeLinecap="round" strokeWidth="8" />
    </svg>
  </IconTile>
)

export const TVIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#15191c] to-[#050608] text-white">
    <Tv className="h-[58%] w-[58%]" strokeWidth={1.8} />
  </IconTile>
)

export const MusicIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#ff6b8f] via-[#ff2d55] to-[#d7002f]">
    <Music2 className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={2.3} />
  </IconTile>
)

export const NewsIcon = () => (
  <IconTile className="bg-[#f8f8f8]">
    <div className="flex h-[72%] w-[72%] items-center justify-center rounded-[12%] bg-[#ff2d55] text-[min(54px,76%)] font-black leading-none text-white">
      N
    </div>
  </IconTile>
)

export const KeynoteIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#62d0ff] via-[#157cff] to-[#0b4ed6]">
    <Presentation className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={1.9} />
  </IconTile>
)

export const NumbersIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#7dff75] via-[#32d74b] to-[#0b9f35]">
    <BarChart3 className="h-[63%] w-[63%] text-white drop-shadow" strokeWidth={2.1} />
  </IconTile>
)

export const PagesIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#ffc15a] via-[#ff9f0a] to-[#f06c00]">
    <PenLine className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={2.1} />
  </IconTile>
)

export const AppStoreIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#5ad8ff] via-[#0a84ff] to-[#0066d6]">
    <svg viewBox="0 0 96 96" className="relative h-[70%] w-[70%]" aria-hidden="true">
      <circle cx="48" cy="48" r="38" fill="white" opacity=".15" />
      <path d="M25 67h46M38 65 56 28M58 65 40 28" stroke="white" strokeLinecap="round" strokeWidth="8.5" />
    </svg>
  </IconTile>
)

export const SettingsIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#eef1f5] via-[#aab0ba] to-[#6f7782]">
    <svg viewBox="0 0 96 96" className="h-[72%] w-[72%]" aria-hidden="true">
      <path d="M48 16 55 21l9-2 5 9-4 8 5 8-5 9-9-2-7 5-7-5-9 2-5-9 5-8-5-8 5-9 9 2Z" fill="#4a5058" />
      <circle cx="48" cy="48" r="15" fill="#e8ebef" />
      <circle cx="48" cy="48" r="8" fill="#6b737d" />
    </svg>
  </IconTile>
)

export const IPhoneIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#f3f5f8] via-[#aab5c4] to-[#6f7a89]">
    <div className="flex h-[80%] w-[46%] items-center justify-center rounded-[18%] bg-[#0b0c10] p-[5%] shadow-lg">
      <div className="h-full w-full rounded-[14%] bg-gradient-to-br from-[#00e5ff] via-[#ff2d55] to-[#111827]" />
    </div>
  </IconTile>
)

export const CalculatorIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#40454d] to-[#1f2329]">
    <Calculator className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={1.9} />
  </IconTile>
)

export const PodcastsIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#e984ff] via-[#bf5af2] to-[#7f28d9]">
    <Podcast className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={2} />
  </IconTile>
)

export const BooksIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#ffbe55] via-[#ff8a00] to-[#f05b00]">
    <BookOpen className="h-[62%] w-[62%] text-white drop-shadow" strokeWidth={2} />
  </IconTile>
)

export const WeatherIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#78dcff] via-[#168cff] to-[#174cff]">
    <CloudSun className="h-[65%] w-[65%] text-white drop-shadow" strokeWidth={2} />
  </IconTile>
)

export const StocksIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#171a20] to-[#050608]">
    <LineChart className="h-[64%] w-[64%] text-[#32d74b] drop-shadow" strokeWidth={2.4} />
  </IconTile>
)

export const VSCodeIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#28b4ff] via-[#0578d5] to-[#003f8e]">
    <svg viewBox="0 0 96 96" className="h-[70%] w-[70%]" aria-hidden="true">
      <path d="m71 18-32 26-17-13-8 7 17 15-17 15 8 7 17-13 32 26 11-5V23Z" fill="white" opacity=".95" />
      <path d="M70 35 50 53l20 18Z" fill="#0578d5" />
    </svg>
  </IconTile>
)

export const TerminalIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#2b3037] to-[#050607]">
    <div className="w-[68%] font-mono text-[min(34px,48%)] font-semibold leading-none text-[#41ff6b]">
      <span>&gt;_</span>
    </div>
  </IconTile>
)

export const DockerIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#5bd7ff] via-[#109be5] to-[#006db8]">
    <svg viewBox="0 0 96 96" className="h-[72%] w-[72%]" aria-hidden="true">
      <path d="M18 55h58c-4 14-15 22-31 22-16 0-25-7-27-22Z" fill="white" />
      <path d="M26 31h9v9h-9zm12 0h9v9h-9zm12 0h9v9h-9zM38 43h9v9h-9zm12 0h9v9h-9zm12 0h9v9h-9zM26 43h9v9h-9z" fill="white" />
      <path d="M73 45c5-3 10-2 13 1-4 4-8 6-14 5Z" fill="white" />
    </svg>
  </IconTile>
)

export const GitIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#ff8a65] via-[#f4511e] to-[#c62812]">
    <svg viewBox="0 0 96 96" className="h-[68%] w-[68%]" aria-hidden="true">
      <path d="M48 8 88 48 48 88 8 48Z" fill="white" />
      <path d="M34 31h15l14 14" fill="none" stroke="#f4511e" strokeLinecap="round" strokeWidth="8" />
      <path d="M49 31v34" stroke="#f4511e" strokeLinecap="round" strokeWidth="8" />
      <circle cx="33" cy="31" r="7" fill="#f4511e" />
      <circle cx="49" cy="65" r="7" fill="#f4511e" />
      <circle cx="64" cy="46" r="7" fill="#f4511e" />
    </svg>
  </IconTile>
)

export const FolderIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#8fd9ff] via-[#32a8ff] to-[#0a70dd]">
    <FolderOpen className="h-[64%] w-[64%] fill-white/85 text-white drop-shadow" strokeWidth={1.5} />
  </IconTile>
)

export const DocumentsIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#f7f9fc] to-[#c7ced8]">
    <FileText className="h-[64%] w-[64%] text-[#475569]" strokeWidth={1.8} />
  </IconTile>
)

export const DownloadsIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#6bd3ff] via-[#248cff] to-[#0558ce]">
    <Download className="h-[64%] w-[64%] text-white drop-shadow" strokeWidth={2.1} />
  </IconTile>
)

export const TrashIcon = () => (
  <IconTile className="bg-gradient-to-br from-[#f0f2f5] via-[#cfd5dc] to-[#9aa3ad]">
    <Trash2 className="h-[63%] w-[63%] text-[#4d5560]" strokeWidth={1.9} />
  </IconTile>
)

export const GenericAppIcon = ({ label }: { label: string }) => (
  <IconTile className="bg-gradient-to-br from-[#f7f9fc] via-[#dfe5ed] to-[#9da7b3] text-[#263241]">
    <span className="text-[min(36px,50%)] font-semibold">{label.slice(0, 1)}</span>
  </IconTile>
)

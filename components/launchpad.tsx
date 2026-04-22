"use client"

import type React from "react"

import type { AppType } from "./macos-desktop"
import {
  AppStoreIcon,
  BooksIcon,
  CalculatorIcon,
  CalendarIcon,
  ChromeIcon,
  ContactsIcon,
  DockerIcon,
  FaceTimeIcon,
  FinderIcon,
  FreeformIcon,
  GitIcon,
  IPhoneIcon,
  KeynoteIcon,
  MailIcon,
  MapsIcon,
  MessagesIcon,
  MusicIcon,
  NewsIcon,
  NotionIcon,
  NotesIcon,
  NumbersIcon,
  PagesIcon,
  PhotosIcon,
  PodcastsIcon,
  RemindersIcon,
  SafariIcon,
  SettingsIcon,
  StocksIcon,
  TelegramIcon,
  TerminalIcon,
  TVIcon,
  VSCodeIcon,
  WeatherIcon,
  WhatsAppIcon,
} from "./app-icons"

interface LaunchpadProps {
  onClose: () => void
  onOpenApp: (app: AppType, title: string) => void
}

const apps: Array<{ id: AppType; icon: React.ComponentType; label: string }> = [
  { id: "finder", icon: FinderIcon, label: "Finder" },
  { id: "notion", icon: NotionIcon, label: "Notion" },
  { id: "safari", icon: SafariIcon, label: "Safari" },
  { id: "telegram", icon: TelegramIcon, label: "Telegram" },
  { id: "chrome", icon: ChromeIcon, label: "Chrome" },
  { id: "messages", icon: MessagesIcon, label: "Messages" },
  { id: "whatsapp", icon: WhatsAppIcon, label: "WhatsApp" },
  { id: "facetime", icon: FaceTimeIcon, label: "FaceTime" },
  { id: "mail", icon: MailIcon, label: "Mail" },
  { id: "maps", icon: MapsIcon, label: "Maps" },
  { id: "photos", icon: PhotosIcon, label: "Photos" },
  { id: "calendar", icon: CalendarIcon, label: "Calendar" },
  { id: "contacts", icon: ContactsIcon, label: "Contacts" },
  { id: "reminders", icon: RemindersIcon, label: "Reminders" },
  { id: "notes", icon: NotesIcon, label: "Notes" },
  { id: "freeform", icon: FreeformIcon, label: "Freeform" },
  { id: "tv", icon: TVIcon, label: "TV" },
  { id: "music", icon: MusicIcon, label: "Music" },
  { id: "news", icon: NewsIcon, label: "News" },
  { id: "keynote", icon: KeynoteIcon, label: "Keynote" },
  { id: "numbers", icon: NumbersIcon, label: "Numbers" },
  { id: "pages", icon: PagesIcon, label: "Pages" },
  { id: "appstore", icon: AppStoreIcon, label: "App Store" },
  { id: "settings", icon: SettingsIcon, label: "System Settings" },
  { id: "iphone", icon: IPhoneIcon, label: "iPhone Mirroring" },
  { id: "weather", icon: WeatherIcon, label: "Weather" },
  { id: "stocks", icon: StocksIcon, label: "Stocks" },
  { id: "podcasts", icon: PodcastsIcon, label: "Podcasts" },
  { id: "books", icon: BooksIcon, label: "Books" },
  { id: "calculator", icon: CalculatorIcon, label: "Calculator" },
  { id: "vscode", icon: VSCodeIcon, label: "VS Code" },
  { id: "terminal", icon: TerminalIcon, label: "Terminal" },
  { id: "docker", icon: DockerIcon, label: "Docker" },
  { id: "git", icon: GitIcon, label: "Git Bash" },
]

export function Launchpad({ onClose, onOpenApp }: LaunchpadProps) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/34 p-5 backdrop-blur-[38px] backdrop-saturate-150 md:p-16"
      onClick={onClose}
    >
      <div
        className="grid max-h-[78dvh] w-full max-w-7xl grid-cols-4 gap-x-6 gap-y-8 overflow-auto px-2 py-5 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-10"
        onClick={(e) => e.stopPropagation()}
      >
        {apps.map((app, index) => {
          const IconComponent = app.icon
          return (
            <button
              key={app.id}
              className="group flex min-w-0 animate-[launchpad-in_320ms_cubic-bezier(.2,.8,.2,1)_both] flex-col items-center gap-2 text-white"
              style={{ animationDelay: `${index * 16}ms` }}
              onClick={() => onOpenApp(app.id, app.label)}
            >
              <div className="h-[72px] w-[72px] rounded-[17px] transition-transform duration-150 group-hover:scale-[1.04] sm:h-[82px] sm:w-[82px]">
                <IconComponent />
              </div>
              <span className="max-w-full truncate px-1 text-center text-[13px] font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                {app.label}
              </span>
            </button>
          )
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        <div className="h-2 w-2 rounded-full bg-white" />
        <div className="h-2 w-2 rounded-full bg-white/35" />
      </div>
    </div>
  )
}

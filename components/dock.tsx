"use client"

import type React from "react"

import { useState } from "react"
import { FileText } from "lucide-react"
import type { AppType, WindowState } from "./macos-desktop"
import {
  AppStoreIcon,
  CalendarIcon,
  ChromeIcon,
  ContactsIcon,
  FaceTimeIcon,
  FinderIcon,
  FreeformIcon,
  IPhoneIcon,
  KeynoteIcon,
  LaunchpadIcon,
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
  RemindersIcon,
  SafariIcon,
  SettingsIcon,
  TelegramIcon,
  TrashIcon,
  TVIcon,
  WhatsAppIcon,
} from "./app-icons"

interface DockProps {
  onAppClick: (app: AppType, title: string) => void
  minimizedWindows: WindowState[]
  onUnminimize: (id: string) => void
  onLaunchpadClick: () => void
  openApps: AppType[]
}

type DockApp = {
  id: AppType
  icon: React.ComponentType
  label: string
  badge?: string
}

const primaryDockApps: DockApp[] = [
  { id: "finder", icon: FinderIcon, label: "Finder" },
  { id: "notion", icon: NotionIcon, label: "Notion" },
  { id: "safari", icon: SafariIcon, label: "Safari" },
  { id: "telegram", icon: TelegramIcon, label: "Telegram" },
  { id: "chrome", icon: ChromeIcon, label: "Chrome" },
  { id: "messages", icon: MessagesIcon, label: "Messages" },
  { id: "whatsapp", icon: WhatsAppIcon, label: "WhatsApp" },
  { id: "facetime", icon: FaceTimeIcon, label: "FaceTime" },
  { id: "mail", icon: MailIcon, label: "Mail", badge: "3,377" },
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
  { id: "settings", icon: SettingsIcon, label: "System Settings", badge: "2" },
  { id: "iphone", icon: IPhoneIcon, label: "iPhone Mirroring" },
]

export function Dock({ onAppClick, minimizedWindows, onUnminimize, onLaunchpadClick, openApps }: DockProps) {
  const [contextMenu, setContextMenu] = useState<{ app: AppType; x: number; y: number } | null>(null)

  const dockItems: Array<DockApp | "launchpad" | "separator" | "trash"> = [
    primaryDockApps[0],
    "launchpad",
    ...primaryDockApps.slice(1),
    "separator",
    "trash",
  ]

  const handleContextMenu = (e: React.MouseEvent, app: AppType) => {
    e.preventDefault()
    setContextMenu({ app, x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <div className="fixed bottom-[5px] left-1/2 z-50 w-[calc(100vw-12px)] -translate-x-1/2">
        <div className="macos-dock-scroll mx-auto flex w-max max-w-full items-end overflow-x-auto overflow-y-visible rounded-[15px] border border-white/16 bg-[var(--macos-dock-bg)] px-[7px] py-[5px] shadow-[0_14px_34px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-[28px] backdrop-saturate-[1.55]">
          <div className="flex items-end gap-[8px]">
            {dockItems.map((item, itemIndex) => {
              if (item === "separator") {
                return <div key={`separator-${itemIndex}`} className="mx-[1px] h-[40px] w-px self-center bg-white/25" />
              }

              if (item === "launchpad") {
                return (
                  <button
                    key="launchpad"
                    className="dock-icon group relative flex origin-bottom flex-col items-center rounded-[11px] transition-[filter] duration-150 hover:brightness-110 active:scale-[0.97]"
                    onClick={onLaunchpadClick}
                  >
                    <div className="h-[46px] w-[46px] overflow-hidden rounded-[11px]">
                      <LaunchpadIcon />
                    </div>
                    <DockTooltip label="Launchpad" />
                  </button>
                )
              }

              if (item === "trash") {
                return (
                  <button
                    key="trash"
                    className="dock-icon group relative ml-1 flex origin-bottom flex-col items-center rounded-[11px] transition-[filter] duration-150 hover:brightness-110 active:scale-[0.97]"
                    onClick={() => onAppClick("trash", "Trash")}
                  >
                    <div className="h-[46px] w-[46px] overflow-hidden rounded-[11px]">
                      <TrashIcon />
                    </div>
                    <DockTooltip label="Trash" />
                  </button>
                )
              }

              const app = item
              const isOpen = openApps.includes(app.id)
              const IconComponent = app.icon

              return (
                <button
                  key={app.id}
                  data-app={app.id}
                  className="dock-icon group relative flex origin-bottom flex-col items-center rounded-[11px] transition-[filter] duration-150 hover:brightness-110 active:scale-[0.97]"
                  onClick={() => onAppClick(app.id, app.label)}
                  onContextMenu={(e) => handleContextMenu(e, app.id)}
                >
                  <div className="relative h-[46px] w-[46px] overflow-visible rounded-[11px]">
                    <IconComponent />
                    {app.badge && (
                      <span className="absolute -right-1.5 -top-1.5 rounded-full bg-[#ff3b30] px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <DockTooltip label={app.label} />
                  {isOpen && <span className="absolute -bottom-[5px] h-[4px] w-[4px] rounded-full bg-white/72 shadow-sm" />}
                </button>
              )
            })}

            {minimizedWindows.length > 0 && <div className="mx-[1px] h-[40px] w-px self-center bg-white/25" />}

            {minimizedWindows.map((window) => (
              <button
                key={window.id}
                className="group relative flex h-[46px] w-[46px] items-center justify-center rounded-[11px] bg-white/45 shadow-lg transition-[filter] duration-150 hover:brightness-110 active:scale-[0.97]"
                onClick={() => onUnminimize(window.id)}
              >
                <FileText className="h-6 w-6 text-slate-700" strokeWidth={1.8} />
                <DockTooltip label={window.title} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {contextMenu && (
        <div
          className="fixed z-[60] min-w-[190px] rounded-xl border border-black/10 bg-[var(--macos-menu-bg)] py-1 shadow-2xl backdrop-blur-2xl"
          style={{ left: contextMenu.x, top: contextMenu.y - 110 }}
          onClick={() => setContextMenu(null)}
        >
          <button className="w-full px-4 py-1.5 text-left text-sm transition-colors hover:bg-[#0a84ff] hover:text-white">
            Options
          </button>
          <button className="w-full px-4 py-1.5 text-left text-sm transition-colors hover:bg-[#0a84ff] hover:text-white">
            Show in Finder
          </button>
          <div className="my-1 h-px bg-black/10" />
          <button className="w-full px-4 py-1.5 text-left text-sm transition-colors hover:bg-[#0a84ff] hover:text-white">
            Quit
          </button>
        </div>
      )}
    </>
  )
}

function DockTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute -top-[38px] left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/12 bg-[#262629]/94 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-[0_8px_22px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
      {label}
      <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-[5px] rotate-45 border-b border-r border-white/12 bg-[#262629]/94" />
    </span>
  )
}

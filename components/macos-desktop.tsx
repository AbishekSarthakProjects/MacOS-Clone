"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MenuBar } from "./menu-bar"
import { Dock } from "./dock"
import { Window } from "./window"
import { DesktopIcon } from "./desktop-icon"
import { Spotlight } from "./spotlight"
import { ContextMenu } from "./context-menu"
import { NotificationCenter } from "./notification-center"
import { Launchpad } from "./launchpad"
import { AboutThisMac } from "./about-this-mac"
import { ControlCenter } from "./control-center"
import { Finder } from "./apps/finder"
import { Safari } from "./apps/safari"
import { Messages } from "./apps/messages"
import { Settings } from "./apps/settings"
import { Calendar } from "./apps/calendar"
import { Photos } from "./apps/photos"
import { Music } from "./apps/music"
import { Notes } from "./apps/notes"
import { VSCode } from "./apps/vscode"
import { Terminal } from "./apps/terminal"
import { Docker } from "./apps/docker"
import { GitBash } from "./apps/git-bash"
import { DownloadsIcon } from "./app-icons"
import { AnimatedWallpaper } from "./animated-wallpaper"

export type AppType =
  | "finder"
  | "safari"
  | "notion"
  | "telegram"
  | "chrome"
  | "messages"
  | "whatsapp"
  | "facetime"
  | "mail"
  | "maps"
  | "settings"
  | "calendar"
  | "photos"
  | "contacts"
  | "reminders"
  | "freeform"
  | "tv"
  | "music"
  | "news"
  | "keynote"
  | "numbers"
  | "pages"
  | "appstore"
  | "iphone"
  | "weather"
  | "stocks"
  | "podcasts"
  | "books"
  | "calculator"
  | "notes"
  | "vscode"
  | "terminal"
  | "docker"
  | "git"
  | "trash"

export interface WindowState {
  id: string
  app: AppType
  title: string
  isMinimized: boolean
  isMaximized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
}

interface ContextMenuState {
  x: number
  y: number
  items: Array<{ label: string; action: () => void; divider?: boolean }>
}

export function MacOSDesktop() {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [highestZIndex, setHighestZIndex] = useState(10)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [spotlightOpen, setSpotlightOpen] = useState(false)
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const [notificationCenterOpen, setNotificationCenterOpen] = useState(false)
  const [launchpadOpen, setLaunchpadOpen] = useState(false)
  const [activeApp, setActiveApp] = useState<string>("Finder")
  const [aboutThisMacOpen, setAboutThisMacOpen] = useState(false)
  const [controlCenterOpen, setControlCenterOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === " ") {
        e.preventDefault()
        setSpotlightOpen(true)
      }
      if (e.key === "Escape") {
        setSpotlightOpen(false)
        setLaunchpadOpen(false)
        setContextMenu(null)
      }
      if (e.key === "F4" || (e.ctrlKey && e.key === "ArrowUp")) {
        e.preventDefault()
        setLaunchpadOpen(!launchpadOpen)
      }
    }

    const handleClick = () => {
      setContextMenu(null)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("click", handleClick)
    }
  }, [launchpadOpen])

  const openApp = (app: AppType, title: string) => {
    setLaunchpadOpen(false)
    setActiveApp(title)
    const existingWindow = windows.find((w) => w.app === app && !w.isMinimized)

    if (existingWindow) {
      focusWindow(existingWindow.id)
      const dockIcon = document.querySelector(`[data-app="${app}"]`)
      if (dockIcon) {
        dockIcon.classList.add("animate-bounce")
        setTimeout(() => dockIcon.classList.remove("animate-bounce"), 500)
      }
      return
    }

    const minimizedWindow = windows.find((w) => w.app === app && w.isMinimized)
    if (minimizedWindow) {
      unminimizeWindow(minimizedWindow.id)
      return
    }

    const newWindow: WindowState = {
      id: `${app}-${Date.now()}`,
      app,
      title,
      isMinimized: false,
      isMaximized: false,
      position: { x: 100 + windows.length * 30, y: 80 + windows.length * 30 },
      size: { width: 900, height: 600 },
      zIndex: highestZIndex + 1,
    }

    setWindows([...windows, newWindow])
    setHighestZIndex(highestZIndex + 1)
  }

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id))
  }

  const minimizeWindow = (id: string) => {
    setWindows(windows.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)))
  }

  const unminimizeWindow = (id: string) => {
    setWindows(windows.map((w) => (w.id === id ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 } : w)))
    setHighestZIndex(highestZIndex + 1)
  }

  const maximizeWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? w.position : { x: 0, y: 24 },
              size: w.isMaximized ? w.size : { width: window.innerWidth, height: window.innerHeight - 24 - 78 },
            }
          : w,
      ),
    )
  }

  const focusWindow = (id: string) => {
    const newZIndex = highestZIndex + 1
    setWindows(windows.map((w) => (w.id === id ? { ...w, zIndex: newZIndex } : w)))
    setHighestZIndex(newZIndex)
    const window = windows.find((w) => w.id === id)
    if (window) {
      setActiveApp(window.title)
    }
  }

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindows(windows.map((w) => (w.id === id ? { ...w, position } : w)))
  }

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setWindows(windows.map((w) => (w.id === id ? { ...w, size } : w)))
  }

  const handleDesktopContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      items: [
        { label: "New Folder", action: () => console.log("New folder") },
        { label: "Get Info", action: () => console.log("Get info") },
        { divider: true, label: "", action: () => {} },
        { label: "Change Desktop Background...", action: () => openApp("settings", "Settings") },
        { divider: true, label: "", action: () => {} },
        { label: "Show View Options", action: () => console.log("View options") },
      ],
    })
  }

  const renderAppContent = (app: AppType, title: string) => {
    switch (app) {
      case "finder":
      case "trash":
        return <Finder initialFolder={title} />
      case "safari":
      case "chrome":
        return <Safari />
      case "messages":
        return <Messages />
      case "settings":
        return <Settings />
      case "calendar":
        return <Calendar />
      case "photos":
        return <Photos />
      case "music":
        return <Music />
      case "notes":
        return <Notes />
      case "vscode":
        return <VSCode />
      case "terminal":
        return <Terminal />
      case "docker":
        return <Docker />
      case "git":
        return <GitBash />
      default:
        return <PineappleAppPreview app={app} title={title} />
    }
  }

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-[#020205]">
      <AnimatedWallpaper />

      <div className="absolute inset-0" onContextMenu={handleDesktopContextMenu}>
        <div className="absolute right-4 top-14 flex flex-col gap-5 md:right-8 md:top-16">
          <DesktopIcon icon={DownloadsIcon} label="Downloads" onDoubleClick={() => openApp("finder", "Downloads")} />
        </div>
      </div>

      <MenuBar
        currentTime={currentTime}
        activeApp={activeApp}
        onSpotlightClick={() => setSpotlightOpen(true)}
        onNotificationClick={() => setNotificationCenterOpen(!notificationCenterOpen)}
        onAboutThisMac={() => setAboutThisMacOpen(true)}
        onControlCenterClick={() => setControlCenterOpen(!controlCenterOpen)}
      />

      {windows.map(
        (window) =>
          !window.isMinimized && (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              position={window.position}
              size={window.size}
              zIndex={window.zIndex}
              isMaximized={window.isMaximized}
              onClose={() => closeWindow(window.id)}
              onMinimize={() => minimizeWindow(window.id)}
              onMaximize={() => maximizeWindow(window.id)}
              onFocus={() => focusWindow(window.id)}
              onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
              onSizeChange={(size) => updateWindowSize(window.id, size)}
            >
              {renderAppContent(window.app, window.title)}
            </Window>
          ),
      )}

      <Dock
        onAppClick={openApp}
        minimizedWindows={windows.filter((w) => w.isMinimized)}
        onUnminimize={unminimizeWindow}
        onLaunchpadClick={() => setLaunchpadOpen(!launchpadOpen)}
        openApps={windows.map((w) => w.app)}
      />

      {spotlightOpen && <Spotlight onClose={() => setSpotlightOpen(false)} onOpenApp={openApp} />}

      {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} items={contextMenu.items} />}

      {notificationCenterOpen && <NotificationCenter onClose={() => setNotificationCenterOpen(false)} />}

      {launchpadOpen && <Launchpad onClose={() => setLaunchpadOpen(false)} onOpenApp={openApp} />}

      {aboutThisMacOpen && <AboutThisMac onClose={() => setAboutThisMacOpen(false)} />}

      {controlCenterOpen && <ControlCenter onClose={() => setControlCenterOpen(false)} />}
    </div>
  )
}

const appPreviews: Partial<
  Record<
    AppType,
    {
      accent: string
      eyebrow: string
      headline: string
      items: string[]
    }
  >
> = {
  notion: {
    accent: "#f5f5f5",
    eyebrow: "Workspace",
    headline: "Pineapple OS notes, tasks, and docs",
    items: ["Daily desk", "Project tracker", "Reading list"],
  },
  telegram: {
    accent: "#36a7ff",
    eyebrow: "Chats",
    headline: "Recent conversations",
    items: ["Design review", "Build updates", "Travel plans"],
  },
  whatsapp: {
    accent: "#25d366",
    eyebrow: "Messages",
    headline: "Pinned conversations",
    items: ["Family", "Studio", "Weekend"],
  },
  facetime: {
    accent: "#30d158",
    eyebrow: "Calls",
    headline: "Start a FaceTime call",
    items: ["Favorites", "Recent", "SharePlay"],
  },
  mail: {
    accent: "#0a84ff",
    eyebrow: "Inbox",
    headline: "3,377 unread messages",
    items: ["VIP", "Today", "Flagged"],
  },
  maps: {
    accent: "#64d2ff",
    eyebrow: "Maps",
    headline: "Explore nearby places",
    items: ["Home", "Work", "Saved Guides"],
  },
  contacts: {
    accent: "#a67932",
    eyebrow: "Contacts",
    headline: "All contacts",
    items: ["Favorites", "Family", "Coworkers"],
  },
  reminders: {
    accent: "#ff9500",
    eyebrow: "Reminders",
    headline: "Today",
    items: ["Review dock spacing", "Send build link", "Clean desktop"],
  },
  freeform: {
    accent: "#21c7d9",
    eyebrow: "Board",
    headline: "Sketch ideas freely",
    items: ["Moodboard", "Layout map", "Icon notes"],
  },
  tv: {
    accent: "#1d1d1f",
    eyebrow: "TV",
    headline: "Up next",
    items: ["Continue watching", "Pineapple TV+", "Library"],
  },
  news: {
    accent: "#ff2d55",
    eyebrow: "News",
    headline: "Top stories",
    items: ["Technology", "Markets", "Design"],
  },
  keynote: {
    accent: "#0a84ff",
    eyebrow: "Presentation",
    headline: "Decks and slides",
    items: ["Pineapple OS pitch", "Visual system", "Demo script"],
  },
  numbers: {
    accent: "#32d74b",
    eyebrow: "Spreadsheet",
    headline: "Recent sheets",
    items: ["Budget", "Metrics", "Inventory"],
  },
  pages: {
    accent: "#ff9f0a",
    eyebrow: "Documents",
    headline: "Recent documents",
    items: ["Product brief", "Release notes", "Draft copy"],
  },
  appstore: {
    accent: "#0a84ff",
    eyebrow: "Store",
    headline: "Discover apps",
    items: ["Create", "Work", "Play"],
  },
  iphone: {
    accent: "#8e8e93",
    eyebrow: "Continuity",
    headline: "iPhone Mirroring",
    items: ["Connected", "Notifications", "Recent apps"],
  },
  weather: {
    accent: "#64d2ff",
    eyebrow: "Weather",
    headline: "New York",
    items: ["73 degrees", "Partly cloudy", "Light wind"],
  },
  stocks: {
    accent: "#30d158",
    eyebrow: "Stocks",
    headline: "Watchlist",
    items: ["AAPL", "NVDA", "SPY"],
  },
  podcasts: {
    accent: "#bf5af2",
    eyebrow: "Podcasts",
    headline: "Listen now",
    items: ["Design Details", "ATP", "Hard Fork"],
  },
  books: {
    accent: "#ff9f0a",
    eyebrow: "Books",
    headline: "Library",
    items: ["Reading Now", "Want to Read", "Audiobooks"],
  },
  calculator: {
    accent: "#636366",
    eyebrow: "Calculator",
    headline: "0",
    items: ["Standard", "Scientific", "Programmer"],
  },
}

function PineappleAppPreview({ app, title }: { app: AppType; title: string }) {
  const preview = appPreviews[app] ?? {
    accent: "#0a84ff",
    eyebrow: "Application",
    headline: title,
    items: ["Overview", "Recent", "Settings"],
  }

  return (
    <div className="flex h-full bg-[#f5f5f7] text-[#1d1d1f]">
      <aside className="hidden w-56 border-r border-black/10 bg-white/55 p-4 backdrop-blur-xl sm:block">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-black/42">{preview.eyebrow}</div>
        <div className="space-y-1">
          {preview.items.map((item, index) => (
            <button
              key={item}
              className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                index === 0 ? "bg-black/8 font-medium" : "hover:bg-black/6"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: preview.accent }} />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </aside>
      <main className="flex flex-1 flex-col">
        <div className="flex h-12 items-center justify-between border-b border-black/10 bg-white/70 px-5 backdrop-blur-xl">
          <span className="text-sm font-medium">{title}</span>
          <span className="rounded-full bg-black/6 px-3 py-1 text-xs text-black/55">Pineapple OS</span>
        </div>
        <div className="grid flex-1 content-start gap-5 p-6">
          <section className="rounded-xl border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-inner" style={{ backgroundColor: preview.accent }}>
              <span className="text-xl font-semibold">{title.slice(0, 1)}</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-black/42">{preview.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">{preview.headline}</h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {preview.items.map((item) => (
                <div key={item} className="rounded-lg border border-black/8 bg-[#f5f5f7] px-3 py-3 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, BellIcon, LayoutGrid } from "lucide-react"
import { PineappleMark } from "./app-icons"

interface MenuBarProps {
  currentTime: Date
  activeApp: string
  onSpotlightClick: () => void
  onNotificationClick: () => void
  onAboutThisMac?: () => void
  onControlCenterClick?: () => void
}

interface MenuDropdownProps {
  items: Array<{ label?: string; shortcut?: string; divider?: boolean; action?: () => void }>
  onClose: () => void
}

function MenuDropdown({ items, onClose }: MenuDropdownProps) {
  return (
    <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-black/10 bg-[var(--macos-menu-bg)] py-1 text-[#1d1d1f] shadow-lg macos-blur">
      {items.map((item, index) =>
        item.divider ? (
          <div key={index} className="h-px bg-black/10 my-1" />
        ) : (
          <button
            key={index}
            className="w-full px-4 py-1.5 text-left text-sm hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-between"
            onClick={() => {
              item.action?.()
              onClose()
            }}
          >
            <span>{item.label ?? ""}</span>
            {item.shortcut && <span className="text-xs opacity-60">{item.shortcut}</span>}
          </button>
        ),
      )}
    </div>
  )
}

export function MenuBar({
  currentTime,
  activeApp,
  onSpotlightClick,
  onNotificationClick,
  onAboutThisMac,
  onControlCenterClick,
}: MenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  }

  const appleMenuItems = [
    { label: "About This Pineapple", action: onAboutThisMac },
    { divider: true },
    { label: "System Settings...", shortcut: "⌘,", action: () => console.log("Opening System Settings") },
    { label: "Pineapple Store...", action: () => console.log("Opening Pineapple Store") },
    { divider: true },
    { label: "Recent Items", action: () => console.log("Recent Items") },
    { divider: true },
    { label: "Sleep", action: () => console.log("Sleep") },
    { label: "Restart...", action: () => console.log("Restart") },
    { label: "Shut Down...", action: () => console.log("Shut Down") },
  ]

  const fileMenuItems = [
    { label: "New Finder Window", shortcut: "⌘N", action: () => console.log("New Finder Window") },
    { label: "New Folder", shortcut: "⇧⌘N", action: () => console.log("New Folder") },
    { label: "New Smart Folder", shortcut: "⌥⌘N", action: () => console.log("New Smart Folder") },
    { divider: true },
    { label: "Open", shortcut: "⌘O", action: () => console.log("Open") },
    { label: "Close Window", shortcut: "⌘W", action: () => console.log("Close Window") },
  ]

  const editMenuItems = [
    { label: "Undo", shortcut: "⌘Z", action: () => console.log("Undo") },
    { label: "Redo", shortcut: "⇧⌘Z", action: () => console.log("Redo") },
    { divider: true },
    { label: "Cut", shortcut: "⌘X", action: () => console.log("Cut") },
    { label: "Copy", shortcut: "⌘C", action: () => console.log("Copy") },
    { label: "Paste", shortcut: "⌘V", action: () => console.log("Paste") },
    { label: "Select All", shortcut: "⌘A", action: () => console.log("Select All") },
  ]

  const viewMenuItems = [
    { label: "as Icons", shortcut: "⌘1", action: () => console.log("View as Icons") },
    { label: "as List", shortcut: "⌘2", action: () => console.log("View as List") },
    { label: "as Columns", shortcut: "⌘3", action: () => console.log("View as Columns") },
    { label: "as Gallery", shortcut: "⌘4", action: () => console.log("View as Gallery") },
    { divider: true },
    { label: "Show Toolbar", action: () => console.log("Show Toolbar") },
    { label: "Show Sidebar", shortcut: "⌥⌘S", action: () => console.log("Show Sidebar") },
    { label: "Show Status Bar", action: () => console.log("Show Status Bar") },
  ]

  const goMenuItems = [
    { label: "Back", shortcut: "⌘[", action: () => console.log("Go Back") },
    { label: "Forward", shortcut: "⌘]", action: () => console.log("Go Forward") },
    { label: "Enclosing Folder", shortcut: "⌘↑", action: () => console.log("Enclosing Folder") },
    { divider: true },
    { label: "Documents", shortcut: "⇧⌘O", action: () => console.log("Go to Documents") },
    { label: "Desktop", shortcut: "⇧⌘D", action: () => console.log("Go to Desktop") },
    { label: "Downloads", shortcut: "⌥⌘L", action: () => console.log("Go to Downloads") },
    { label: "Home", shortcut: "⇧⌘H", action: () => console.log("Go to Home") },
    { label: "Applications", shortcut: "⇧⌘A", action: () => console.log("Go to Applications") },
  ]

  const helpMenuItems = [
    { label: "Search", action: () => console.log("Help Search") },
    { divider: true },
    { label: `${activeApp} Help`, action: () => console.log(`${activeApp} Help`) },
    { label: "Tips for Pineapple OS", action: () => console.log("Tips for Pineapple OS") },
    { label: "Pineapple OS Support", action: () => console.log("Pineapple OS Support") },
  ]

  const menus = [
    {
      id: "apple",
      label: <PineappleMark className="h-4 w-4" />,
      items: appleMenuItems,
    },
    { id: "app", label: activeApp, items: fileMenuItems },
    { id: "file", label: "File", items: fileMenuItems },
    { id: "edit", label: "Edit", items: editMenuItems },
    { id: "view", label: "View", items: viewMenuItems },
    { id: "go", label: "Go", items: goMenuItems },
    { id: "window", label: "Window", items: [] },
    { id: "help", label: "Help", items: helpMenuItems },
  ]

  return (
    <div className="relative z-50 flex h-6 select-none items-center justify-between border-b border-white/8 bg-[var(--macos-menubar-bg)] px-3 text-[13px] leading-none text-white shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="flex items-center gap-1">
        {menus.map((menu) => (
          <div key={menu.id} className="relative">
            <button
              className={`rounded px-2 py-[3px] font-medium transition-colors ${
                activeMenu === menu.id ? "bg-[#0a84ff] text-white" : "hover:bg-white/18"
              }`}
              onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
            >
              {menu.label}
            </button>
            {activeMenu === menu.id && menu.items.length > 0 && (
              <MenuDropdown items={menu.items} onClose={() => setActiveMenu(null)} />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded p-1 transition-colors hover:bg-white/18" onClick={onSpotlightClick}>
          <Search className="h-[15px] w-[15px]" />
        </button>
        <button className="rounded p-1 transition-colors hover:bg-white/18" onClick={onControlCenterClick}>
          <LayoutGrid className="h-[15px] w-[15px]" />
        </button>
        <button className="rounded p-1 transition-colors hover:bg-white/18" onClick={onNotificationClick}>
          <BellIcon className="h-[15px] w-[15px]" />
        </button>
        <span className="font-medium">{formatTime(currentTime)}</span>
      </div>
    </div>
  )
}

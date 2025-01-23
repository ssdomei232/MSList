import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  theme: string
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-800"}`}
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}


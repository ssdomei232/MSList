"use client";

import { useState, useEffect } from "react";
import yaml from "js-yaml";
import ServerCard from "../components/ServerCard";
import ThemeToggle from "../components/ThemeToggle";
import SearchBar from "../components/SearchBar";

interface Server {
  name: string;
  description: string;
  version_type: string;
  version_range?: string; // 可选属性
  links?: {
    downloads?: string[];
    "icon-GitHub"?: string;
    "icon-jenkins"?: string;
  }; // 修改后的可选属性
}

export default function Home() {
  const [servers, setServers] = useState<Server[]>([]);
  const [filteredServers, setFilteredServers] = useState<Server[]>([]);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/servers")
      .then((res) => res.json())
      .then((data) => {
        const parsedData = yaml.load(data.yaml) as { servers: Server[] };
        setServers(parsedData.servers);
        setFilteredServers(parsedData.servers);
      });
  }, []);

  useEffect(() => {
    const filtered = servers.filter(
      (server) =>
        server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.version_type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServers(filtered);
  }, [searchTerm, servers]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">MSList</h1>
          <div className="flex items-center space-x-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.map((server, index) => (
            <ServerCard key={index} server={server} theme={theme} />
          ))}
        </div>
        {filteredServers.length === 0 && (
          <p className="text-center mt-8 text-lg">没有找到匹配的服务器。</p>
        )}
      </div>
    </div>
  );
}

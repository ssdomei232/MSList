import Image from "next/image";
import { Github, PanelsTopLeft, Podcast, Server } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBook } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faQq, faTelegram } from '@fortawesome/free-brands-svg-icons';

interface Server {
  name: string;
  description: string;
  version_type: string;
  version_range?: string;
  image?: string;
  links?: {
    downloads?: string[];
    "icon-GitHub"?: string;
    "icon-website"?: string;
    "icon-blog"?: string;
    "icon-wiki"?: string;
    "icon-discord"?: string;
    "icon-QQ"?: string;
    "icon-telegram"?: string;
    "icon-shequ"?: string;
  };
}

interface ServerProps {
  server: Server;
  theme: string;
}

export default function ServerCard({ server, theme }: ServerProps) {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
    >
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Image
            src={server.image || "/placeholder.svg"}
            alt={server.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{server.name}</h2>
            <p className="text-sm text-gray-500">{server.version_type}</p>
          </div>
        </div>
        <p className="text-sm mb-4">{server.description}</p>
        <p className="text-sm mb-2">版本范围: {server.version_range || "无"}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(server.links?.downloads) &&
            server.links.downloads.length > 0 ? (
            server.links.downloads.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm px-2 py-1 rounded ${theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-100 hover:bg-blue-200"
                  }`}
              >
                下载 {index + 1}
              </a>
            ))
          ) : (
            <p className="text-sm text-gray-500">暂无下载链接</p>
          )}
        </div>
        <div className="flex gap-4">
          {server.links?.["icon-GitHub"] && (
            <a
              href={server.links["icon-GitHub"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-website"] && (
            <a
              href={server.links["icon-website"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faBlog} className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-blog"] && (
            <a
              href={server.links["icon-blog"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <PanelsTopLeft className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-discord"] && (
            <a
              href={server.links["icon-discord"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-wiki"] && (
            <a
              href={server.links["icon-wiki"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-QQ"] && (
            <a
              href={server.links["icon-QQ"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faQq} className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-telegram"] && (
            <a
              href={server.links["icon-telegram"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faTelegram} className="w-6 h-6" />
            </a>
          )}
          {server.links?.["icon-shequ"] && (
            <a
              href={server.links["icon-shequ"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Podcast className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
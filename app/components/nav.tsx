import Link from "next/link";

type NavItem = {
  name: string;
  href?: string; // Optional for external links
  external?: boolean; // Optional for differentiating internal and external links
  download?: boolean; // Added download attribute
};

const navItems: Record<string, NavItem> = {
  "/": { name: "Home" },
  "/insights": { name: "Xp" },
  "/resume.pdf": { 
    name: "Resume", 
    external: true, 
    download: true, // Add download attribute
    href: "/resume.pdf" // Point directly to file in public directory
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, external, href, download }]) =>
              external && href ? (
                <a
                  key={path}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={download}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}

/**
 * Get full URL with base prefix
 * Astro automatically handles base prefix in <a> tags, but we need this for dynamic URLs
 */
export function getFullPath(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  // Remove leading slash from path and ensure base ends with /
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/^\//, "");
  return `${cleanBase}${cleanPath}`;
}

interface NavLink {
  href: string;
  children?: NavLink[];
  [key: string]: unknown;
}

/**
 * Get all navigation links with base prefix
 */
export function getNavWithBase(navLinks: NavLink[]): NavLink[] {
  const addBase = (links: NavLink[]): NavLink[] => {
    return links.map((link) => ({
      ...link,
      href: getFullPath(link.href),
      children: link.children ? addBase(link.children) : undefined,
    }));
  };
  return addBase(navLinks);
}

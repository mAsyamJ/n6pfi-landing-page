import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const slugify = (str: string) => {
  // First, remove any characters that are not letters, numbers, spaces, or hyphens.
  // Then, replace spaces and multiple hyphens with a single hyphen.
  return str
    .toLowerCase()
    .replace(/[:\.]/g, '') // remove dots and colons
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
}


export const parseDoc = (content: string) => {
  const sections = content.split("________________");

  return sections.map((section) => {
    const lines = section.trim().split('\n');
    const title = lines.shift() || '';
    const slug = slugify(title);
    const sectionContent = lines.join('\n');

    return {
      title,
      slug,
      content: sectionContent,
    };
  });
};

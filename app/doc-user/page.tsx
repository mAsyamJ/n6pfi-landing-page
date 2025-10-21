import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { parseDoc } from '../../lib/utils';

export default function UserDocPage() {
  const docPath = path.join(process.cwd(), 'docs', 'user_doc.txt');
  const userDocContent = fs.readFileSync(docPath, 'utf-8');
  const sections = parseDoc(userDocContent);
  const firstSection = sections[0];

  if (firstSection) {
    redirect(`/doc-user/${firstSection.slug}`);
  }

  // Fallback if there are no sections
  return <div>No documentation found.</div>;
}

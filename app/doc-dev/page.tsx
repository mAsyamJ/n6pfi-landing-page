import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { parseDoc } from '../../lib/utils';

export default function DevDocPage() {
  const docPath = path.join(process.cwd(), 'docs', 'dev_doc.txt');
  const devDocContent = fs.readFileSync(docPath, 'utf-8');
  const sections = parseDoc(devDocContent);
  const firstSection = sections[0];

  if (firstSection) {
    redirect(`/doc-dev/${firstSection.slug}`);
  }

  // Fallback if there are no sections
  return <div>No documentation found.</div>;
}

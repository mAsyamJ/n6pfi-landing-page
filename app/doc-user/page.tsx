import { redirect } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { parseDoc } from '../../lib/utils';

export default async function UserDocPage() {
  const docPath = path.join(process.cwd(), 'docs', 'user_doc.txt');

  try {
    const userDocContent = await fs.readFile(docPath, 'utf-8');
    const sections = parseDoc(userDocContent);
    const firstSection = sections[0];

    if (firstSection) {
      redirect(`/doc-user/${firstSection.slug}`);
    }

    return <div>No sections found in the documentation.</div>;
  } catch (error) {
    console.error("Error reading user documentation:", error);
    return <div>Error loading documentation. Please check the server logs.</div>;
  }
}

import DocLayout from "../../../components/layouts/doc-layout"
import fs from "fs"
import path from "path"
import { parseDoc } from "../../../lib/utils"
import { notFound } from "next/navigation"

// Helper function to parse the text content
const parseContent = (content: string) => {
  const lines = content.trim().split('\n');

  return lines.map((line, i) => {
    if (line.startsWith('* ')) {
      return <p key={i} className="text-gray-300 ml-4">{line}</p>;
    }
    if (line.match(/\d\./)) {
      return <p key={i} className="text-gray-300 ml-4">{line}</p>;
    }
    return <p key={i} className="text-gray-300">{line}</p>;
  });
};

export default function UserDocSectionPage({ params }: { params: { slug: string } }) {
  const docPath = path.join(process.cwd(), 'docs', 'user_doc.txt');
  const userDocContent = fs.readFileSync(docPath, 'utf-8');
  const sections = parseDoc(userDocContent);
  const section = sections.find((s) => s.slug === params.slug);

  if (!section) {
    notFound();
  }

  return (
    <DocLayout sections={sections} basePath="/doc-user">
      <div className="p-4 md:p-8 text-white">
        <h1 className="text-4xl font-bold mb-8 text-white">{section.title}</h1>
        {parseContent(section.content)}
      </div>
    </DocLayout>
  );
}


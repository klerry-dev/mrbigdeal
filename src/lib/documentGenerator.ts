export interface ProjectDocument {
  title: string;
  type: string;
  description: string;
  tags: string[];
  results: { metric: string; label: string };
  status: string;
}

export function generateDocumentText(doc: ProjectDocument): string {
  return `
${doc.title}
${"=".repeat(doc.title.length)}

Type: ${doc.type}
Status: ${doc.status}

Description:
${doc.description}

Tags:
${doc.tags.map((tag) => `- ${tag}`).join("\n")}

Results:
${doc.results.metric} ${doc.results.label}
`.trim();
}

export function downloadDocument(doc: ProjectDocument): void {
  const text = generateDocumentText(doc);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${doc.title.replace(/\s+/g, "-").toLowerCase()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text: ", err);
    throw err;
  }
}

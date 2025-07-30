import fs from "fs"
import path from "path"
import grayMatter from "gray-matter"

interface Path {
  title: string
  href: string
  items?: Path[]
  heading?: string
  spacer?: boolean
}

function getTitleFromMdx(filePath: string): string {
  const content = fs.readFileSync(filePath, "utf-8")
  const { data } = grayMatter(content)
  return data.title || "Untitled"
}

function generateSidebar(dir: string, baseHref: string): Path[] {
  const files = fs.readdirSync(dir)
  const sidebar: Path[] = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    const href = `${baseHref}/${file.replace("index.mdx", "").replace(".mdx", "")}`

    if (stat.isDirectory()) {
      const indexFile = path.join(filePath, "index.mdx")
      if (fs.existsSync(indexFile)) {
        const title = getTitleFromMdx(indexFile)
        const items = generateSidebar(filePath, href)
        sidebar.push({
          title,
          href,
          items: items.length > 0 ? items : undefined,
        })
      }
    } else if (file.endsWith(".mdx") && file !== "index.mdx") {
      const title = getTitleFromMdx(filePath)
      sidebar.push({
        title,
        href,
      })
    }
  }

  return sidebar
}

function run() {
  const docsSidebar = generateSidebar(path.join("contents", "docs"), "/docs")
  const storySidebar = generateSidebar(
    path.join("contents", "story"),
    "/story"
  )

  const documents = [
    {
      heading: "My Story",
      items: storySidebar,
    },
    {
      spacer: true,
    },
    {
      heading: "Docs",
      items: docsSidebar,
    },
  ]

  fs.writeFileSync(
    path.join("settings", "documents.ts"),
    `import { Paths } from "@/lib/pageroutes"\n\nexport const Documents: Paths[] = ${JSON.stringify(
      documents,
      null,
      2
    )}`
  )
}

run()

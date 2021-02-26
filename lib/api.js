import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const seminarsDirectory = join(process.cwd(), 'content/pages/live/seminars')

export function getSeminarSlugs() {
  return fs.readdirSync(seminarsDirectory)
}

export function getSeminarBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(seminarsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getSeminarSlugs()
  const seminars = slugs
    .map((slug) => getSeminarBySlug(slug, fields))
    // sort seminars by date in descending order
    .sort((seminar1, seminar2) => (seminar1.date > seminar2.date ? -1 : 1))
  return seminars
}

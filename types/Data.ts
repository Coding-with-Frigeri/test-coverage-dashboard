import { Author } from './Commit'
import { CoverageSummary } from './Coverage'

export type Data = {
  id: string
  author: Author
  message: string
  url: string
  timestamp: string
  coverageSummary: Pick<CoverageSummary, 'total'>
}

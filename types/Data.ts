import { Author } from './Commit'
import { CoverageSummaryTotal } from './Coverage'

export type Data = {
  id: string
  author: Author
  message: string
  url: string
  timestamp: string
  coverageSummary: CoverageSummaryTotal
}

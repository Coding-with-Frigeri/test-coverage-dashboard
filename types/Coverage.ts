export type CoverageSummary = {
  total: {
    [key in string]: {
      total: number
      covered: number
      skipped: number
      pct: number
    }
  }
}

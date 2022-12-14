export type CoverageSummaryTotal = {
  [key in string]: {
    total: number
    covered: number
    skipped: number
    pct: number
  }
}

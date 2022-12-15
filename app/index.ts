import * as github from '@actions/github'
import * as core from '@actions/core'
import * as fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { Data } from '../types/Data'
import { execSync } from 'child_process'
import { CoverageSummary } from '../types/Coverage'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const execCommandLine = (command: string) =>
  execSync(command, { cwd: __dirname }).toString()

const filesChanged = (hash: string) => {
  const response = execCommandLine(`git diff --name-only ${hash}^`).split('\n')

  return response.filter(Boolean)
}

const isSpecFile = (filePath: string) => filePath.includes('.spec')

const isAnySpecFilesTouched = (filesChanged: string[]) =>
  filesChanged.some((value) => isSpecFile(value))

const runTestCoverageDashboard = async () => {
  try {
    const {
      author,
      message,
      id: hash,
      url,
      timestamp,
    } = github.context.payload.head_commit

    const files = filesChanged(hash)

    if (isAnySpecFilesTouched(files)) {
      const oldData = fs.readFileSync('data.json', 'utf-8')
      const coverageSummary = fs.readFileSync(
        'coverage/coverage-summary.json',
        'utf-8'
      )

      const parsedOldData: Data[] = JSON.parse(oldData)
      const parsedCoverageSummary: CoverageSummary = JSON.parse(coverageSummary)

      parsedOldData.unshift({
        id: hash,
        author,
        message,
        url,
        timestamp,
        coverageSummary: {
          total: parsedCoverageSummary['total'],
        },
      })

      fs.writeFileSync('data.json', JSON.stringify(parsedOldData))
    }
  } catch (err) {
    core.setFailed((err as { message: string }).message)
  }
}

runTestCoverageDashboard()

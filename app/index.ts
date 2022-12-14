import * as github from '@actions/github'
import * as core from '@actions/core'
import * as fs from 'fs'

import { Data } from '../types/Data'

const runTestCoverageDashboard = async () => {
  try {
    const oldData = fs.readFileSync('data.json', 'utf-8')

    const {
      author,
      message,
      id: hash,
      url,
      timestamp,
    } = github.context.payload.head_commit
    const parsedOldData: Data[] = JSON.parse(oldData)

    parsedOldData.unshift({
      id: hash,
      author,
      message,
      url,
      timestamp,
    })

    fs.writeFileSync('data.json', JSON.stringify(parsedOldData))
  } catch (err) {
    core.setFailed((err as { message: string }).message)
  }
}

runTestCoverageDashboard()

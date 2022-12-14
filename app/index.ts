const github = require('@actions/github')
const core = require('@actions/core')
const fs = require('fs')

import { Commit } from '../types/Commit'

const runTestCoverageDashboard = async () => {
  try {
    const oldData = fs.readFileSync('data.json', 'utf-8')

    const head_commit: Commit = github.context.head_commit
    console.log(oldData, head_commit)
    // fs.writeFile('test.json', '[]', (err) => {
    //   if (err) throw err
    //   console.log('SAVED!!!!')
    // })
  } catch (err) {
    core.setFailed(err.message)
  }
  // const response = fs.readFileSync('data.json', 'utf-8')

  // console.log(response)
  // try {
  //   // `who-to-greet` input defined in action metadata file
  //   const nameToGreet = core.getInput('who-to-greet')
  //   console.log(`Hello ${nameToGreet}!`)
  //   const time = new Date().toTimeString()
  //   core.setOutput('time', time)
  //   // Get the JSON webhook payload for the event that triggered the workflow
  //   const payload = JSON.stringify(github.context.head_commit, undefined, 2)
  //   console.log(`The event payload: ${payload}`)
  // } catch (err) {
  //   core.setFailed(err.message)
  // }
}

runTestCoverageDashboard()

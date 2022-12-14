import * as github from '@actions/github'
import * as core from '@actions/core'
import * as fs from 'fs'

// import { Commit } from '../types/Commit'

const runTestCoverageDashboard = async () => {
  try {
    const oldData = fs.readFileSync('data.json', 'utf-8')

    const githubContext = github.context
    console.log(oldData, githubContext)
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

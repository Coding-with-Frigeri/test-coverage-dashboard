const core = require('@actions/core')
// const github = require('@actions/github')
const fs = require('fs')

const runTestCoverageDashboard = async () => {
  try {
    fs.writeFile('test.json', '[]', (err) => {
      if (err) throw err
      console.log('SAVED!!!!')
    })
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

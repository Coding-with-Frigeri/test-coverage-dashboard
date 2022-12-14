"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const github = __importStar(require("@actions/github"));
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs"));
const runTestCoverageDashboard = async () => {
    try {
        const oldData = fs.readFileSync('data.json', 'utf-8');
        const githubContext = github.context;
        console.log(oldData, githubContext);
        // fs.writeFile('test.json', '[]', (err) => {
        //   if (err) throw err
        //   console.log('SAVED!!!!')
        // })
    }
    catch (err) {
        core.setFailed(err.message);
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
};
runTestCoverageDashboard();

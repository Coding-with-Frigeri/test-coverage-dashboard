import * as fs from 'fs'
import ejs from 'ejs'
import { Data } from '../types/Data'

const generateHtml = async () => {
  const data = fs.readFileSync('data.json', 'utf-8')
  const parsedData: Data[] = JSON.parse(data)

  const html = await ejs.renderFile('./public/ejs/list/index.ejs', {
    data: parsedData,
  })

  fs.writeFileSync('public/index.html', html)
}

generateHtml()

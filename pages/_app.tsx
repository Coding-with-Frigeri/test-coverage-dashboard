import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Chart as ChartJS,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'

ChartJS.register(BarController, CategoryScale, LinearScale, BarElement)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

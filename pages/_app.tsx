import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

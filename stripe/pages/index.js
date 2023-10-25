import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Calendar from '@/components/Calendar'
import { FirstSection } from '@/components/FirstSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <>
      <main>
        <FirstSection/>
        <section>
          <form className>
              <Calendar />
              <button type='submit'>
                <Link href= '/booking'>Proceed to Payment</Link>
              </button>
          </form>
        </section>
      </main>
    </>
  )
}

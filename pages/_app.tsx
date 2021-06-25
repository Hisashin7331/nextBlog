import type { AppProps } from 'next/app'
import Navbar from 'components/organisms/Navbar'
import 'tailwindcss/tailwind.css'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='flex justify-center'>
            <div className='wrapper'>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp

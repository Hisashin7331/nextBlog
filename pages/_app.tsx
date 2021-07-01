import type { AppProps } from 'next/app'
import Navbar from 'components/organisms/Navbar'
import 'tailwindcss/tailwind.css'
import 'styles/globals.scss'
import SearchBar from 'components/molecules/SearchBar'

import Topbar from 'components/organisms/Topbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='flex justify-center'>
            <div className='wrapper'>
                <Navbar />
                <Topbar />
                <SearchBar />
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp

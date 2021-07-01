import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Custom500: React.FC = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    })

    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-b-2 py-4'>
            <h1 className='text-4xl'>
                <b>500</b>
                {` | `}
                <span className='text-purple-500'>SERVER ERROR</span>
            </h1>
            <p>You&apos;ll be redirected to main page</p>
        </div>
    )
}

export default Custom500

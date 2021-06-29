import Image from 'next/image'

import Search from 'public/assets/icons/search.svg'

interface Props {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchInput: React.FC<Props> = ({ value, setValue }) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        return console.log('click')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        console.log(value)
    }

    return (
        <form className='w-full h-full flex' onSubmit={handleSubmit}>
            <button
                className='mx-2 h-full flex justify-center items-center'
                type='submit'
            >
                <Image src={Search} alt='search icon' />
            </button>
            <input
                value={value}
                onChange={handleChange}
                type='text'
                placeholder='Search...'
                className='w-full h-full focus:outline-none'
            />
        </form>
    )
}

export default SearchInput

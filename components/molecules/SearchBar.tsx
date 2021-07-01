import { useState } from 'react'

import SearchInput from 'components/atoms/SearchInput'

const SearchBar: React.FC = () => {
    const [value, setValue] = useState('')
    return (
        <div className='w-full lg:my-8  flex h-12 border-t-2 border-b-2'>
            <SearchInput value={value} setValue={setValue} />
        </div>
    )
}

export default SearchBar

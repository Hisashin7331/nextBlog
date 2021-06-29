import About from 'components/molecules/About'
import SearchBar from 'components/molecules/SearchBar'

const Topbar: React.FC = () => {
    return (
        <div className='hidden md:block w-full'>
            <About />
            <SearchBar />
        </div>
    )
}

export default Topbar

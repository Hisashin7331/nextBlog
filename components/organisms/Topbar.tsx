import About from 'components/molecules/About'
import SearchBar from 'components/molecules/SearchBar'

const Topbar: React.FC = () => {
    return (
        <div className='w-full'>
            <About />
            <SearchBar />
        </div>
    )
}

export default Topbar

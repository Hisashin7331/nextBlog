interface TitleProps {
    title: string
}

const Header: React.FC<TitleProps> = ({ title }) => {
    return (
        <h1 className=' m-2 md:m-8 text-white font-bold text-2xl md:text-4xl'>
            {title}
        </h1>
    )
}

export default Header

import Logo from 'components/atoms/Logo'
import Description from 'components/atoms/Description'

const About: React.FC = () => {
    return (
        <div className='flex items-center flex-col'>
            <Logo />
            <Description />
        </div>
    )
}

export default About

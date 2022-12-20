import logo from '../../public/favicon.ico'

export const Loader = () => {
    return (
        <div className='w-full flex items-center justify-center grow'>
            <img src={logo} alt="logo" className="w-20 h-20 animate-spin" />
        </div>
    )
}

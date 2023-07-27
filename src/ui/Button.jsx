
function Button({ text , link }) {
    return (
        <button className='z-10 cursor-pointer bg-gradient text-sm font-medium text-white rounded-md py-3 px-6 btn btn-pulse'><a href={`#${link}`}>{text}</a></button>
    )
}

export default Button
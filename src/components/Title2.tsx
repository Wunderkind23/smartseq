type TitleProps = {
    title: string;
}

const Title2 = ({title} : TitleProps) => {
return (
<h2 className='text-md font-semibold mb-4'>{title}</h2>
)
}

export default Title2
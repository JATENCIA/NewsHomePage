const Article = ({ title, text, img, num }) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt='imagen del article' />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue text-3xl mb-2 font-bold'>{num}</p>
        <h2 className='font-bold mb-2 hover:text-SoftOrange cursor-pointer'>
          {title}
        </h2>
        <p className='text-DarckGrayishBlue '>{text}</p>
      </div>
    </article>
  )
}

export default Article

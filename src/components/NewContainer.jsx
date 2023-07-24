import NewArticle from './NewArticle'

const NewContainer = () => {
  const news = [
    {
      title: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      title: '  Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
  ]

  return (
    <aside className='bg-VeryDarkBlue text-OffWhite px-[20px] py-[28px]'>
      <h1 className='text-SoftOrange '>New</h1>

      {news.map((elem) => {
        return (
          <NewArticle title={elem.title} text={elem.text} key={elem.title} />
        )
      })}
    </aside>
  )
}

export default NewContainer

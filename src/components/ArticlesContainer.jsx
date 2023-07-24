import Article from './Article'
import imgPcsRetro from '../assets/image/image-retro-pcs.jpg'
import imgGamingGroeth from '../assets/image/image-gaming-growth.jpg'
import imgTopLaptos from '../assets/image/image-top-laptops.jpg'

const ArticlesContainer = () => {
  const articles = [
    {
      title: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?',
      img: imgPcsRetro,
      num: '01'
    },
    {
      title: 'Top 10 Laptops of 2022',

      text: 'Our best picks for various needs and budgets.',
      img: imgTopLaptos,
      num: '02'
    },
    {
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.',
      img: imgGamingGroeth,
      num: '03'
    }
  ]

  return (
    <section className='mt-6 md:flex md:flex-wrap md:gap-10'>
      {articles.map((art) => {
        return (
          <Article
            title={art.title}
            text={art.text}
            img={art.img}
            num={art.num}
            key={art.num}
          />
        )
      })}
    </section>
  )
}

export default ArticlesContainer

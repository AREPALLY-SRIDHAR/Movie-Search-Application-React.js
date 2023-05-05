import PrimeVideo from './components/PrimeVideo'

import './App.css'

const moviesList = [
  {
    id: '61227099e13958e58d31e74c',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
    categoryId: 'ACTION',
    name: 'The Tomorrow war',
    year: '2021',
  },
  {
    id: '612271842cad3c2dfcb82481',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
    categoryId: 'COMEDY',
    name: 'The Boss baby',
    year: '2017',
  },
  {
    id: '6122709941329807a4e17b39',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    categoryId: 'ACTION',
    name: 'Avengers',
    year: '2012',
  },
  {
    id: '61227184c889cff17f05900b',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/the-intern-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
    categoryId: 'COMEDY',
    name: 'The Intern',
    year: '2015',
  },
  {
    id: '612271846f711783024f2bfa',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
    categoryId: 'COMEDY',
    name: 'Karwaan',
    year: '2018',
  },
  {
    id: '612271141bf93653809cdccb',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
    categoryId: 'ACTION',
    name: 'War',
    year: '2019',
  },
  {
    id: '61227184c7ac22c8258938c5',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/yes-man-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=dDh1l3qVNoY',
    categoryId: 'COMEDY',
    name: 'Yes Man',
    year: '2008',
  },
  {
    id: '61227184ae30e00e3ce542c8',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s',
    categoryId: 'COMEDY',
    name: 'Isnt it romantic',
    year: '2019',
  },
  {
    id: '6122718418ae122e517c3ada',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=fo9EhcwQXcM',
    categoryId: 'COMEDY',
    name: 'Total Dhamaal',
    year: '2007',
  },
  {
    id: '61227099ce46ed88e7f00c19',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=odM92ap8_c0',
    categoryId: 'ACTION',
    name: 'Godzilla vs Kong',
    year: '2021',
  },
  {
    id: '612271848b2be0f2f769d24a',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=lMAj8tyThw0',
    categoryId: 'COMEDY',
    name: 'Welcome to Newyork',
    year: '2018',
  },
  {
    id: '61227184882da0a972890152',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=3-7jehmURuM',
    categoryId: 'COMEDY',
    name: 'Pagalpanti',
    year: '2019',
  },
  {
    id: '6122709931ad5e69f5125806',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/gamer-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=P2g94xQmtHw',
    categoryId: 'ACTION',
    name: 'Gamer',
    year: '2009',
  },
  {
    id: '61227099d3c5b18801b2edb5',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=xaPLUII_M6g',
    categoryId: 'ACTION',
    name: 'Rule of the Law',
    year: '2012',
  },
  {
    id: '61227114b7b5232771c68883',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/priest-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IYfdQOGqL1o',
    categoryId: 'ACTION',
    name: 'Priest',
    year: '2011',
  },
  {
    id: '61227099ea52349bd1e16ee4',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=EDGYVFZxsXQ',
    categoryId: 'ACTION',
    name: 'Ghost Protocal',
    year: '2011',
  },
  {
    id: '11',
    thumbnailUrl:
      'https://wallpapers.com/images/high/rrr-movie-trailer-poster-u79atg08s19esbf6.webp',
    name: 'RRR',
    year: '2022',
  },
  {
    id: '12',
    thumbnailUrl:
      'https://w0.peakpx.com/wallpaper/70/526/HD-wallpaper-rocking-star-yash-kgf-chapter-2.jpg',
    name: 'KGF2',
    year: '2022',
  },
  {
    id: '13',
    thumbnailUrl:
      'https://images.news18.com/ibnlive/uploads/2021/01/1611818353_pushpa-1.jpg',
    name: 'Pusha',
    year: '2022',
  },
  {
    id: '14',
    thumbnailUrl: 'https://images.indianexpress.com/2018/11/2-0-7595.jpg',
    name: 'Robo',
    year: '2010',
  },
  {
    id: '15',
    thumbnailUrl: 'https://wallpapercave.com/wp/wp4027473.jpg',
    name: 'Bahubali',
    year: '2015',
  },
  {
    id: '16',
    thumbnailUrl:
      'https://c4.wallpaperflare.com/wallpaper/621/286/348/keanu-reeves-keanu-reeves-parabellum-john-wick-john-wick-hd-wallpaper-preview.jpg',
    name: 'Jhon Wick',
    year: '2014',
  },
  {
    id: '17',
    thumbnailUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/733/587/desktop-wallpaper-avatar-fantasy-action-adventure-sci-avatar-poster.jpg',
    name: 'Avatar',
    year: '2009',
  },
  {
    id: '18',
    thumbnailUrl:
      'https://gumlet.assettype.com/dtnext%2F2023-02%2Fa96839c1-f132-4b1e-8b64-6ec699357c42%2Fdtnext_2022_10_5d588f84_54a8_4807_b043_1a2e1f70b39f_123.avif?rect=0%2C0%2C999%2C562&auto=format%2Ccompress&fit=max&format=webp&w=400&dpr=2.6',
    name: 'PS2',
    year: '2023',
  },
  {
    id: '19',
    thumbnailUrl:
      'https://e.telugurajyam.com/wp-content/uploads/2023/03/nani-dasara-theatrical-trailer-on-march-14th.jpg',
    name: 'Dasara',
    year: '2023',
  },
  {
    id: '20',
    thumbnailUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/676/496/desktop-wallpaper-vikram-movie-kamal-haasan-vikram-movie.jpg',
    name: 'Vikram',
    year: '2022',
  },
  {
    id: '21',
    thumbnailUrl:
      'https://w0.peakpx.com/wallpaper/320/432/HD-wallpaper-batman-movie-the-dark-knight-rises.jpg',
    name: ' Dark Knight Rises',
    year: '2012',
  },
  {
    id: '22',
    thumbnailUrl: 'https://wallpaperaccess.com/full/645142.jpg',
    name: 'Thor',
    year: '2011',
  },
  {
    id: '23',
    thumbnailUrl:
      'https://c4.wallpaperflare.com/wallpaper/128/523/610/movie-train-to-busan-wallpaper-preview.jpg',
    name: 'Train to busan',
    year: '2016',
  },
  {
    id: '24',
    thumbnailUrl: 'https://cdn.wallpapersafari.com/36/30/kg5x4R.jpg',
    name: 'Everthing everywhere',
    year: '2022',
  },
  {
    id: '25',
    thumbnailUrl:
      'https://images.hdqwalls.com/wallpapers/tenet-movie-4k-7x.jpg',
    name: 'Tenet',
    year: '2020',
  },
  {
    id: '26',
    thumbnailUrl:
      'https://e1.pxfuel.com/desktop-wallpaper/314/152/desktop-wallpaper-tanhaji-the-unsung-warrior-akshay-kumar-pens-a-heartfelt-note-for-friend-ajay-devgn-as-he-shares-his-fiery-new-poster-tanhaji-movie.jpg',
    name: 'Tanhaji',
    year: '2020',
  },
  {
    id: '27',
    thumbnailUrl: 'https://i.ytimg.com/vi/w8OyVvUnAAg/maxresdefault.jpg',
    name: 'Sherlock holmes',
    year: '2009',
  },
  {
    id: '28',
    thumbnailUrl: 'https://i.ytimg.com/vi/xyjTHc-eWSs/maxresdefault.jpg',
    name: 'Interstellar',
    year: '2009',
  },
  {
    id: '29',
    thumbnailUrl:
      'https://www.escapistmagazine.com/wp-content/uploads/2020/07/inception1.jpg',
    name: 'Inception',
    year: '2010',
  },
  {
    id: '30',
    thumbnailUrl:
      'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/karthikeya-2-et00307869-1667801965.jpg',
    name: 'Karthikeya 2',
    year: '2022',
  },
  {
    id: '31',
    thumbnailUrl:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Shutter-Island-Ending-Explained.jpg',
    name: 'Shutter Island',
    year: '2010',
  },
  {
    id: '32',
    thumbnailUrl:
      'https://m.media-amazon.com/images/S/pv-target-images/33681988eff05c3250cbbfde6543e8f1c88b2fd493e4f16f7d43cd5f9d25d5c3._UR1920,1080_.jpg',
    name: 'Wolf of wall street',
    year: '2013',
  },
  {
    id: '33',
    thumbnailUrl: 'https://wallpaperaccess.com/full/3470347.jpg',
    name: 'Troy',
    year: '2004',
  },
  {
    id: '34',
    thumbnailUrl:
      'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/93f5ec51361c08f09e139e7272322cd446538c0f22a70b67dfd1f9026af8f9f5._RI_V_TTW_.jpg',
    name: 'Eega',
    year: '2012',
  },
]

const App = () => <PrimeVideo moviesList={moviesList} />

export default App

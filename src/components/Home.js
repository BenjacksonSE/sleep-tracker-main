const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
         <svg viewBox="0 0 554 325" className="image__container svg__img home_img"></svg>
        <div className="home__data">
          <h1 className="home__title">Sleep Better <br/> More Sleep Yay</h1> 
          <p className="home__description">Enter in your sleep data and get personalised guidence and advice on getting your best nights sleep ever!</p>
          <a href="#" className="button">Sign Up</a>
        </div>
      </div>
    </section>
  )
}

export default Home

const Services = () => {
  return (
    <section className="services section container" id="services">
      <h2 className="section__title">Some Things This App Can Help Wit</h2>

      <div className="services__container grid">
        <div className="services__data">
          <h3 className="services__subtitle">Some service</h3>
          <svg viewBox="0 0 135 94" className="image__container"></svg>
          <p className="services__description">Wow what a very nice sleep app very sleepy</p>
          <div>
            <a href="#" className="button button-link">Learn More</a>
          </div>
        </div>
        <div className="services__data">
          <h3 className="services__subtitle">Some service</h3>
          <svg viewBox="0 0 129 94" className="image__container"></svg>
          <p className="services__description">Super duper sleepaholic stuff wow tiard</p>
          <div>
            <a href="#" className="button button-link">Learn More</a>
          </div>
        </div>
        <div className="services__data">
          <h3 className="services__subtitle">Some service</h3>
          <svg viewBox="0 0 121 94" className="image__container"></svg>
          <p className="services__description">Lets get sleepy with it</p>
          <div>
            <a href="#" className="button button-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Services

const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <div className="contact__content">
          <h2 className="section__title-center">Contact me Hire me</h2>
            <p className="contact__description">
              Contact me here, below are links to my socials, github and the extra goods hire me good please.
            </p>
        </div>
        <ul className="contact__content grid">
          <li className="contact__adress">Phone:
            <span className="contact_information">(203)-906-3406 </span>
          </li>
          <li className="contact__adress">Email:
            <span className="contact_information">benjacksonse@gmail.com</span>
          </li>
          <li className="contact__adress">Some other contact:
            <span className="contact_information">some other contact</span>
          </li>
        </ul>

        <div className="contact__content">
          <a href="#" className="button">Contact Me</a>
        </div>
        
      </div>
    </section>
  )
}

export default Contact

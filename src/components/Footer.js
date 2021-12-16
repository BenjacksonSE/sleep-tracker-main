import { RiFacebookCircleFill, RiTwitterFill, RiGithubFill, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">Source code</a>
          <p className="footer__description">Link to github repository</p>
        </div>

        <div className="footer__content">
          <h3 class="footer__title">My Links</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 class="footer__title">My porfolio</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 class="footer__title">Get In touch</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
            <li>
              <a href="#" className="footer__link">Link</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <a href="#" class="footer__social-link"><RiFacebookCircleFill/></a>
          <a href="#" class="footer__social-link"><RiTwitterFill/></a>
          <a href="#" class="footer__social-link"><RiGithubFill/></a>
          <a href="#" class="footer__social-link"><RiInstagramLine/></a>
          
        </div>

      </div>
    </section>
  )
}

export default Footer

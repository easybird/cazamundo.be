import React from 'react';
import PropTypes from 'prop-types';
import {OutboundLink} from 'gatsby-plugin-google-analytics';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class Main extends React.Component {
  render () {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle ();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}
      >

        <article
          id="easybird"
          className={`${this.props.article === 'easybird' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Software solutions</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>
            Cazamundo leverages his knowledge about what software can do for a business, via
            {' '}
            <OutboundLink href="https://smartondernemen.be">
              smartondernemen.be
            </OutboundLink>
            . We define your needs and propose the solution that best fits your company goals.
          </p>
          <p>
            Via custom made applications or a mobile app, complex micro service architectures, or existing software solution that can be bought or iterated upon. We are confident that we can make it happen for you.
          </p>
          <p>
            In doubt? We feel sorry for you.
            {' '}
            <span role="img" aria-label="smile with sunglasses">😎</span>
          </p>
          <p>
            {' '}
            Check out more on
            {' '}
            <OutboundLink href="https://smartondernemen.be">
              smartondernemen.be
            </OutboundLink>
            .
          </p>
          {close}
        </article>

        <article
          id="vogelvrij"
          className={`${this.props.article === 'vogelvrij' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Crafting gold</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>
            Cazamundo crafts beauty for your loved ones.
            {' '}
            <span role="img" aria-label="loving heart">❤️</span>
          </p>
          <p>
            In our eyes, jewelry is not just some finary. It is a personal jewel, something that suits someone, with a meaning. You buy it for yourself or for someone you hold dear.
            {' '}
          </p>
          <p>
            {' '}
            Check out more on
            {' '}
            <OutboundLink href="https://vogelvrij.be">VogelVrij</OutboundLink>
            .
          </p>
          {close}
        </article>

        <article
          id="mountains"
          className={`${this.props.article === 'mountains' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Mountains</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>
            We love the mountains, it's our second home.
            {' '}
            <span role="img" aria-label="home">🏠</span>
            {' '}
          </p>
          <p>
            Want to explore the mountains like a real local? Are you into action sports? Cross-country or off piste skiing or snowboarding, Climbing, Trail running, Downhill mountainbiking? Want our guidance or a local to guide you?
          </p>

          <p>
            We love to facilitate you to accomplish your dreams.
            {' '}
            <br />
            We operate from
            {' '}
            <OutboundLink
              href="http://www.ecrins-parcnational.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Massif des Écrins
            </OutboundLink>
            {' '}
            in the French Alps.
            <br />
            Searching for a place to stay?
            {' '}
            <OutboundLink
              href="https://www.homeaway.nl/vakantiewoning/p6790598"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let us help.
            </OutboundLink>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{display: 'none'}}
        >
          <h2 className="major">Contact</h2>
          <ul className="brands">
            <li>
              <OutboundLink href="https://easybird.be">Easybird</OutboundLink>
            </li>
            <li>
              <OutboundLink href="https://www.vogelvrij.be">
                Atelier VogelVrij
              </OutboundLink>
            </li>
          </ul>
          <p>
            Other questions?
            {' '}
            <OutboundLink href="mailto:info@cazamundo.be">
              info@cazamundo.be
            </OutboundLink>
          </p>
          <ul className="icons">
            <li>
              <OutboundLink
                href="https://twitter.com/jodierckens"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.facebook.com/AtelierVogelVrij"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.instagram.com/atelier.vogelvrij/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://github.com/easybird"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </OutboundLink>
            </li>
          </ul>
          {close}
        </article>

      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;

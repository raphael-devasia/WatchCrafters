import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/pexels-ron-lach-7954870.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk"></img>
        <article>
          <div className="title">
            <h2>Unveiling Our Story</h2>
            <div className="underline"></div>
            <p>
              Welcome to Watch Crafters! We are dedicated to the world of
              horology, offering a curated selection of exceptional timepieces
              and an unparalleled customer experience. With a passion for
              craftsmanship, innovation, and style, we carefully curate a
              collection of watches that are both timeless and in line with the
              latest trends. Embark on a journey with Watch Crafters as we
              redefine the art of watchmaking and inspire your personal style.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
  
  
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

<template>
    <!--===================== Header =====================-->
    <header id="header" class="header">
        <nav class="nav container">
            <a href="index.html" class="nav__brand">Vysing.</a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link">
                            <i class="ri-home-line nav__icon"></i>
                            Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class="ri-user-line nav__icon"></i>
                            About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link">
                            <i class="ri-medal-line nav__icon"></i>
                            Skills</a>
                    </li>
                    <li class="nav__item">
                        <a href="#service" class="nav__link">
                            <i class="ri-briefcase-line nav__icon"></i>
                            Services</a>
                    </li>
                    <li class="nav__item">
                        <a href="#portfolio" class="nav__link">
                            <i class="ri-folders-line nav__icon"></i>
                            Portfolio</a>
                    </li>
                    <li class="nav__item">
                        <a href="#blog" class="nav__link">
                            <i class="ri-message-line nav__icon"></i>
                            Blog</a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link">
                            <i class="ri-phone-line nav__icon"></i>
                            Contact</a>
                    </li>
                </ul>
            </div>
            <div class="nav__buttons">
                <span class="theme__toggle">
                    <i id="theme-toggle" class="ri-moon-line"></i>
                </span>
                <span class="nav__toggle">
                    <i id="nav-toggle" class="ri-menu-4-line"></i>
                </span>
            </div>
        </nav>
    </header>

    <!--===================== Main =====================-->
    <main class="main">
        <!--===================== Home =====================-->
        <section id="home" class="home">
            <div class="d-grid home__wrapper container">
                <div class="home__content">
                    <h1 class="home__title">
                        I Am <span class="home__name">Vysing</span><br>
                        <!-- UI/UX Designer<br> -->
                        Web Developer
                    </h1>
                    <p class="home__description">
                      <!-- A product-focused fullstack
                      developer based in Cambodia. Previously
                      Technical Lead at Inviter.
                      I specialise in helping products grow
                      based on user metrics. -->
                      I'm a software engineer specializing in building (and occasionally
                      designing) exceptional digital experiences. Currently, I'm focused on
                      building complex applications with modern technologies.
                    </p>
                    <a href="#contact" class="btn btn--primary">
                        <i class="ri-mail-line"></i>
                        Hire Me
                    </a>
                    <div class="social">
                        <span class="social__title">Follow Me</span>
                        <ul class="social__list">
                            <li class="social__item">
                                <a href="javascript:void(0)" class="social__link">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="javascript:void(0)" class="social__link">
                                    <i class="ri-twitter-line"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="javascript:void(0)" class="social__link">
                                    <i class="ri-dribbble-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="./assets/img/image_sing.png" alt="Natasha Smith" class="home__img">
            </div>
        </section>

        <!--===================== About =====================-->
        <section id="about" class="about section">
            <div class="d-grid about__wrapper container">
                <div class="about__content">
                    <span class="section__subtitle">About Me</span>
                    <h2 class="section__title">I Design and Develop Experiences that
                        make people's live simple.</h2>
                    <p class="about__description">Viverra nisl nibh dolor nam venenatis turpis ultrices. Vulputate
                        facilisis urna pulvinar fringilla consequat molestie
                        vulputate lacus.
                        Pretium leo et nec fusce. Cursus volutpat sed.</p>
                    <a href="javascript:void(0)" class="btn btn--primary"><i class="ri-article-line"></i>Download CV</a>
                </div>
                <img src="./assets/img/about_vysing.png" alt="Natasha Smith" class="about__img">
            </div>
        </section>

        <!--===================== Skills =====================-->
        <section id="skills" class="skills section section-bg">
            <div class="section__header container">
                <span class="section__subtitle">Skills</span>
                <h2 class="section__title">Some of My Working Tools
                </h2>
            </div>
            <div class="d-grid skills__wrapper container">
                <div class="skills__content">
                    <h3 class="skills__title">UI/UX Design</h3>
                    <div class="skills__content-wrapper">
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/figma-logo.svg" alt="Figma Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Figma</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/adobexd-logo.svg" alt="Adobe XD Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Adobe XD</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/adobe-illustrator-logo.svg" alt="Illustrator Logo"
                                    class="skills__img">
                            </div>
                            <h3 class="skills__name">Illustrator</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/photoshop-logo.svg" alt="Photoshop Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Photoshop</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/sketch-logo.svg" alt="Sketch Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Sketch</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/invision-logo.jpg" alt="InVision Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">InVision</h3>
                        </div>
                    </div>
                </div>
                <div class="skills__content">
                    <h3 class="skills__title">Web Development</h3>
                    <div class="skills__content-wrapper">
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/html-logo.svg" alt="HTML Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">HTML</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/css-logo.svg" alt="CSS Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">CSS</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/javascript-logo.svg" alt="JavaScript Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">JavaScript</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/nodejs-logo.svg" alt="Node.Js Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Node.Js</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/react-logo.svg" alt=" React  Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">React</h3>
                        </div>
                        <div class="skills__card">
                            <div class="skills__img-wrapper">
                                <img src="./assets/img/vue-logo.svg" alt="Vue.js Logo" class="skills__img">
                            </div>
                            <h3 class="skills__name">Vue.js</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--===================== Counter =====================-->
        <section class="counter section">
            <div class="d-grid counter__wrapper container">
                <div class="counter__item">
                    <span class="counter__icon">
                        <i class="ri-user-line"></i>
                    </span>
                    <p class="counter__number" data-target="8">0</p>
                    <h2 class="counter__title">Years Experience</h2>
                </div>
                <div class="counter__item">
                    <span class="counter__icon">
                        <i class="ri-briefcase-line"></i>
                    </span>
                    <p class="counter__number" data-target="100">0</p>
                    <h2 class="counter__title">Projects Completed</h2>
                </div>
                <div class="counter__item">
                    <span class="counter__icon">
                        <i class="ri-cup-line"></i>
                    </span>
                    <p class="counter__number" data-target="350">0</p>
                    <h2 class="counter__title">Cups Of Coffee</h2>
                </div>
                <div class="counter__item">
                    <span class="counter__icon">
                        <i class="ri-user-smile-line"></i>
                    </span>
                    <p class="counter__number" data-target="225">0</p>
                    <h2 class="counter__title">Happy Clients</h2>
                </div>
            </div>
        </section>

        <!--===================== Services =====================-->
        <section id="service" class="service section section-bg">
            <div class="d-grid service__wrapper container">
                <div class="service__content">
                    <span class="section__subtitle">My Services</span>
                    <h2 class="section__title">What I Provide To My Clients</h2>

                    <p class="service__description">
                        Sit elementum fringilla ipsum accumsan sagittis ullamcorper dolor. Nunc tempor ut amet enim dui.
                        Congue viverra tortor
                        integer fames amet odio cursus.
                    </p>

                    <p class="service__description">
                        Rhoncus lacinia turpis sagittis sed ipsum hendrerit nunc non. Leo massa a est ullamcorper at
                        vulputate. Sit elementum
                        fringilla ipsum accumsan sagittis ullamcorper dolor. Nunc tempor ut amet enim dui. Congue
                        viverra tortor integer fames
                        amet odio cursus.
                    </p>

                    <a href="#" class="btn btn--primary">
                        <i class="ri-chat-3-line"></i>
                        Let's Talk
                    </a>
                </div>
                <div class="service__info">
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-code-line"></i>
                        </div>
                        <div class="service__info-wrapper">
                            <h3 class="service__info-title">Frontend Development</h3>
                            <p class="service__description">
                                Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                            </p>
                        </div>
                    </div>
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-layout-masonry-fill"></i>
                        </div>
                        <div class="service__info-wrapper">
                            <h3 class="service__info-title">UI/UX Design</h3>
                            <p class="service__description">
                                Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                            </p>
                        </div>
                    </div>
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-pen-nib-fill"></i>
                        </div>
                        <div class="service__info-wrapper">
                            <h3 class="service__info-title">Graphic Design</h3>
                            <p class="service__description">
                                Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--===================== Portfolio =====================-->
        <section id="portfolio" class="portfolio section">
            <div class="section__header container">
                <span class="section__subtitle">Portfolio</span>
                <h2 class="section__title">Featured Projects</h2>
            </div>
            <div class="d-grid portfolio__wrapper container">
                <div class="portfolio__project">
                    <div class="portfolio__overlay"></div>
                    <img src="./assets/img/project1.jpg" alt="Website Design" class="portfolio__img">
                    <div class="portfolio__info">
                        <div class="portfolio__info-wrapper">
                            <h3 class="portfolio__title">Website Design</h3>
                            <p class="portfolio__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                facilis repellendus...
                            </p>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="portfolio__link">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>

                <div class="portfolio__project">
                    <div class="portfolio__overlay"></div>
                    <img src="./assets/img/project2.jpg" alt="Mobile App UI/UX Design " class="portfolio__img">
                    <div class="portfolio__info">
                        <div class="portfolio__info-wrapper">
                            <h3 class="portfolio__title">Mobile App UI/UX Design</h3>
                            <p class="portfolio__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                facilis repellendus...
                            </p>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="portfolio__link">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>

                <div class="portfolio__project">
                    <div class="portfolio__overlay"></div>
                    <img src="./assets/img/project3.jpg" alt="App Re-design" class="portfolio__img">
                    <div class="portfolio__info">
                        <div class="portfolio__info-wrapper">
                            <h3 class="portfolio__title">App Re-design</h3>
                            <p class="portfolio__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                                facilis repellendus...
                            </p>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="portfolio__link">
                        <i class="ri-external-link-line"></i>
                    </a>
                </div>
            </div>
        </section>

        <!--===================== Testimonial =====================-->
        <section class="testimonial section section-bg">
            <div class="section__header container">
                <span class="section__subtitle">Testimonials</span>
                <h2 class="section__title">What Clients Are Saying About Me</h2>
            </div>
            <div class="testimonial__wrapper container swiper">
                <div class="swiper-wrapper">
                    <div class="testimonial__card swiper-slide">
                        <div class="testimonial__card-icon">
                            <i class="ri-double-quotes-r"></i>
                        </div>
                        <div class="testimonial__card-wrapper">
                            <div class="testimonial__img-wrapper">
                                <img src="./assets/img/testimonial1.jpg" alt="Shawn Wallace" class="testimonial__img">
                            </div>
                            <div class="testimonial__data">
                                <h3 class="testimonial__name">Shawn Wallace</h3>
                                <p class="testimonial__occupation">Photographer</p>
                            </div>
                        </div>
                        <p class="testimonial__quote">
                            In ultricies at purus egestas at donec amet gravida nunc. Mauris pellentesque ipsum proin
                            placerat aliquam libero arcu.
                        </p>
                    </div>

                    <div class="testimonial__card swiper-slide">
                        <div class="testimonial__card-icon">
                            <i class="ri-double-quotes-r"></i>
                        </div>
                        <div class="testimonial__card-wrapper">
                            <div class="testimonial__img-wrapper">
                                <img src="./assets/img/testimonial2.jpg" alt="Shawn Wallace" class="testimonial__img">
                            </div>
                            <div class="testimonial__data">
                                <h3 class="testimonial__name">Ashley Robie</h3>
                                <p class="testimonial__occupation">Product Manager</p>
                            </div>
                        </div>
                        <p class="testimonial__quote">
                            In ultricies at purus egestas at donec amet gravida nunc. Mauris pellentesque ipsum proin
                            placerat aliquam libero arcu.
                        </p>
                    </div>

                    <div class="testimonial__card swiper-slide">
                        <div class="testimonial__card-icon">
                            <i class="ri-double-quotes-r"></i>
                        </div>
                        <div class="testimonial__card-wrapper">
                            <div class="testimonial__img-wrapper">
                                <img src="./assets/img/testimonial3.jpg" alt="Shawn Wallace" class="testimonial__img">
                            </div>
                            <div class="testimonial__data">
                                <h3 class="testimonial__name">Lee Elliot</h3>
                                <p class="testimonial__occupation">Software Engineer</p>
                            </div>
                        </div>
                        <p class="testimonial__quote">
                            In ultricies at purus egestas at donec amet gravida nunc. Mauris pellentesque ipsum proin
                            placerat aliquam libero arcu.
                        </p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>

        <!--===================== blog =====================-->
        <section id="blog" class="blog section">
            <div class="section__header container">
                <span class="section__subtitle">My Blog</span>
                <h2 class="section__title">Latest Posts & News</h2>
            </div>
            <div class="d-grid blog__wrapper container">
                <div class="blog__post">
                    <div class="blog__img-wrapper">
                        <img src="./assets/img/blog1.jpg" alt="" class="blog__img">
                        <span class="blog__category">UI/UX Design</span>
                    </div>
                    <div class="blog__content">
                        <h3 class="blog__title">10 UI/UX Design trends that made for 2023</h3>
                        <p class="blog__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                            nihil quam velit ipsam possimus.
                        </p>
                        <a href="javascript:void(0)" class="blog__link">
                            Read More
                            <i class="ri-arrow-right-s-line"></i>
                        </a>
                    </div>
                </div>

                <div class="blog__post">
                    <div class="blog__img-wrapper">
                        <img src="./assets/img/blog2.jpg" alt="" class="blog__img">
                        <span class="blog__category">UI/UX Design</span>
                    </div>
                    <div class="blog__content">
                        <h3 class="blog__title">The 5 most used prototyping tools for UI/UX Designers in 2023</h3>
                        <p class="blog__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                            nihil quam velit ipsam possimus.
                        </p>
                        <a href="javascript:void(0)" class="blog__link">
                            Read More
                            <i class="ri-arrow-right-s-line"></i>
                        </a>
                    </div>
                </div>

                <div class="blog__post">
                    <div class="blog__img-wrapper">
                        <img src="./assets/img/blog3.jpg" alt="" class="blog__img">
                        <span class="blog__category">Web Development</span>
                    </div>
                    <div class="blog__content">
                        <h3 class="blog__title">React vs Vue: Which is Better and Why?</h3>
                        <p class="blog__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                            nihil quam velit ipsam possimus.
                        </p>
                        <a href="javascript:void(0)" class="blog__link">
                            Read More
                            <i class="ri-arrow-right-s-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!--===================== Contact =====================-->
        <section id="contact" class="contact section section-bg">
            <div class="section__header container">
                <span class="section__subtitle">Let's Talk</span>
                <h2 class="section__title">Have a Project Idea? Feel Free to Contact</h2>
            </div>
            <div class="d-grid contact__wrapper container">
                <form action="" class="contact__form">
                    <div class="form__group">
                        <label for="" class="form__label">Name</label>
                        <input type="text" class="form__input" placeholder="Enter your name" required>
                    </div>
                    <div class="form__group">
                        <label for="" class="form__label">Email</label>
                        <input type="email" class="form__input" placeholder="Enter your email" required>
                    </div>
                    <div class="form__group">
                        <label for="" class="form__label">Message</label>
                        <textarea class="form__input form__textarea"
                            placeholder="Tell me about your project"></textarea>
                    </div>
                    <button type="submit" class="btn btn--primary">
                        <i class="ri-send-plane-line"></i>Send Message
                    </button>
                </form>
                <div class="d-grid contact__content">
                    <div class="contact__info">
                        <div class="contact__icon">
                            <i class="ri-phone-line"></i>
                        </div>
                        <div class="contact__info-wrapper">
                            <h3 class="contact__title">Call:</h3>
                            <p class="contact__description">(+855) 15 674 774</p>
                        </div>
                    </div>

                    <div class="contact__info">
                        <div class="contact__icon">
                            <i class="ri-mail-line"></i>
                        </div>
                        <div class="contact__info-wrapper">
                            <h3 class="contact__title">Email:</h3>
                            <p class="contact__description">vysingsun@gmail.com</p>
                        </div>
                    </div>

                    <div class="contact__info">
                        <div class="contact__icon">
                            <i class="ri-map-pin-line"></i>
                        </div>
                        <div class="contact__info-wrapper">
                            <h3 class="contact__title">Location:</h3>
                            <p class="contact__description">Toul Kok Phnom Penh, Cambodia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!--===================== Footer =====================-->
    <footer class="footer">
        <div class="d-grid footer__wrapper container">
            <div class="footer__content">
                <h4 class="footer__name">Vysing Sun</h4>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="#home" class="footer__link">Home</a>
                    </li>
                    <li class="footer__item">
                        <a href="#about" class="footer__link">About</a>
                    </li>
                    <li class="footer__item">
                        <a href="#skills" class="footer__link">Skills</a>
                    </li>
                    <li class="footer__item">
                        <a href="#service" class="footer__link">Services</a>
                    </li>
                    <li class="footer__item">
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li class="footer__item">
                        <a href="#blog" class="footer__link">Blog</a>
                    </li>
                    <li class="footer__item">
                        <a href="#contact" class="footer__link">Contact</a>
                    </li>
                </ul>
                <ul class="social__list">
                    <li class="social__item">
                        <a href="javascript:void(0)" class="social__link">
                            <i class="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="javascript:void(0)" class="social__link">
                            <i class="ri-twitter-line"></i>
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="javascript:void(0)" class="social__link">
                            <i class="ri-dribbble-line"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright container">
            <p>&copy; Copyright 2023 Designed by Vysing Sun.</p>
        </div>
    </footer>
    <a href="#" id="scrolltop" class="scrolltop">
        <i class="ri-arrow-up-line"></i>
    </a>
</template>
<style>
@import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');
@import 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
:root {
  /* Colors
  ___________________*/
  --color-primary: #7a49fe;
  --color-primary-dark: #7016ff;
  --color-primary-lighten: #c8b6fa;
  --color-gradient: linear-gradient(121.77deg, #7141fb 13.51%, #4b14e8 174.68%);
  --color-secondary: #212736;
  --color-secondary-dark: #1d2230;
  --color-gray: #747474;
  --color-gray-light: #b8bbc7;
  --color-gray-lighten: #f6f8fe;
  --color-white: #fff;
  --color-title: #3f396d;
  --color-border: #2b3142;

  /* Font & Typography
  ___________________*/
  --font-family-primary: "Rubik", sans-serif;
  /* font sizes */
  --fs-xs: 1.2rem;
  --fs-sm: 1.4rem;
  --fs-md: 1.6rem;
  --fs-lg: 2rem;
  --fs-xl: 2.4rem;
  --fs-xxl: clamp(2.4rem, 5vw, 4.2rem);
  --fs-biggest: clamp(3.2rem, 5vw, 5.8rem);
  /* font weight */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* z-index
  ___________________*/
  --zindex-fixed: 1000;
  --zindex-menu: 1010;

  /* With & Height 
  ------------------*/
  --width-container: 110rem;
  --height-header: 8rem;
  --height-header--scroll: 8rem;

  /* Transition and box shadow*/
  --transition: 0.4s ease-in-out;
  --shadow-primary: 0 0 85px 0 #e9eefc;
  --shadow-secondary: 0px 30px 60px 2px rgba(0, 0, 0, 0.1);
  --shadow-header: 0px 2px 5px rgba(0, 0, 0, 0.05);

  /* border-radius */
  --b-radius: 1.5rem;
}

/* CSS Reset
--------------------------------------------------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
  color: var(--color-title);
  font-weight: var(--fw-bold);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body,
h1,
h2,
h3,
h4,
ul,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
textarea,
button {
  font: inherit;
  outline: none;
}

button {
  cursor: pointer;
  border: none;
}

a {
  text-decoration: none;
  color: var(--color-gray);
}

main {
  overflow: hidden;
}

body {
  font-family: var(--font-family-primary);
  font-size: var(--fs-md);
  font-weight: var(--fw-regular);
  color: var(--color-gray);
  margin-top: var(--height-header);
}

/* Dark Theme 
--------------------------------------------------------------*/
.dark-theme {
  background-color: var(--color-secondary);
  color: var(--color-gray-light);
  --color-title: #fff;
  --shadow-header: 0px 5px 10px rgba(0, 0, 0, 0.09);
}

.dark-theme .header,
.dark-theme .nav__menu {
  background-color: var(--color-secondary);
}

.dark-theme .section-bg {
  background-color: var(--color-secondary-dark);
}

.dark-theme .nav__menu {
  border-color: var(--color-secondary-dark);
}

.dark-theme .social__link {
  background-color: var(--color-secondary-dark);
  color: var(--color-title);
}

.dark-theme .skills__card,
.dark-theme .service__card,
.dark-theme .blog__post,
.dark-theme .testimonial__card,
.dark-theme .form__input {
  background-color: var(--color-secondary);
  box-shadow: none;
}

.dark-theme .service__icon {
  background-color: var(--color-secondary-dark);
}

.dark-theme .blog__post {
  background-color: var(--color-secondary-dark);
}

.dark-theme .form__input::placeholder {
  opacity: 0.3;
}

.dark-theme::-webkit-scrollbar {
  background-color: var(--color-gray);
}

.dark-theme::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-light);
}

/* Reausable CSS Classes
--------------------------------------------------------------*/
.container {
  width: 90%;
  max-width: var(--width-container);
  margin: auto;
}

.section {
  padding: 12rem 0;
}

.section-bg {
  background-color: var(--color-gray-lighten);
}

.section__header {
  max-width: 50rem;
  margin: auto;
  text-align: center;
  padding-bottom: 5rem;
}

.section__title {
  font-size: var(--fs-xxl);
  margin: 0.5rem 0 1.5rem;
}

.section__subtitle {
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--color-primary);
}

.d-grid {
  display: grid;
  gap: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.8rem 3rem;
  border-radius: var(--b-radius);
  color: var(--color-white);
  font-weight: var(--fw-medium);
  transition: var(--transition);
}

.btn i {
  font-size: 2rem;
}

.btn--primary {
  background-color: var(--color-primary);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
}

/* Header
--------------------------------------------------------------*/
.header {
  background-color: var(--color-white);
  box-shadow: var(--shadow-header);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: var(--height-header);
  z-index: var(--zindex-menu);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav__brand {
  color: var(--color-title);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
}

.nav__buttons {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
  color: var(--color-title);
  transition: var(--transition);
}

.theme__toggle,
.nav__toggle {
  cursor: pointer;
}

.theme__toggle:hover,
.nav__toggle:hover {
  color: var(--color-primary);
}

.nav__link {
  color: var(--color-title);
  transition: var(--transition);
}

.nav__link:hover {
  color: var(--color-primary);
}

/* Mobile menu */
@media screen and (max-width: 968px) {
  .nav__menu {
    background-color: var(--color-white);
    border-top: 0.2rem solid var(--color-gray-lighten);
    position: fixed;
    right: -100%;
    bottom: 0;
    width: 100%;
    min-height: calc(100vh - var(--height-header));
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }

  .nav__menu--open {
    right: 0;
  }

  .nav__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.5rem;
    padding: 2rem;
    border-radius: var(--b-radius);
  }

  .nav__icon {
    font-size: 2.4rem;
  }

  .nav__link--active {
    background: var(--color-gradient);
    color: var(--color-white);
  }
}

/* Home
--------------------------------------------------------------*/
.home__wrapper {
  min-height: calc(100vh - var(--height-header));
  align-content: center;
  justify-items: center;
  padding-top: 5rem;
}

.home__content {
  max-width: 50rem;
  text-align: center;
}

.home__title {
  font-size: var(--fs-biggest);
  margin-bottom: 2rem;
}

.home__description {
  margin-bottom: 3rem;
}

.home__content .social {
  margin-top: 5rem;
}

.social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.social__list {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
}

.social__link {
  background-color: var(--color-gray-lighten);
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
}

.social__link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

@media screen and (max-width: 768px) {
  .home__img {
    width: 28rem;
  }
}

/* About
--------------------------------------------------------------*/
.about__wrapper {
  justify-items: center;
}

.about__content {
  text-align: center;
}

.about__description {
  margin-bottom: 2rem;
}

.about__img {
  border-radius: var(--b-radius);
}

/* Skills
--------------------------------------------------------------*/
.skills__content {
  width: 100%;
  max-width: 40rem;
  justify-self: center;
  margin-bottom: 3rem;
}

.skills__title {
  font-size: var(--fs-md);
  font-weight: var(--fw-semibold);
  text-align: center;
  margin-bottom: 5rem;
}

.skills__content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 3rem;
}

.skills__card {
  background-color: var(--color-white);
  display: grid;
  gap: 2rem;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: var(--b-radius);
  box-shadow: var(--shadow-primary);
  transition: var(--transition);
}

.skills__card:hover {
  box-shadow: var(--shadow-secondary);
  transform: scale(1.1);
}

.skills__img-wrapper {
  justify-self: center;
  width: 5rem;
  height: 5rem;
  border: 1px solid var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills__img {
  width: 2.5rem;
  height: 2.5rem;
}

.skills__name {
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  color: var(--color-title);
  transition: var(--transition);
}

.skills__card:hover .skills__name {
  color: var(--color-primary);
}

/* Counter
--------------------------------------------------------------*/
.counter__wrapper {
  background: var(--color-primary) var(--color-gradient);
  padding: 5rem;
  border-radius: var(--b-radius);
  row-gap: 5rem;
}

.counter__item {
  text-align: center;
  color: var(--color-white);
}

.counter__icon {
  font-size: 4rem;
}

.counter__number {
  font-size: 3rem;
  font-weight: var(--fw-semibold);
}

.counter__title {
  margin-top: 1rem;
  color: var(--color-white);
  font-size: var(--fs-md);
  font-weight: var(--fw-regular);
}

/* Services
--------------------------------------------------------------*/
.service__content {
  text-align: center;
}

.service__description {
  margin-bottom: 2rem;
}

.service__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service__card {
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary);
  width: 100%;
  max-width: 60rem;
  padding: 2rem 3rem;
  border-radius: var(--b-radius);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
  transition: var(--transition);
}

.service__card:hover {
  box-shadow: var(--shadow-secondary);
}

.service__icon {
  background-color: var(--color-gray-lighten);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  font-size: 2.5rem;
  color: var(--color-title);
  transition: var(--transition);
}

.service__card:hover .service__icon {
  transform: rotateY(360deg);
}

.service__info-title {
  margin-bottom: 1rem;
}

.service__info-description {
  font-size: var(--fs-sm);
}

/* Portfolio
--------------------------------------------------------------*/
.portfolio__project {
  position: relative;
  width: 100%;
  max-width: 35rem;
  justify-self: center;
  overflow: hidden;
  border-radius: var(--b-radius);
}

.portfolio__info {
  position: absolute;
  bottom: -100%;
  padding: 3rem;
  transition: var(--transition);
}

.portfolio__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-white);
  margin-bottom: 1rem;
}

.portfolio__description {
  margin-bottom: 2rem;
  color: var(--color-white);
}

.portfolio__link {
  position: absolute;
  top: 2rem;
  right: -100%;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-white);
  color: var(--color-title);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  transition: var(--transition);
}

.portfolio__link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.portfolio__overlay {
  background-color: var(--color-secondary);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: var(--transition);
}

.portfolio__project:hover .portfolio__overlay {
  opacity: 0.8;
}

.portfolio__project:hover .portfolio__info {
  bottom: 0;
}

.portfolio__project:hover .portfolio__link {
  right: 2rem;
}

/* Testimonials
--------------------------------------------------------------*/
.testimonial__card {
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary);
  width: 100%;
  max-width: 40rem;
  justify-self: center;
  border-radius: var(--b-radius);
  padding: 5rem 3rem;
  position: relative;
}

.testimonial__card-icon {
  position: absolute;
  font-size: 5rem;
  color: var(--color-primary-lighten);
  top: 2rem;
  right: 2rem;
}

.testimonial__card-wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.testimonial__img-wrapper {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.1rem solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonial__img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.testimonial__name {
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  margin-bottom: 0.5rem;
}

.testimonial__occupation {
  font-size: var(--fs-sm);
}

/* swiper css */

.testimonial__wrapper .swiper-wrapper {
  padding-bottom: 5rem;
}

.testimonial__wrapper .swiper-pagination-bullets {
  justify-content: space-around;
}

.testimonial__wrapper .swiper-pagination-bullet {
  background-color: var(--color-gray);
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
}

.testimonial__wrapper .swiper-pagination-bullet-active {
  background-color: var(--color-primary);
}

/* Blog
--------------------------------------------------------------*/
.blog__post {
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary);
  width: 100%;
  max-width: 35rem;
  border-radius: var(--b-radius);
  justify-self: center;
  padding: 2.5rem;
}

.blog__img-wrapper {
  position: relative;
}

.blog__category {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: var(--color-primary-lighten);
  color: var(--color-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  padding: 1rem;
  border-radius: 3rem;
}

.blog__img {
  border-radius: var(--b-radius);
}

.blog__content {
  padding: 2rem 0;
}

.blog__title {
  margin-bottom: 2rem;
  font-size: var(--fs-lg);
}

.blog__description {
  margin-bottom: 2rem;
}

.blog__link {
  display: flex;
  column-gap: 0.1rem;
  align-items: center;
  font-size: var(--fs-sm);
  text-transform: uppercase;
  font-weight: var(--fw-medium);
  color: var(--color-primary);
  transition: var(--transition);
}

.blog__link i {
  font-size: 2rem;
}

.blog__link:hover {
  color: var(--color-primary-dark);
  gap: 0.5rem;
}

/* Contact
--------------------------------------------------------------*/
.contact__form {
  width: 100%;
  max-width: 40rem;
  justify-self: center;
  display: grid;
  gap: 3rem;
}

.form__label {
  display: block;
  margin-bottom: 1rem;
}

.form__input {
  background-color: var(--color-white);
  box-shadow: var(--shadow-primary);
  border: 0.1rem solid transparent;
  width: 100%;
  padding: 1.8rem 2.5rem;
  border-radius: var(--b-radius);
  color: var(--color-gray);
  transition: var(--transition);
}

.form__input::placeholder {
  color: var(--color-gray-light);
}

.form__input:focus {
  border-color: var(--color-primary);
}

.form__textarea {
  resize: none;
  height: 20rem;
}

.contact__form .btn {
  justify-self: center;
}

.contact__content {
  background: var(--color-primary) var(--color-gradient);
  padding: 5rem 3rem;
  width: 100%;
  max-width: 40rem;
  border-radius: var(--b-radius);
  justify-self: center;
  gap: 5rem;
}

.contact__info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.contact__icon {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 0.1rem solid var(--color-gray-lighten);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: var(--color-gray-lighten);
}

.contact__title {
  margin-bottom: 1rem;
  font-weight: var(--fw-semibold);
  color: var(--color-white);
}

.contact__description {
  color: var(--color-gray-lighten);
}

/* Footer
--------------------------------------------------------------*/
.footer {
  background-color: var(--color-secondary);
  padding: 8rem 0 3rem;
}

.footer__content {
  text-align: center;
  margin-bottom: 5rem;
}

.footer__name {
  font-size: var(--fs-lg);
  color: var(--color-white);
  margin-bottom: 5rem;
}

.footer__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.footer__link {
  color: var(--color-gray-light);
  transition: var(--transition);
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__content .social__link {
  background-color: var(--color-secondary-dark);
  color: var(--color-white);
}

.footer__content .social__link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.footer__copyright {
  border-top: 0.1rem solid var(--color-border);
  padding-top: 3rem;
  text-align: center;
  font-size: var(--fs-sm);
  color: var(--color-gray-light);
}

/* ScrollTop
--------------------------------------------------------------*/
.scrolltop {
  position: fixed;
  bottom: -100%;
  right: 5rem;
  background-color: var(--color-primary);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  color: var(--color-white);
  transition: var(--transition);
  animation: scrolltopAnimation 2s linear infinite;
  z-index: var(--zindex-fixed);
  visibility: hidden;
}

.scrolltop--show {
  bottom: 5rem;
  visibility: visible;
}

@keyframes scrolltopAnimation {
  0% {
    box-shadow: 0px 0px 0px 10px rgb(113 67 245 / 99%);
  }

  100% {
    box-shadow: 0px 0px 0px 40px rgb(113 67 245 / 1%);
  }
}

/* Scrollbar
--------------------------------------------------------------*/
::-webkit-scrollbar {
  width: 1rem;
  background-color: var(--color-gray-lighten);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-gray);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-primary);
}

/* Breakpoints
--------------------------------------------------------------*/
@media screen and (min-width: 480px) {
  .counter__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .home__wrapper {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .home__content {
    text-align: initial;
  }

  .home__content .social {
    justify-content: initial;
  }

  .about__wrapper {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .about__content {
    text-align: initial;
  }

  .about__img {
    order: -1;
  }

  .skills__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .counter__wrapper {
    grid-template-columns: repeat(4, 1fr);
  }

  .portfolio__wrapper {
    grid-template-columns: repeat(2, 28rem);
    justify-content: center;
  }

  .blog__wrapper {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
  }

  .contact__wrapper {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .contact__content {
    order: -1;
  }
}

@media screen and (min-width: 968px) {
  .nav__menu {
    margin-left: auto;
    margin-right: 3rem;
  }

  .nav__list {
    display: flex;
    column-gap: 4rem;
  }

  .nav__toggle,
  .nav__icon {
    display: none;
  }

  .nav__link {
    position: relative;
  }

  .nav__link::before {
    position: absolute;
    content: "";
    background: var(--color-gradient);
    width: 100%;
    height: 0.4rem;
    bottom: -3rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    transition: var(--transition);
    transform: scaleX(0);
  }

  .nav__link--active {
    color: var(--color-primary);
  }

  .nav__link--active::before {
    transform: scaleX(1);
  }

  .service__wrapper {
    grid-template-columns: repeat(2, 3fr);
    align-items: center;
  }

  .service__content {
    text-align: initial;
  }

  .service__card {
    flex-direction: initial;
    align-items: center;
  }

  .service__card:nth-child(2) {
    margin-right: -4rem;
  }

  .portfolio__wrapper {
    grid-template-columns: repeat(3, 1fr);
  }

  .blog__wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
<script>
import ScrollReveal from 'scrollreveal';
// import 'swiper/swiper-bundle.min.css';
// import Swiper from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import Swiper from 'swiper/bundle';

  // Import Swiper styles
  import 'swiper/css';

export default {
  mounted() {
    // Add your JavaScript code here
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");
    
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav__menu--open");
      changeToggleIcon();
    });
    
    // Rest of your JavaScript code...
    navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
        changeToggleIcon();
    });
    });

    // change the nav toggle icon
    function changeToggleIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
    }
    }

    // Activate nav link on scroll
    function addActiveLink() {
    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => {
        const scrollY = window.scrollY,
        sectionTop = section.offsetTop - 50,
        sectionHeight = section.offsetHeight,
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.add("nav__link--active");
        } else {
        document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.remove("nav__link--active");
        }
    });
    }

    window.addEventListener("scroll", addActiveLink);

    // increment counter
    function startCounter(counter) {
    // Get the target number
    const targetNumber = counter.getAttribute("data-target");
    const increment = setInterval(() => {
        counter.textContent++;

        if (counter.textContent == targetNumber) {
        clearInterval(increment);
        }
    }, 2000 / targetNumber);
    }

    const counterSection = document.querySelector(".counter");
    const counters = document.querySelectorAll(".counter__number");
    let started = false;

    window.addEventListener("scroll", () => {
    if (window.scrollY >= counterSection.offsetTop - 400) {
        if (!started) {
        counters.forEach((counter) => startCounter(counter));
        }
        started = true;
    }
    });

    // Testimonial Swiper

    const TestimonialSwiper = new Swiper(".testimonial__wrapper", {
    spaceBetween: 40,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });

    // Scrolltop
    const scrolltop = document.getElementById("scrolltop");

    window.addEventListener("scroll", () => {
    if (this.scrollY >= 300) {
        scrolltop.classList.add("scrolltop--show");
    } else {
        scrolltop.classList.remove("scrolltop--show");
    }
    });

    // Dark theme

    // check for selected theme in localStorage
    let theme = localStorage.getItem("theme");

    const themeToggle = document.getElementById("theme-toggle");

    const enableDarkTheme = () => {
    // Add the dark theme class to the body
    document.body.classList.add("dark-theme");
    // change the theme toggle icon
    themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
    // update the selected theme in localStorage
    localStorage.setItem("theme", "dark-theme");
    };

    const disableDarkTheme = () => {
    // remove the dark theme class from the body
    document.body.classList.remove("dark-theme");
    // change the theme toggle icon
    themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
    // update the selected theme in localStorage
    localStorage.setItem("theme", null);
    };

    // check if the user previously enabled the dark theme
    // to load the dark theme
    if (theme === "dark-theme") {
    enableDarkTheme();
    }

    // Add toggle theme event
    themeToggle.addEventListener("click", () => {
    // get the selected theme
    theme = localStorage.getItem("theme");
    if (theme !== "dark-theme") {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
    });

    // ScrollReveal Animations

    const sr = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    reset: false,
    });

    sr.reveal(".home__content, .about__img, .service__content, .contact__content", {
    origin: "left",
    });

    sr.reveal(".home__img, .about__content, .service__info, .contact__form", {
    origin: "right",
    });

    sr.reveal(
    ".skills__wrapper, .counter__wrapper, .portfolio__wrapper, .testimonial__wrapper, .blog__wrapper, .footer__content",
    {
        origin: "bottom",
    }
    );
  },
};
</script>
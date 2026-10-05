import { useEffect, useState, useRef } from 'react';
import './index.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="navbar" style={scrolled ? { background: 'rgba(22, 23, 25, 0.95)', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)', padding: '1rem 0' } : {}}>
      <div className="container nav-content">
        <a href="#" className="logo">BODY <span>GROOVE</span></a>
        <nav className="nav-links">
          <a href="#nasil-calisir" onClick={(e) => scrollToSection(e, 'nasil-calisir')}>Nasıl Çalışır?</a>
          <a href="#egitmen" onClick={(e) => scrollToSection(e, 'egitmen')}>Eğitmen</a>
          <a href="#yorumlar" onClick={(e) => scrollToSection(e, 'yorumlar')}>Yorumlar</a>
          <a href="#ornek-videolar" onClick={(e) => scrollToSection(e, 'ornek-videolar')}>Örnek Videolar</a>
        </nav>
        <a href="https://wa.me/905376812588" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn"><i className="fa-brands fa-whatsapp"></i> Bize Ulaşın</a>
      </div>
    </header>
  );
}

function FadeUp({ children, delay = 0 }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        if(domRef.current) observer.unobserve(domRef.current);
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) {
        observer.observe(domRef.current);
    }
    
    return () => {
        if (domRef.current) observer.unobserve(domRef.current);
    }
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-up-element ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          {/* Buraya Body Groove tarzı kendi videonuzu ekleyebilirsiniz */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Dans Et, Özgürleş, <br /> Kendi Ritmini Bul!</h1>
          <p>Sıkıcı antrenmanlara son! İlkay Gürsu ile Body Groove derslerine katıl, evinin rahatlığında eğlenerek forma gir.</p>
          <div className="hero-buttons">
            <a href="https://wa.me/905376812588" target="_blank" rel="noreferrer" className="btn btn-primary btn-large"><i className="fa-brands fa-whatsapp"></i> WhatsApp'tan İletişime Geçin</a>
            <a href="#ornek-videolar" className="btn btn-secondary btn-large">Videolara Göz Atın</a>
          </div>
        </div>
      </section>

      <section id="nasil-calisir" className="features section">
        <div className="container">
          <h2 className="section-title">Body Groove Nedir?</h2>
          <p className="section-subtitle">Dansın özgürleştirici gücüyle bedeninizi yeniden keşfedin. Geleneksel egzersiz kurallarını unutun.</p>
          
          <div className="features-grid">
            <FadeUp delay={0}>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-brain"></i></div>
                  <h3>Zihin ve Beden Uyumu</h3>
                  <p>Hareketleri kusursuz yapmak zorunda değilsiniz. Body Groove, müziğin ritmini hissederek bedeninizi doğal akışına bırakmanızı sağlar. Bu sayede sadece kalori yakmaz, aynı zamanda zihinsel stresinizden de arınırsınız.</p>
                </div>
            </FadeUp>
            <FadeUp delay={0.1}>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-person-running"></i></div>
                  <h3>Sınırsız Özgürlük</h3>
                  <p>Ağır antrenman programları veya zorlayıcı hareketler yok. Eklemlerinize zarar vermeden, kendi kapasitenize uygun şekilde hareket ederek kaslarınızı güçlendirebilir ve esnekliğinizi artırabilirsiniz.</p>
                </div>
            </FadeUp>
            <FadeUp delay={0.2}>
                <div className="feature-card">
                  <div className="feature-icon"><i className="fa-solid fa-fire-flame-curved"></i></div>
                  <h3>Etkili ve Kalıcı Form</h3>
                  <p>Severek yapılan her egzersiz kalıcıdır. Yüksek tempolu ancak bir o kadar da eğlenceli dans rutinlerimizle farkında olmadan binlerce kalori yakacak ve fit bir görünüme doğal yollarla ulaşacaksınız.</p>
                </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="egitmen" className="instructor section">
        <div className="container">
          <div className="instructor-content">
            <div className="instructor-text">
              <h2 className="section-title left-align"><span>İlkay Gürsu</span></h2>
              <p>Merhaba, ben İlkay Gürsu. Yıllardır süregelen klasik, kalıplara sıkıştırılmış ve zorlayıcı fitness anlayışını tamamen değiştirerek, bedeninizi özgürleştireceğiniz benzersiz bir serüvene rehberlik ediyorum.</p>
              <p>Hareket etmenin sıkıcı bir zorunluluk değil, bedenin en doğal kutlaması olduğuna inanıyorum. Body Groove felsefesiyle; ezberlenmiş koreografilere, katı kurallara veya "mükemmel" görünme baskısına yer yok. Burada sadece <strong>sizin ritminiz</strong> ve <strong>sizin hareketiniz</strong> var.</p>
              <p>Amacım, içinizdeki o tükenmek bilmeyen enerjiyi müziğin gücüyle açığa çıkarmak. Kendi sınırlarınızı keşfederken, dansın iyileştirici etkisini hem fiziksel hem de mental olarak hissedeceksiniz. Kendi bedeninizi yargılamadan sevmeyi yeniden öğrenmek ve sağlığınız için adım atmayı günün en keyifli anına dönüştürmek için benimle dans etmeye hazır mısınız?</p>
              <a href="https://instagram.com/ilkaygursu" target="_blank" rel="noreferrer" className="social-link">
                <i className="fa-brands fa-instagram"></i> @ilkaygursu
              </a>
            </div>
            <div className="instructor-image">
              <img src="/profile.jpg" alt="İlkay Gürsu" className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="yorumlar" className="testimonials section">
        <div className="container">
          <h2 className="section-title">Binlerce Mutlu Kadın</h2>
          <div className="testimonials-grid">
            <FadeUp delay={0}>
                <div className="testimonial-card">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  </div>
                  <p>"Daha önce hiç bu kadar terleyip aynı zamanda bu kadar eğlendiğimi hatırlamıyorum. İlkay harika bir enerji veriyor!"</p>
                  <h4>- Ayşe Y.</h4>
                </div>
            </FadeUp>
            <FadeUp delay={0.1}>
                <div className="testimonial-card">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  </div>
                  <p>"Spor salonuna gitmekten her zaman nefret ettim ama Body Groove ile evde dans etmek terapim oldu."</p>
                  <h4>- Elif K.</h4>
                </div>
            </FadeUp>
            <FadeUp delay={0.2}>
                <div className="testimonial-card">
                  <div className="stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  </div>
                  <p>"Hem kilo verdim hem de kendime olan güvenim yerine geldi. Teşekkürler İlkay Gürsu!"</p>
                  <h4>- Zeynep D.</h4>
                </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="ornek-videolar" className="pricing section">
        <div className="container">
          <h2 className="section-title">Örnek Derslerimiz</h2>
          <p className="section-subtitle">Neler yaptığımıza yakından göz atın ve ritme ortak olun.</p>
          
          <FadeUp delay={0}>
            <div className="single-video-wrapper">
              <video 
                src="/örnek-video.mp4" 
                controls 
                className="full-width-video"
                preload="metadata"
              >
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="afisler" className="posters section">
        <div className="container">
          <h2 className="section-title">Afişlerimiz</h2>
          <p className="section-subtitle">Yaklaşan etkinlikler, özel atölyeler ve motivasyon dolu Body Groove anları.</p>
          
          <div className="slider-container">
            <div className="slider">
                <div className="slide">
                    <img src="/banner-1.jfif" alt="Body Groove Afiş 1" className="slide-image" />
                </div>
                <div className="slide">
                    <div className="slide-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
                <div className="slide">
                    <div className="slide-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
                <div className="slide">
                    <div className="slide-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
                <div className="slide">
                    <div className="slide-placeholder"><i className="fa-solid fa-image"></i></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog section">
        <div className="container">
          <h2 className="section-title">Blog Yazıları</h2>
          <p className="section-subtitle">Sağlıklı yaşam, dans kültürü ve zihinsel rahatlama üzerine ipuçları.</p>
          
          <div className="blog-grid">
            <FadeUp delay={0}>
                <div className="blog-card">
                  <div className="blog-image">
                    <img src="/blog1.jpg" alt="Evde Dans Etmenin Faydaları" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">Bugün</span>
                    <h3>Evde Dans Etmenin 5 İnanılmaz Faydası</h3>
                    <p>Spor salonlarının kalabalığına girmeden, evinizin güvenli alanında kalori yakmak ve ruh halinizi iyileştirmek için tek ihtiyacınız olan şey sevdiğiniz bir müzik.</p>
                    <a href="#" className="read-more">Devamını Oku <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
            </FadeUp>
            <FadeUp delay={0.1}>
                <div className="blog-card">
                  <div className="blog-image">
                    <img src="/blog2.jpg" alt="Dans ve Zihin Sağlığı" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">Dün</span>
                    <h3>Müziğin İyileştirici Gücü ve Mental Temizlik</h3>
                    <p>Stresli bir günün ardından kendinizi müziğin ritmine bırakmak, zihinsel bir detoks etkisi yaratır. Dansın zihne sağladığı inanılmaz faydaları keşfedin.</p>
                    <a href="#" className="read-more">Devamını Oku <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
            </FadeUp>
            <FadeUp delay={0.2}>
                <div className="blog-card">
                  <div className="blog-image">
                    <img src="/blog3.jpg" alt="Hareket Etme Alışkanlığı" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">Geçen Hafta</span>
                    <h3>Hareket Etmeyi Nasıl Bir Alışkanlığa Dönüştürürüz?</h3>
                    <p>Antrenman yapmak bir zorunluluk hissettirdiğinde vazgeçmek kolaydır. Ancak dansı bir eğlenceye dönüştürdüğünüzde, her gün hareket etmek için can atacaksınız.</p>
                    <a href="#" className="read-more">Devamını Oku <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">BODY <span>GROOVE</span></div>
          <p>© 2026 Body Groove Türkiye - İlkay Gürsu. Tüm hakları saklıdır.</p>
          <div className="footer-links">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
            <a href="#">İletişim</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

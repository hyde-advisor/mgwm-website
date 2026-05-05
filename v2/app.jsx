/* global React, ReactDOM, BookingModal, Hero, Diagnostic, CallBreakdown, Founder, Process, Team, Testimonials, Faq, Final, StickyBook, Footer */
const { useState, useEffect } = React;

function Nav({ onBook }) {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-brand">
        <img src="assets/images/logo-badge.svg" alt="Mountain Goat" />
        <div className="nav-brand-text">Mountain Goat<br/>Wealth Management</div>
      </a>
      <ul className="nav-links">
        <li><a href="#story">Our Story</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li>
          <button className="nav-cta" onClick={() => onBook(null)}>
            <span className="nav-cta-dot"></span>
            Book a Call
          </button>
        </li>
      </ul>
    </nav>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "route",
  "accent": "blue"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [tweakState, setTweakState] = useState(TWEAK_DEFAULTS);
  const currentTweaks = window.useTweaks ? tweaks : tweakState;
  const updateTweak = window.useTweaks ? setTweak : (k, v) => setTweakState(s => ({ ...s, ...(typeof k === 'string' ? { [k]: v } : k) }));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  const openBooking = (slot) => {
    setSelectedSlot(slot);
    setModalOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [currentTweaks.headline]);

  // accent
  useEffect(() => {
    const accents = {
      blue:  { primary: '#007ea7', dk: '#005f7d', lt: '#2da0c4', mist: '#e8f1f5' },
      moss:  { primary: '#5b6a4a', dk: '#3d4a32', lt: '#8a9a78', mist: '#eef0e8' },
      sienna:{ primary: '#b85a30', dk: '#8a4322', lt: '#d97a4a', mist: '#f6ebe2' },
    };
    const a = accents[currentTweaks.accent] || accents.blue;
    const r = document.documentElement;
    r.style.setProperty('--blue', a.primary);
    r.style.setProperty('--blue-dk', a.dk);
    r.style.setProperty('--blue-lt', a.lt);
    r.style.setProperty('--mist', a.mist);
  }, [currentTweaks.accent]);

  return (
    <>
      <Nav onBook={openBooking} />
      <Hero onBook={openBooking} tweaks={currentTweaks} />
      <Diagnostic onBook={openBooking} />
      <CallBreakdown onBook={openBooking} />
      <Founder onBook={openBooking} />
      <Process />
      <Team />
      <Testimonials onBook={openBooking} />
      <Faq />
      <Final onBook={openBooking} />
      <Footer />
      <StickyBook onBook={openBooking} visible={stickyVisible && !modalOpen} />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} slot={selectedSlot} />

    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

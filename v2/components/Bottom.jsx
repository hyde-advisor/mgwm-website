/* global React */
const { useState: useStateFaq } = React;

function Testimonials({ onBook }) {
  const items = [
    { quote: "Bobby is the best. The approach is robust, and it's obvious my best interests are the priority. My only regret is not getting started earlier.", name: 'Karina L.', role: 'Business Development Representative' },
    { quote: "They are not pushy. I have never felt like they are trying to sell me anything. Responses are always timely and they listen.", name: 'Jason D.', role: 'Product Manager' },
    { quote: "They have access to investments I couldn't get on my own. Extremely respectful, prompt, and they actually listen to what you want.", name: 'Oliver C.', role: 'Retired Healthcare Administrator' },
  ];
  return (
    <section className="testi" id="reviews">
      <div className="testi-inner">
        <div className="testi-head">
          <div className="reveal">
            <span className="eyebrow">Reviews</span>
            <h2 className="h-section">What working with Mountain Goat actually feels like.</h2>
          </div>
          <a className="testi-google reveal d1" href="https://www.google.com/maps/place/Mountain+Goat+Wealth+Management" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <div className="testi-google-stars">★★★★★</div>
            <div className="testi-google-text">
              <strong>5.0 on Google</strong>
              Verified reviews · Read all →
            </div>
          </a>
        </div>
        <div className="testi-grid">
          {items.map((t, i) => (
            <div key={i} className={`testi-card reveal d${i + 1}`}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-attr">
                <div className="testi-attr-name">{t.name}</div>
                <div className="testi-attr-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="testi-disc">Testimonials from current clients. No compensation provided. Past performance is not a guarantee of future results.</p>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button className="btn btn-primary btn-arrow" onClick={() => onBook(null)}>See if we're a fit — book a call</button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: 'I already have a financial advisor. Why would I switch?', a: "When did your advisor last call you proactively? If you can't remember, that's worth exploring. As fiduciaries, we're legally required to act in your best interest. Many advisors aren't. A 30-minute second opinion costs you nothing." },
    { q: "I don't think I have enough money to work with you.", a: "Most people who say this are wrong about what they have, what they need, or both. We work with clients across the climb — from professionals laying the foundation to retirees navigating distribution. The only requirement for the call is that you're serious about getting answers." },
    { q: 'I think I am too close to retirement to fix anything.', a: "You're not. The five years before retirement are when good planning has the biggest dollar impact — sequence-of-returns risk, Social Security timing, Roth conversions, and tax-efficient withdrawals all happen in that window. We can usually save clients meaningful money in the runway." },
    { q: "What does 'fiduciary' actually mean for me?", a: "It means we are legally — not ethically, legally — required to put your interests above ours, on every recommendation, every time. We can't push you into a product because it pays us a higher commission. Many advisors aren't held to this standard. We are. Always." },
    { q: 'How do you charge?', a: "We are fee-only for our wealth management clients — a transparent, percentage-based fee on the assets we manage. We will tell you the exact number on the discovery call, before you ever consider becoming a client. No hidden costs, no commissions on investments." },
    { q: "What if I'm not in Utah, Texas, or Wyoming?", a: "We're licensed in those three states today and actively pursuing more. If you're outside, reach out anyway — we'll let you know our timeline and keep you informed when your state is added." },
    { q: 'What do I need to bring to the discovery call?', a: "Nothing. Genuinely. No statements, no spreadsheets, no document gathering. Just be ready to talk about where you are and what you want. If we agree to go further, that's when we'd ask for the formal documents." },
    { q: "I've tried financial planning before and it didn't stick.", a: "A static plan goes stale the moment life changes. Ours is dynamic — we revisit at every milestone and reach out proactively when something shifts. A plan in a drawer isn't a plan. Ours are built to be lived." },
  ];
  const [open, setOpen] = useStateFaq(0);
  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-head reveal">
          <span className="eyebrow dark">Common questions</span>
          <h2 className="h-section" style={{ color: '#fff' }}>The questions people actually ask before the first call.</h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq-row ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a"><div>{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final({ onBook }) {
  return (
    <section className="final" id="cta">
      <div className="final-inner">
        <span className="final-eyebrow">Ready when you are</span>
        <h2>Your summit is closer than you think.</h2>
        <p>Picture this: you know your exact retirement date, your income is predictable, your family is protected, and your advisor calls you instead of the other way around. The 30-minute call is where it starts.</p>
        <div className="final-actions">
          <button className="btn btn-on-blue btn-arrow" onClick={() => onBook(null)}>Book my discovery call</button>
        </div>
        <p className="final-fine">No commitment · No sales pressure · A fiduciary conversation about your future</p>
      </div>
    </section>
  );
}

function StickyBook({ onBook, visible }) {
  return (
    <button className={`sticky-book ${visible ? 'visible' : ''}`} onClick={() => onBook(null)} aria-label="Book a call">
      <span className="sticky-book-dot"></span>
      <span className="sticky-book-text">
        <strong>Book a 30-min call</strong>
        <small>Next slot tomorrow · Free</small>
      </span>
      <span className="sticky-book-arrow">→</span>
    </button>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="assets/images/logo-badge.svg" alt="Mountain Goat" />
            <div className="foot-brand-name">Mountain Goat<br/>Wealth Management</div>
            <p>Born on a trail run in Millcreek Canyon. Fiduciary advisors guiding families across Utah, Texas, and Wyoming through the climb to retirement.</p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <a href="#">Wealth Management</a>
            <a href="#">Retirement Planning</a>
            <a href="#">Protection</a>
            <a href="#">401(k) Optimization</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#story">Our Story</a>
            <a href="#team">The Team</a>
            <a href="#faq">FAQ</a>
            <a href="#">Legal Disclosures</a>
          </div>
          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href="mailto:hello@mountaingoatwealth.com">hello@mountaingoatwealth.com</a>
            <a href="#">Utah · Texas · Wyoming</a>
            <a href="#cta">Schedule a call →</a>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2026 Mountain Goat Wealth Management. All rights reserved.</p>
          <p>Mountain Goat Wealth Management is a Registered Investment Advisor in UT, TX, and WY. Investment advisory services involve risk, including possible loss of principal.</p>
          <div className="foot-comp">
            <p>Advisory services are offered through Mountain Goat Wealth Management LLC, an Investment Advisor in the States of Utah, Texas, and Wyoming. Insurance products and services are offered through Simplicity Allegis. Mountain Goat Wealth Management LLC and Simplicity Allegis are unaffiliated entities.</p>
            <p>All content is for information purposes only. It is not intended to provide tax or legal advice or provide the basis for any financial decisions, nor is it intended to be a projection of current or future performance. Being registered as an investment advisor does not imply a certain level of skill or training.</p>
            <p>Images and photographs are included for the sole purpose of visually enhancing the website. None of them are photographs of current or former Clients.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Testimonials = Testimonials;
window.Faq = Faq;
window.Final = Final;
window.StickyBook = StickyBook;
window.Footer = Footer;

/* global React */
const { useState: useStateHero } = React;

/* ---------- Generate next 6 weekday slots ---------- */
function generateSlots() {
  const slots = [];
  const times = ['9:00 AM', '11:30 AM', '2:00 PM'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  let d = new Date();
  let added = 0;
  while (added < 6) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    const dayLabel = days[d.getDay() - 1];
    const dateLabel = `${d.getMonth() + 1}/${d.getDate()}`;
    slots.push({
      dayLabel, dateLabel,
      time: times[added % times.length],
      key: `${dayLabel}-${dateLabel}-${added}`,
    });
    added++;
  }
  return slots;
}

function HeroBookingCard({ onBook }) {
  const [selected, setSelected] = useStateHero(null);
  const slots = React.useMemo(() => generateSlots(), []);

  return (
    <div className="book-card">
      <div className="book-card-eyebrow">
        <span>Discovery Call</span>
        <span className="book-card-live">Live availability</span>
      </div>
      <h3 className="book-card-title">A 30-minute call. Tell us where you're stuck.</h3>
      <p className="book-card-sub">No prep. No sales pitch. We'll tell you exactly where you stand and whether we're a fit.</p>

      <div className="book-card-advisor">
        <img className="book-card-avatar" src="assets/images/headshot-bobby.png" alt="Bobby Goodman" />
        <div className="book-card-advisor-text">
          <strong>You'll talk to Bobby Goodman, CFP®</strong>
          <span>Founder · 18 yrs at Goldman Sachs</span>
        </div>
      </div>

      <div className="book-slots-label">
        <span>Next available — pick one</span>
        <a href="#" onClick={(e) => { e.preventDefault(); onBook(null); }}>See full calendar →</a>
      </div>
      <div className="book-slots">
        {slots.map((s) => (
          <button
            key={s.key}
            className={`book-slot ${selected?.key === s.key ? 'selected' : ''}`}
            onClick={() => setSelected(s)}>
            <span className="book-slot-day">{s.dayLabel} {s.dateLabel}</span>
            {s.time}
          </button>
        ))}
      </div>

      <button className="book-cta" disabled={!selected} onClick={() => onBook(selected)}>
        {selected ? `Book ${selected.dayLabel} ${selected.dateLabel} at ${selected.time}` : 'Pick a time to continue'}
      </button>
      <p className="book-card-fine">Free. No obligation. No commitment to become a client.</p>
    </div>
  );
}

function Hero({ onBook, tweaks }) {
  const headlineVariant = tweaks.headline;
  const headlines = {
    'route': (<>Every great climb<br/>needs a guide who<br/>knows <em>the route</em>.</>),
    'plain': (<>Retirement planning,<br/>made <em>actually</em><br/>understandable.</>),
    'fiduciary': (<>A fiduciary advisor<br/>who picks up <em>the<br/>phone</em>.</>),
  };
  const subs = {
    'route': (<>Mountain Goat is a fee-only fiduciary firm guiding families in <strong>Utah, Texas, and Wyoming</strong> through the climb to retirement. Built by a 20-year Goldman Sachs veteran who got tired of Wall Street only serving Wall Street.</>),
    'plain': (<>We translate the complicated stuff — 401(k) rollovers, tax-efficient withdrawals, Social Security timing — into a plan you can actually follow. Fee-only fiduciaries serving <strong>Utah, Texas, and Wyoming</strong>.</>),
    'fiduciary': (<>We are legally required to put your interests first — and we proactively reach out, so you don't have to wonder when you'll hear from us. Fee-only fiduciary advisors in <strong>Utah, Texas, and Wyoming</strong>.</>),
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="assets/images/climber-hero.jpg" alt="" />
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            Fiduciary Wealth Advisors
            <span className="hero-state-badge">UT · TX · WY</span>
          </div>
          <h1 className="reveal">{headlines[headlineVariant]}</h1>
          <p className="hero-sub reveal d1">{subs[headlineVariant]}</p>

          <div className="hero-actions reveal d2">
            <button className="btn btn-primary btn-arrow" onClick={() => onBook(null)}>
              Book Your 30-Minute Call
            </button>
            <a href="#how-it-works" className="btn btn-ghost-light">How it works</a>
          </div>

          <div className="hero-meta reveal d3">
            <span className="hero-meta-item">
              <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" /></svg>
              30 minutes
            </span>
            <span className="hero-meta-item">
              <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" /></svg>
              No obligation
            </span>
            <span className="hero-meta-item">
              <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" /></svg>
              No prep needed
            </span>
          </div>
        </div>

        <HeroBookingCard onBook={onBook} />
      </div>

      <div className="hero-proof">
        <div className="hero-proof-item">
          <div className="hero-proof-num">5.0 <small>★★★★★</small></div>
          <div className="hero-proof-label">Google Reviews</div>
        </div>
        <div className="hero-proof-item">
          <div className="hero-proof-num">$0</div>
          <div className="hero-proof-label">Cost · No obligation</div>
        </div>
        <div className="hero-proof-item">
          <div className="hero-proof-num">CFP®</div>
          <div className="hero-proof-label">Fiduciary credentials</div>
        </div>
        <div className="hero-proof-item">
          <div className="hero-proof-num">20+ <small>yrs</small></div>
          <div className="hero-proof-label">Wall Street experience</div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

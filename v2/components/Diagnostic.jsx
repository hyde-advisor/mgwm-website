/* global React */
const { useState: useStateDiag } = React;

function Diagnostic({ onBook }) {
  const items = [
    { id: 'savings', text: "I don't actually know if I'm saving enough — or when I can retire." },
    { id: 'sequence', text: "A bad market year right before I retire could derail everything." },
    { id: '401k', text: "I have old 401(k)s scattered across past employers and no idea what to do with them." },
    { id: 'tax', text: "I don't know if I'm taking advantage of the tax breaks I'm supposed to be." },
    { id: 'advisor', text: "I have an advisor, but I haven't heard from them proactively in over a year." },
    { id: 'fiduciary', text: "I'm not sure if my advisor is actually a fiduciary." },
  ];

  const [checked, setChecked] = useStateDiag(new Set());
  const toggle = (id) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id); else next.add(id);
    setChecked(next);
  };

  const count = checked.size;
  const showResult = count > 0;
  const message = count >= 3
    ? "You're carrying more than most people realize. Each of these is solvable with a plan — and a 30-minute call is genuinely the fastest way to know where you stand."
    : count === 2
      ? "These are exactly the questions a Discovery Call is built to answer. We'll tell you, plainly, what we'd do in your situation — whether or not you become a client."
      : "This is a common one. On a 30-minute call we can usually give you a clear next step — no plan required.";

  return (
    <section className="diag" id="diagnostic">
      <div className="diag-inner">
        <div className="reveal">
          <span className="eyebrow">Is this you?</span>
          <h2 className="h-section">You've worked too hard to leave your retirement to a guess.</h2>
          <p className="diag-lede">Check the ones that sound familiar. The good news: every single one is solvable with a plan, and a 30-minute call is enough to know where you stand.</p>
        </div>
        <div>
          <div className="diag-list">
            {items.map((item, i) => (
              <button
                key={item.id}
                className={`diag-item reveal d${(i % 4) + 1} ${checked.has(item.id) ? 'checked' : ''}`}
                onClick={() => toggle(item.id)}>
                <span className="diag-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="diag-text">"{item.text}"</span>
              </button>
            ))}
          </div>
          <div className={`diag-result ${showResult ? 'show' : ''}`}>
            <div className="diag-result-eyebrow">Personalized for you · {count} of {items.length} checked</div>
            <p className="diag-result-msg">{message}</p>
            <button className="diag-result-cta" onClick={() => onBook(null)}>Book a Discovery Call →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallBreakdown({ onBook }) {
  const steps = [
    { time: 'Min 0–5', title: 'You tell us where you are.', desc: "Where you live, what you earn roughly, what you have saved, and what's keeping you up at night about retirement." },
    { time: 'Min 5–20', title: 'We tell you what we see.', desc: "A plain-English read on your situation: where you're solid, where there's a real gap, and what we'd do first if you were our client." },
    { time: 'Min 20–28', title: 'You ask us anything.', desc: "How fees work, who actually manages your money, what changes when you become a client, and any pointed questions about us. We'll answer all of them." },
    { time: 'Min 28–30', title: "You decide what's next.", desc: "Want a deeper review? We schedule it. Not the right fit? We'll often refer you to someone who is. Either way, you leave with clarity you didn't have at minute zero." },
  ];

  return (
    <section className="call" id="how-it-works">
      <div className="call-inner">
        <div className="reveal">
          <span className="eyebrow">What actually happens</span>
          <h2 className="h-section">A 30-minute call.<br/>Here's the entire script.</h2>
          <p className="lede">Most "free consultations" are sales calls in disguise. Ours isn't. Here's exactly what the 30 minutes look like — minute by minute.</p>

          <div className="call-promise">
            <strong>Our promise.</strong> If at any point on the call it's clear we aren't the right fit for what you need, we'll say so — and where we can, point you toward someone who is. Your time is worth more than our pipeline.
          </div>

          <div className="call-noobligation">
            <div className="call-no">
              <div className="call-no-x">$2,500</div>
              <div className="call-no-label">Cost — yours is free</div>
            </div>
            <div className="call-no">
              <div className="call-no-x">90 min</div>
              <div className="call-no-label">Length — yours is 30</div>
            </div>
            <div className="call-no">
              <div className="call-no-x">Pitch</div>
              <div className="call-no-label">No sales pressure</div>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <button className="btn btn-primary btn-arrow" onClick={() => onBook(null)}>Book my 30 minutes</button>
          </div>
        </div>

        <div className="timeline reveal d1">
          {steps.map((s, i) => (
            <div className="timeline-step" key={i}>
              <div className="timeline-dot">{i + 1}</div>
              <div className="timeline-time">{s.time}</div>
              <div className="timeline-title">{s.title}</div>
              <div className="timeline-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Diagnostic = Diagnostic;
window.CallBreakdown = CallBreakdown;

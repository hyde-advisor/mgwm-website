/* global React */

function Founder({ onBook }) {
  return (
    <section className="founder" id="story">
      <div className="founder-grid">
        <div className="founder-img">
          <img src="assets/images/millcreek-overlook.jpg" alt="Millcreek Canyon overlook" />
          <div className="founder-img-caption">Millcreek Canyon · Spring 2024</div>
        </div>
        <div className="founder-body">
          <span className="eyebrow dark">The Why</span>
          <h2>I spent 18 years at Goldman Sachs serving the people who needed it <em>least</em>.</h2>
          <p>I'm Bobby Goodman. For nearly two decades I managed money for ultra-high-net-worth families on Wall Street. They had everything they needed. Meanwhile my own friends, my brother, my neighbors — the people doing the actual work of building careers and raising kids — were navigating retirement on Google searches and gut feel.</p>
          <p>So in 2024, on a trail run through Millcreek Canyon, my running partner Cade and I decided to fix it. We built Mountain Goat to bring the same institutional-grade planning to families on Main Street. Same discipline, same depth — minus the $10M minimum.</p>

          <div className="founder-pull">
            <p>"You've worked too hard to leave the most important financial decision of your life to a guess. That's the entire reason this firm exists."</p>
          </div>

          <div className="founder-sig">
            <img src="assets/images/headshot-bobby.png" alt="Bobby Goodman" className="founder-sig-avatar" />
            <div>
              <div className="founder-sig-name">Robert "Bobby" Goodman, CFP®</div>
              <div className="founder-sig-title">Founder · Mountain Goat Wealth Management</div>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <button className="btn btn-primary btn-arrow" onClick={() => onBook(null)}>Book a call with Bobby</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: '01', time: '30 min', title: 'Discovery Call', desc: 'A short conversation to understand where you are and whether we are the right guide for the climb.' },
    { num: '02', time: 'Week 1–2', title: 'Financial Review', desc: "We map your full picture — every account, every gap, every opportunity. Most clients say it's the first time anyone's done this." },
    { num: '03', time: 'Week 3–4', title: 'Custom Plan', desc: 'Your personalized 9-Step Climb roadmap. Investments, taxes, protection, and retirement income — all on one page.' },
    { num: '04', time: 'Ongoing', title: 'Proactive Partnership', desc: 'We reach out at every milestone. The advisor who calls you, not the one you have to chase.' },
  ];
  return (
    <section className="process">
      <div className="process-inner">
        <div className="process-head reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section">Four steps from "I should probably figure this out" to a real plan.</h2>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div className={`process-cell reveal d${i + 1}`} key={s.num}>
              <div className="process-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <span className="process-cell-time">{s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: 'Bobby Goodman', title: 'Founder · CFP®', img: 'assets/images/headshot-bobby.png',
      bio: '18 years at Goldman Sachs Private Wealth. Economics at BYU, MBA at Utah. Father of three. Most likely to call you back within the hour.',
      pills: ['CFP®', 'MBA'] },
    { name: 'Cade Hyde', title: 'Financial Advisor', img: 'assets/images/headshot-cade.png',
      bio: 'Five years in corporate analytics before joining Mountain Goat. Particular focus on younger professionals laying the groundwork for the next 30 years.',
      pills: ['Series 65'] },
    { name: 'Michael Goodman', title: 'Financial Advisor · Houston', img: 'assets/images/headshot-michael.png',
      bio: 'Geologist by training, methodical by nature. Specializes in clients in the energy sector navigating equity comp, deferred comp, and concentrated stock.',
      pills: ['Series 65'] },
  ];
  return (
    <section className="team" id="team">
      <div className="team-inner">
        <div className="team-head reveal">
          <span className="eyebrow">The advisors</span>
          <h2 className="h-section">Three people. Real names. Real phone numbers.</h2>
          <p>You'll know exactly who's managing your plan. No call centers, no team-of-the-week, no junior associate handoff.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className={`team-card reveal d${i + 1}`} key={m.name}>
              <div className="team-card-img">
                <img src={m.img} alt={m.name} />
                <div className="team-card-cred">
                  {m.pills.map((p) => <span className="team-card-pill" key={p}>{p}</span>)}
                </div>
              </div>
              <div className="team-card-body">
                <div className="team-card-name">{m.name}</div>
                <div className="team-card-title">{m.title}</div>
                <p className="team-card-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Founder = Founder;
window.Process = Process;
window.Team = Team;

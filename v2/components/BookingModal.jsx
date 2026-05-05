/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- Booking modal (state-managed in App) ---------- */
function BookingModal({ open, onClose, slot }) {
  const [stage, setStage] = useState('form'); // form | success
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '', topic: '' });

  useEffect(() => {
    if (!open) {
      // reset on close (after fade)
      const t = setTimeout(() => setStage('form'), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  const submit = (e) => {
    e.preventDefault();
    setStage('success');
  };

  const slotLabel = slot
    ? `${slot.dayLabel}, ${slot.dateLabel} · ${slot.time}`
    : 'A 30-minute call with a Mountain Goat advisor';

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {stage === 'form' ? (
          <>
            <div className="modal-header">
              <div>
                <h3>Book your discovery call</h3>
                <p>30 minutes. No prep needed. No sales pitch.</p>
              </div>
              <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
            </div>
            <form className="modal-body" onSubmit={submit}>
              <div className="modal-slot-display">
                <div className="modal-slot-display-icon">📅</div>
                <div>
                  <strong>{slotLabel}</strong>
                  <span>30 minutes · Zoom or phone · Confirmation by email</span>
                </div>
              </div>

              <div className="modal-row">
                <div>
                  <label className="modal-label">First Name</label>
                  <input className="modal-input" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="modal-label">State</label>
                  <select className="modal-input" required value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}>
                    <option value="">Select…</option>
                    <option>Utah</option><option>Texas</option><option>Wyoming</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="modal-row">
                <div>
                  <label className="modal-label">Email</label>
                  <input className="modal-input" type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="modal-label">Phone (optional)</label>
                  <input className="modal-input" type="tel" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="modal-label">What's on your mind? (optional)</label>
                <textarea className="modal-input modal-textarea"
                  placeholder="e.g. I'm 55 and not sure when I can retire. I have old 401(k)s I haven't moved."
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })} />
              </div>
              <button type="submit" className="modal-submit">Confirm my call →</button>
              <p className="modal-fine">By booking, you agree we may contact you about your appointment. We never sell your info, and there's zero obligation to become a client.</p>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>You're on the calendar.</h3>
            <p>We've sent a calendar invite and a short prep email to <strong>{form.email || 'your inbox'}</strong>. Bobby or Cade will reach out the morning of to confirm.</p>
            <p style={{ fontSize: 12, color: 'var(--ink-lt)' }}>Can't find it? Check your spam folder for "Mountain Goat Wealth".</p>
            <button onClick={onClose} className="btn btn-light" style={{ marginTop: 16 }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

window.BookingModal = BookingModal;

import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CREAM, CREAM_2, DARK, DARK_2, INK, SAGE, SAGE_DARK } from '../theme';
const ContactBg = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80";

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputStyle = {
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: `1px solid rgba(42,37,32,0.22)`,
        padding: '14px 2px',
        fontSize: '15px',
        color: INK,
        outline: 'none',
        fontFamily: 'inherit',
        transition: 'border-color 0.3s ease',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '10px',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: SAGE_DARK,
        marginBottom: '6px',
        fontWeight: 600,
    };

    const onFocus = (e) => {
        e.currentTarget.style.borderBottomColor = SAGE_DARK;
    };
    const onBlur = (e) => {
        e.currentTarget.style.borderBottomColor = 'rgba(42,37,32,0.22)';
    };

    return (<div style={{ background: CREAM }} className="min-h-screen">
      {/* HERO — DARK */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden" style={{ background: DARK_2 }}>
        <div className="absolute inset-0">
          <ImageWithFallback src={ContactBg} alt="Contact hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,15,0.55) 0%, rgba(20,17,15,0.55) 50%, rgba(20,17,15,0.96) 100%)' }}/>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14 w-full pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm" style={{ border: `1px solid ${CREAM}`, fontSize: '10px', letterSpacing: '0.42em', textTransform: 'uppercase', color: CREAM, fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: CREAM, display: 'inline-block' }}/>
              — CONTACT
            </div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(46px, 7vw, 92px)', lineHeight: 1.02, letterSpacing: '-0.015em', color: CREAM, fontWeight: 300 }}>
              CONTACT
            </h1>
            <p className="mx-auto" style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(244,239,230,0.65)', maxWidth: '540px' }}>
              You're just one conversation away from starting your transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN SPLIT — LIGHT */}
      <section data-tone="light" className="py-20 lg:py-28" style={{ background: CREAM }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="flex flex-col gap-6 w-full">
              
              {/* TOP ROW: PHONE AND EMAIL CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                {/* PHONE CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -10px rgba(42,37,32,0.12)' }}
                  className="p-8 transition-all duration-300 text-left relative overflow-hidden flex flex-col h-full"
                  style={{ 
                    background: CREAM_2, 
                    border: `1.5px solid rgba(42,37,32,0.06)`,
                    borderRadius: '2px'
                  }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: 'rgba(139,149,121,0.1)' }}>
                      <Phone size={18} strokeWidth={1.3} color={SAGE_DARK}/>
                    </div>
                    <h3 className="tracking-[0.22em] uppercase" style={{ fontSize: '10px', color: SAGE_DARK, fontWeight: 600 }}>Phone</h3>
                  </div>
                  <div className="flex flex-col gap-2 font-serif mt-auto" style={{ fontSize: '18px', color: INK, fontWeight: 300, lineHeight: 1.4 }}>
                    <a href="tel:+919076000468" className="hover:text-[#8B9579] transition-colors">+91 9076000468</a>
                    <a href="tel:+919765600701" className="hover:text-[#8B9579] transition-colors">+91 97656 00701</a>
                  </div>
                </motion.div>

                {/* EMAIL CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -10px rgba(42,37,32,0.12)' }}
                  className="p-8 transition-all duration-300 text-left relative overflow-hidden flex flex-col h-full"
                  style={{ 
                    background: CREAM_2, 
                    border: `1.5px solid rgba(42,37,32,0.06)`,
                    borderRadius: '2px'
                  }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: 'rgba(139,149,121,0.1)' }}>
                      <Mail size={18} strokeWidth={1.3} color={SAGE_DARK}/>
                    </div>
                    <h3 className="tracking-[0.22em] uppercase" style={{ fontSize: '10px', color: SAGE_DARK, fontWeight: 600 }}>Email</h3>
                  </div>
                  <div className="flex flex-col gap-2.5 font-serif mt-auto" style={{ fontSize: '15px', color: INK, fontWeight: 300 }}>
                    
                    <a href="mailto:customersupport@ryviveroots.com" className="hover:text-[#8B9579] transition-colors font-serif">customersupport@ryviveroots.com</a>
                    <a href="mailto:management@ryviveroots.com" className="hover:text-[#8B9579] transition-colors font-serif">management@ryviveroots.com</a>
                  </div>
                </motion.div>
              </div>

              {/* SHOP LOCATION CARD */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, boxShadow: '0 12px 24px -10px rgba(42,37,32,0.12)' }}
                className="p-8 transition-all duration-300 text-left relative overflow-hidden"
                style={{ 
                  background: CREAM_2, 
                  border: `1.5px solid rgba(42,37,32,0.06)`,
                  borderRadius: '2px'
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: 'rgba(139,149,121,0.1)' }}>
                    <MapPin size={18} strokeWidth={1.3} color={SAGE_DARK}/>
                  </div>
                  <h3 className="tracking-[0.22em] uppercase" style={{ fontSize: '10px', color: SAGE_DARK, fontWeight: 600 }}>Shop Location</h3>
                </div>
                <div style={{ fontSize: '14px', color: INK, lineHeight: 1.8 }}>
                  Shop No 01, Saraswati Bhuvan,<br />
                  Near Roshan Automobile,<br />
                  Phadke Cross Road,<br />
                  Opp. Hotel Nav Gomantak,<br />
                  Dombivli East,<br />
                  Maharashtra 421201.
                </div>
              </motion.div>

              {/* MAP SECTION */}
              <motion.div 
                id="map-section"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full relative overflow-hidden" 
                style={{ 
                  border: '1.5px solid rgba(42,37,32,0.06)',
                  borderRadius: '2px',
                  boxShadow: '0 20px 40px -20px rgba(42,37,32,0.08)'
                }}
              >
                <iframe 
                  title="Ryvive Roots Location Map"
                  src="https://maps.google.com/maps?q=Shop%20No%2001,%20Saraswati%20Bhuvan,%20Near%20Roshan%20Automobile,%20Phadke%20Cross%20Road,%20Opp.%20Hotel%20Nav%20Gomantak,%20Dombivli%20East,%20Maharashtra%20421201&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="340" 
                  style={{ 
                    border: 0, 
                    filter: 'grayscale(0.9) contrast(1.1) invert(0.02)',
                    display: 'block'
                  }} 
                  allowFullScreen="" 
                  loading="lazy"
                />
              </motion.div>

            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 sm:p-10 text-left h-full flex flex-col justify-center"
                style={{ 
                  background: CREAM_2, 
                  border: `1.5px solid rgba(42,37,32,0.06)`,
                  borderRadius: '2px',
                  boxShadow: '0 20px 40px -20px rgba(42,37,32,0.06)'
                }}
              >
                <div className="mb-10">
                  <div className="tracking-[0.42em] uppercase mb-4" style={{ fontSize: '10px', color: SAGE_DARK, fontWeight: 600 }}>— Message Us</div>
                  <h2 className="font-serif" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.1, color: INK, fontWeight: 300 }}>
                    Begin a <em style={{ fontStyle: 'italic' }}>conversation.</em>
                  </h2>
                </div>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 12 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-center py-16"
                  >
                    <div className="font-serif mb-4" style={{ fontSize: '28px', color: INK, fontWeight: 300 }}>
                      Thank you.
                    </div>
                    <p style={{ fontSize: '14px', color: 'rgba(42,37,32,0.65)', lineHeight: 1.8 }}>
                      Your message has been received. Our concierge team will be in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="flex flex-col gap-8">
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input 
                        required 
                        value={form.name} 
                        onChange={onChange('name')} 
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input 
                        type="email" 
                        required 
                        value={form.email} 
                        onChange={onChange('email')} 
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject</label>
                      <input 
                        required 
                        value={form.subject} 
                        onChange={onChange('subject')} 
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea 
                        required 
                        rows={4} 
                        value={form.message} 
                        onChange={onChange('message')} 
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                    </div>
                    
                    <div className="mt-4">
                      <motion.button 
                        type="submit" 
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 tracking-[0.24em] uppercase transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto" 
                        style={{ 
                          fontSize: '11px', 
                          background: INK, 
                          color: CREAM, 
                          border: `1px solid ${INK}`, 
                          borderRadius: '1px',
                          cursor: 'pointer'
                        }} 
                        onMouseEnter={(e) => { 
                          e.currentTarget.style.background = SAGE_DARK; 
                          e.currentTarget.style.borderColor = SAGE_DARK; 
                        }} 
                        onMouseLeave={(e) => { 
                          e.currentTarget.style.background = INK; 
                          e.currentTarget.style.borderColor = INK; 
                        }}
                      >
                        Send Now <Send size={12} strokeWidth={1.5} />
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>);
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CREAM, DARK_2, INK, SAGE_DARK } from '../theme';

const ContactBg = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=80";

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
        padding: '16px 2px',
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

    return (
        <div style={{ background: CREAM }} className="min-h-screen">
            {/* SECTION 1 — CONTACT INTRO (HERO) */}
            <section className="relative min-h-[72vh] flex items-center overflow-hidden" style={{ background: DARK_2 }}>
                <div className="absolute inset-0">
                    <ImageWithFallback src={ContactBg} alt="Contact hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,17,15,0.6) 0%, rgba(20,17,15,0.6) 50%, rgba(20,17,15,0.92) 100%)' }}/>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14 w-full pt-32 pb-20 text-center">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl mx-auto flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm" style={{ border: `1px solid ${CREAM}`, fontSize: '10px', letterSpacing: '0.42em', textTransform: 'uppercase', color: CREAM, fontWeight: 600 }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: CREAM, display: 'inline-block' }}/>
                            CONTACT
                        </div>
                        <h1 className="font-serif" style={{ fontSize: 'clamp(42px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.015em', color: CREAM, fontWeight: 300 }}>
                            Let&apos;s Begin A Conversation.
                        </h1>
                        <p className="mx-auto mt-2" style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(244,239,230,0.65)', maxWidth: '540px' }}>
                            Reach out, ask us anything, and take your first step toward feeling amazing.
                        </p>
                    </motion.div>
                </div>
            </section>            {/* SECTION 2 — CONTACT MAIN AREA */}
            <section data-tone="light" className="py-24 lg:py-32" style={{ background: CREAM }}>
                <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
                    
                    {/* TWO COLUMN SPLIT */}
                    <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-24 items-start">
                        
                        {/* LEFT COLUMN: UNIFIED CONTACT INFORMATION PANEL (feels like one premium card) */}
                        <div className="w-full">
                            <motion.div 
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-8 md:p-10 lg:p-12 text-left"
                                style={{ 
                                    background: '#F5F1E8', 
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: '12px'
                                }}
                            >
                                <h3 className="tracking-[0.42em] uppercase text-[10px] text-[#6B7560] font-semibold mb-8">— CONTACT INFORMATION</h3>
                                
                                <div className="h-px bg-[#2A2520]/10 w-full mb-8" />

                                {/* Phone Section */}
                                <div className="flex gap-5 items-start">
                                    <Phone size={18} strokeWidth={1.5} color={SAGE_DARK} className="mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="tracking-[0.3em] uppercase text-[10px] text-[#6B7560] font-semibold mb-3">Phone</h4>
                                        <div className="flex flex-col gap-2 font-serif text-[17px] text-[#2A2520] font-light leading-snug">
                                            <a href="tel:+919076000468" className="hover:text-[#8B9579] transition-colors">+91 9076000468</a>
                                            <a href="tel:+919765600701" className="hover:text-[#8B9579] transition-colors">+91 97656 00701</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="h-px bg-[#2A2520]/10 w-full my-8" />

                                {/* Email Section */}
                                <div className="flex gap-5 items-start">
                                    <Mail size={18} strokeWidth={1.5} color={SAGE_DARK} className="mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="tracking-[0.3em] uppercase text-[10px] text-[#6B7560] font-semibold mb-3">Email</h4>
                                        <div className="flex flex-col gap-2.5 font-serif text-[15px] text-[#2A2520] font-light leading-snug">
                                            <a href="mailto:customersupport@ryviveroots.com" className="hover:text-[#8B9579] transition-colors break-all">customersupport@ryviveroots.com</a>
                                            <a href="mailto:management@ryviveroots.com" className="hover:text-[#8B9579] transition-colors break-all">management@ryviveroots.com</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="h-px bg-[#2A2520]/10 w-full my-8" />

                                {/* Location Section */}
                                <div className="flex gap-5 items-start">
                                    <MapPin size={18} strokeWidth={1.5} color={SAGE_DARK} className="mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="tracking-[0.3em] uppercase text-[10px] text-[#6B7560] font-semibold mb-3">Shop Location</h4>
                                        <p className="font-serif text-[15px] text-[#2A2520] font-light leading-relaxed">
                                            Shop No 01, Saraswati Bhuvan, Near Roshan Automobile,<br />
                                            Phadke Cross Road, Opp. Hotel Nav Gomantak,<br />
                                            Dombivli East, Maharashtra 421201.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: LUXURY BREATHING CONTACT FORM */}
                        <div className="w-full lg:pl-6">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-left w-full lg:max-w-[85%]"
                            >
                                <div style={{ marginBottom: '40px' }}>
                                    <div className="tracking-[0.42em] uppercase mb-4" style={{ fontSize: '10px', color: SAGE_DARK, fontWeight: 600 }}>— GET IN TOUCH</div>
                                    <h2 className="font-serif mb-4 text-[#2A2520]" style={{ fontSize: 'clamp(32px, 4vw, 46px)', lineHeight: 1.15, fontWeight: 300 }}>
                                        Begin a Conversation.
                                    </h2>
                                    <p className="text-[15px] font-light leading-relaxed text-[#2A2520]/70">
                                        Whether you have questions about subscriptions, delivery schedules, franchise opportunities, or general inquiries, our team is here to help.
                                    </p>
                                </div>

                                {submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 12 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        className="py-16"
                                    >
                                        <h3 className="font-serif mb-4" style={{ fontSize: '32px', color: INK, fontWeight: 300 }}>
                                            Thank you.
                                        </h3>
                                        <p style={{ fontSize: '15px', color: 'rgba(42,37,32,0.7)', lineHeight: 1.8 }}>
                                            Your message has been received. Our concierge team will be in touch with you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="flex flex-col w-full" style={{ gap: '32px' }}>
                                        <div>
                                            <label style={{ ...labelStyle, marginBottom: '12px' }}>Name</label>
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
                                            <label style={{ ...labelStyle, marginBottom: '12px' }}>Email Address</label>
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
                                            <label style={{ ...labelStyle, marginBottom: '12px' }}>Subject</label>
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
                                            <label style={{ ...labelStyle, marginBottom: '12px' }}>Message</label>
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
                                        
                                        <div style={{ marginTop: '12px' }}>
                                            <motion.button 
                                                type="submit" 
                                                whileTap={{ scale: 0.98 }}
                                                className="px-12 py-4 tracking-[0.24em] uppercase transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto" 
                                                style={{ 
                                                    fontSize: '11px', 
                                                    background: INK, 
                                                    color: CREAM, 
                                                    border: `1px solid ${INK}`, 
                                                    borderRadius: '1px',
                                                    cursor: 'pointer',
                                                    paddingTop: '16px',
                                                    paddingBottom: '16px'
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
                                                Send Message <Send size={12} strokeWidth={1.5} />
                                            </motion.button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* MAP SECTION — DEDICATED FULL WIDTH (under columns, inside same max-w container) */}
                    <div className="mt-20 lg:mt-28">
                        <motion.div 
                            id="map-section"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full relative overflow-hidden h-[400px]" 
                            style={{ 
                                background: '#F5F1E8',
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '16px',
                            }}
                        >

                            <iframe 
                                title="Ryvive Roots Location Map"
                                src="https://maps.google.com/maps?q=Shop%20No%2001,%20Saraswati%20Bhuvan,%20Near%20Roshan%20Automobile,%20Phadke%20Cross%20Road,%20Opp.%20Hotel%20Nav%20Gomantak,%20Dombivli%20East,%20Maharashtra%20421201&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{ 
                                    border: 0, 
                                    filter: 'grayscale(0.9) contrast(1.1) invert(0.02)',
                                    display: 'block',
                                    borderRadius: '16px'
                                }} 
                                allowFullScreen="" 
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

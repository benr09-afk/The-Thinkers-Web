import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
            <div className="section-container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }}>

                    {/* Contact Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                        >
                            Enter the <span className="gradient-text">Think Tank</span>
                        </motion.h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            For bookings, press inquiries, or philosophical debates, reach out to our management.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { icon: <Mail />, label: 'Management', value: 'contact@thethinkers.band' },
                                { icon: <Phone />, label: 'Booking', value: '+1 (555) 012-3456' },
                                { icon: <MapPin />, label: 'Studio HQ', value: 'Berlin, Germany' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'var(--glass-bg)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-primary)',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{item.label}</h4>
                                        <p style={{ fontSize: '1.1rem' }}>{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card"
                        style={{ padding: '3rem' }}
                    >
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>NAME</label>
                                    <input type="text" placeholder="John Doe" style={inputStyle} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>EMAIL</label>
                                    <input type="email" placeholder="john@example.com" style={inputStyle} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SUBJECT</label>
                                <select style={inputStyle}>
                                    <option>Booking Inquiry</option>
                                    <option>Press & Media</option>
                                    <option>General Message</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MESSAGE</label>
                                <textarea placeholder="Write your thoughts..." rows={5} style={inputStyle}></textarea>
                            </div>

                            <button
                                type="submit"
                                className="gradient-bg"
                                style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Transmit Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '8px',
    padding: '0.8rem 1rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit'
};

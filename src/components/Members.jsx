import { motion } from 'framer-motion';
import { Mic2, Guitar, Disc, Music, Speaker } from 'lucide-react';

const members = [
    { name: 'Elias Thorne', role: 'Lead Vocals', icon: <Mic2 size={32} />, color: '#3b82f6' },
    { name: 'Kaelen Vance', role: 'Lead Guitar', icon: <Guitar size={32} />, color: '#6366f1' },
    { name: 'Marcus Black', role: 'Drums', icon: <Disc size={32} />, color: '#8b5cf6' },
    { name: 'Sloane Reed', role: 'Bass', icon: <Speaker size={32} />, color: '#ec4899' },
    { name: 'Jaxon Grey', role: 'Keyboards', icon: <Music size={32} />, color: '#10b981' },
];

export default function Members() {
    return (
        <section id="members" style={{ padding: 'var(--section-padding)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '3.5rem' }}>The <span className="gradient-text">Architects</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>The collective minds behind the noise.</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem'
                }}>
                    {members.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{
                                padding: '2.5rem 1.5rem',
                                textAlign: 'center',
                                cursor: 'default',
                                transition: 'border 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = member.color}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                        >
                            <div style={{
                                color: member.color,
                                marginBottom: '1.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                filter: `drop-shadow(0 0 10px ${member.color}44)`
                            }}>
                                {member.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {member.role}
                            </p>

                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '3px',
                                background: member.color,
                                opacity: 0.5
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

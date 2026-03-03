import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink, Headphones } from 'lucide-react';

const tracks = [
    { title: "Metaphysical Echoes", duration: "4:22", vibe: "Ethereal / Heavy" },
    { title: "The Thinker's Gambit", duration: "3:45", vibe: "Alternative Rock" },
    { title: "Synaptic Pulse", duration: "5:10", vibe: "Progressive" },
    { title: "Fragments of Reality", duration: "2:58", vibe: "Post-Punk" },
];

export default function Music() {
    return (
        <section id="music" style={{ padding: 'var(--section-padding)' }}>
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem' }}>Latest <span className="gradient-text">Frequencies</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Experience the auditory landscape of The Thinkers.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) 1fr', gap: '3rem' }}>
                    {/* Tracklist */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <Headphones className="gradient-text" size={24} />
                            <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Studio Records</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {tracks.map((track, idx) => (
                                <motion.div
                                    key={track.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem',
                                        borderBottom: idx === tracks.length - 1 ? 'none' : '1px solid var(--glass-border)',
                                        cursor: 'pointer'
                                    }}
                                    whileHover={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', opacity: 0.5, fontWeight: 'bold' }}>0{idx + 1}</span>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{track.title}</h4>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{track.vibe}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{track.duration}</span>
                                        <Play size={18} fill="currentColor" style={{ opacity: 0.5 }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Streaming Integration */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{ padding: '2rem', textAlign: 'center' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>Stream Anywhere</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                {['Spotify', 'Apple', 'Bandcamp', 'YouTube'].map(platform => (
                                    <motion.div
                                        key={platform}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid var(--glass-border)',
                                            cursor: 'pointer'
                                        }}>
                                        <div style={{ fontSize: '0.7rem' }}>{platform}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Join over 250,000 monthly listeners exploring the soundscape.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                flex: 1,
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '1rem' }}>Physical Editions</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Limited 180g Vinyl available now.</p>
                            <button className="glass-card" style={{
                                padding: '0.8rem 2rem',
                                border: '1px solid var(--accent-secondary)',
                                background: 'transparent',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                                Pre-order Collection
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

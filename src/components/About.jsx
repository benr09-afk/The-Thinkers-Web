import { motion } from 'framer-motion';

export default function About() {
    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section id="about" style={{ padding: 'var(--section-padding)', overflow: 'hidden' }}>
            <div className="section-container">
                <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">DNA</span></h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--accent-primary)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        {...fadeInUp}
                        className="glass-card"
                        style={{ padding: '3rem', position: 'relative' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>The Philosophical Edge</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            "The Thinkers" aren't just making music; they're dissecting the human experience through heavy riffs and ethereal synthesizers. Founded in the underground scene of 2024, the band has quickly become known for their intellectual approach to songwriting.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Every beat is a calculated pulse, every lyric a question. We believe that rock music should challenge the mind as much as it moves the body.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: 'linear-gradient(45deg, #111, #222)',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                width: '150%',
                                height: '150%',
                                background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 60%)',
                                opacity: 0.1,
                                filter: 'blur(50px)'
                            }}></div>
                            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--accent-primary)', textAlign: 'center', padding: '2rem' }}>
                                "Noise is the silence between thoughts."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

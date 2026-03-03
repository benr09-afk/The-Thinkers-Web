export default function Footer() {
    return (
        <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <div className="section-container">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '0.2em' }}>THE THINKERS</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    {['INSTAGRAM', 'TWITTER', 'FACEBOOK', 'SPOTIFY'].map(social => (
                        <a key={social} href="#" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold', letterSpacing: '0.1em' }} className="hover-link">
                            {social}
                        </a>
                    ))}
                </div>

                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                    © 2026 THE THINKERS. ALL RIGHTS RESERVED. <br />
                    DESIGNED FOR THE CURIOUS.
                </p>
            </div>
        </footer>
    );
}

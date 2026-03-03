import { motion } from 'framer-motion';

export default function Navbar() {
    const navItems = ['About', 'Members', 'Music', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                width: 'auto',
                minWidth: '300px'
            }}
        >
            <div className="glass-card" style={{
                padding: '0.5rem 2rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                borderRadius: '50px'
            }}>
                {navItems.map(item => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            padding: '0.5rem 0'
                        }}
                        className="nav-link"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}

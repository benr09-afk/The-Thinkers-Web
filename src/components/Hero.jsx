import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero" style={{ 
      position: 'relative', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background with subtle zoom animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%)',
        zIndex: 0
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', lineHeight: 0.8, marginBottom: '1rem' }}>
            The <span className="gradient-text">Thinkers</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ 
            fontSize: '1.2rem', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          Redefining Modern Rock through sonic exploration and raw energy.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a href="#music" className="glass-card" style={{ 
            padding: '1rem 2.5rem', 
            display: 'inline-block',
            fontWeight: 'bold',
            fontSize: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '1px solid var(--accent-primary)',
            background: 'rgba(59, 130, 246, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-primary)';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
            e.currentTarget.style.color = 'white';
          }}
          >
            Experience the Sound
          </a>
        </motion.div>
      </div>
    </section>
  );
}

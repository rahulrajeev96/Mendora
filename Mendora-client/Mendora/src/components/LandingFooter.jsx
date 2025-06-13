import React from 'react';

const LandingFooter = () => {
  const styles = {
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      zIndex: 5,
      background: 'transparent',
      color: '#fff',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <i className="fa-solid fa-comments"></i>
        <span>Chat Anonymously</span>
      </div>

      <div style={styles.right}>
        <span>Chat Assistant</span>
        <i className="fa-solid fa-robot"></i>
      </div>
    </footer>
  );
};

export default LandingFooter;

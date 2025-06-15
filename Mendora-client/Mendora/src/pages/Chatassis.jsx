import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaSearch, FaBook, FaArrowUp, FaMicrophone, FaBars, FaTimes } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { RiRobot2Fill } from 'react-icons/ri';

const ChatAssistant = () => {
  const [sendHover, setSendHover] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [barsHover, setBarsHover] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef(null);
  const canvasRef = useRef(null);

  // Auto-resize textarea with scroll when max height reached
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to calculate proper scrollHeight
      textareaRef.current.style.height = 'auto';
      
      // Set new height (max 200px)
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
      
      // Show scrollbar only when max height is reached
      textareaRef.current.style.overflowY = 
        textareaRef.current.scrollHeight > 200 ? 'auto' : 'hidden';
    }
  }, [inputValue]);

  // Floating bubbles effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const bubbles = [];
    const bubbleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 10,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 30 + 330,
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        if (bubble.x < -bubble.radius) bubble.x = canvas.width + bubble.radius;
        if (bubble.x > canvas.width + bubble.radius) bubble.x = -bubble.radius;
        if (bubble.y < -bubble.radius) bubble.y = canvas.height + bubble.radius;
        if (bubble.y > canvas.height + bubble.radius) bubble.y = -bubble.radius;
        
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${bubble.hue}, 100%, 80%, ${bubble.opacity})`;
        ctx.fill();
        
        ctx.shadowColor = `hsla(${bubble.hue}, 100%, 80%, 0.5)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
      background: 'radial-gradient(circle at 20% 20%, rgba(255,182,193,0.1), transparent), radial-gradient(circle at 80% 80%, rgba(255,182,193,0.15), transparent)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }} />
      
      <div style={{
        width: menuOpen ? '250px' : '0',
        backgroundColor: 'rgba(249, 251, 255, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        borderRight: '1px solid rgba(238, 238, 238, 0.5)',
        backdropFilter: 'blur(5px)',
        zIndex: 2,
        transition: 'all 0.3s ease',
        boxShadow: menuOpen ? '5px 0 15px rgba(0,0,0,0.1)' : 'none',
        overflow: 'hidden',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
        <BsStars style={{
          fontSize: '30px',
          color: '#ff85a2',
          marginBottom: '30px',
          transition: 'all 0.3s ease',
          opacity: menuOpen ? 1 : 0,
        }} />
        <div style={{ 
          fontSize: '24px',
          color: '#888',
          margin: '20px 0',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          opacity: menuOpen ? 1 : 0,
          width: menuOpen ? 'auto' : '0',
          height: menuOpen ? 'auto' : '0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          whiteSpace: 'nowrap',
          ':hover': {
            transform: 'scale(1.1)',
            color: '#ff85a2',
          }
        }}>
          <FaPlus />
          <span style={{ fontSize: '16px', marginLeft: '10px' }}>New Chat</span>
        </div>
        <div style={{ 
          fontSize: '24px',
          color: '#888',
          margin: '20px 0',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          opacity: menuOpen ? 1 : 0,
          width: menuOpen ? 'auto' : '0',
          height: menuOpen ? 'auto' : '0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          whiteSpace: 'nowrap',
          ':hover': {
            transform: 'scale(1.1)',
            color: '#ff85a2',
          }
        }}>
          <FaSearch />
          <span style={{ fontSize: '16px', marginLeft: '10px' }}>Search</span>
        </div>
        <div style={{ 
          fontSize: '24px',
          color: '#888',
          margin: '20px 0',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          opacity: menuOpen ? 1 : 0,
          width: menuOpen ? 'auto' : '0',
          height: menuOpen ? 'auto' : '0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          whiteSpace: 'nowrap',
          ':hover': {
            transform: 'scale(1.1)',
            color: '#ff85a2',
          }
        }}>
          <FaBook />
          <span style={{ fontSize: '16px', marginLeft: '10px' }}>Library</span>
        </div>
        {menuOpen && (
          <FaTimes style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '20px',
            color: '#888',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 3,
          }} onClick={toggleMenu} />
        )}
      </div>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '30px',
          color: '#222',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'center',
        }}>
          <RiRobot2Fill style={{ color: '#ff85a2' }} />
          What can I help with?
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
          minHeight: '60px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '50px',
          boxShadow: '0 0 30px rgba(0,0,0,0.1)',
          padding: '15px 25px',
          position: 'relative',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s ease',
        }}>
          <textarea
            ref={textareaRef}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '18px',
              minHeight: '30px',
              resize: 'none',
              background: 'transparent',
              maxHeight: '200px',
              lineHeight: '1.5',
              padding: '5px 0',
              overflowY: 'hidden', // Will be changed to 'auto' when max height reached
            }}
            placeholder="Ask anything..."
            value={inputValue}
            onChange={handleInputChange}
            rows="1"
          />
          <FaMicrophone style={{
            fontSize: '20px',
            color: isListening ? '#ff4d4d' : '#888',
            marginLeft: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }} onClick={toggleListening} title={isListening ? 'Stop listening' : 'Start voice input'} />
          <div
            style={{
              backgroundColor: '#ff85a2',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(255, 133, 162, 0.3)',
              ...(sendHover && {
                backgroundColor: '#ff6b8b',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 15px rgba(255, 107, 139, 0.4)',
              })
            }}
            onMouseEnter={() => setSendHover(true)}
            onMouseLeave={() => setSendHover(false)}
          >
            <FaArrowUp style={{ color: '#fff', fontSize: '16px' }} />
          </div>
        </div>
      </div>
      
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          fontSize: '24px',
          color: barsHover ? '#ff85a2' : '#888',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 3,
          transform: barsHover ? 'scale(1.1)' : 'scale(1)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          ...(menuOpen && {
            color: '#ff85a2',
            transform: 'rotate(90deg) scale(1.1)',
          })
        }}
        onClick={toggleMenu}
        onMouseEnter={() => setBarsHover(true)}
        onMouseLeave={() => setBarsHover(false)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default ChatAssistant;
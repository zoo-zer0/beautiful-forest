import { useState, useEffect } from 'react';
import { createTypeStream, delay } from 'hangul-typing-animation';

export default function Kakao() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  // List your message SVG files in chronological order
  const messageFiles = [
    '/img/kakao_step1.svg',
    '/img/kakao_step2.svg',
    '/img/kakao_step3.svg',
    '/img/kakao_step4.svg',
    '/img/kakao_step5.svg',
    '/img/kakao_step6.svg',
    '/img/kakao_step7.svg',

    // Add more message SVG files as needed
  ];
  const typeStream = createTypeStream({
    perChar: 40,
    perHangul: 80,
    perSpace: 0,
    perLine: 0,
    perDot: 320
  });
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < messageFiles.length) {
          return prev + 1;
        } else {
          setIsAnimating(false);
          return prev;
        }
      });
    }, 1000); // Show new message every 1.5 seconds

    return () => clearInterval(interval);
  }, [isAnimating, messageFiles.length]);
  //hangul animation when done
  useEffect(() => {
    const runTypingAnimation = async () => {
      if (visibleMessages === messageFiles.length && !isAnimating) {
        setShowTyping(true);
        await delay(500);
        await typeStream(
          `아니 뭐 어느 정도길래 그래?`,
          async (typing) => {
            setTypingText(typing);
          }
        );
      }
    };

    runTypingAnimation();
  }, [visibleMessages, messageFiles.length, isAnimating]);


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <div style={{
        position: 'relative',
        width: '555px',
        height: '600px',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Background messenger UI */}
        <img
          src="/img/kakao_bg.svg"
          alt="Kakao messenger background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Messages container with scroll */}
        
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px'
          }}>
            {/* Messages appearing one by one */}
            {messageFiles.map((message, index) => (
              <div
                key={message}
                style={{
                  opacity: index < visibleMessages ? 1 : 0,
                  transform: index < visibleMessages ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.1s ease-out, transform 0.3s ease-out',
                  maxHeight: index < visibleMessages ? '1000px' : '0',
                  overflow: 'hidden',
                  width: "350px",
                  marginLeft: "15px"
                }}
              >
                <img
                  src={message}
                  alt={`Message ${index + 1}`}
                  style={{
                    width: '320px',
                    display: 'block',
                    marginTop: index==0 ? "70px" : "0"
                  }}
                />
              </div>
            ))}
             {/* Typing animation text */}
            {showTyping && (
              <div
                style={{
                  maxWidth: '70%',
                  marginLeft:"20px",
                  marginTop:"30px",
                  alignSelf: 'flex-start',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  opacity: 1,
                  animation: 'fadeIn 0.5s ease-out',
                  zIndex: "50"
                }}
              >
                <div id="typing">{typingText}</div>
              </div>
            )}
          </div>
        </div>

      <div style={{
        marginTop: '10px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          {messageFiles.map((_, index) => (
            <div
              key={index+1}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index < visibleMessages ? '#FEE500' : '#ddd',
                transform: index < visibleMessages ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.1s'
              }}
            />
          ))}
        </div>

        <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
          {visibleMessages} / {messageFiles.length+1}
        </span>
      </div>
    </div>
  );
}
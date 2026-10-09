import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';

// EXIT_DURATION must match the transition
// duration set on .preloader-exit in Preloader.css.
const EXIT_DURATION = 700;

/**
 * Full-screen preloader: monitors DOM load state (document.readyState === 'complete'),
 * smoothly counts to 100%, and wipes away once the page is fully loaded.
 */
const Preloader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const isLoadedRef = useRef(
    typeof document !== 'undefined' && document.readyState === 'complete'
  );
  const percentRef = useRef(0);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const finish = () => {
      // brief hold at 100% so the counter doesn't feel clipped
      timeoutRef.current = setTimeout(() => {
        setExiting(true);
        timeoutRef.current = setTimeout(() => {
          document.body.style.overflow = '';
          onFinish && onFinish();
        }, EXIT_DURATION);
      }, 250);
    };

    const handleReady = () => {
      if (document.readyState === 'complete') {
        isLoadedRef.current = true;
      }
    };

    if (document.readyState === 'complete') {
      isLoadedRef.current = true;
    } else {
      window.addEventListener('load', handleReady);
      document.addEventListener('readystatechange', handleReady);
    }

    if (prefersReducedMotion) {
      const checkLoaded = () => {
        if (document.readyState === 'complete' || isLoadedRef.current) {
          setPercent(100);
          finish();
        } else {
          rafRef.current = requestAnimationFrame(checkLoaded);
        }
      };
      checkLoaded();
      return () => {
        cancelAnimationFrame(rafRef.current);
        clearTimeout(timeoutRef.current);
        window.removeEventListener('load', handleReady);
        document.removeEventListener('readystatechange', handleReady);
        document.body.style.overflow = previousOverflow;
      };
    }

    let lastTimestamp = null;

    const tick = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = Math.min(timestamp - lastTimestamp, 100); // cap delta to prevent large jumps
      lastTimestamp = timestamp;

      const isComplete =
        isLoadedRef.current || document.readyState === 'complete';

      if (!isComplete) {
        // While still loading, smoothly advance up to 90%
        if (percentRef.current < 90) {
          const remaining = 90 - percentRef.current;
          const step = Math.max(0.2, (remaining / 600) * delta);
          percentRef.current = Math.min(90, percentRef.current + step);
          setPercent(Math.floor(percentRef.current));
        }
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Document is ready / complete: finish smoothly to 100%
        if (percentRef.current < 100) {
          const step = Math.max(1, (delta / 8));
          percentRef.current = Math.min(100, percentRef.current + step);
          setPercent(Math.floor(percentRef.current));
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setPercent(100);
          finish();
        }
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timeoutRef.current);
      window.removeEventListener('load', handleReady);
      document.removeEventListener('readystatechange', handleReady);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`preloader${exiting ? ' preloader-exit' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="preloader-inner">
        <svg
          className="preloader-mark"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g fill="currentColor">
            <path
              fillRule="evenodd"
              d="M0,0 H12 A24,24 0 0 1 12,48 H0 Z M12,12 A12,12 0 0 1 12,36 Z"
            />
            <rect x="36" y="0" width="30" height="12" />
            <rect x="36" y="18" width="24" height="12" />
            <rect x="36" y="36" width="30" height="12" />
            <rect x="36" y="0" width="12" height="48" />
          </g>
        </svg>

        <div className="preloader-count">{percent}%</div>

        <div className="preloader-bar">
          <div
            className="preloader-bar-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <span className="sr-only">Loading page, {percent} percent complete.</span>
    </div>
  );
};

export default Preloader;

/*
USAGE — in App.js:

  import React, { useState } from 'react';
  import Preloader from './components/Preloader/Preloader';
  // ...your other imports

  function App() {
    const [loading, setLoading] = useState(true);

    return (
      <>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
        <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
          <Navbar />
          <Hero />
          <About />
          {/* ...rest of your sections }
        </div>
      </>
    );
  }

The visibility toggle (rather than not rendering at all) keeps images/fonts
warming up underneath while the counter runs, so nothing pops in late once
the preloader clears.
*/

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash, key } = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (hash) {
            lastHash.current = hash;
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // If no hash, and we are not just toggling a hash on the same page (logic could be complex, 
            // but simply scrolling top on route change is standard behavior)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToAnchor;

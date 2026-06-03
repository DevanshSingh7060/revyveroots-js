import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { DARK } from '../theme';
import WhatsappIcon from '../images/Whatsapp.png';

export function Layout() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);
    return (<div style={{ background: DARK }} className="min-h-screen overflow-x-hidden relative">
      <SiteHeader />
      <Outlet />
      <SiteFooter />

      {/* FLOATING WHATSAPP BUTTON (Visual Only) */}
      <motion.div
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#F5F1E8',
          border: '1px solid #2B241E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(43,36,30,0.12)',
          zIndex: 9999,
        }}
      >
        <img
          src={WhatsappIcon}
          alt="WhatsApp Chat"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            display: 'block',
            filter: 'brightness(0) saturate(100%) invert(14%) sepia(16%) saturate(628%) hue-rotate(341deg) brightness(94%) contrast(90%)',
          }}
        />
      </motion.div>
    </div>);
}

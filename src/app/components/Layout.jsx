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
          width: '68px',
          height: '68px',
          borderRadius: '999px',
          background: '#FFFFFF',
          padding: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          zIndex: 9999,
        }}
      >
        <img
          src={WhatsappIcon}
          alt="WhatsApp Chat"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </motion.div>
    </div>);
}

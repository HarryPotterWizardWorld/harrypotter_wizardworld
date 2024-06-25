// src/styles/theme.ts
import { extendTheme } from '@chakra-ui/react';
import backdrop from '../../public/Backdrop.svg'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      ':root': {
        '--max-width': '100vw',
        '--border-radius': '12px',
        '--font-mono': 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
        '--foreground-rgb': props.colorMode === 'dark' ? '255, 255, 255' : '0, 0, 0',
        '--background-start-rgb': props.colorMode === 'dark' ? '0, 0, 0' : '214, 219, 220',
        '--background-end-rgb': props.colorMode === 'dark' ? '0, 0, 0' : '255, 255, 255',
        '--primary-glow': props.colorMode === 'dark' ? 'radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))' : 'conic-gradient(from 180deg at 50% 50%, #16abff33 0deg, #0885ff33 55deg, #54d6ff33 120deg, #0071ff33 160deg, transparent 360deg)',
        '--secondary-glow': props.colorMode === 'dark' ? 'linear-gradient(to bottom right, rgba(1, 65, 255, 0), rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3))' : 'radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        '--tile-start-rgb': props.colorMode === 'dark' ? '2, 13, 46' : '239, 245, 249',
        '--tile-end-rgb': props.colorMode === 'dark' ? '2, 5, 19' : '228, 232, 233',
        '--tile-border': props.colorMode === 'dark' ? 'conic-gradient(#ffffff80, #ffffff40, #ffffff30, #ffffff20, #ffffff10, #ffffff10, #ffffff80)' : 'conic-gradient(#00000080, #00000040, #00000030, #00000020, #00000010, #00000010, #00000080)',
        '--callout-rgb': props.colorMode === 'dark' ? '20, 20, 20' : '238, 240, 241',
        '--callout-border-rgb': props.colorMode === 'dark' ? '108, 108, 108' : '172, 175, 176',
        '--card-rgb': props.colorMode === 'dark' ? '100, 100, 100' : '180, 185, 188',
        '--card-border-rgb': props.colorMode === 'dark' ? '200, 200, 200' : '131, 134, 135',
      },
      '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
      },
      'html, body': {
        maxWidth: '100vw',
        overflowX: 'hidden',
        background: "#1F1B26",
      },
      body: {
        color: 'rgb(var(--foreground-rgb))',
        background: `linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))`,
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    }),
  },
});

export default theme;

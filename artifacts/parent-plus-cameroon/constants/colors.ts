/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#17352d',
    tint: '#d26a4b',

    // Core surfaces
    background: '#fbf7f0',
    foreground: '#17352d',

    // Cards / elevated surfaces
    card: '#fffdf9',
    cardForeground: '#17352d',

    // Primary action color (buttons, links, active states)
    primary: '#d26a4b',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#e3efe7',
    secondaryForeground: '#17352d',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#f1e8da',
    mutedForeground: '#68766f',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#f5d8bf',
    accentForeground: '#7f3f30',

    // Destructive actions (delete, error states)
    destructive: '#b94a43',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#e6dacb',
    input: '#d9cbb9',
  },


  dark: {
    text: '#f5eee4', tint: '#ef9270', background: '#17231f', foreground: '#f5eee4', card: '#21312b', cardForeground: '#f5eee4', primary: '#ef9270', primaryForeground: '#17231f', secondary: '#2d443a', secondaryForeground: '#f5eee4', muted: '#293a33', mutedForeground: '#b4c2ba', accent: '#604638', accentForeground: '#ffd7c5', destructive: '#f07a70', destructiveForeground: '#17231f', border: '#3a4e45', input: '#52675d',
  },
  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;

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

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;

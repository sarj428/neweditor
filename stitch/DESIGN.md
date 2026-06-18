---
name: Cyber-Sketch Retro
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#3b4949'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#6b7a7a'
  outline-variant: '#bac9c9'
  surface-tint: '#00696b'
  primary: '#00696b'
  on-primary: '#ffffff'
  primary-container: '#00ced1'
  on-primary-container: '#005354'
  inverse-primary: '#2ddbde'
  secondary: '#b60e3d'
  on-secondary: '#ffffff'
  secondary-container: '#da3054'
  on-secondary-container: '#fffbff'
  tertiary: '#8d4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffa54a'
  on-tertiary-container: '#6f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#5af8fb'
  primary-fixed-dim: '#2ddbde'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f51'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b8'
  on-secondary-fixed: '#40000f'
  on-secondary-fixed-variant: '#91002d'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb876'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Chivo
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Chivo
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style
The design system is an exercise in **Neo-Brutalist Digitalism**, merging the nostalgic aesthetic of 90s camcorder interfaces with modern anime art. The personality is energetic, rebellious, and highly structured. It evokes the feeling of a digital sketchbook—precise yet playful.

The visual direction relies on high-contrast outlines, technical grid patterns, and "hard" depth. It targets a creative, tech-savvy audience that appreciates retro-futurism and lo-fi aesthetics. The UI should feel like a tactile hardware interface rendered on a screen, using physical metaphors like solid drop shadows and thick borders to define space.

## Colors
The palette is dominated by a high-vibrancy **Cyan/Teal**, extracted from the iconic character hair and digital UI accents in the reference. This is supported by a stark **Solid Black** used for all structural elements (borders, shadows, text) and a **Clean White** for the base surfaces.

- **Primary (Cyan):** Used for interactive states, key iconography, and progress indicators.
- **Accent (Pink/Red):** Reserved for alerts, battery-low states, and specific "record" functions to mimic camcorder OSDs.
- **Structural Black:** Every interactive element must be bounded by a 2px solid black border.
- **Surface:** Backgrounds utilize a subtle cyan grid pattern on white to reinforce the "technical blueprint" vibe.

## Typography
The typography system uses a mix of technical and high-impact sans-serifs. **Space Grotesk** provides a futuristic, wide-set look for headlines, while **Chivo** ensures body text remains highly legible. **JetBrains Mono** is utilized for labels and metadata to lean into the "camcorder OSD" and developer-tool aesthetic.

All headlines should be rendered in solid black. For an authentic retro-tech feel, use uppercase styling for labels and technical data (e.g., timestamps, status indicators).

## Layout & Spacing
This design system uses a **Fixed Grid** model. The layout is structured around a 12-column system for desktop and a 4-column system for mobile. 

The most critical layout feature is the **Background Grid Pattern**: a persistent cyan-lined grid that aligns with the 4px base unit. UI elements should ideally snap to these grid lines. 

- **Desktop:** 48px margins with 24px gutters.
- **Mobile:** 16px margins with 16px gutters.
- **Outer Frame:** Use a thick (4px-8px) black border around the entire viewport or main content container to simulate a monitor or viewfinder frame.

## Elevation & Depth
Depth is expressed through **Hard Shadows** rather than blurs. Following the Neo-Brutalist style, components do not "float" via ambient light; they are physically offset from the background.

1.  **Level 0 (Base):** The grid-paper background.
2.  **Level 1 (Components):** 2px solid black border with a 4px horizontal/4px vertical solid black drop shadow.
3.  **Level 2 (Active/Hover):** The shadow increases to 6px/6px, or the component "depresses" by moving 2px down and right while the shadow shrinks (simulating a physical press).
4.  **Overlays:** Use a solid white fill with a 2px black border. No transparency is used for panels; depth is achieved solely through stacking and high-contrast outlines.

## Shapes
The shape language is rigid and geometric. A consistent **4px (0.25rem)** corner radius is applied to all components (buttons, cards, inputs). This creates a "softened tech" look—modern enough to be accessible but sharp enough to feel industrial.

- **Standard:** 4px radius.
- **Icons:** Contained within square boxes with 2px borders.
- **Decorative Elements:** Use 45-degree chamfered corners for special "OSD" status boxes to emphasize the camcorder aesthetic.

## Components

### Buttons
- **Primary:** Cyan background, 2px black border, black text, 4px solid black shadow.
- **Secondary:** White background, 2px black border, black text, 4px solid black shadow.
- **Interaction:** On hover, the background color shifts slightly darker. On click, the button translates 2px down/right and the shadow reduces.

### Inputs & Text Fields
- **Style:** White background, 2px black border, no shadow by default. 
- **Focus:** 2px Cyan border or a solid Cyan shadow (4px) to indicate active state.
- **Labels:** Use JetBrains Mono, positioned strictly above the field in uppercase.

### Cards & Panels
- **Style:** White fill, 2px black border, 4px black shadow.
- **Header:** Cards can feature a "Title Bar" with a solid Cyan fill and black bottom border to separate the title from the content.

### Status Indicators (Chips)
- **Style:** Rectangular with 4px radius. No shadow. 
- **Variants:** "REC" chips use the Secondary Pink/Red with a blinking animation. Technical status chips use Cyan.

### Viewfinder Elements
- Include "corner brackets" on main image/video containers.
- Use monospaced timestamps in the top-right and "battery" icons in the top-left of primary containers to reinforce the camcorder vibe.
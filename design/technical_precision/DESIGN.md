---
name: Technical Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#f9f9f9'
  on-tertiary: '#2f3131'
  tertiary-container: '#dcdddd'
  on-tertiary-container: '#5f6161'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  grid-margin: 40px
  grid-gutter: 1px
  section-padding: 120px
  element-gap: 24px
---

## Brand & Style

This design system is built for the high-end software engineer who views code as a craft. It adopts a **Technical Minimalism** aesthetic, drawing heavy influence from Swiss International Style and modern IDE interfaces. The personality is expert, methodical, and unapologetically technical.

The visual language relies on a rigorous grid, razor-sharp edges, and a "terminal-first" philosophy. It avoids decorative fluff in favor of structural clarity. Subtle textures, such as fine-line dot grids and monospaced data-overlays, evoke the feeling of a sophisticated development environment without sacrificing the premium, gallery-like feel of a professional portfolio.

## Colors

The palette is strictly monochromatic to emphasize structure and content, using a "Deep Black" base for maximum contrast. The primary accent is a vibrant **Terminal Green**, used sparingly for interactive states, status indicators, and critical call-to-actions.

- **Base:** `#0A0A0A` (Deep Black) for the main background.
- **Surface:** `#1A1A1A` (Off-Black) for cards and containers.
- **Contrast:** `#FFFFFF` (Crisp White) for primary text and major structural lines.
- **Accent:** `#00FF41` (Matrix/Terminal Green) for technical flair and interactivity.
- **Muted:** `#666666` (Steel Gray) for secondary information and non-active metadata.

## Typography

The typography strategy creates a tension between high-end editorial layouts and functional code environments. 

**Hanken Grotesk** provides a sharp, contemporary feel for large headlines, often used in all-caps or with tight tracking to create impact. **Inter** is used for body copy to ensure maximum legibility for long-form project descriptions or blog posts. **JetBrains Mono** is reserved for technical data, labels, and small UI details, reinforcing the developer-centric nature of the site. Use horizontal rules to separate typographic sections, echoing the grid lines found in the reference image.

## Layout & Spacing

This design system utilizes a **Fixed-Fluid Hybrid Grid**. On desktop, content is constrained to a 12-column grid with a maximum width of 1440px. 

A unique "visible grid" philosophy is applied: instead of wide gutters, use 1px solid borders (`#333333`) to define regions, mimicking the layout of a blueprint or a code editor. 

- **Desktop:** 12 columns, 120px vertical section padding for breathing room.
- **Tablet:** 8 columns, 80px vertical section padding.
- **Mobile:** 4 columns, 48px vertical section padding, with margins reduced to 20px.
- **Alignment:** All elements must align to the baseline grid. Avoid centered layouts; stick to hard-left or justified placements to maintain a technical feel.

## Elevation & Depth

In keeping with the minimalist and technical aesthetic, this system avoids traditional drop shadows and blurs. Depth is conveyed through **Tonal Layering** and **High-Contrast Outlines**.

- **Level 0 (Base):** Background color `#0A0A0A`.
- **Level 1 (Inlay):** Subtle borders (`1px solid #333333`) define sections.
- **Level 2 (Active):** Interactive elements use the accent color (`#00FF41`) as a solid stroke or high-contrast fill.
- **Technical Overlays:** Use semi-transparent `#00FF41` (at 5-10% opacity) for hover states on list items, creating a "scanning" effect.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Every UI element—from buttons and input fields to images and cards—must have 90-degree corners. This reinforces the precision and "engineered" feel of the system. Visual interest is generated through the contrast of line weights (e.g., a 2px border for a primary button vs. a 0.5px border for a secondary container) rather than through organic curves.

## Components

### Buttons
Primary buttons are solid white with black text, turning green on hover. Secondary buttons are ghost-style with 1px white borders and sharp corners. Labels are always monospaced.

### Technical Chips
Small, rectangular tags with a monospaced font. They feature a 1px border and a small dot icon (the accent color) to indicate "active" or "live" status.

### Data Lists
Key-value pairs for technical specs (e.g., "Language: TypeScript"). Use a thin horizontal line between items. The key should be in a muted gray, while the value is in high-contrast white.

### Project Cards
Minimalist frames with no padding. The image occupies the top half, separated from the content by a 1px white line. Titles are in Hanken Grotesk; technical stacks are in monospaced labels at the bottom.

### Inputs
Underlined fields rather than boxes. When focused, the 1px bottom border transitions from white to terminal green with a blinking cursor effect.
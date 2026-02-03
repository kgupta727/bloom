# Frontend Visual Editor

A **visual editor concept** for websites and mobile app interfaces. Edit frontend designs with live preview and comprehensive style controls without changing backend code.

## Overview

This is a proof-of-concept tool that demonstrates a workflow for editing frontend designs visually while keeping backend logic completely separate and untouched.

### The Workflow

1. **Upload Website/App** - Import your website or mobile app interface
2. **Generate JSON** - System creates a JSON representation of the frontend (backend remains unchanged)
3. **Open Live Editor** - Edit styles, colors, layouts, and spacing visually with real-time preview
4. **Save JSON Changes** - Export your modified design as JSON
5. **Apply to Code** - Upload the JSON changes back to your codebase

## Features

🎨 **Comprehensive Style Controls**
- Colors: text, background, borders with color picker + presets
- Typography: fonts, sizes, weights, line height, letter spacing
- Spacing: padding & margin with individual side controls
- Layout: flex properties, alignment, justification
- Sizing: width, height, min/max constraints
- Effects: shadows, opacity, border radius, filters

📦 **Component Management**
- Interactive component tree with hierarchy visualization
- Live preview with instant style updates
- Click-to-select components directly on canvas
- Support for containers, buttons, cards, text, headings, inputs, images

💾 **Save & Export**
- Auto-save to browser sessionStorage
- Export design as clean JSON
- Import JSON files to continue editing
- Safe for backend - only frontend changes

Try it out - https://frontend-visual-editor.vercel.app/
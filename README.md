# Bloom Interactive Playground

A **Photoshop-like visual editor** for Bloom screen components. Design, tweak, and export screen layouts with live preview and comprehensive style controls.

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
- Auto-save to browser localStorage
- Export screen as clean JSON
- Import JSON files to continue editing
- Perfect for Bloom integration

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to start editing!

## How to Use

1. **Select** a component by clicking on it in the preview or in the component tree
2. **Edit** its styles using the right-side panel with Photoshop-like controls
3. **Preview** changes instantly in the center canvas
4. **Export** your design as JSON when ready
5. **Import** existing JSON to continue editing

## Project Structure

```
bloom/
├── app/
│   ├── page.tsx          # Main editor interface
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ComponentRenderer.tsx  # Renders JSON to React components
│   ├── StyleEditor.tsx        # Photoshop-like style panel
│   └── ComponentTree.tsx      # Hierarchy tree view
├── types/
│   └── index.ts          # TypeScript type definitions
├── lib/
│   ├── utils.ts          # Helper functions
│   └── sample-data.ts    # Sample screen with example components
└── tailwind.config.ts    # Tailwind CSS configuration
```

## JSON Format

Components follow this structure:

```json
{
  "id": "unique-id",
  "type": "container|button|text|card|input|image|heading",
  "label": "Display name",
  "content": "Text content or image URL",
  "styles": {
    "display": "flex",
    "flexDirection": "column",
    "padding": "24px",
    "backgroundColor": "#ffffff",
    ...
  },
  "children": [...]
}
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - UI styling
- **Lucide React** - Icons
- **Browser localStorage** - Data persistence

## Future Enhancements

- AI-powered style suggestions
- Preset design systems
- Component reusability library
- Undo/redo history
- Real-time collaboration
- Mobile responsive preview
- Animation controls
- Theme builder

---

Built to solve Bloom's friction point: iterate on visual designs without touching backend logic. 🚀

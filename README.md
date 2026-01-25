# King Pine Shopify Theme

A premium Shopify theme designed for King Pine cleaning products, featuring industrial-strength aesthetics with modern web design principles.

## Features

- ✅ **Dynamic Sections**: All homepage sections are fully customizable through the Shopify theme editor
- ✅ **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- ✅ **Product Metafields Support**: Ready for custom product data like scent, features, and use cases
- ✅ **Before/After Slider**: Interactive image comparison slider for showing cleaning results
- ✅ **Premium Aesthetics**: Serif typography, smooth animations, and brand-focused design
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML structure

## Installation

### Method 1: Upload as ZIP (Recommended)

1. **Create a ZIP file** of the `shopify-theme` folder:
   ```bash
   cd /Users/sahilghangash/Downloads/king-pine---premium-cleaning-since-1939
   zip -r king-pine-theme.zip shopify-theme/*
   ```

2. **Upload to Shopify**:
   - Go to your Shopify Admin
   - Navigate to **Online Store → Themes**
   - Click **Add theme** → **Upload ZIP file**
   - Select the `king-pine-theme.zip` file
   - Wait for upload to complete

3. **Publish the theme**:
   - Click **Actions** → **Publish** on the uploaded theme

### Method 2: Shopify CLI (For Developers)

1. **Install Shopify CLI** if you haven't:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to theme folder**:
   ```bash
   cd shopify-theme
   ```

3. **Push to Shopify**:
   ```bash
   shopify theme push
   ```

## Theme Sections

### Homepage Sections

1. **Hero Section** (`hero.liquid`)
   - Full-screen hero with background image
   - Badge text, heading, subheading
   - Dual CTA buttons

2. **Featured Products** (`featured-products.liquid`)
   - Dynamically pulls from a collection
   - Shows product images, titles, descriptions
   - Supports product metafields (scent, short_description)

3. **Benefits Section** (`benefits.liquid`)
   - 2-column layout with image
   - Icon blocks for features (Power, Droplets, Shield, Clock)
   - Year badge overlay

4. **Before/After Comparison** (`comparison-slider.liquid`)
   - Interactive image slider
   - Draggable handle to compare images

5. **Use Cases Grid** (`use-cases.liquid`)
   - Icon grid showing product applications
   - Customizable icons and labels

6. **Text Content** (`text-content.liquid`)
   - Flexible content section
   - Multiple background options
   - Text alignment options

7. **Call to Action** (`cta.liquid`)
   - Gradient background with pattern
   - Large CTA button

### Product Template

The product page (`main-product.liquid`) includes:
- Image gallery with thumbnails
- Product variants selector
- Add to cart functionality
- Product description
- Features list (from metafield: `custom.features`)
- Use cases tags (from metafield: `custom.use_cases`)

### Global Sections

- **Header** (`header.liquid`): Sticky navigation with mobile menu
- **Footer** (`footer.liquid`): Multi-column footer with contact info

## Customization

### Theme Settings

Access theme settings in Shopify Admin:
**Online Store → Themes → Customize**

#### Colors
- Primary Color (Deep Pine): `#1a2e26`
- Secondary Color (Pine Green): `#2d5a27`
- Accent Color (Gold): `#a47c48`
- Background Color: `#fdfbf7`

#### Typography
- Heading Font: Libre Baskerville (serif)
- Body Font: Inter (sans-serif)

### Adding/Editing Sections

All sections can be added, removed, and reordered via the theme editor:
1. Go to **Online Store → Themes → Customize**
2. Click **Add section** to choose from available sections
3. Drag sections to reorder
4. Click on any section to edit its settings

### Product Metafields

For best results, add these custom metafields to your products:

1. **Scent** (`custom.scent`)
   - Type: Single line text
   - Example: "Original Black", "Gold Pine", "Lavender"

2. **Short Description** (`custom.short_description`)
   - Type: Multi-line text
   - Example: "The legendary industrial-strength cleaner since 1939."

3. **Features** (`custom.features`)
   - Type: Multi-line text
   - Format: Comma-separated values
   - Example: "Industrial strength formula, Breaks down grease, No phosphorous"

4. **Use Cases** (`custom.use_cases`)
   - Type: Multi-line text
   - Format: Comma-separated values
   - Example: "Floors, Garbage Cans, Factories, Machinery"

## File Structure

```
shopify-theme/
├── assets/
│   ├── theme.css              # Main stylesheet
│   ├── theme.js               # Main JavaScript
│   └── component-header.css   # Component styles
├── config/
│   ├── settings_schema.json   # Theme settings definition
│   └── settings_data.json     # Default theme settings
├── layout/
│   └── theme.liquid           # Main layout file
├── locales/
│   └── en.default.json        # English translations
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── featured-products.liquid
│   ├── benefits.liquid
│   ├── comparison-slider.liquid
│   ├── use-cases.liquid
│   ├── text-content.liquid
│   ├── cta.liquid
│   ├── main-product.liquid
│   └── main-page.liquid
├── snippets/
│   └── meta-tags.liquid       # SEO meta tags
└── templates/
    ├── index.json             # Homepage template
    ├── product.json           # Product page template
    └── page.json              # Static page template
```

## Next Steps After Installation

1. **Add your logo**: 
   - Customize → Header section → Logo Image

2. **Configure navigation**:
   - Online Store → Navigation
   - Create a menu called "main-menu"

3. **Add products**:
   - Products → Add product
   - Add product metafields as described above

4. **Create a collection**:
   - Products → Collections → Create collection
   - Add your products to the collection

5. **Configure homepage**:
   - Customize → Homepage
   - Featured Products section → Select your collection
   - Upload images for Hero, Benefits, and Comparison sections

6. **Create pages**:
   - Pages → Add page
   - Create "About", "Where to Buy", "Contact" pages

7. **Set up menus**:
   - Navigation → Main menu
   - Add links to Home, Products, About, Where to Buy, Contact

## Support & Customization

### Common Customizations

**Change colors**: 
- Customize → Theme settings → Colors

**Change fonts**: 
- Edit `layout/theme.liquid` to change Google Fonts links

**Add more sections**:
- Duplicate existing section files in `sections/` folder
- Modify content and styling as needed

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading images
- Minimal JavaScript
- Optimized CSS
- Google Fonts with font-display: swap

## Credits

Designed and developed for King Pine Premium Cleaning Products
Theme Version: 1.0.0

# Responsive OTT Dashboard

A modern, responsive web dashboard for OTT (Over-The-Top) services with an auto-hiding sidebar for small screens.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Auto-hiding Sidebar**: Sidebar automatically hides on mobile devices (≤768px)
- **Hamburger Menu**: Toggle sidebar visibility on mobile
- **Touch Gestures**: Swipe right to open, swipe left to close sidebar
- **Dark Theme**: Modern dark color scheme
- **Smooth Animations**: CSS transitions and animations
- **Accessibility**: Keyboard navigation and focus management
- **Cross-browser Compatible**: Works on all modern browsers

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to Use

1. **Open the webpage**: Simply open `index.html` in any modern web browser
2. **Desktop View**: The sidebar is always visible on screens larger than 768px
3. **Mobile View**: 
   - The sidebar is hidden by default
   - Click the hamburger menu (☰) to show/hide the sidebar
   - Swipe right from the left edge to open the sidebar
   - Swipe left or tap outside to close the sidebar
   - Press Escape key to close the sidebar

## Responsive Breakpoints

- **Desktop (>1024px)**: Full navigation in header, sidebar always visible
- **Tablet (768px-1024px)**: Icons only in header, sidebar always visible
- **Mobile (≤768px)**: Hamburger menu, sidebar hidden by default

## Features Included

### Navigation
- Top navigation bar with logo and menu items
- Left sidebar with extended navigation options
- Active state highlighting
- Hover effects and animations

### Mobile Optimizations
- Touch-friendly interface
- Swipe gestures for sidebar control
- Overlay background when sidebar is open
- Body scroll prevention when sidebar is active

### Accessibility
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast design

### Performance
- Optimized animations
- Debounced resize events
- Efficient event handling

## Customization

### Colors
The color scheme can be easily customized by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ffd700;    /* Gold accent color */
    --bg-dark: #000;            /* Main background */
    --bg-sidebar: #1a1a2e;      /* Sidebar background */
}
```

### Breakpoints
Responsive breakpoints can be adjusted in the CSS media queries:

```css
@media (max-width: 768px) { /* Mobile breakpoint */ }
@media (max-width: 1024px) { /* Tablet breakpoint */ }
```

### Content
- Modify the navigation items in both the header and sidebar
- Update the welcome message and branding
- Add your own content to the main area

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- Font Awesome 6.0.0 (for icons) - loaded via CDN
- No other external dependencies required

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
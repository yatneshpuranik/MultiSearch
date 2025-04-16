


### 🧠 **Algorithm / Pseudocode for the CSS layout:**

1. **Reset and Base Styling:**
   - Apply `box-sizing: border-box` and remove default padding/margins on all elements.
   - Enable smooth scrolling and set a universal system font stack.
   - Remove the scrollbar for the entire page on WebKit browsers.

2. **Page Layout and Centering:**
   - Style the `<body>` to use Flexbox.
     - Center all content both vertically and horizontally.
     - Full viewport height (`100vh`).
     - Dark background with an image (`dark.jpg`).
     - Text color is white.

3. **3-Column Layout:**
   - Define three columns: `.col1`, `.col2`, `.col3`.
     - `.col1` and `.col3`: 30% width of viewport.
     - `.col2`: 40% width of viewport, centrally positioned.
     - All columns have `100vh` height.

4. **Center Column (`.col2`) Content Layout:**
   - Use Flexbox with vertical column direction.
   - Center items both horizontally and vertically.

5. **Accordion & Button Wrapper:**
   - Style `.accordionWrapper` with margins, padding, and rounded corners.
   - `.accordion`: full-width, center-aligned text, styled with transparency and bold font.
   - `div.panel`: use CSS Grid with 3 equal columns for internal items.

6. **Buttons and Links:**
   - Style `<a>` and `<button>` tags:
     - Center content inside.
     - Transparent backgrounds with white text.
     - Slight border radius and hover effects (scale and color shift).
     - On hover/focus, slightly enlarge and change background.

7. **Grid for Icon Buttons/Options:**
   - Use `.col2Container` with 4 equal columns in a grid.
   - Center content with spacing (`gap`) between items.

8. **Search Bar Styling:**
   - `.search` input is nearly full-width, styled dark with light text.
   - On hover/focus, invert to white background and dark text.

9. **Headings:**
   - Set large font size (`3rem`) for headings (`<h1>`).

10. **GitHub Link Button:**
    - `.githubLink`: Fixed at the bottom left with large clickable text.
    - Hover state changes text color to DodgerBlue.

11. **Miscellaneous:**
    - Add `.favicon` styling to position/size icons next to text.
    - `.MusicAudioStreaming` has extra bottom padding.
    - `.unsearchable:hover` text color changes to DodgerBlue on hover.

---

### ✅ Summary of Functional Areas:
- **Layout**: 3-column full-height design with a centered content block.
- **User Interaction**: Buttons and links are styled for interaction with visual feedback.
- **Theming**: Dark mode with semi-transparent elements and hover color transitions.
- **Utility**: Search input, accordion panels, and external links styled for usability.

---

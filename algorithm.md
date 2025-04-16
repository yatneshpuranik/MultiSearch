

## 🔁 Algorithm For Main.js to Build the MultiSearch Logic

---

### 1. **Prepare Platform Data**
- Define platforms you want to support.
- Group them in 3 categories: `col1`, `col2`, and `col3`.
- Each platform should have:
  - `name`: Display name.
  - `url`: The base URL.
  - `queryParam`: (optional) What to append for search, e.g., `"/search?q="`.

✅ Store this in a separate module (like `platforms.js`).

---

### 2. **Create Function to Open URLs**
- Input: `baseUrl`, `queryParam`, `query`.
- If both `queryParam` and `query` exist:
  - Concatenate and form a full search URL.
- Else:
  - Use only `baseUrl`.
- Open the resulting URL in a **new browser tab**.

---

### 3. **Generate Favicon URLs**
- For each platform:
  - Use Google’s favicon service with the domain.
  - (Optional) Provide fallback favicons manually for known broken cases.

---

### 4. **Generate Search Buttons**
- Loop through each platform:
  - Create a button.
  - Add its favicon and name to it.
  - If the platform supports search:
    - On click, read the input field and open the search URL.
  - If it doesn't:
    - Just open the site directly.

---

### 5. **Generate UI Columns**
- For each column (col1, col2, col3):
  - `col1` and `col3`:
    - Group buttons into **accordion categories**.
    - Each category becomes a collapsible section.
  - `col2`:
    - Just add flat buttons (no grouping).

---

### 6. **Create Accordion UI**
- Create a heading element (like `<div>` or `<button>`) for the category.
- Create a hidden panel that contains the platform buttons.
- Toggle panel visibility when the heading is clicked.

---

### 7. **Search Input Shortcuts**
- Add keyboard listeners:
  - `/` key → Focus the input box.
  - `Escape` key → Unfocus the input box.
  - `Enter` key → Trigger a default search (e.g., Google).

---

### 8. **Style Everything**
- Use CSS to style:
  - The layout: 3-column grid/flexbox.
  - Buttons: Icons + names.
  - Accordion: Collapsible sections.
  - Highlighting/search input focus.

---

## 🧠 Summary of Logic Flow

```
1. Load platform data.
2. Generate buttons using the platform info.
3. Insert buttons into corresponding columns.
4. For col1 and col3:
   - Create accordion sections by category.
5. Create button click behavior:
   - With search: combine queryParam + user input.
   - Without search: just open base URL.
6. Handle favicons (default + fallback).
7. Add input keyboard controls (/, Esc, Enter).
```

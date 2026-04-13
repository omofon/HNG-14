# 🚀 Frontend Wizards — Stage 0 Task: Build a Testable Todo Item Card Concept

Build a clean, modern **Todo / Task Card** component (or a small page containing one card).

---

## Required Content & Exact `data-testid` Values

> ⚠️ These must match exactly for automated tests.

| Element | `data-testid` |
|---|---|
| Root card container | `test-todo-card` |
| Task title (h2 or h3) | `test-todo-title` |
| Task description / notes | `test-todo-description` |
| Priority badge/label | `test-todo-priority` |
| Due date / deadline | `test-todo-due-date` |
| Time remaining hint | `test-todo-time-remaining` |
| Status indicator | `test-todo-status` |
| Checkbox / completion toggle | `test-todo-complete-toggle` |
| Tags / categories list | `test-todo-tags` |
| "Edit" button | `test-todo-edit-button` |
| "Delete" button | `test-todo-delete-button` |

### Priority Badge
Must show one of: **Low**, **Medium**, **High** (or emoji/icons representing them).

### Due Date
Formatted nicely — e.g. `"Due Feb 18, 2026"`.

### Time Remaining
Example values:
- `"Due in 3 days"`
- `"Due tomorrow"`
- `"Overdue by 2 hours"`
- `"Due now!"`

Updates roughly every 30–60 seconds (or at least shows correct initial value).

### Status Indicator
One of: `"Pending"` / `"In Progress"` / `"Done"`.

### Checkbox / Toggle
Must be a real `<input type="checkbox">` or a properly labeled button with `role="checkbox"`.

### Tags
Each tag can optionally have its own `data-testid`:
- `data-testid="test-todo-tag-work"`
- `data-testid="test-todo-tag-urgent"`

---

## HTML & Semantics Recommendations

Use proper semantic HTML:

- **Card root** → `<article>` or `<section role="region">`
- **Title** → `<h2>` or `<h3>`
- **Description** → `<p>`
- **Priority & Status** → `<span>` or `<strong>` (add `aria-label` if visual-only)
- **Due date & time remaining** → `<time>` element (with `datetime` attribute if possible)
- **Checkbox** → real `<input type="checkbox">` + `<label>`
- **Tags** → `<ul role="list">` of `<li>` OR `<div role="list">` with chips
- **Buttons** → `<button>` (not `<div>`), add `aria-label` if icon-only

---

## Accessibility Requirements

- Checkbox must have a visible label **OR** `aria-label` / `aria-labelledby`
- All buttons must have accessible names (visible text or `aria-label`)
- Priority / status badges should have `aria-label` if purely visual
- Good color contrast (WCAG AA compliant)
- Focus styles must be visible
- Fully keyboard navigable: `Tab → checkbox → edit → delete`
- If time-remaining updates live, wrap it in `aria-live="polite"` (or skip live updates for Stage 0)

---

## Responsiveness Requirements

- **Mobile** — full-width card, stacked vertical layout
- **Tablet/Desktop** — comfortable max-width (420–500px recommended), good padding and spacing
- Tags should wrap nicely (`flex-wrap`)
- No horizontal overflow at any screen width
- Must look correct from **320px to 1200px**

---

## Behaviour / Implementation Guidance

Hard-code 1–3 example tags (e.g. `work`, `urgent`, `design`) and one initial value each for Priority, Status, and Due Date.

### Time Remaining
Calculate from:
- A fixed due date (e.g. `March 1, 2026 18:00 UTC`), **OR**
- `Date.now() + offset`

Show friendly text (`"Due in 3 days"`, `"Due tomorrow"`, `"Overdue by 2 hours"`, `"Due now!"`).

Optionally, refresh every ~60 seconds with `setInterval` — not required for Stage 0.

### Checkbox Toggle Behaviour
When toggled, visually update the card:
- Strike-through the title
- Change status to `"Done"`

### Edit & Delete Buttons
Can be dummy actions:
- `console.log("edit clicked")`
- `alert("Delete clicked")`

---

## Acceptance Criteria (Grading / Auto-Tests)

- [ ] All required `data-testid` elements exist and are visible
- [ ] Checkbox is focusable, toggleable via keyboard, and screen-reader accessible
- [ ] Time remaining shows a reasonable value (± few minutes tolerance)
- [ ] Edit & Delete buttons are present and keyboard-focusable
- [ ] Semantic HTML used correctly: `article/section`, `time`, `label`, `button`, `list`
- [ ] Responsive layout works properly (320px–1200px)
- [ ] No layout shift or horizontal overflow with long text
- [ ] Priority & status are clearly displayed

---

## Submission

Submit the following:
- ✅ Live URL (Vercel / Netlify / GitHub Pages)
- ✅ GitHub repo

**Submission Link:** [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSd57saqCAZ34jRlAqD7y3gkopz7YZQ46-etzGmj1fZcVjEWwA/viewform?usp=publish-editor)

**Deadline: April 16, 2026**
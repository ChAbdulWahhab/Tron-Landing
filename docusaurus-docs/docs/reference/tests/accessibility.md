# Accessibility tests

Static HTML analysis on main document unless noted.

## HTML Lang Attribute (`test_lang_attribute`)

- **Pass:** `<html lang="...">` present.

## Form Input Labels (`test_form_labels`)

- **Pass:** Each `input`/`select`/`textarea` except types `hidden`, `submit`, `button`, `image` has either:
  - `aria-label` or `aria-labelledby`, or
  - `id` + matching `<label for>`, or
  - wrapped in `<label>`.

## Button Accessible Text (`test_button_text`)

- **Pass:** Each `<button>` has visible text, or `aria-label`, or `title`.

## Link Descriptive Text (`test_link_text`)

- **Fail:** Link text exactly **"click here"** or **"read more"** (case-insensitive) — generic phrase.

## Color Contrast Basic Check (`test_color_contrast_basic`)

- **Heuristic:** Inline `style` with white/light text (`color:#fff`, `color:white`) without `background` in same style → **fail** (very basic; not WCAG full audit).

## Skip Navigation Link (`test_skip_navigation`)

- **Pass:** Some `<a href>` where text contains "skip" and href has `#` or "main".

## ARIA Landmarks (`test_aria_landmarks`)

- **Pass:** Document has:
  - `main` element or `role="main"`
  - `nav` or `role="navigation"`
  - `header` or `role="banner"`

---

[Back to test catalog](../test-catalog.md)

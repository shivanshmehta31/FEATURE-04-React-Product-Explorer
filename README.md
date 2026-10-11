# Product Explorer — Feature Development Challenge

**Repository:** `FEATURE-04-React-Product-Explorer`  
**Stack:** React, JavaScript, Vite  
**Level:** Beginner to intermediate  
**Suggested time:** 30–60 minutes

## Scenario
You are working on a small frontend application. Your task is to work against observable behaviour rather than blindly accepting AI-generated code.

## Objective
Implement category filters, price sorting, and a product details panel.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite. To check production compilation, run `npm run build`.

## How to work with AI
1. Reproduce the problem or identify the missing requirement.
2. Ask the AI to explain the likely cause before asking for a patch.
3. Point the AI to the smallest relevant code section.
4. Apply a focused change.
5. Run the app and verify every acceptance criterion manually.
6. Explain why the change works and mention one edge case.

## Acceptance criteria
- The page loads without a blank screen or console errors.
- Search and filters (where present) produce predictable results.
- Removing an item updates the visible list and summary.
- Displayed totals should match the data and rules in the UI.
- Controls should have clear labels and behave consistently.
- No unrelated UI or data behaviour should regress.

## Test checklist
- Try a normal input and an empty input.
- Try a filter that returns results and one that returns no results.
- Remove an item and confirm it stays removed.
- Check totals before and after a change.
- Refresh the page and confirm the app starts in a valid state.
- Run `npm run build` before considering the task complete.

## Files to inspect
- `src/App.jsx` — application state, derived data, event handlers, and rendering.
- `src/style.css` — responsive layout and presentation.
- `src/main.jsx` — React entry point.

## Submission
Provide a short note listing:
- The issue fixed or feature implemented.
- The root cause / design choice.
- Tests performed.
- How AI was used and what you independently verified.

## Feature requirements
Implement the following without breaking the existing layout:
- **Search:** match relevant text without being case-sensitive.
- **Filters:** combine selected filters with search; changing one should not unexpectedly reset the other.
- **Sorting:** provide a deterministic order and handle missing values safely.
- **Category filters, sorting, and product details:** satisfy the repository objective stated above.
- **Feedback:** show a useful empty state when nothing matches.
- **Quality:** keep logic readable and use React state rather than directly mutating arrays or objects.

### Definition of done
All controls have a visible effect, acceptance criteria pass, and `npm run build` succeeds.

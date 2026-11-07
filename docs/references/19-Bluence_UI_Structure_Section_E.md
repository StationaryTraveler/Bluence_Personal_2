# Bluence — UI Structure: Section E


Integrated Copilot revision: 26 October 2026. Includes the approved contextual AI interaction model; all content remains a UI specification subject to implementation and release validation.

Revised: 26 October 2026.
References: Bluence_User_Journey_V2.0, Personal_Copilot_Sitemap_V3.0 and the subsequent approved E/F/P journey corrections. This is a desktop-web UI specification describing layout, content and interaction states.

The approved loop starts with one useful estimate and action, adds weekly check-ins, offers the first check-up 30 days after the first durable footprint save, and continues with seasonal check-ups approximately every three months after the last completed check-up. Approved Option B fills priority F2 gaps within the day-30 check-up, with remaining questions optional afterward; see the approved day-30 block.

## E1 — Welcome

1. Header
   Bluence identity on the left.
   “How it works,” “Help” and “Sign in” on the right.
   For authenticated visitors, “Go to Today” replaces “Sign in.”

2. Main introduction
   Two desktop columns.
   Left: headline, “Understand your footprint. Find your next step,” followed by a short explanation of the service.
   Right: a three-step overview: estimate your footprint, try one action, check what changes.

3. Start block
   “Estimate my footprint” button.
   Supporting text: “See your result before creating an account.”
   Returning visitors with an available draft also receive “Continue my estimate.”

4. Reassurance block
   Explain that approximate answers are acceptable and “I don’t know” is available.
   Include a link explaining how assessment information is used.

5. How it works
   Explain the first result, practical action suggestions, weekly check-ins, the first check-up 30 days after the first durable save, and later seasonal check-ups.
   Clarify that a check-in reports activity, while a check-up reviews circumstances and recalculates the footprint.
   At the first check-up, important missing F2 inputs are requested alongside changed answers; the remaining detailed questions can be completed later.
   Explain the useful AI role: Copilot can help interpret an answer, explain a result and fit an action to the user’s circumstances. No separate AI onboarding or required conversation.

6. Optional background
   Short introduction to Bluence and its relationship with PLANET-B.

7. Footer
   Help, How we calculate, Privacy and Terms.

## E2 — Quick estimate

1. Header
   Bluence identity, Help and an option to leave the assessment.

2. Assessment progress
   Current topic, progress and estimated remaining time.

3. Main assessment area
   Two desktop columns.
   Left: the current question and answer controls.
   Right: the running estimate and assessment summary.

4. Current-question block
   Topic label.
   One question.
   Short explanation or example where needed.
   Answer choices or input fields.
   “I don’t know” where applicable.
   Help me answer opens the shared Copilot component beside this question.
   Top to bottom: current question/context; optional description in the user's words; necessary clarification; proposed fields with units and period; Edit; Continue with these answers; Cancel.
   Do not infer unsupplied household, transport or consumption facts. Ambiguous frequency or one-way/return distance is clarified.
   Continuing confirms the visible proposed fields, updates the same E2 draft and triggers its existing running calculation. Failed interpretation leaves ordinary answer choices available. Guest help uses only the current guest draft and does not require sign-in.

5. Question sequence
   Country or region and service availability.
   Household size and allocation of shared home inputs.
   Home energy.
   Regular travel.
   Flights and longer journeys.
   Food.
   Relevant goods and services.
   Follow-up questions appear only when relevant.

6. Running-estimate panel
   “Your estimate so far.”
   Period and coverage, with the same result presentation used in F:
   Below 80% applicable input coverage: calculated footprint range.
   At 80% or above: central estimate and “Estimate detail” rounded down to 80/85/90/95/100%, with 100% only for complete applicable input coverage.
   About this estimate explains that the score describes supplied input coverage rather than measured accuracy; the uncertainty range remains accessible.
   Explanation of defaults used for unanswered questions.
   “More information needed” when no defensible number is available. If uncertainty cannot be quantified, say so rather than inventing a range.
   Recalculate after each valid accepted answer; values need not change when an answer does not alter the result.
   Questionnaire completion progress remains separate from Estimate detail.

7. Question navigation
   Back and Continue.
   On the final question, Continue becomes “See my footprint.”

8. Draft and resume block
   Current save status.
   “Email me a resume link.”
   When selected: email field, send button and draft-expiry explanation.
   State that a resume email does not subscribe the user to reminders.

9. Supporting links
   Privacy and Help.

10. Conditional messages
    Unsupported regions are explained before the remaining questions.
    Validation, save and calculation errors appear beside the affected content, with retry or correction controls.

## E3 — Your footprint

1. Header
   Bluence identity, Help and secondary Sign in access.

2. Page introduction
   “Your footprint.”
   Assessment date, selected country and individual-estimate basis.

3. Main result area
   Two desktop columns.
   Left: footprint total and country comparison.
   Right: the recommended first action.

4. Footprint-total block
   Use the shared E/F presentation: a calculated annual range below 80% input coverage, or “About X t CO₂e per year” with an Estimate detail band at or above 80%.
   Per-person basis and calculation period.
   Assessment source: Quick estimate.
   Partial-coverage notice when applicable.
   One sentence explaining the assumptions actually used.
   About this estimate opens the range and input-detail explanation. Do not award a fixed score simply for completing E2.
   Within that explanation, Ask about this result offers bounded follow-ups using the current calculation and supported method data. Standard explanations and the result remain available without AI.

5. Country-reference block
   User estimate or range and country average.
   Reference year and source.
   “About this comparison” opens the same reference explanation as F7.
   If the personal range crosses the benchmark, explain the overlap without a definite above/below claim.
   If the figures are incompatible, show “Not directly comparable” without an above/below claim.

6. Recommended-action block
   Action name and instruction.
   Why it fits the user.
   Expected impact size and its basis.
   Effort, cost and timeframe.
   “Try this” button.
   “Why this?” and “This doesn’t fit me” links.
   Make this fit me opens contextual Copilot inside the action block, using the same P3/P4 interaction.
   Ask for an optional practical constraint, clarify only what matters, and return an eligible catalog action with instruction, fit reason, effort, cost and supported impact basis.
   The visible card is the proposal preview. Try this accepts once through the normal action save/authentication path; no second generic approval or plan builder.
   An unchanged catalog alternative selected manually still uses direct acceptance. An AI-fitted selection uses the same P5 approval checks inline in the card.
   Brief explanation that signing in saves the result and selected action.
   An accepted first action is feasible to try within a week; it opens in To do with a concrete next step and the next weekly check-in date.
   A guest's Try this selection continues through E4; an authenticated user adds directly. No repeated selection or plan approval.
   If This doesn’t fit me opens P4, a chosen alternative follows that same path: preserve intent, authenticate only if needed, then save and add.
   Retain the selected AI-fitted action and any expressly confirmed task-relevant constraint through E4. Authentication cancellation restores the selection while the guest draft remains valid; opening a sign-in link is not fresh action consent.
   Merely opening an email link or returning from P4 does not authorize an action the user did not select.
   Secondary “Save my result” saves without an action; Today offers one action afterwards.

7. Category breakdown
   Contribution of each supported category.
   Category names, values and proportions.
   Links to category explanations and relevant answers.

8. Two main hotspots
   Two adjacent desktop blocks.
   Each contains the main driver, its explanation and one relevant action.
   Where appropriate, identify changes that depend on other people or available infrastructure.

9. Improve-estimate block
   Identify the most useful missing or approximate input.
   “Improve my estimate” links to the relevant shared assessment question; account access is required only for durable saving, not to view the public result.
   Use the same Estimate detail explanation as F rather than an additional quality scale.
   Refining the estimate is optional before trying an action. The full F2 Footprint Check remains available later from Footprint.

10. Supporting information
    Assumptions and How we calculate.

11. Footer
    Help, Privacy and Terms.

## E4 — Sign in and save

1. Header
   Bluence identity and Help.

2. Return link
   “Back to my result” when arriving from the estimate.
   Otherwise, return to the originating page.

3. Context heading
   “Save your footprint and start this action,” “Save your footprint,” or “Welcome back,” depending on the entry point.

4. Pending-selection summary
   Result being saved.
   Selected action or P4 alternative, if any.
   No repeated action-selection step.
   When sign-in restores a P3 check-in or a G2 check-up, show that pending task instead and retain its reporting period or saved review step.
   If restoring a Copilot-assisted task, retain its draft, visible proposal and context. Authentication restores access; it never silently approves a proposed change. Passwordless identity verification and consent controls remain conventional.

5. Email-entry block
   Email address field.
   Explanation of passwordless access.
   “Email me a sign-in link” button.

6. Terms and privacy block
   Links to Terms and Privacy.
   Any required acknowledgment is separate from optional email reminders.

7. Email-sent state
   “Check your email.”
   Destination email address.
   Instructions for using the sign-in link.
   “Enter a code instead,” “Change email” and resend options.

8. Code-entry state
   Code field.
   “Continue” button.
   Incorrect or expired-code message with recovery controls.

9. Saving state
   Status of saving the result and selected action.
   Retry control if saving fails.
   Any partial success is explained accurately.

10. Completion
    For a first estimate/action save, open Today with confirmation of what was saved, the next action step and the next weekly check-in date when an action exists.
    Show the first check-up date: 30 calendar days after the first durable footprint save, including when the user saves without an action.
    Explain that the day-30 review reuses existing answers and fills priority gaps; completing the entire F2 questionnaire is optional.
    Provide Undo for action addition. Undo does not erase the saved estimate or move the first check-up date.
    For session recovery, return to the authorized P3/G2 task and its retained state instead of always redirecting to Today.

11. Optional weekly reminder invitation
    Offer only after an action is saved; a save-only user can receive it when later accepting a first action.
    “One email a week to check in.” Show the proposed local day/time and allow a change, Enable or Not now. Default off.
    One routine digest covers relevant active actions; it does not send a separate routine email for each action.
    A ready check-up invitation replaces that week's routine check-in reminder.
    In-app check-ins work without email opt-in. Authentication and requested resume emails remain separate.
    Preferences in P3 and account settings refer to this same reminder choice.

## E5 — New-account handling within E4

E5 has no separate registration page.

1. Header and return link
   Retain the E4 structure.

2. Context summary
   Show the result and selected action being saved.

3. Email verification
   Use the same email-link or code-entry blocks as E4.

4. Account creation and save status
   Create the account and save the result after verification.
   Establish the starting point without a separate confirmation screen.

5. Completion
   Open Today with the saved result and selected action, if one was chosen.
   Retain the first-save date for the day-30 check-up; later F2 refinement or action changes do not restart it.
   For resumed account tasks, restore their authorized origin.

6. Conditional account-conflict block
   If the verified account already contains saved work, explain the conflict.
   Offer a choice to retain existing work or explicitly save the new assessment.
   Preserve the existing starting point and history.

No additional profile questionnaire, password creation, goal setting or plan approval is included.

## E6 — Access recovery within E4

E6 has no separate password-reset page.

1. Header
   Bluence identity and Help.

2. Recovery heading
   Explain the current problem: expired link, invalid code, delivery problem or unavailable session.

3. Pending-work summary
   Indicate whether the result and selected action remain available.
   For a returning check-in or check-up, identify the saved task, reporting period or review step that will be restored.

4. Email-address block
   Current email address.
   “Change email” option.

5. Recovery action
   “Send a new link.”
   Code-entry alternative where supported.
   Resend status or retry instructions.

6. Delivery-help block
   Brief guidance for checking the email address and locating the message.

7. Return links
   “Back to my result” when the result remains available.
   Help or the supported contact route.

8. Separate draft-expiry state
   If the assessment draft has expired, explain that explicitly.
   Offer “Start a new estimate.”

## E7 — Public information

E7 contains Help, How we calculate, Privacy and Terms.

Shared structure, top to bottom:

1. Header
   Bluence identity, contextual return link and Sign in or Go to Today.

2. Page introduction
   Page title.
   Short description.
   Effective or updated date where relevant.

3. Main content area
   Contents navigation on the left for longer pages.
   Page content on the right.

4. Related links
   Relevant help, policy or return links.

5. Footer
   Help, How we calculate, Privacy and Terms.

### E7a — Help content order

1. Starting and completing an estimate.
2. Unknown answers and approximate inputs.
3. Understanding results and country comparisons.
4. Saving a result and selecting an action.
5. Passwordless sign-in and access recovery.
6. Resuming unfinished work.
7. Weekly check-ins, first day-30 priority gap-filling, later seasonal check-ups, resuming optional full F2 questions, and shared email preferences.
8. Supported contact route.
9. What Copilot can help with, correcting an interpretation, and continuing when AI is unavailable.

### E7b — How we calculate content order

1. What the footprint includes.
2. Individual footprint and shared household allocation.
3. Assessment answers and supported proxies.
4. Defaults and unknown answers.
5. Country-reference sources and comparison limits.
6. Estimate detail as input coverage, uncertainty ranges, and the 80%/five-point display rule. A 100% detail score does not imply a perfectly accurate result.
7. How later check-ups update the estimate.
8. Limits of action-impact claims and footprint comparisons.

### E7c — Privacy content order

1. Privacy summary.
2. Information collected.
3. Purposes of processing.
4. Guest drafts and retention.
5. Account information and storage.
6. Authentication, resume emails and optional reminders.
7. AI data use where applicable.
   Explain current-task model processing, temporary conversation context, confirmed saved inputs and optional remembered preferences separately. State actual retention and access, links to review/reset preferences, deletion controls and any separate optional training-data choice. Saving a result is not blanket consent to provider training.
8. Sharing and access.
9. Export, deletion and privacy-contact options.

### E7d — Terms content order

1. Service scope.
2. Account access and responsibilities.
3. Acceptable use.
4. Estimated nature of footprint results.
5. Limitations of recommendations and comparisons.
6. Service availability and changes.
7. Support and contact information.
8. Links to Privacy and Help.

## Responsive browser arrangement

When the browser narrows, desktop columns stack in reading order. In E2, the running-estimate summary appears above the current question. In E3, the order becomes total, country comparison, recommended action, categories, hotspots and estimate-improvement content. In E7, contents navigation moves above the article.

## Day-30 F2 gap-filling — approved Option B

Decision confirmed by the product owner on 26 October 2026: use integrated priority gap-filling in the first check-up, with remaining full F2 questions optional afterward.

1. Review entry
   The first check-up remains scheduled 30 calendar days after the first durable footprint save. Reuse the existing G2 flow, with at most five primary screens. Explain that the review covers recorded activity, changed circumstances and a short set of important missing inputs.

2. What changed
   Prefill existing E2/F2 answers. Confirm changed answers first, then ask a short prioritized set of unanswered F2 inputs relevant to major footprint drivers. Reuse the shared F2 question components inline rather than opening the complete questionnaire.
   Users who already completed detailed F2 confirm changes and see only remaining relevant gaps. Unknown answers remain legitimate. Provide Complete remaining questions later and allow the check-up to proceed using disclosed defaults or partial coverage where supported.

3. Your new number
   Recalculate from user-confirmed inputs and show the shared result/range/Estimate detail presentation. Successful Save completes the check-up even when full F2 remains unfinished. Missing inputs remain explicit; do not manufacture a quality increase or invent values for required unsupported inputs. Calculation or save failure retains the review draft for recovery.

4. After the review
   Continue with optional action adaptation and goal setting in the existing steps. Retain deferred F2 gaps and offer Continue remaining footprint questions through the existing Footprint improvement entry. The full F2 questionnaire remains independently accessible and prefilled. Deferring it never blocks actions, weekly check-ins or the optional post-review goal.

5. One recurring loop
   All users share the same saved answers, action records and weekly/seasonal review flow. Later check-ups ask changed and relevant remaining inputs progressively. Finishing full F2 later is a refinement, not a second completed check-up or a new starting point merely because inputs became more detailed. It does not restart the review schedule.

Full F2 completion and a 100% Estimate detail score are not requirements for completing the day-30 check-up. The score describes actual supplied input coverage, not measured accuracy. Earlier alternatives and pending-decision wording are superseded by this approved flow.

## Shared integrated Copilot interaction

Specification update: 26 October 2026, applying Bluence_Integrated_Copilot_UI_UX_Report. Copilot is now a shared task-specific collaboration component across E/T/F/P and the check-up. The approved day-30 Option B and ordinary controls remain governing requirements. This is an updated UI specification, not evidence of implemented AI or market readiness.

The component appears inside the originating content block. A user-requested longer discussion may expand into one contextual desktop panel, retaining the same task, draft and saved records. There is no separate chat destination or parallel Copilot action store. During a check-up it remains inline within the existing review step.

Top to bottom:

1. Copilot — About [current question, result, action or review], with the relevant period.
2. Specific task invitation and relevant prompt choices; optional free-text input.
3. A focused clarification only when ambiguity affects the answer or proposal.
4. A concise explanation, editable candidate answer fields, or a supported catalog-action proposal.
5. Basis: relevant confirmed answer/constraint, calculation or catalog/reference information; identify missing information.
6. Edit, task-specific acceptance, Cancel/Dismiss and This is wrong controls. Show a persistent preference choice only when the user is choosing to retain a new preference.
7. Actual save status and confirmed outcome, returned to the originating task. Never describe a model response as a successful save before the owning service confirms it.

Read-only explanations do not require approval. Proposed answer fields are visible and editable before Continue with these answers updates the existing assessment draft. The normal final-save step still controls the saved footprint. An initial AI-fitted action card is its own preview: Try this/Add is the one explicit acceptance, with the same approval checks used in P5. A change to an existing action or goal uses P5's current/proposed review once. Ordinary manual edits retain their direct controls and Undo.

Every numerical result, benchmark, scenario effect and uncertainty range comes from validated services. Copilot cannot invent numbers, convert activity into unconfirmed annual habits or claim a causal reduction. Estimate detail describes actual input coverage, not AI confidence. Modeled assumptions stay identified as assumptions. Unsupported claims use an honest explanation or ordinary fallback.

Use minimum authorized current-task context. Task switching is explicit; conversation text cannot grant permissions or change ownership. Saved assessment facts, activity records and accepted actions remain authoritative. Session statements are temporary unless explicitly saved. Existing decline controls keep their defined behavior; a newly inferred lasting preference requires an explicit Remember this for future suggestions choice, with review/reset in existing account preferences. Do not infer sensitive personal labels or train on conversations by default. Applicable data use and retention are explained through E7/A3/A4 controls.

Automatic invitations are limited to an obstacle, an unexpected check-up change or a long-absence return. They are dismissible and never auto-open a panel. Ordinary recommendation blocks may use confirmed context without adding unsolicited conversation. Other help is user-invoked.

Working: show the actual task being processed while keeping ordinary completion available. Needs clarification: retain input and offer ordinary choices. Failed/unavailable: retain drafts and already saved work; offer Retry or the standard form/catalog/explanation. Stale context: refresh before approval. Failed save: no success message. Keyboard, focus and assistive-technology access must support the same invoke/edit/approve/dismiss path.

Natural-language answer drafting is now included in the specified scope, advancing the report's proposed MVP extension. Release it only after field, unit, period, correction, ownership and failure evaluations pass. Model ranking and inferred estimates are conditional on validated implementation; the UI must not imply these are operating before they are available. Numeric provenance, authorization, duplicate-write protection, first-action simplicity, weekly feedback and successful completion with fallback are required release checks.

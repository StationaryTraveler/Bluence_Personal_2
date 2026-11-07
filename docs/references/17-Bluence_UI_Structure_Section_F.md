# Bluence — UI Structure: Section F — Footprint


Integrated Copilot revision: 26 October 2026. Includes the approved contextual AI interaction model; all content remains a UI specification subject to implementation and release validation.

Revised: 26 October 2026. Includes the seven approved E/F/P journey corrections.

Reference documents: Bluence_User_Journey_V2.0 and Personal_Copilot_Sitemap_V3.0. This structure incorporates the subsequent instructions to preserve the complete F2 Footprint Check, update estimates throughout the assessment, retain country comparison in F1/F7, and adapt the result presentation to the level of input detail.

Desktop web is the primary layout. Only layout, content blocks and their interaction states are specified here.

## Shared estimate presentation

Use the same presentation rule throughout F1, F2 and relevant category or historical detail. The percentage is labeled **Estimate detail**, reflecting input coverage. It is not labeled accuracy, confidence or probability of correctness.

1. Assessment-source line
   “Quick estimate” when the saved result comes from E2.
   “Detailed footprint check” when the saved result comes from the full F2 process.
   For a result updated during G2, show “Updated at your check-up” and the relevant input basis. Reusing a subset of F2 questions does not imply that the full detailed assessment was completed.
   The source alone does not determine the score or guarantee lower uncertainty.
   E2/E3 and footprint references in P2/P5 use this same result and input-detail presentation.

2. Result presentation below 80% input coverage
   Show the calculated footprint range as the main result: “About L–U t CO₂e per year.”
   Add “Add more detail to narrow your estimate” and an Improve link.
   A central estimate, if useful, remains available in the explanation rather than competing with the range.
   Do not display a numerical detail percentage in this state.

3. Result presentation at 80% input coverage or above
   Show the central estimate: “About X t CO₂e per year.”
   Immediately below it, show “Estimate detail: 80%,” “85%,” “90%,” “95%” or “100%,” according to the calculated coverage band.
   Add an Improve link where relevant inputs can be refined.
   At 100%, use “Review my inputs” instead of promising further percentage improvement.
   The uncertainty range remains accessible through “About this estimate.”

4. About-this-estimate content
   Explain the percentage as the share of applicable calculation inputs supplied through supported user answers instead of generic defaults.
   State that it describes input detail, not measured accuracy.
   Show supplied-input and required-input counts, important remaining defaults, assessment coverage and the calculated range when available.
   Explain: “100% detail means all required inputs are supplied. Emission factors and the calculation method still carry uncertainty.”

5. Percentage calculation and display rule
   Calculate the input-coverage percentage from supplied applicable calculation inputs divided by all applicable inputs required for the supported footprint model.
   Use the same underlying input definitions for E2 and F2. Do not use the number of questionnaire pages completed.
   Count only valid user-provided inputs, including supported proxy inputs used directly by the model. Derived values supplied through generic defaults do not count as user-provided inputs. Duplicate, optional personalization-only and irrelevant questions do not add points.
   Apply the 80% threshold to the underlying unrounded score. Display eligible scores rounded down to the nearest five percentage points. Display 100% only for complete applicable input coverage.
   These are product-defined detail bands, not validated accuracy bands. Do not calculate the score as 100 minus uncertainty or award fixed percentages for completing E2/F2.

6. Unavailable-calculation state
   If a numerical range cannot be defensibly calculated, show the central estimate with “Uncertainty not yet quantified,” or an explicitly partial result where necessary. Do not fabricate interval endpoints to satisfy the below-80% layout.
   If the detail score is unavailable, show “Estimate detail not yet assessed” with the relevant Improve entry.
   F2 can reduce uncertainty by replacing material assumptions, but the result may remain unchanged or uncertainty may increase when new information exposes an earlier gap. Explain actual changes without awarding automatic progress.

The revised presentation replaces the previous separate Rough / Good / Detailed indicator. Questionnaire completion progress is labeled separately from Estimate detail.

## F1 — Footprint overview

1. Application header
   Bluence identity on the left.
   TODAY, FOOTPRINT and ACTIONS navigation.
   Account menu on the right.

2. Page introduction
   “Your footprint.”
   Date of the latest saved estimate.
   Country or region and per-person basis.
   Assessment-source line: Quick estimate, Detailed footprint check, or Updated at your check-up, with its actual input basis.

3. Footprint-result block
   Use the shared estimate presentation: a range below 80% input coverage; a central estimate and five-point Estimate detail band at 80% or above.
   State the period represented by the result.
   Show an explicit partial-coverage notice where applicable.
   Include one sentence explaining the defaults actually used.
   “About this estimate” opens its explanation.
   Within the explanation, Ask about this result invokes contextual Copilot with prompts such as Why is this category high? or Which missing answer matters most?
   Show the explanation, relevant saved answers and calculation/method basis. The standard result and reference remain available independently. Quantified sensitivity comes from the calculation service; absent that, disclose the documented prioritization rule.

4. Country-reference block
   Embed F7 immediately below the result.
   Show the user estimate or range alongside the country average.
   Include country, reference year and source.
   “About this comparison” opens F7 details.
   Where the user's range crosses the reference, explain that it overlaps the country average rather than making a definite above/below claim.
   If boundaries are incompatible, show “Not directly comparable” without a percentage difference.

5. Category breakdown
   Category contributions followed by a labeled numerical list.
   Each entry contains category name, estimated annual contribution and a link to F4.
   Where category shares are shown, explain that they use central estimates and may vary within the uncertainty range.
   Identify unestimated categories separately rather than assigning zero.

6. Two main hotspots
   Two adjacent desktop blocks.
   Each contains the category, main driver and one relevant action.
   Include the action instruction, why it fits and Add.
   If already accepted, show View action.
   Identify limitations on the user's control where relevant.

7. Improve-estimate block
   Identify the missing or approximate inputs most useful to improve next, prioritizing material drivers rather than easy percentage gains.
   “Improve my estimate” opens F2 at the relevant question.
   “Review my full footprint check” opens the complete F2 process with existing answers prefilled.
   When questions were deferred during a check-up, label the existing improvement entry “Continue remaining footprint questions” and open the next relevant saved gap. Keep this distinct from check-up completion status.
   Do not repeat a competing quality score here.

8. Further-detail links
   Footprint over time opens F8.
   Assumptions opens the relevant explanation.
   How we calculate opens the shared methodology page.

9. Conditional status block
   Pending update: show calculation status while retaining the last saved result.
   Failed update: offer Retry without replacing the saved footprint with zero.
   No saved estimate: offer Continue my estimate or Estimate my footprint.
   A newly saved F2 estimate or completed check-up refreshes hotspot suggestions. Existing accepted actions, their dates and activity history remain intact.
   If an accepted action appears less suitable, offer a plain explanation and optional adaptation through P3/P4, rather than replacing it silently.

10. Footer
    Help, How we calculate, Privacy and Terms.

## F2 — Footprint Check: Improve your estimate

F2 preserves the detailed assessment process. Users can review the complete questionnaire or enter a specific question. Existing E2/F2 answers are reused and prefilled. A check-up embeds relevant F2 questions without requiring the user to leave the check-up flow.

E2, full F2 and G2 use the same saved answers. Full F2 is optional before a first action, and a weekly check-in never requires completing F2. Approved Option B embeds priority gap-filling in the day-30 check-up; remaining full F2 questions can be completed later, as described in the approved day-30 block.

1. Application header and return
   Retain application navigation and account access.
   Provide Return to previous page or Close flow.
   Preserve the originating page and any saved assessment draft.

2. Flow header
   “Footprint Check — Improve your estimate.”
   Short purpose statement.
   Current state: new detailed check, continuing a draft or updating specific information.
   Reference period, estimated remaining time and actual draft-save status.

3. Progress and section navigation
   Introduction.
   Home & Energy.
   Daily Mobility.
   Flights & Long-Distance Travel.
   Food & Diet.
   Water Consumption.
   Goods & Services.
   Review.
   Completed sections can be reopened. Irrelevant follow-ups are skipped.

4. Introduction
   Explain what the check calculates and which categories are supported.
   State that the result represents one person, including an allocated share of relevant household consumption.
   Explain the reference period.
   List useful information: energy use or bills, travel, flights, dietary pattern, water use and significant purchases.
   Explain that supported approximations and I don't know are available.
   Start or Resume opens the first relevant question. Targeted editing bypasses the introduction.

5. Assessment layout
   Two desktop columns.
   Left: current question, prefilled answer, explanation and controls.
   Right: running estimate and the inputs/defaults currently affecting it.
   Present one primary question at a time, with relevant follow-ups only.
   When these components are embedded in G2, retain the current check-up step rather than opening the full F2 introduction or navigating away.
   Help me answer appears within the current question and reuses E2's Copilot component.
   Show the active question and period, optional free-text input, needed clarification, editable proposed field values/units and Continue with these answers or Cancel.
   If multiple fields are extracted, identify each affected answer before confirmation. A suggestion is not a saved fact. Confirmed fields update the same assessment draft and existing running estimate; the final save still controls the saved result.
   Use only supported proxies and actual supplied facts. Inferred defaults remain labeled assumptions and do not earn input-detail points. Retain ordinary fields and unknown choices when AI is unavailable.

6. Running-estimate panel
   “Your estimate so far.”
   Shared estimate presentation, using a range or central estimate plus Estimate detail according to the current score.
   Period, coverage and not-yet-saved-as-current-result notice.
   After every valid accepted answer, recalculate the footprint and detail score, even if the displayed value remains unchanged.
   At each section completion, show the updated total and the contribution of the completed topic where calculated.
   The panel switches presentation when the underlying score crosses 80% in either direction.
   Show updating, unavailable or failed calculation status accurately; retain the last valid result, identified as previous if it no longer matches the edited answers.
   Do not require a country-average comparison in this panel.

7. Home & Energy
   Household size, home type, floor area where needed and allocation of shared consumption.
   Electricity consumption: known usage, supported bill-based or typical-use proxy, or unknown.
   Electricity source and supported renewable arrangements.
   Primary and secondary heating, energy type and relevant consumption.
   Cooling and seasonal use where relevant.
   Supported efficiency characteristics, including insulation and appliances.
   Section review identifies important missing inputs and allows Continue without demanding unsupported detail.

8. Daily Mobility
   Typical travel period.
   Walking and cycling where relevant.
   Public transport modes and frequency/distance.
   Personal vehicle type, fuel/powertrain, efficiency where known, occupancy and distance.
   Taxi, ride-hailing or shared mobility.
   Relevant commuting and remote-work information.
   Section review and updated running estimate.

9. Flights & Long-Distance Travel
   Flights during the stated period.
   If none, skip flight detail.
   Otherwise: supported routes or distance categories, number of trips, one-way/return and class.
   Relevant intercity rail, coach and other supported travel.
   Section review and updated running estimate.

10. Food & Diet
    General dietary pattern.
    Relevant meat and dairy frequencies.
    Supported food-sourcing information.
    Eating outside the home where included in the method.
    Food waste and disposal where supported.
    Section review and updated running estimate.

11. Water Consumption
    Data availability: known meter/bill, supported estimate or unknown.
    Household volume, period and personal allocation.
    Relevant shower/bath, laundry and dishwashing inputs when required by the method.
    Significant outdoor uses where relevant.
    Supported efficiency or reuse information.
    Explain whether the answers contribute to calculated carbon emissions or are retained only as contextual water information. Do not add an unsupported carbon amount or count contextual-only answers toward Estimate detail.
    Section review and updated running estimate.

12. Goods & Services
    Clothing purchases and supported reuse information.
    Electronics purchases/replacement.
    Furniture, appliances and significant household goods, with allocation where required.
    Other supported personal goods and services.
    Section review and updated running estimate.

13. My situation changed
    Entry available within relevant questions.
    Reveal applicable questions for moving home, household changes or other material circumstances.
    Explain any effect on comparability in the final review before saving.
    Keep this within F2; do not create a separate baseline-revision flow.

14. Question controls and draft handling
    Back and Continue.
    Update the estimate after an accepted answer; moving between sections does not require recalculating unchanged answers into a different value.
    Save and continue later retains the draft without replacing the current saved footprint.
    Close returns to the origin; if edits are unsaved, offer Continue editing or Leave with an explanation of retained work.

15. Questionnaire review
    Summary of sections and answers, with direct Edit links.
    Separate supplied information, supported approximations, generic defaults and unknown inputs.
    Identify high-impact missing information without requiring unrelated answers.
    Show reference period, household allocation, included categories and limitations.
    Use the shared detail explanation without turning questionnaire progress into an accuracy claim.
    If prior P3 activity is relevant, show it as a dated prompt such as You reported these journeys; has your regular travel changed? The user confirms any proposed calculation input.
    Preserve the distinction between one-time activity, a lasting habit and a corrected answer. No automatic annual extrapolation or duplicate emissions deduction from check-ins.
    Provide Calculate updated footprint, Continue later and Back.

16. Final calculation state
    Calculation in progress, followed by actual result or recoverable failure.
    Keep the submitted answers available.
    Retain the previous saved estimate until the new result is saved.

17. Final result preview
    “Your updated footprint.”
    Shared result presentation: calculated range below 80% input coverage; central estimate with an 80/85/90/95/100% Estimate detail label at or above 80%.
    Date, annual/per-person basis and coverage.
    Assessment source: Detailed footprint check.
    About this estimate opens the calculation-range and input-detail explanation.
    Compare with the previous saved estimate only where periods and coverage are compatible.
    Main category changes and a brief explanation of changes in input detail or quantified uncertainty.
    Help me understand this change offers a bounded Copilot explanation from the prior/proposed calculation and supported decomposition. Identify activity, corrections or methodology changes only when evidence supports that split. Display missing evidence honestly; no generated causal claim or invented uncertainty reduction.
    Identify corrections or improved data separately from lifestyle changes.
    A lower displayed number is not presented as proof of better accuracy.
    The country benchmark remains in F1/F7 and need not appear in this step.

18. Conditional comparison notice
    Before Save, explain material changes in boundary, household allocation or coverage.
    Where documented rules require a new comparison starting point, explain why and state that original history is retained.
    Provide Back to edit or Save with the stated consequence.
    If an existing goal needs review, offer a later review link without changing it automatically.

19. Save and completion
    Save updated estimate and Back to answers.
    After success, show what was saved.
    View my footprint opens F1 with the saved result and country benchmark.
    Return to previous page restores the originating context.
    No separate starting-point confirmation, goal-setting or plan-approval step.
    Refresh unaccepted P1/P4 suggestions from the new saved result; preserve accepted actions and offer voluntary changes when relevant.
    A standalone F2 update is an estimate refinement, not a completed check-up. It does not unlock the post-check-up goal by itself, consume a seasonal review, or move the scheduled day-30/seasonal check-up date.
    After an already completed day-30 review, finishing deferred F2 questions does not create another review entry or remove existing access to optional goals.

20. Failure and recovery
    Save failure: retain answers, show unsaved state and Retry.
    Calculation failure: retain the submitted draft and prior valid footprint; offer Retry calculation.
    Missing required information: link directly to the question.
    Session interruption: resume the saved section after sign-in.
    A completed F2 process does not force the detail score to 100% or invent a narrower range.
    If saved answers change while an F2 or G2 draft is open, identify the affected questions and let the user reconcile them without silently overwriting newer work.

## F3 — Retired: first-baseline confirmation

No separate page, flow or confirmation block.

The first saved estimate establishes Your starting point automatically. Its date and value appear in F8. An old F3 link leads to F1 without a mutation or confirmation ceremony.

## F4 — Category and hotspot detail

1. Application header
   TODAY, FOOTPRINT and ACTIONS navigation, with account access.

2. Return link
   Back to Footprint or the originating page.

3. Category introduction
   Category name, included activities, estimate date and reference period.

4. Category-result block
   Estimated annual contribution and coverage.
   Use a category range or category Estimate detail only if those values are separately calculated for this category. Never reuse the whole-footprint percentage as the category score.
   If category detail scoring is available, use the shared 80% presentation rule.
   Otherwise show the supported category estimate/range and explain relevant defaults, with Improve these answers.
   Category share is identified as based on central estimates where applicable.

5. Main content area
   Two desktop columns.
   Left: category drivers and relevant answers.
   Right: one recommended action.

6. Driver breakdown
   Contributing activities and supported values.
   Links to relevant answers in F2.

7. Recommended action
   Action name, instruction, why it fits, impact size and basis, effort, cost and timeframe.
   Add, or View action if already accepted.
   Why this and This doesn't fit me.

8. Control and constraints
   What you can change.
   What depends on others.
   Relevant practical limitations.

9. Answers and assumptions
   Relevant saved answers, defaults and material missing information.
   Improve these answers opens the appropriate F2 question.

10. Category change after a check-up
    Previous and current comparable estimates with their dates and limitations.
    Related reported activity under What you did, alongside What changed.
    Show the activity period and link to the corresponding P3 action. Review-period summaries reuse existing check-ins rather than recording them again.
    Do not attribute exact avoided emissions to an individual completed action.

11. Contextual Copilot entry
    Available for unsuitable actions or unexpected changes.
    Show the current category/action context, explanation or proposed alternative, and a return control.
   Ask about this category supports bounded follow-ups using its actual drivers and saved answers. Make this fit me uses the same action-constraint interpretation as E3/P4.
   The response supplies a short explanation or supported action proposal with its basis. Answer edits go through F2; accepted action changes go through P5. No direct AI edit of the category total.

12. Supporting links
    Assumptions, How we calculate and Footprint over time.

## F5 — Retired: technical estimate and baseline history

No technical history page or snapshot-detail screen.

Consumer comparisons belong in F8. Check-up summaries belong in G3. An old history link can lead to F8. Factor versions, technical snapshot records and audit trails are not consumer content blocks.

## F6 — Retired: baseline revision

No separate baseline-revision page or wizard.

My situation changed remains within F2 and the check-up flow. Effects on comparison are explained before saving. An old F6 link leads to F1 with its Improve and full Footprint Check entries.

## F7 — Country reference

F7 is embedded in F1 and E3. It is not a separate primary destination and is not required in the F2 final-result preview.

Embedded block, top to bottom:

1. Compared with the country average.
2. User estimate or range alongside the country average, with the same stated units and per-person basis.
3. Comparison statement where supported. If the user's range crosses the reference, explain the overlap rather than claiming a definite rank.
4. Not directly comparable with a reason when coverage or boundaries differ.
5. Country, reference year and source.
6. About this comparison opens the detail panel.

Reference-detail panel, top to bottom:

1. About this comparison and Close.
2. User estimate/range and assessment date.
3. Country average and reference year.
4. Included categories, full-footprint or matched-subset coverage, and per-person basis.
5. Source organization, dataset/publication, source link and relevant date.
6. Known reference uncertainty where supplied; do not assign a personal input-detail percentage to the country average.
7. Relevant limitations and How we calculate.
8. Ask about this comparison: optional grounded follow-up using the same reference dataset, source year, coverage and saved user result. Copilot cannot substitute another benchmark or invent a compatible average.

Country reference figures come from supported reference data. They do not change merely because personal answers become more detailed. Changed calculation coverage can change which reference subset is comparable. If a reference is temporarily unavailable, show a validated dated fallback where appropriate or an honest unavailable state.

## F8 — Footprint over time

1. Application header
   TODAY, FOOTPRINT and ACTIONS navigation, with account access.

2. Return link
   Back to Footprint.

3. Page introduction
   Footprint over time.
   Explain that comparisons use the starting point and completed check-ups.

4. Starting-point block
   Starting-point date, saved annual result and coverage.
   Preserve the original range/detail presentation as recorded; do not retrospectively award it the latest detail score.
   If a material life change established a new comparison reference, identify the date and reason while preserving earlier history.

5. Comparison summary
   Latest completed check-up date and compatible earlier reference.
   Earlier and later annual estimates/ranges.
   Estimated difference with relevant uncertainty limitations.
   If ranges overlap materially, explain that a definite decrease/increase is not established from the ranges alone.
   If results are incompatible, explain why a direct difference is unavailable.

6. Trend block
   Starting-point marker followed by one dated entry per completed check-up.
   Each entry opens its saved result, range/detail explanation and G3 summary.
   Mark corrections, coverage changes and material life changes.
   Where a common chart needs central values, explain that entries use central estimates and expose their ranges in the entry details.
   Separate incompatible comparison periods.

7. Category comparison
   Supported earlier and later category estimates.
   Identify categories that changed and those that cannot be compared.
   Category links open F4.

8. What changed and what became more detailed
   Explain relevant activity changes, corrected answers and calculation changes separately from improved input coverage.
   A higher Estimate detail percentage is not itself a carbon reduction.
   If the causes cannot be separated, say so.
   Annualized rates are not described as already achieved annual savings.
   Help me understand this change opens the shared Copilot component for these exact result records and periods.
   Offer bounded follow-ups, supported activity/factor/correction explanations and links to relevant evidence. A coinciding action is not proof of cause. If decomposition is unavailable, give the standard comparison and say the causes cannot be separated. No AI confidence percentage is derived from Estimate detail.

9. Completed check-ups
   Date, saved result and brief summary for each completed check-up.
   View check-up opens G3.
   Do not present draft calculations or every F2 edit as a completed check-up.

10. Next check-up
    Scheduled date, View schedule and Start or Resume check-up when appropriate.
    First check-up remains 30 days after the first durable footprint save, including save-only users who add an action later. Completing F2, adding/swapping an action or changing a goal does not restart that clock.
    Subsequent check-ups occur approximately every three months after the last completed check-up, using explicit local dates. Users may reschedule deliberately.
    Show Ready when you are for a missed date; keep weekly action controls available. A ready check-up invitation replaces that week's routine email, not the underlying action records.

11. Supporting links
    Review my full footprint check and How we calculate.

Before the first check-up, show the starting point, next scheduled date and an explanation of when comparisons become available. Do not fabricate a trend or percentage improvement.

## Responsive browser arrangement

Desktop columns stack in reading order when the browser narrows. In F2, the running-result summary appears above the current question. In F4, the category result is followed by the recommended action and then driver details. Reference and estimate-explanation panels return to their originating content without additional stacked layers.

## Shared check-up handoff

G2 remains the review flow launched from Today or the check-up links in F8. It has at most five primary screens under the approved short-review design:

1. What you did: prefill relevant P3 activity, dates and obstacles for the review period; allow corrections inline without duplicating check-ins. Missing check-ins remain unreported rather than zero activity.
2. What changed: confirm prior answers and edit relevant inputs through embedded F2 components. At day 30, also ask a short prioritized set of relevant high-impact unanswered F2 inputs, with Complete remaining questions later. Already-detailed users confirm changes rather than repeat the questionnaire. Show reported activity only as a prompt; the user confirms any change used for calculation.
   Add optional Tell me what changed within this existing step. Copilot turns the description into visible, editable F2 answer proposals, with period and units, and asks material clarifications. Confirm only the proposed fields the user accepts; Continue remaining questions later remains available. All values used for recalculation follow ordinary validation. A moving-home statement does not silently reset a reference.
3. Your new number: recalculate and show the shared range/detail presentation, comparable changes and limitations. Successful Save completes the check-up and adds its result to F8. A correction or better input coverage is not presented as an action-caused carbon reduction.
4. Your next step: reuse P3 controls, P4 alternatives and relevant P5 approval inline for keep, pause, reschedule or swap. Manual changes apply with Undo; Copilot changes require approval. Do not navigate through separate action pages or stacked panels.
5. Your goal, optional: reuse P2 and the P5 goal review inline after the review has completed. Skip does not invalidate the saved check-up.

An estimate saved in step 3 completes the check-up even if full F2 questions, action adaptation or goal setting are deferred. Retain the unfinished optional next-step choice for later, without blocking the next review schedule. Save failures preserve drafts and the previous valid estimate.

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

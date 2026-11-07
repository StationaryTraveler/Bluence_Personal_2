# Bluence — UI Structure: Section P — Actions


Integrated Copilot revision: 26 October 2026. Includes the approved contextual AI interaction model; all content remains a UI specification subject to implementation and release validation.

Revised: 26 October 2026.
References: Bluence_User_Journey_V2.0, Personal_Copilot_Sitemap_V3.0, the updated E and F UI structures, and the seven approved journey-audit corrections. Desktop web is the primary layout; this document specifies layout, content blocks and interaction states.

The recurring loop is: save an estimate and choose one action; act and check in weekly; complete the first check-up 30 days after the first durable footprint save; confirm changed inputs and recalculate; adapt actions; continue weekly activity and seasonal check-ups approximately every three months after the last completed check-up.

Option B is approved: fill priority F2 gaps inside the day-30 check-up, with remaining questions optional afterward. A completed review unlocks optional goals even when the full F2 questionnaire remains unfinished. All seven journey-audit corrections remain in force.

## Shared timing and feedback content

1. Action timing and reporting timing
   Each action has its own start, occurrence/recurrence and optional finish date.
   Weekly check-ins use the account's local timezone and a clearly named reporting period with start and end dates. The check-in day and next date are shown before the user records an outcome.
   Offer the first weekly check-in within seven calendar days of first action acceptance. Default to seven days later, with an earlier day available. The user may record actual activity sooner.
   Later accepted actions join the same weekly rhythm; explain any shorter first reporting period. They do not start separate weekly reminder streams.
   Changing the check-in day affects future periods; retain previously recorded dates and make the transition period explicit rather than overlapping or dropping activity.

2. What a check-in records
   Offer Recorded activity, Did not do this, and An obstacle, as appropriate for the action.
   No submitted check-in is Unreported, not a zero or a failure.
   A recurring habit can have several occurrences within a week and one summary. The summary reuses those records rather than creating duplicate occurrences.
   When a period already has activity, show it before asking for additions or corrections. Label Report more and Edit this record distinctly where needed.

3. What feedback means
   Every saved check-in returns what was recorded, cumulative activity for the stated period and one suitable next step.
   An occurrence does not finish an ongoing habit. Done applies to a finite action or an explicitly finished commitment.
   What you did is activity. What changed is a recalculated footprint from confirmed assessment inputs. Check-ins, completed actions and improved input-detail scores never directly subtract emissions.

4. Reminders and review dates
   Show whether optional weekly email is enabled, its local day/time and a link to the shared account preference. Default off.
   At most one routine email digest per local week covers relevant active actions. A ready check-up invitation replaces that week's routine digest. Paused actions do not generate routine prompts.
   Email preferences and the in-app task schedule are identified separately; disabling email leaves in-app check-ins available.
   The first check-up remains anchored 30 days after the first durable footprint save, including users who initially save without an action. New actions, swaps, goals and F2 refinements do not restart it.
   A ready review never blocks action access. Use Ready when you are after a missed date.

## P1 — Actions overview

1. Application header
   Bluence identity on the left.
   TODAY, FOOTPRINT and ACTIONS navigation.
   Account menu on the right.

2. Page introduction
   Your actions.
   Choose changes that fit your life and check in as you try them.
   Number of active actions.

3. Weekly reporting strip
   Reporting-period dates, next check-in date and relevant recorded-activity summary.
   Access to the shared weekly check-in schedule and email preference.
   A returning user sees the current period without a backlog of missed tasks.
   Today remains the owner of the single prioritized next task; this strip is contextual information for the actions listed below.

4. Current actions
   Up to three To do/Doing actions.
   Each block contains action name/category, instruction, state, occurrence timing, reporting-period dates and the latest check-in summary.
   Check in uses P3's same interaction; View action opens P3.
   Show existing activity for the period so the user can edit a record or report an additional occurrence intentionally.
   Do not report missing check-ins as failed actions.

5. Suggested actions
   Short selection based on the latest saved footprint, known circumstances and prior decline reasons.
   Each suggestion includes what to do, why it fits, hotspot, impact size/basis, effort, cost and timeframe.
   Add accepts directly for an authenticated user, with confirmation and Undo.
   Why this and This doesn't fit me provide context and alternatives.
   The first suggestion is feasible to try within a week. Full F2 completion and goal setting are not prerequisites.
   At three active actions, ask which existing action to pause before adding another.

6. Alternatives entry
   Find another action opens P4 in context.
   Remember declined suggestions and avoid immediately repeating them.
   Refine these suggestions opens Copilot in the existing suggestion block. Use current confirmed answers and explicit constraints to return a short eligible set.
   Separate interpreted preferences from confirmed ones, offer correction and apply hard constraints before ranking. Do not require conversation before adding an ordinary catalog action.

7. Optional goal
   Offered only after the first completed G2 check-up, normally the day-30 review. A standalone F2 update does not unlock it.
   Completion of the review is sufficient even when the user deferred the remaining full F2 questions under approved Option B.
   With no goal: Want a target?, a brief optionality explanation, Set a goal and Not now.
   With a goal: statement, reference estimate, target date and View or edit goal.
   Footprint references use Section F's range/Estimate detail presentation, with input detail kept distinct from goal progress.

8. What you did
   Factual summary for a named period and dated activity/check-ins.
   Include reported obstacles without framing them as failure.
   Entries link to P3, with corrections reflected in the totals.
   This is not an exact saved-carbon counter or an aggregate progress score.

9. Done and Paused
   Expandable lists with action name, relevant date and View action.
   Paused actions offer Resume. If resuming would exceed three active actions, show the same choice to pause another action.
   Preserve prior activity when an action is paused, swapped or finished.

10. Check-up connection
    Show the next check-up date and View check-up schedule.
    When ready or partially completed, offer Start check-up or Resume check-up in the existing G2 flow.
    The review remains optional to enter now; it does not block Check in.

11. Empty and refreshed states
    No active actions: one feasible suggestion with Add.
    No check-ins: explain that reports will appear after the first check-in.
    Nothing currently due: say so and retain the current-period summary.
    No suitable suggestion: offer relevant alternatives without inventing fit.
    After a new F2 result or check-up: refresh suggestions, retain accepted actions and explain optional adaptations when their relevance changes. Do not silently change them.

12. Supporting links
    View my footprint, Help and Reminder preferences.

## P2 — Optional goal

1. Header and return
   Independently: retain application navigation and Back to Actions.
   Within a check-up: retain that flow's current step and saved work.
   Before a first completed G2 check-up, direct entry returns to Actions with an explanation; it does not force a review or goal.

2. Introduction
   Your goal.
   Explain that it is optional and revisable.

3. Starting context
   Saved footprint/reference date, latest check-up findings and relevant actions/circumstances.
   Use Section F's result presentation: calculated range below 80% input coverage or central estimate and Estimate detail band at or above 80%.
   Input-detail percentages describe coverage, not goal achievement or measured accuracy. Do not apply the detail score to an action-impact forecast.

4. Suggested goal
   Supported target/timeframe and why it fits actual circumstances.
   No guaranteed-achievable claim.
   If a quantified target is unsupported, offer an action-based commitment or deciding later.

5. Goal entry
   Editable target and date, with a plain-language interpretation.
   Use existing answers and decline feedback; no repeated constraints questionnaire, target pathway or gap-coverage display.
   Help me choose offers an optional contextual explanation of supported targets or interprets a stated preference, such as a low-cost commitment. Show editable target/date and their basis. Scenario values remain service-generated. No guarantee of attainability or AI-authored numeric forecast.

6. Feasibility explanation
   Assumptions, controllable actions and external dependencies.
   Any forecast is a possible future outcome, not already achieved savings.

7. Review and optional exit
   Review goal opens P5; current/proposed values are shown for a change.
   A first goal shows the proposed commitment without inventing a prior goal.
   Not now or Cancel returns to origin; no effect on the completed review.

8. Save outcome
   After approval, show the recorded goal and return to Actions or finish the check-up.
   Saving a goal does not change the calculated footprint or review schedule.
   If material circumstances affect the reference, identify what needs review and retain the recorded goal until the user approves a change.

Within G2, entry and P5 approval stay inline in the optional fifth screen. They never open nested flows. The review has already completed when its new estimate was successfully saved.

## P3 — Action detail and check-in

1. Application header
   Application navigation and account menu.

2. Return link
   Back to Actions or the originating page.
   When embedded in G2, remain in the check-up rather than navigating to P3.

3. Action introduction
   Name, category and one of To do, Doing, Done, Paused.

4. Action instruction
   What to do, relevant frequency/duration and concrete first step.

5. Main content area
   Two desktop columns.
   Left: explanation, fit and supporting information.
   Right: timing, current-period activity and check-in controls.

6. Why this action
   Hotspot, relevant answer/preference, fit and practical limitations.
   An F2 update can trigger an optional relevance notice, not an automatic swap.

7. Expected effect
   Impact size, its basis, effort and cost.
   Supported numerical scenarios are labeled typical/modeled.
   Completion is not converted into an exact saved-carbon claim.

8. Timing and reminders
   Action start and occurrence/recurrence, separately from reporting frequency.
   Current reporting-period start/end, next weekly check-in date and most recent check-in date.
   Reschedule action and shared weekly check-in schedule access.
   Email enabled/disabled, chosen local day/time and Change reminder preferences.
   Pausing suppresses future routine prompts; previously reported work remains.
   A review invitation in place of the routine digest does not erase action timing or recorded activity.

9. Current-period record
   Existing occurrences, totals and any explicit Did not do this report.
   Edit a record and Report another occurrence where relevant.
   Unreported is distinct from zero. Multiple reports should not accidentally count the same event twice.

10. Check-in entry
    How did it go?
    Report an occurrence/progress, Did not do this, or An obstacle as appropriate.
    A known unambiguous occurrence may be one tap. Quantity/date inputs use a short inline form.
    Finishing a recurring commitment is an explicit separate choice, not an automatic result of checking in.

11. Check-in details
    Date/period, necessary quantity/frequency and optional note.
    Save and Cancel.
    Support actual early reporting and relevant prior-period correction without shifting the record into the wrong week.

12. Immediate feedback
    State what was saved, updated period-to-date activity and one suitable next step.
    Acknowledge the first check-in briefly.
    An obstacle offers continue, pause or an alternative without blame.
    Show the next check-in date. The next scheduled check-up remains visible through the shared schedule connection.
    Corrections/Undo refresh summaries in P1, Today and subsequent review prefills.
    A saved weekly occurrence leaves a recurring action Doing.

13. State controls
    To do: start or record first activity.
    Doing: check in, pause, reschedule or explicitly finish the commitment.
    Paused: resume, reschedule or find an alternative, with the capacity choice where needed.
    Done: review/correct the recorded completion.

14. Adapt action
    This doesn't fit me and Find an alternative open P4.
    Direct manual pause, resume, reschedule, remove or swap applies with confirmation and Undo.
    Copilot-authored changes use P5 approval.
    Help me adjust this is the explicit Copilot entry after an obstacle. Show action/period context, optional free text, focused clarification and a supported keep/pause/reschedule/swap proposal.
    Treat a temporary obstacle as temporary unless the user explicitly chooses to retain a longer-term preference. Do not infer sensitive personal labels from free text or absence.
    Explain fit using the stated constraint and catalog/scenario basis. Review changes in P5 once, with Edit, Approve or Cancel. If nothing suitable is supported, offer keep, pause or ordinary alternatives rather than inventing a custom action.
    Keep preserved activity history linked to the prior action when replacing it.

15. Activity history
    Dated check-ins, occurrences, explicit non-activity reports, obstacles, timing changes and state changes.
    Date/period and correction access per record.
    A check-up reads these records; it does not create duplicates just to populate its summary.

16. Check-up handoff
    The review's What you did step prefills relevant activity/obstacles for its stated period.
    Users confirm or correct it inline, keeping one authoritative activity record.
    The What changed step may suggest reviewing a related F2 answer. Reported activity is a prompt, not an automatically accepted calculation input.
    Do not extrapolate a few avoided journeys into a permanent annual habit without user-confirmed duration/frequency.
    Related category results can then appear beside the action history without claiming proof of causation.

17. Recovery
    Failed save retains input and offers Retry, without a success summary.
    Expired session uses E4 and restores the action/reporting period after authentication.
    Unavailable AI returns curated alternatives and ordinary controls.
    Missed check-ins or long absence receive gentle re-entry, not an accumulated failure count.

18. Supporting links
    Related footprint category, expected-effect explanation and Help.

## P4 — Curated alternatives

P4 is contextual in E3/F4/P1/P3 or inline in the check-up. It is not a separate explorer destination.

1. Header
   Find an action when adding; Find an alternative when replacing.
   Close/Back restores origin or the current check-up step.

2. Context
   Category/hotspot, current action if replacing, known constraint/decline reason and latest saved result basis.
   Refresh unaccepted suggestions after F2 or a check-up changes the calculation context.

3. Suitability feedback
   One-tap Not for me, Cannot afford, Already do it, Not now.
   Remember reasons. Already do it adjusts suggestions, but changes an F2 answer only after the user confirms it.
   A free-text constraint is interpreted visibly and can be corrected. Remember this for future suggestions is offered for a newly inferred persistent preference; existing explicit decline choices retain their defined scope.

4. Alternative list
   Short supported catalog list with instruction, why it fits, impact/basis, effort, cost and timeframe.
   Add or Replace, with Why this.
   No custom-action form or new constraints questionnaire.

5. Acceptance and authentication
   Guest from E3: record the selected alternative, open E4 and preserve the result, action and origin. After verification, save and add together, then show Today. No repeated action choice or plan approval.
   Authentication cancellation restores E3/P4 selection while the draft remains available.
   Authenticated user: manual Add/Replace applies directly with confirmation and Undo.
   An alternative cannot create a second copy of an already accepted action; show View action where appropriate.

6. Capacity choice
   Before exceeding three active actions, ask which current action to pause. Cancel leaves the active set unchanged.
   A replacement preserves the former action's history.

7. Copilot entry
   Tell us what doesn't work, with optional free text.
   Supported alternatives only. A Copilot-authored change proceeds through P5 approval.
   Top to bottom in Copilot: current action/category and task; optional constraint input; clarification if necessary; eligible alternatives with shared comparison fields; fit explanation and basis; editable proposal; review/acceptance and dismissal.
   For an initial AI-fitted action, the visible card is the inline proposal preview and Try this/Add accepts it once using P5-equivalent validation. Do not add a second approval after E4.
   An AI-proposed change to an accepted action shows current/proposed values in P5. A manually chosen unchanged catalog action continues to use direct acceptance.
   During G2, show the proposal review inline in Your next step, without leaving the check-up or stacking panels.

8. No suitable option
   Explain, then offer keep, pause or return. Do not invent a recommendation.

## P5 — Proposed change

For Copilot-authored changes and goal changes. Manual action edits use direct confirmation/Undo.

1. Review header
   Review proposed change, with Back or Cancel.
   In G2, retain the existing step and saved progress.

2. Change context
   Action or goal; originating record; reason/source of proposal.

3. Current and proposed content
   Adjacent desktop blocks with old/new action and timing or goal and date.
   For a first goal, state that no goal is currently set.

4. Why it fits
   Obstacle/objective, relevant answer or check-up finding and meaningful benefit.

5. Consequences
   Add/change/pause/replace, timing/recurrence, effort/cost and any action needed to remain within capacity.
   No proposed change silently moves the check-up anchor or replaces the starting point.

6. Expected effect
   Supported impact or scenario comparison, assumptions and limits.
   Footprint reference values use Section F's range/detail presentation. Input-detail percentages do not describe forecast certainty or action achievement.
   Approval does not itself reduce the saved footprint.
   Offer a bounded Ask about this proposal explanation without leaving the current review. Explain supported consequences and missing information, not internal model reasoning. If the user changes a constraint, regenerate and review the affected proposal before approval.

7. Approval
   Approve change or Save goal, Cancel and Return to editing.
   Closing leaves the current action/goal unchanged.

8. Saving and completion
   Actual save status, confirmation and origin restoration.
   Failure retains the proposal and offers Retry.
   Stale proposals show the changed context and require refresh/review before approval.
   E4 restores the pending authorized proposal after session expiry; it does not silently approve it.

Only one contextual panel is open at a time. U1 transitions to P5 in place. Within G2, action proposals stay inline in step 4 and goal proposals inline in optional step 5. A proposal affecting more than that scope should be deferred to Actions after the review rather than expanding the review into nested flows.

## Integrated check-up and adaptation content

The common G2 flow uses the same records for all users:

1. What you did: prefilled P3 reports/obstacles for the review period, corrected inline. Unreported weeks remain unreported.
2. What changed: relevant prefilled F2 answers with user-confirmed changes. At day 30, ask a short prioritized set of relevant high-impact unanswered inputs and offer Complete remaining questions later. Existing action reports can prompt questions but never silently write annual calculation inputs. Users with completed F2 confirm changes without repeating it.
   Optional Tell me what changed reuses the shared F2 Copilot field-drafting component inline. Users review/edit proposed values and confirm them before calculation; standard questions remain available. Ordinary activity summaries do not wait for AI.
3. Your new number: successful recalculation and save completes the check-up, even when full F2 remains unfinished, adds its result to F8 and establishes the next seasonal date. Use the shared result/range/detail wording and distinguish activity from corrections or detail improvements.
4. Your next step: keep, pause, reschedule, add or swap through embedded P3/P4 components. Direct edits use Undo; Copilot proposals use inline P5 approval. Skipping adaptation leaves the saved review complete.
5. Your goal, optional: P2/P5 inline after review completion. Skip preserves the review and accepted actions.

The full independent F2 Footprint Check remains accessible without being required every week or every season. Refinement updates suggestions without cancelling accepted actions. Seasonal review is approximately every three months after the last completed check-up, with explicit local dates and deliberate rescheduling. No guilt language or blocked actions after a missed review.

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

## Responsive browser arrangement

Desktop columns stack in reading order. In P3, action instruction and check-in entry precede the longer explanation. In P5, current content precedes proposed content. Contextual panels and embedded check-up components preserve a clear return without stacked navigation layers.

## Approved audit corrections — traceability

1. Guest alternatives: E3/P4/E4 preserve the selected alternative and complete one authenticated save/add intent.
2. Weekly rhythm: P1/P3 define reporting dates, first-week feedback, activity versus reporting cadence and Unreported versus Did not do this.
3. Shared reminders: E4/P3/account preferences use one opt-in setting; one weekly digest covers active actions, with a ready check-up replacing that week's routine message.
4. Activity-to-review handoff: P3 prefills G2, and user-confirmed F2 inputs drive recalculation without duplicate reports or automatic annual extrapolation.
5. Seasonal adaptation: P3/P4/P5 are reused inline in G2; optional goal and adaptation do not invalidate the completed review.
6. F2 refresh: updated results refresh unaccepted suggestions, preserve accepted actions and do not reset day-30/seasonal dates.
7. Estimate wording: E/F/P share range and Estimate detail presentation; input coverage, reported activity and recalculated footprint change remain distinct.

8. Approved day-30 Option B: priority F2 gaps are embedded in the common review; deferred full-questionnaire inputs do not block check-up completion, actions or optional goals.

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

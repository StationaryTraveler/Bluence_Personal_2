# Bluence — UI Structure: Section T — Today


Integrated Copilot revision: 26 October 2026. Includes the approved contextual AI interaction model; all content remains a UI specification subject to implementation and release validation.

## T1 — Today

Today answers one question first: “What is the most useful thing I can do now?”

It brings together existing information from E, F, P and the check-up flow. Its controls open or reuse those same interactions. An action added, check-in recorded or answer updated through Today appears in its original location as the same record.

1. Application header

   Bluence identity on the left.
   TODAY, FOOTPRINT and ACTIONS navigation.
   Account menu on the right.

2. Page introduction

   “Today.”
   Current local date.
   A brief contextual sentence where useful, such as “Your weekly check-in is ready.”

   Avoid a long introduction before the next useful task.

3. Your-next-step block

   One task and one primary button, followed by a short explanation of why it is relevant.

   Select the content according to the user’s current situation:

   Unfinished assessment with no usable saved result:
   Offer Continue my estimate, restoring the existing E2/F2 draft.

   Interrupted check-in or check-up:
   Offer Continue check-in or Resume check-up, restoring the saved task and its reporting period or review step.

   Check-up ready:
   Offer Start check-up.
   For the first day-30 review, explain: “Review what changed and fill the most important gaps. You can complete the remaining questions later.”
   Open the common G2 flow.

   Weekly check-in ready:
   Name the relevant action and reporting period.
   Offer Check in using the existing P3 interaction.

   Action ready to try:
   Show its concrete next step and relevant timing.
   Offer View action or the appropriate existing P3 control.

   Saved footprint with no accepted action:
   Show one feasible first action with Try this.
   Accepting it uses the same P action-addition process, with confirmation and Undo.

   Only paused actions:
   Offer a suitable existing action to resume or review, using P3.

   Nothing currently due:
   Say “Nothing to do right now.”
   Show a short factual summary from the existing P1 activity records rather than inventing another task.

   An old optional F2 draft or deferred questionnaire gaps must not repeatedly displace the active action loop. They remain available through the estimate-improvement entry below.
   Attach one relevant secondary Copilot entry to this same task:
   First action: Make this fit me, reusing E3/P4.
   Current action: Something got in the way, reusing P3.
   Ready review: Help me review what changed, opening the same G2 step and embedded F2 component.
   Long-absence return: Help me restart, with a dismissible contextual invitation.
   Copilot assistance does not create another primary task or AI feed. A past AI conversation resumes only on deliberate return to that task, not automatically ahead of a due review or first action.

4. Current-status line

   Three linked items:

   Your footprint:
   Latest saved result and its date, using the shared F presentation.
   Below 80% input coverage, show the calculated range.
   At 80% or above, show the central estimate and its Estimate detail band.
   Selecting it opens F1.

   Active actions:
   Number of To do and Doing actions.
   Selecting it opens P1.

   Next check-up:
   Scheduled date, or Ready when you are when appropriate.
   Selecting it opens the existing schedule or check-up entry.

   These values come from the existing footprint, action and review records. A new check-in does not directly change the footprint figure.

5. Your-active-actions section

   Up to three active actions.

   Each block contains:

   Action name.
   Short instruction.
   Current state: To do or Doing.
   Relevant occurrence or recurrence.
   Current weekly reporting-period dates.
   Latest recorded activity for that period.
   Check in and View action.

   Show existing activity before inviting another report. Where relevant, distinguish Edit record from Report another occurrence.

   If the same action is featured in Your next step, both locations refer to the same action and reporting state.

   Paused and Done actions remain accessible through Actions rather than forming additional lists on Today.

6. Check-in interaction and immediate feedback

   Selecting Check in opens or embeds the existing P3 component without creating a separate Today reporting form.

   Its content includes:

   Action and reporting period.
   Existing activity for that period.
   Report activity, Did not do this or An obstacle, as appropriate.
   Necessary date or quantity inputs.
   Save and Cancel.

   A known, unambiguous occurrence may be recorded directly. Additional details are requested only when needed.

   After successful saving, show feedback beside the originating task or action:

   What was recorded.
   Updated cumulative activity for the stated period.
   One suitable next step.
   Next check-in date.
   Correction or Undo where applicable.

   A reported obstacle can lead to Pause or Find an alternative using P3/P4. A Copilot-authored change uses P5 approval.
   Show the factual activity confirmation immediately, without waiting for generated advice. After an obstacle, offer Help me adjust this in the same block.
   Copilot interprets the obstacle, clarifies material ambiguity and returns a supported keep/pause/reschedule/swap proposal through P4/P5. An AI failure leaves the successful check-in saved.
   Update the existing P records and their summaries after approval; do not create a Today-specific action or feedback ledger.

   A weekly occurrence leaves a recurring action Doing. An unanswered check-in remains Unreported rather than becoming zero activity or failure.

7. One-suggestion block

   Show one relevant suggestion based on the latest saved footprint, existing actions and remembered preferences.

   Include:

   What to do.
   Why it fits.
   Relevant hotspot.
   Impact size and its basis.
   Effort, cost and timeframe.
   Add.
   Why this.
   This doesn’t fit me.

   Use the same suggestion and acceptance components as P1/P4.
   Make this fit me opens the shared task-specific Copilot interaction. Display a structured recommendation with its basis; Add accepts an initial proposal once from this card. A replacement reviews current/proposed action through P5 inline.
   Do not place a second Copilot recommendation beside the same task. Reasons come from confirmed circumstances and supported catalog/scenario data.

   If the first-action suggestion already occupies Your next step, do not repeat it here.

   At three active actions, present a relevant replacement option rather than encouraging a fourth action. Use the existing choice to pause or replace an action.

   Remember dismissals and decline reasons across Today and Actions. An F2 update refreshes suggestions while preserving accepted actions.

8. Conditional reminder invitation

   After the first action is accepted, the existing optional reminder invitation may appear:

   “One email a week to check in.”
   Proposed local day and time.
   Enable.
   Not now.

   Reuse the preference established through E4 and account settings. Do not ask again simply because the user opened Today.

   One routine weekly digest covers relevant active actions. A ready check-up invitation replaces that week’s routine reminder.

   After the user responds, retain access through Reminder preferences rather than displaying the invitation on every visit.

9. Main-hotspot summary

   Below the action-focused content, show one main hotspot from F1/F4.

   Include:

   Category.
   Main contributing activity.
   Short explanation.
   View category.

   If uncertainty makes the ranking provisional, retain that qualification.

   Do not repeat the full category breakdown or country benchmark. View my footprint opens F1, where the existing F7 comparison is available.

10. Recent-check-up summary

    After a completed check-up, show:

    Review date.
    One supported summary of what changed.
    Updated footprint result or range.
    View check-up.
    Footprint over time.

    View check-up opens G3.
    Footprint over time opens F8.

    Keep reported activity and recalculated change distinct. Improved input detail, corrected answers or changed coverage must not appear as action-caused emissions reductions.

    If the review’s calculation has been saved but optional adaptation remains unfinished, show “Your check-up is complete” with an optional Continue adapting actions link. Do not label the review incomplete.
    Help me understand this change opens the shared F8 explanation for that exact saved comparison. Use only supported activity/factor/correction decomposition; say when causes cannot be separated.
    An unexpected change can offer a dismissible Copilot invitation. It does not start a new calculation or review.

    Before the first completed check-up, replace this section with its scheduled date and a brief explanation of what the review will cover. Do not fabricate a progress trend.

11. Optional estimate-improvement entry

    Show a secondary entry drawn from F1/F2 when useful:

    Improve my estimate, for a material missing or approximate input.
    Continue remaining footprint questions, when questions were deferred during a check-up.
    Resume footprint check, when an independent F2 draft exists.

    Open the relevant saved question or draft.
    Help me answer belongs inside that existing F2 question. Today does not run a parallel questionnaire or reinterpret saved answers on its own.

    Under approved Option B, remaining F2 questions can be completed after the day-30 review. This entry does not block actions, weekly check-ins or optional goal setting.

    A full F2 refinement does not restart the check-up schedule.

12. Supporting links

    View all actions.
    View my footprint.
    Check-up schedule.
    Reminder preferences.
    Help.

    Optional goals remain in P1/P2 after the first completed check-up. Today does not introduce another goal builder or make goal creation the primary next task.

## State handling across Today

On the first visit after E3/E4:
Show the accepted action and concrete first step, the first weekly check-in date and the day-30 check-up date. If the user saved only the result, offer one first action.

After a weekly check-in:
Keep its factual feedback visible, refresh the shared activity summaries and update the next task.

After a check-up:
Show the saved outcome and any optional next-step adaptation. Retain the completed review even if remaining F2 questions or goal setting are deferred.

After a long absence:
Offer a gentle return and an appropriate current task. Do not display a wall of missed check-ins.

When saving fails:
Preserve the input in the originating shared interaction and show Retry. Do not show successful activity feedback.

When information is unavailable:
Identify the affected block and retain a dated previous result where appropriate. Do not substitute zero values or invent tasks.

## Responsive browser arrangement

Content follows the same order when the browser narrows: next useful task, current status, active actions, one suggestion, then supporting footprint and review information. Shared check-in and adaptation interactions retain their originating context.

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

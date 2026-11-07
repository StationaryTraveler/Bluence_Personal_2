# Bluence Personal Carbon Copilot — User Journey V2.0

Date: 17 October 2026  
Status: Revised product blueprint; not an implementation or validation report.  
Companion: Personal_Copilot_Sitemap_V3.0.md  
Supersedes: Bluence_User_Journey_V1.0.md for the proposed Personal MVP. Original sources remain unchanged.

## 1. Direction and source authority

**Discover → Estimate → Understand → Try one action → Check in → Check-up → Adapt.**

Promise: “Understand your footprint, try a change that fits your life, and see what changes over time.” The first session succeeds when the user adds one feasible action. Weekly feedback supports that action; a short check-up after 30 days and subsequent seasonal check-ups update the footprint.

This revision uses the complete `Claude UI Critics.md` (7 October 2026), `Bluence_User_Journey_V1.0.md` and `Personal_Copilot_Sitemap_V2.0.md`. The user's latest instructions take precedence, followed by the critique's Section F for UI structure. Earlier integrity and recovery requirements remain unless explicitly superseded here. References to earlier prototype implementation in V1 are historical statements, not newly verified functionality.

The user's “plant-first” wording is interpreted as the critique's “plan-first.” The plan-first sequence is replaced with action-first. The critique's optional early-goal link and possible later full baseline-revision flow are not adopted: the user's stricter requirements defer goals until the first completed check-up and prohibit F3/F5/F6-style consumer workflows.

| Highest priority | Revised requirement | Proof of completion |
|---|---|---|
| One step from result to action | E3 has “Try this”; authentication only when necessary | No baseline, goal, builder or second plan approval between result and accepted action |
| Action-first | One small action achievable within a week | Goal is absent before the first completed check-up |
| Weekly feedback within seasonal review | Every saved check-in returns a factual summary; day-30 check-up | Activity feedback is immediate; recalculated footprint is separate |
| Simple vocabulary and navigation | TODAY, FOOTPRINT, ACTIONS; six core concepts | No baseline administration, pathway, gap or snapshot screens |
| Meaningful numbers | Comparable country reference, rounded total, one quality indicator | Supported launch regions have reviewed reference data |

## 2. Preserved strengths and deliberate changes

Preserve guest results before registration; deterministic calculations; missing data never becoming zero; explicitly partial results; one next task on Today; contextual AI with approval; conventional fallback; pause/swap without shame; immutable history; safe resume; and no deduction of project support from personal emissions.

Remove baseline confirmation/revision ceremonies, technical snapshot pages, a formal first-plan builder, a constraints questionnaire, manual-edit previews, custom actions, target pathways/milestones/gap coverage, command search, Business entry and all MVP rewards/evidence/contribution surfaces. Merge progress into Footprint and Actions. The backend retains the records needed to explain calculations; it does not need to implement future rewards infrastructure for MVP.

## 3. Proposed implementation decisions and remaining gates

These decisions resolve UX ambiguity for the blueprint; they are not claims that services already exist.

| Topic | Proposed MVP decision | Boundary or launch dependency |
|---|---|---|
| Platform | Responsive web; no installation required | Mobile-first; desktop uses the same three labels |
| Sign-in | Passwordless email link, with email code fallback | Provider, delivery, expiry, abuse controls and recovery must be implemented |
| Reminders | In-app due cards plus optional email, at most one routine digest per local week | No push, SMS or WhatsApp dependency in MVP; transactional access emails are separate |
| Household | One account represents one person | Shared home inputs allocated by the documented method; personal travel/diet stay personal; no shared household account or collaboration |
| Goal | Optional after first completed check-up, normally day 30 | No early-goal shortcut or forced goal creation |
| First check-up | Due 30 calendar days after first durable result save | Date remains stable if the first action is added later |
| Later check-ups | Approximately every three months after the last completed check-up | Explicit local dates; user can reschedule; seasons are not assumed to be Northern Hemisphere seasons |
| Guest resume | Short-lived server draft referenced by an opaque secure token; proposed expiry seven days | Explain expiry; optional “Email me a resume link”; no automatic marketing subscription |
| Copilot | Ship narrow contextual alternative-finding and grounded change explanation | If quality gates fail, launch as Bluence Personal with curated alternatives; do not imply working AI |

Launch regions, reference datasets/licensing, category coverage, household allocation, proxy conversion rules, quality thresholds and impact bands need calculation-owner approval before launch. No country averages or reduction figures are invented in this blueprint. Email delivery, guest retention, support ownership and accessibility/language coverage are release gates. The journey can be prototyped with clearly labeled fixtures.

## 4. Vocabulary and information architecture

| User concept | Meaning |
|---|---|
| Your footprint | A dated estimate with an explicit period and coverage |
| Your starting point | The first saved estimate, preserved for comparison |
| Action | A practical change the user chooses |
| Check in | A short report of what happened or what got in the way |
| Check-up | A short review of changed inputs and a new footprint estimate |
| Your goal | An optional target after the first completed check-up |

“What you did” and “What changed” label the two feedback layers. They are not additional modules. Technical terms such as snapshot, factor version and baseline reference remain internal or in a requested data export.

TODAY owns the next useful task. FOOTPRINT owns numbers, category explanations and simple comparison over time. ACTIONS owns action management and activity history. Account is top right. Copilot is contextual, never a chat tab. Mobile has three labeled bottom tabs, not a navigation drawer.

## 5. First-session journey

| Stage / sitemap ID | User experience | Service behavior and exit |
|---|---|---|
| Discover / E1 | One-screen promise, “Estimate my footprint,” secondary sign-in; optional story below fold | Existing users resume; no seven-section gate or Business teaser |
| Estimate / E2 | One adaptive question per screen; large answer chips, remaining time, Back and “I don't know” | Roughly 8–12 questions is a test hypothesis; shared assessment schema with F2 |
| Immediate feedback / E2 | Running estimate refreshes after every answer, including the first calculable answer | Clearly indicates assumptions and answered coverage; never calls a subtotal a full footprint |
| Understand / E3 | Rounded result, country reference, categories, two hotspots and one immediately actionable suggestion | Result stays public; action fits known constraints and can be tried within a week |
| Try / E3 → E4 if needed | One “Try this” decision selects the action; concise copy explains saving | Sign-in saves result, establishes starting point and adds action together; no additional plan approval |
| Start / T1 | Confirmation with Undo and a concrete next step | Active action, saved result and next check-up date available across devices |

“One tap” means one action-selection decision. A guest still verifies their identity to save durably; do not advertise a literally one-tap end-to-end account flow. A signed-in user adds directly. “Save my result” is a secondary path that saves without adding an action; Today then offers one suggestion.

Authentication cancellation returns to the visible result and preserves the selected intent until draft expiry. Expired or failed access links support resend/code entry without restarting assessment. Link opening alone never accepts an action: the server executes only a valid previously recorded user intent after authentication, with anti-replay checks. Unexpected account/draft conflicts require a concise choice; they never overwrite an existing starting point.

On first save, attach the user's draft, store the calculation snapshot and create the starting-point reference silently. A partial estimate can be saved as an explicitly partial starting point; only shared coverage may later be compared. Retrying save must not duplicate an action or reference. A service failure preserves the draft and reports the actual saved/unsaved state.

## 6. Assessment, reference and trustworthy first results

Ask region and household allocation early, then home energy, regular mobility, flights, food and relevant goods/services. Prefer understandable proxies such as home size, monthly bill and driving hours; provide direct units for people who know them. A bill-to-energy or hours-to-distance conversion must use validated local assumptions, not a universal invented factor. Unsupported proxies lead to an explicit unknown/default or partial category.

After every answer, recalculate the running estimate. With validated defaults, say “Rough estimate so far”; show that unanswered categories still use defaults. Without enough coverage, show an explicitly labeled category estimate or “More information needed,” never a fabricated number. Refresh calculations asynchronously without blocking input; ignore stale responses and retain the last valid result during failure.

E3 and F1 show:

1. “About X t CO₂e per year,” dated, with at most one decimal and explicit per-person basis. Partial results must visibly say partial.
2. A reference bar comparing with the country average; region-specific reference may supplement it only when comparable.
3. A horizontal category stacked bar with a labeled numerical list, not a mobile donut.
4. The two largest estimated hotspots, each linked to one practical action; acknowledge what depends on landlords, infrastructure or others.
5. One quality indicator: Rough, Good or Detailed, with “Improve.”

Use “Based on your answers, and on national averages where you did not know” only when those are the actual defaults. Otherwise name the actual fallback. Quality is about input coverage/specificity, not a statistical confidence score. Proposed rubric: Rough uses material high-impact defaults; Good covers all core categories with some proxies; Detailed uses specific inputs for major drivers. Calculation owners must define measurable thresholds; do not invent confidence percentages.

Country averages are a launch requirement, not a hidden optional widget. Reference metadata includes source, geography, year, per-person denominator, gases and included consumption categories. Do not compare a personal consumption footprint to an incompatible territorial CO₂-only figure. Match period, units and boundary before showing a difference; label source-year differences. For partial estimates, compare only a matched subset if available, visibly labeled. If not available, show the country average as context with “Not directly comparable” and no above/below claim. A temporarily unavailable reference keeps the last validated dated reference where permitted or shows an honest unavailable state. A region without a defensible reference is unsupported for full launch, disclosed before the questionnaire.

“Why this comparison?” and “How we calculate” are one tap away. Detailed assumptions live in drill-down; factor versions and audit records do not crowd the consumer UI. Below-average users still receive an achievable action, without competitive scores or moral judgment.

## 7. Action acceptance and adaptation

An action card contains what to do, why it fits, hotspot and relevant answer, qualitative impact (Small/Medium/Large with its basis), effort, cost and timing. Any numerical effect before completion is explicitly typical or modeled, supplied by the calculation service. Impact-band definitions must be consistent for period and boundary and approved before release.

Maintain no more than three active actions (To do plus Doing). Start with one. A fourth addition offers a simple choice to pause an existing action; no builder. Paused and Done records remain accessible. Four visible states only:

| State | Behavior |
|---|---|
| To do | Accepted; first occurrence not yet reported |
| Doing | Started or recurring habit continues |
| Done | User reports finishing a finite action or deliberately finishing a recurring commitment |
| Paused | User pauses; no routine reminders for that action |

A recurring action's weekly check-in does not mark the entire habit Done. A direct Add/Try this is explicit user approval. Direct pause, resume, reschedule, remove or manual swap applies immediately with Undo; edits are versioned internally. A swap records the previous action without inventing a fifth visible status. Undo is a real compensating update; if another edit makes it unsafe, explain and offer recovery.

Decline reason chips are one-tap choices: “Not for me,” “Cannot afford,” “Already do it,” “Not now.” Remember them and adjust ranking. Do not automatically re-suggest a declined action; a “Not now” suggestion may return at a later check-up, and preference reset is available. “Already do it” informs ranking; it changes calculation inputs only after the user confirms the relevant answer. No second constraints questionnaire or custom action creation.

P5 preview is restricted to Copilot-authored changes and goal changes. Show only the specific proposed difference and meaningful consequence, with Approve/Cancel. No preview for routine manual action edits. Accepted actions and reported completions never subtract directly from the footprint.

## 8. Weekly rhythm and Today

Today follows the critique's Section F hierarchy exactly:

1. One next-task card and one labeled primary button above the fold.
2. One status line: footprint, number of active actions, time to next check-up.
3. Up to three active actions, each with a one-tap check-in entry or a direct known outcome.
4. One suggestion with “Why this?”; remembered dismissal.
5. Below the fold: main hotspot and past check-ups.

A saved unfinished flow is resumed first; otherwise prioritize a ready check-up over routine check-ins, then a due action, then the first suggestion when no action exists. The user can access other tasks freely. If nothing is due: “Nothing to do right now,” followed by this month's factual summary. Do not manufacture daily content, countdown pressure or streak penalties.

The weekly loop is: act → check in → receive summary → continue or adapt. The first action is small enough to finish within a week; the first check-in is acknowledged as a win without claiming carbon savings. One tap can record an unambiguous occurrence; quantities or obstacles use a short inline input, not fake single-tap precision.

Every saved check-in returns: what was recorded, cumulative activity for the stated period, and one suitable next step. Examples are templates, not user data: “You recorded one car-free commute. That makes N this month. Keep this action for next week?” An obstacle receives an equally useful summary and a pause/swap option. Corrections and Undo recompute the summary. A failed save says it was not recorded and preserves the input.

| Feedback layer | Location | Update trigger | Claim limit |
|---|---|---|---|
| What you did | Today summary; Actions record | Saved check-in | Self-reported activity, not verified avoided emissions |
| What changed | Footprint; check-up result | Confirmed changed inputs and successful calculation | Comparable category/total estimates, not proof of causation |

Show related category activity beside category change after a check-up. Do not attach an exact saved-carbon figure to a completed action. No arbitrary progress score.

## 9. First and recurring check-ups

First short check-up: 30 days after first durable result save. Then approximately every three months, using explicit dates in the user's timezone. Weekly check-ins continue inside this cadence. Missing a date never blocks access; say “Ready when you are.” Rescheduling changes the invitation date, not historical records. After a long absence, offer a fresh check-up without listing missed tasks.

G2 is one linear, resumable wizard, at most five screens. It embeds shared components; it never sends the user through P3 → F2 → P2 → F6.

| Screen | Content | Result |
|---|---|---|
| 1. What you did | Prefilled action activity; confirm or correct; obstacles | User-confirmed activity summary |
| 2. What changed | Prior lifestyle answers; change only relevant fields; “My situation changed” inline | Updated input draft and explicit period |
| 3. Your new number | Recalculate; total/categories and comparable change; explain uncertainty | Visible result; saving confirmation commits a new estimate and completed check-up |
| 4. Your next step | Keep current actions or add/swap one; optional post-review “Want a target?” | Next action is usable without a goal; Finish returns to Today |
| 5. Optional goal | Suggested target/date from available behavior and scenario data; editable; inline preview and approval | Versioned goal or Skip; no nested builder |

Screens 1–3 are sufficient to complete the review; later choices cannot invalidate it. Save after each step. A calculation failure leaves the review incomplete and preserves the last estimate. If inputs genuinely did not change, explicitly report no estimated change; do not invent improvement. The day-30 check-up uses a short changed-input subset, not an annual questionnaire. Seasonal check-ups may cover more changed categories within the same screen structure.

Compare annualized estimates with annualized estimates, never a month's total with a year's total. Describe an updated annual rate as an estimate, not already achieved annual savings. Split activity, method/factor updates and corrections only where the service supports the decomposition; otherwise disclose that causes cannot be separated.

Goals are offered only after the first completed check-up, optional and grounded in available evidence. Insufficient behavior data means offer a modest qualitative action commitment or defer a quantified goal. Show target and date without pathways, milestones or uncovered gaps. Approve changes via P5; a changed goal does not change the footprint.

## 10. Starting point, life changes and history

Save the first starting point automatically; no F3 flow. Ordinary check-ups and answer improvements create new estimates and never reset it. Preserve original inputs, coverage, factors and method internally.

“My situation changed” is a prompt inside F2/G2. The user confirms changed circumstances, not a baseline object. When documented calculation rules identify a material boundary change, show a plain notice explaining a new comparison starting point before Save, with Back/Cancel. Saving those changes authorizes the updated reference. Retain the original history; annotate the break in Footprint over time. Do not silently claim comparability across a move, changed household allocation or coverage expansion.

If a goal is affected, retain its recorded version, show that it needs review, and offer a later goal adjustment through P5; never silently change the target. Corrections remain labeled corrections, not behavior improvements. No standalone F6 revision wizard and no F5 technical snapshot pages are reintroduced, even as a hidden consumer settings feature.

Footprint over time is a simple drill-down: one bar per completed check-up, dated starting point and explanatory annotations. Before the first check-up show the starting point and next check-up date, not a fake trend. Consumer summaries and method explanation remain available; technical provenance belongs to internal support tools or authorized exports.

## 11. Copilot boundaries

The MVP AI job is “This does not fit me—find an alternative,” plus explanation of unexpected changes where deterministic decomposition exists. Rules rank feasible catalog actions and calculate impact; AI interprets optional free-text constraints and explains fit. It may propose only supported catalog options. No open chat destination or unrestricted sustainability advice in MVP.

| Task | Mechanism |
|---|---|
| Footprint total, hotspot order, reference comparison | Deterministic calculation and templated UI |
| Alternative ranking and side-by-side numbers | Rules and scenario service |
| Free-text obstacle and alternative explanation | Contextual AI, validated against catalog and known constraints |
| Unexpected change explanation | Grounded AI narrative of service-provided activity/factor/correction breakdown; templated fallback |
| Review answer extraction | Later enhancement; user confirms every suggested input |
| General sustainability Q&A | Later bounded experiment |

Show “About: [action/category/check-up]” context chip. Send only necessary authorized records, never all account data by default. Every suggestion explains the hotspot, answer/constraint and impact basis. Unknowns stay unknown; AI cannot supply missing carbon values. Proactive AI appears only for an obstacle, unexpected check-up change or long-absence return; otherwise it is passive.

Writes follow draft → preview → explicit approval → normal service validation. Refresh stale proposals. Free text is untrusted content, not tool instructions. No cross-user retrieval or Business data sharing. AI failure or timeout returns curated alternatives and ordinary controls. Evaluate factual grounding, constraint adherence, unsupported numbers, unauthorized writes, correction rate, latency and cost per successful adaptation before release; numerical launch thresholds require evidence, not invented promises.

## 12. Reminders, privacy and recovery

After the first action is saved, offer: “One email a week to check in. You can turn it off anytime.” Default off. Let the user choose local day/time, pause or unsubscribe. The digest links directly to the current check-in or ready check-up, combining both rather than sending duplicates. In-app cards work without email permission. A check-up invitation replaces that week's routine digest. Revalidate due state before sending; suppress paused/deleted/completed items and expired intents. Deep links restore the intended authorized page after sign-in.

Guest resume email is requested separately, never reminder consent. Essential processing information is distinct from optional reminders, research and benchmarking permissions. Collect no unnecessary gender, birth date or broad demographic profile. Do not expose sensitive answers in email subjects, URLs or telemetry. Account controls cover export, deletion and session security.

| Exception | Required behavior |
|---|---|
| Unsupported region | Explain before effort; no invented localized estimate/reference |
| Unknown answer | Disclosed validated default or partial coverage, never zero |
| Save/network failure | Preserve input; honest unsaved state; safe retry |
| Calculation failure | Retain last valid estimate; no zero placeholder |
| Session expiry | Restore safe authorized origin after passwordless sign-in |
| Draft/account conflict | Explicit choice; preserve original reference and existing actions |
| Concurrent edit/stale AI proposal | Revision check, refresh and reconcile; no silent overwrite |
| Missing or private record | Safe parent link without disclosing another user's content |
| Missed check-in/long absence | Gentle restart; retain history; no guilt or backlog wall |
| AI unavailable | Curated alternatives, same ordinary controls |

## 13. Service integrity without interface complexity

Use a modular service with authoritative records for identity/consent, assessment, calculation, reference data, action catalog/instances, check-ins, check-ups, optional goals and notifications. A formal plan can remain an internal aggregate of accepted actions; it is not an object the consumer has to create.

Store versioned inputs, factors, reference sources, calculation snapshots, starting-point links, check-up periods and comparison explanations. Server ownership checks apply to every UI and AI read/write. Add/check-in/check-up/save commands are idempotent. Use revision checks and post-commit events so email or calculation workers cannot act on uncommitted data. Preserve history and test deterministic replay and overlapping-action calculations. No raw lifestyle/free-text content in routine logs.

Account save plus first action should commit atomically where possible; otherwise expose partial success accurately and retry the same intent. Reference-data updates must not rewrite old results. Personal records are never automatically shared with employers or a Business workspace.

## 14. Presentation and accessibility changes

Retain Fig/Olive identity, approved theme logos and category colors. Primary progression uses labeled buttons; icon-only circles are secondary. This explicitly supersedes the earlier circular-primary-control rule. Maintain at least 44 × 44 px targets, visible keyboard focus, accessible names and persistent labels.

On mobile use one type family for body, controls and numbers as a proposed simplification; retain brand display treatment sparingly. Font files and RTL script coverage require testing before promising Persian/Arabic support. No assumed script coverage from the existing four Latin font choices. Keep rounded rectangular cards, solid high-contrast title fallback and both themes. Charts have text equivalents and never depend on color alone.

Use one bottom sheet at a time. A Copilot proposal replaces the current sheet, not stacks over it; preserve draft and return focus on close. Check-ups remain a full linear flow. Test narrow screens, enlarged text, screen readers, keyboard use and reduced motion.

## 15. Release scope, validation and metrics

| Scope | Included |
|---|---|
| MVP required | Guest running estimate; meaningful reference; passwordless save; silent starting point; three tabs; curated actions; weekly factual feedback; day-30 and seasonal check-ups; email preferences; simple trend; static methodology; narrow Copilot subject to quality gate |
| Later | Rich action discovery, detailed nontechnical history, shared-household collaboration, push notifications, confirmed achievements and funded project support |
| Experiments | Recognition without evidence, points for check-up participation, comparable-household reference, bounded Q&A, guest-first versus light registration-first |
| Removed | F3/F5/F6 consumer flows, plan builder, manual-edit preview, custom actions, pathways/gaps/milestones, U2, U5 and empty rewards destinations |

Future rewards must be called Points, not tokens; test recognition without evidence first. Avoid incentives biased toward purchases/receipts. If verification is later offered, “Confirmed” names what was checked; “We could not confirm this” gives a clear next step. Any funded contribution requires transactional reservations, idempotency, reconciliation and actual receipts. Supporting a project never reduces the personal footprint. No rewards backend is a prerequisite for this MVP.

Prototype welcome → estimate → result → Try this → sign-in → Today → check-in feedback → day-30 check-up before detailed UI production. Include unknown answers, no tasks due, below-average footprint, budget/access constraints, first trend empty state, auth failure, save retry, an obstacle and a material life change. Test comprehension, task completion and recovery with representative users. These are hypotheses to validate, not claims of improved conversion.

| Measure | Definition |
|---|---|
| Activation | Eligible first-result visitors who durably add their first action in the same first-session funnel / eligible first-result visitors; retain funnel ID across email authentication |
| Early retention | Activated users with at least one saved check-in within 14 days / activated users whose 14-day window has elapsed |
| First loop closure | Users completing first check-up by day 37 / first-save users whose day-37 window has elapsed; proposed seven-day measurement window is not an extra reminder deadline |
| Weekly engagement | Activated users with a saved check-in in a local week / activated users with an active action that week |
| Comprehension | Tested users correctly explaining personal estimate versus country reference and activity versus footprint change / tested users |
| Trust guardrails | Unsupported numerical claims; incompatible reference comparisons; duplicate actions; save failures; inaccessible core tasks |

Track step abandonment and time-to-first-action, declined suggestions and successful swaps, review completion, unsubscribe rate and AI cost/latency. Use minimal pseudonymous events, never raw answers. Report cohorts and denominator eligibility; set numerical targets after baseline observation. Product owns activation, design owns comprehension/accessibility, calculation owner owns reference integrity, engineering owns reliability, and operations owns reminder delivery.

## 16. Traceability and synchronization contract

| Critique coverage | Resolution here | Sitemap counterpart |
|---|---|---|
| A/B/E/G: activation and action-first | §§5,7 | E3/E4, P1/P3 |
| B/D/F: running feedback, proxies, draft recovery | §§5–6,12 | E2/F2 |
| C/F: three destinations and mobile hierarchy | §§4,8,14 | T1, F1, P1 |
| D/F: reference and quality | §6 | E3, F1, F7 |
| B/F/G: weekly and 30-day loop | §§8–9 | P3, G2–G4 |
| F: two progress layers | §§8–10 | P1 activity record, F8 trend |
| D/F: AI role and boundaries | §11 | U1/P5 |
| D/F: platform, sign-in, household, channel | §§3,12 | E4, F2, A1–A4, U3 |
| A/F: overengineering and vocabulary | §§2,4,10 | Retirement/migration table |
| D/F: rewards, evidence and emotional risks | §§7–8,12,15 | Deferred scope; no R routes |
| F: accessibility, fonts, sheets and empty states | §§10,14 | UI contract and state matrix |
| F: metrics and validation | §15 | Acceptance checklist |

The companion sitemap uses stable E/T/F/P/G/A/U identifiers. F3, F5, F6, U2 and U5 are retired, not reassigned. G2–G4 remain flow/summary identifiers without a Progress tab; F8 is the simple trend drill-down. The two revised files govern the same scope. Neither modifies the live site or the design-system source file.

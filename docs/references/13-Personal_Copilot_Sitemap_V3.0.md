# Bluence Personal Carbon Copilot — Sitemap V3.0

Date: 17 October 2026  
Status: Revised MVP information architecture; proposed routes, not deployed functionality.  
Companion: Bluence_User_Journey_V2.0.md  
Supersedes: Personal_Copilot_Sitemap_V2.0.md for the Personal MVP. Original files remain unchanged.

## 1. Authority and design contract

Sources: the complete `Claude UI Critics.md`, especially Section F; `Bluence_User_Journey_V1.0.md`; `Personal_Copilot_Sitemap_V2.0.md`; and the user's latest priorities. Journey V2.0 governs behavior, calculation integrity, timing and scope; this sitemap governs placement and navigation. The critique's suggested early-goal exception is not adopted: goals enter after the first completed check-up. F3/F5/F6 consumer workflows are prohibited, not merely hidden until later.

**Three destinations, six concepts, one next step.** User concepts are footprint, starting point, action, check-in, check-up and goal. “What you did” and “What changed” distinguish feedback layers. Technical accounting records remain in services and authorized exports.

Legend: Page = navigable destination; Flow = task sequence; Section = inline content; Sheet = contextual surface that returns to its origin. IDs are stable design references. Retired IDs are not reused. Routes below are proposals.

## 2. Navigation and structural ownership

| Tab label | ID / route | Owns | Does not own |
|---|---|---|---|
| TODAY | T1 / `/personal/today` | Next task, compact status, entry to check-ins/check-ups | Duplicate footprint, action or review records |
| FOOTPRINT | F1 / `/personal/footprint` | Estimate, reference, categories, improve answers, simple trend | Baseline administration or technical snapshot browser |
| ACTIONS | P1 / `/personal/actions` | Accepted actions, curated suggestions, activity record, optional later goal | First-plan builder or separate progress dashboard |

Mobile: three labeled bottom tabs; account top right; no navigation drawer. Desktop: the same labels and order in persistent navigation. Copilot is contextual, not a tab. No Rewards & impact, Search & command, or Business entry, including empty placeholders and welcome-page teasers.

| Shared surface | Access |
|---|---|
| Account A1–A4 | Top-right account menu |
| Check-up G2 | Today invitation; resume link; direct authorized deep link |
| Check-up summary G3 | Today past check-ups or Footprint over time |
| Schedule G4 | Today next-check-up date or account preferences |
| Copilot U1 | Relevant action, category or check-up context |
| Help / method U4 | One tap from result/Footprint; also account menu |

## 3. E — Public entry and passwordless save

### E1. Welcome — Page — `/personal/welcome`

One short screen: value promise, “Estimate my footprint,” secondary “Sign in,” and brief privacy information. Optional brand story below the fold. No mandatory seven-section tour or Business teaser. Existing signed-in users can go directly to Today.

### E2. Quick estimate — Flow — `/personal/estimate`

- Region support check before effort; household allocation followed by high-influence home energy, mobility, flights, food and goods/services questions.
- One question per mobile screen, large choice chips, Back, remaining-time estimate and “I don't know.” Roughly 8–12 questions is a test hypothesis.
- Proxies such as home size, bills or driving hours only with validated conversion assumptions; direct numeric units available as refinement.
- Running estimate updates after every answer. Unknown answers use disclosed supported defaults or explicitly partial coverage. Show “More information needed” rather than invent a first number.
- Short-lived draft with clear persistence/expiry status; proposed seven-day expiry. Optional “Email me a resume link,” separate from reminders and marketing.
- Shared question schema and calculation components with F2. No competing questionnaire or demographic onboarding gate.

### E3. Your footprint — Page — `/personal/estimate/result`

Publicly visible before registration. Order: rounded dated annual estimate and per-person basis; country reference bar; horizontal category bar/list; two hotspots; quality indicator with Improve. Present one prominent action recommendation with **Try this**, feasible within a week. The second hotspot can offer a secondary contextual action without competing primary CTAs. Include “Why this?” and one-tap method access.

“Try this” records action intent. For signed-in users it saves/adds immediately; guests go through E4 and then T1 with the result saved and action added. No F3, goal, builder or second plan approval. Secondary “Save my result” saves without an action; “Improve” returns to the relevant question. Authentication cancellation returns here with result and pending selection intact until expiry.

### E4. Sign in and save — Flow — `/personal/sign-in`

Unified new/returning passwordless email experience. Email link with code fallback; concise explanation of what saving does. Sign-in preserves the pending action, draft and safe origin. A first save silently creates the starting-point reference; optional reminder consent is separate and follows success.

Duplicate callbacks/retries cannot create duplicate actions. Link opening cannot create an action without the user's previously recorded intent. If an existing account already has a starting point, preserve it; importing a new guest draft must be explicit and never silently overwrite history. Expired links offer resend/code recovery. Authentication failures retain the draft and use neutral error wording.

**E5/E6:** Separate registration and password-recovery destinations are retired; their necessary identity-verification and access-recovery behavior is consolidated into E4. No password-reset flow for passwordless sign-in.

### E7. Public information — Pages

`/personal/help`, `/personal/how-we-calculate`, `/personal/privacy`, `/personal/terms`. Static calculation explanation includes footprint boundary, household allocation, defaults, reference policy and limits. U4 links to this same content, not duplicate copies.

## 4. T — Today

### T1. Today overview — Page — `/personal/today`

Required Section F hierarchy:

1. Above-fold next-task card with one labeled button: resume, check up, check in or try a first action.
2. Status line: current footprint, active-action count, time to next check-up.
3. Up to three active actions with direct check-in controls.
4. One recommendation with “Why this?”; dismissal and decline reasons remembered.
5. Below-fold main hotspot and past check-ups.

Resume an unfinished task first; otherwise prioritize ready check-up, due action/check-in, then first-action suggestion. Other tasks remain accessible. Nothing due: say so and show this month's factual summary, not invented daily tasks. Long absence: gentle restart and “Has anything changed?”; no missed-task list or streak punishment.

T1 reads the authoritative F/P/G records. A footprint link opens F1; action detail opens P3; check-up opens/resumes G2. After a saved check-in, its inline feedback stays visible and the next task refreshes. No rewards, technical baseline cards or target gaps.

## 5. F — Footprint

### F1. Footprint overview — Page — `/personal/footprint`

Main-screen hierarchy:

1. “About X t CO₂e per year,” date, per-person basis and explicit partial label if needed; at most one decimal.
2. Country-average reference bar (F7 embedded).
3. Horizontal stacked category bar with labeled numerical list.
4. Two biggest estimated hotspots, each with one action.
5. One quality level—Rough, Good or Detailed—with Improve.

Assumptions, category detail, Footprint over time and method are drill-downs. Never place factor versions, snapshot IDs, audit trail or multiple baseline concepts on the main screen. Use the actual-default wording under the total; national-average wording only when true. Changes to actions do not directly reduce this number.

### F2. Improve your estimate — Flow — `/personal/footprint/check`

Prefilled shared assessment components; enter at the relevant category from F1/F4/A1. Ask changed or missing inputs rather than repeat onboarding. Preview updated result and save a new estimate; preserve original starting point and historical estimates. Show true pending/failed/unsaved states and restore origin after completion.

“My situation changed” is inline. Changed circumstances and consequences are explained before Save. Material boundary changes may establish a new comparison reference under documented rules, with a plain notice and retained original history. No separate baseline confirmation or revision flow. An affected goal is flagged for later optional review, not silently rewritten. G2 embeds these components without navigating away.

### F4. Category / hotspot — Page — `/personal/footprint/categories/:category`

Category estimate, drivers, relevant answers and assumptions; distinguish “What you can change” from “What depends on others.” Show one feasible action, Why this, Improve and contextual U1. After a check-up, show category estimate change beside related reported activity without claiming that one caused the other.

### F7. Country reference — Required embedded section

Present in E3 and F1 for launch-supported regions; it is no longer an optional hidden benchmark. Detail sheet shows source, geography, year, per-person denominator and coverage. Match consumption boundary, gases, units and period before displaying a difference. No incompatible territorial-versus-consumption comparisons, percentile rankings or invented averages.

Partial estimates use a matched subset if defensible, labeled clearly. Otherwise show reference as context with “Not directly comparable,” no percentage difference. A reference outage produces a dated validated fallback or explicit unavailable state. No defensible regional data means no full regional launch; tell users before E2. Household-peer comparisons are experiments, not MVP.

### F8. Footprint over time — Drill-down page — `/personal/footprint/over-time`

Simple starting-point marker and one dated bar per completed check-up, with category comparison where supported. Link each check-up to G3. No pathway line, milestones, snapshot browser or factor-level records. Before first check-up: starting point plus next scheduled date and explanation of when comparison becomes available. Mark corrections, expanded coverage or material life changes; do not connect incompatible results into a misleading trend.

**Retired:** F3 Confirm first baseline; F5 Estimate/baseline technical history and snapshot detail; F6 Baseline revision. No equivalent ceremonies may be recreated under new names. F8 is a simple consumer trend, not F5 rebranded.

## 6. P — Actions

### P1. Actions overview — Page — `/personal/actions`

- Current actions: at most three To do/Doing combined. Done and Paused accessible as sections, not extra tabs in primary navigation.
- Curated suggestions associated with current hotspots; one Add button per card.
- “What you did”: dated activity/check-in record and factual summaries.
- Optional “Want a target?” card only after the first completed check-up; established goal summary links to P2.

Cards show instruction, why it fits, qualitative impact with basis, effort, cost and timing. Numbers, if used before completion, are labeled typical/modeled; never exact avoided emissions attributed to a completed action. No builder, custom actions, formal plan approval, constraints questionnaire or gap display.

### P2. Optional goal — Section / short flow — `/personal/actions/goal`

Access after first completed G2 only, including direct links. Earlier access returns to Actions with a plain explanation, not a forced review. Suggest a realistic editable target/date from available behavior and scenario data; allow Skip. If data is insufficient, defer quantitative suggestions or use a qualitative commitment. Preview a goal change through P5 and explicitly approve. No pathway or milestones. A goal change never alters the footprint.

Within G2, goal editing and its preview occupy the optional fifth screen; do not open nested flows.

### P3. Action detail and check-in — Page — `/personal/actions/:actionId`

Instruction, rationale, timing, effort/cost, impact basis, activity history and four visible states: **To do, Doing, Done, Paused**. A recurring action remains Doing after an occurrence; Done ends a finite action or explicitly finishes the commitment.

Check-in is an inline interaction or one sheet: report occurrence/progress or obstacle. Known outcomes may be one tap; quantities require a short input. Every successful save returns what was recorded, period-to-date activity and next step. Save failure preserves input and never shows a false success summary. No evidence upload or verification states in MVP.

Direct pause, resume, reschedule, remove or manual swap applies immediately with Undo. At capacity, adding a fourth action asks which existing action to pause. Retain history without adding visible backend states. “This does not fit me” offers curated alternatives or U1. One-tap decline reason chips: Not for me; Cannot afford; Already do it; Not now. Remember reasons; “Already do it” changes calculation answers only with explicit confirmation.

### P4. Curated alternatives — Section / sheet

Short relevant catalog list launched from E3/F4/P1/P3. Not a separate explorer destination in MVP. Add directly, or choose a replacement and apply with Undo. No custom-action form. Constraints learned from answers and declines; no second questionnaire. Full explorer is later.

### P5. Proposed change — Sheet or inline review

Only for **Copilot-authored changes and goal changes**. Show old/new, relevant timing and supported impact basis, Approve/Cancel. Approval validates current record revision; stale proposal refreshes. Manual action edits bypass P5. Only one sheet at a time; transition from U1 to P5, never stack them. G2 embeds goal preview inline in its fifth screen.

## 7. G — Check-ups, not a Progress tab

**G1:** Standalone Progress overview retired. Its footprint trend belongs to F8; action record belongs to P1. No progress-score or target-pathway screen.

### G2. Check-up — Linear flow — `/personal/check-ups/new`

Triggered from Today or an authorized reminder. First due 30 calendar days after first durable result save; later approximately every three months after completion, with explicit local dates and rescheduling. Weekly check-ins continue throughout. First check-up uses a short changed-input subset. Maximum five screens:

| Step | Screen | Embedded behavior |
|---|---|---|
| 1 | What you did | Confirm/correct prefilled activity; note obstacles |
| 2 | What changed | Edit relevant prior answers; inline situation-change handling |
| 3 | Your new number | Calculate, explain comparable change and save; successful save completes review |
| 4 | Your next step | Continue or choose one action; optional goal invitation after review completion |
| 5, optional | Your goal | Edit and approve inline preview or Skip |

Persist each step; restore the exact saved step across devices. No navigation through P3/F2/P2/F6 to finish the review. Components are reused internally. Back edits before saving refresh the result; after completion, corrections create a new revision rather than overwrite history. Cancellation preserves the draft and returns to origin; unfinished draft is resumable.

Calculation failure keeps the review incomplete and old estimate visible. No changed inputs may legitimately mean no estimated change. Show annualized rates as rates, not already achieved savings. Explain activity, method/factor and correction effects only where supported. Completing the review does not depend on choosing an action or goal.

### G3. Check-up summary — Page — `/personal/check-ups/:reviewId`

Date/period, what the user reported, changed answers, dated estimate, comparison limits and optional next step. Accessible from T1 past check-ups and F8. No technical snapshot detail, reward links or compulsory plan revision.

### G4. Schedule — Section / sheet

Next date, Reschedule and reminder preferences A3. Wording: “Ready when you are,” never “overdue.” No separate navigation destination. Changing reminder day does not rewrite check-up history or the initial day-30 anchor.

## 8. A and U — Account and contextual utilities

| ID | Surface / proposed route | Required content |
|---|---|---|
| A1 | Profile / `/personal/account/profile` | Minimal identity; one-person account; household/home answers link to F2, never duplicate records |
| A2 | Sign-in & security / `/personal/account/security` | Passwordless access settings, session/sign-out controls, access recovery through E4 |
| A3 | Preferences / `/personal/account/preferences` | Theme, units, language, timezone; opt-in weekly email, chosen day/time, pause/unsubscribe; schedule link |
| A4 | Privacy & data / `/personal/account/privacy` | Processing explanation, optional consents, export, deletion confirmation/status; no automatic employer/Business sharing |
| U1 | Contextual Copilot / one sheet or inline card | Current context chip; obstacle adaptation and grounded unexpected-change explanation; rules/service numbers; draft-preview-approve writes |
| U3 | Task notifications / in-app cards plus email links | Current authorized task deep link; no separate inbox required for MVP |
| U4 | Help & methodology / shared E7 pages | Static explanation one tap away; contextual support |

U1 is proactive only after an obstacle, unexpected check-up change or long absence; otherwise user-invoked. Every suggestion names hotspot, relevant answer/constraint and impact basis. Use minimum authorized context; AI free text never grants permissions. Unavailable AI falls back to curated actions. General Q&A and AI review-answer extraction are later experiments/enhancements; no open chat tab.

Email reminders default off and are offered after first action save: one routine digest per local week. A ready check-up replaces that week's check-in message. Transactional authentication and requested resume emails are separate. In-app cards work without email opt-in. Do not send for paused or stale tasks; reconcile due state before sending. MVP has no push/SMS dependency.

**U2 Search and command and U5 Business/ecosystem entry are removed from the Personal UI.** Brand identity may remain; it must not recreate a Business destination.

## 9. Access and connected paths

| State or journey | Path / behavior |
|---|---|
| First useful result | E1 → E2 → E3; no account gate |
| First action, guest | E3 Try this → E4 → T1; save starting point and action in one successful intent |
| First action, signed in | E3 Try this → T1; immediate add with Undo |
| Save only | E3 Save my result → E4 if needed → T1 with first-action suggestion |
| Guest returns | Resume unexpired E2 draft; explain expiry if unavailable |
| Saved unfinished assessment | Resume F2; Today remains accessible |
| Saved result, no action | T1 suggestion; never F3/P2 redirect |
| Weekly check-in | T1/P1 → P3 inline check-in → factual feedback → origin |
| Improve answer | F1/F4/A1 → F2 → saved estimate → origin |
| Manual adaptation | P3 → P4 or direct edit → immediate update with Undo |
| AI adaptation | P3/U1 → P5 → explicit approval → updated action |
| First/seasonal check-up | T1/U3 → G2 steps → G3 or T1; goal optional after review completion |
| Material life change | F2/G2 inline prompt → save changed circumstances with notice → annotated F8 |
| Session expiry | E4 → authorized pending origin, preserving draft |
| Long absence | T1 gentle restart; no missed-task wall |

Every private record is server-authorized. Guest cookies are not identity. Opening a route never itself mutates records. Browser Back, Cancel and closing a sheet preserve committed work and restore predictable context. Keep the selected task through authentication without accepting unsafe external redirect URLs.

## 10. State and UI acceptance contract

| State | Visible response and recovery |
|---|---|
| No reference or unsupported region | Early support explanation; no fabricated average or comparison |
| Partial estimate | Clearly partial total; matched comparison only or not-comparable label |
| Missing answer | Disclosed default or unestimated category; never zero |
| Save failure | Unsaved label, input retained, idempotent retry |
| Calculation pending/failed | Actual status; last valid estimate retained |
| No actions | One feasible suggestion, not empty builder |
| No task due | This month's summary; no invented daily content |
| Before first check-up | Starting point and next date; no fake trend |
| No measured change | Honest unchanged result, activity still acknowledged |
| Declined action | Remember reason, avoid immediate repeat |
| AI unavailable/stale | Curated alternative or refresh proposal; no silent write |
| Concurrent edit | Explain newer state, reconcile safely |
| Inaccessible record | Neutral explanation and safe parent route |

Primary buttons are labeled; circular icon-only controls are secondary. Minimum 44 × 44 px hit targets, visible keyboard focus, screen-reader labels, text chart alternatives, one-decimal maximum, no reliance on color or hover. Retain Fig/Olive identity and theme-appropriate assets. Simplify mobile typography; verify actual script coverage before RTL localization. One question per screen and one sheet at a time; no nested Copilot/preview overlays. No pathway lines; one bar per check-up.

This explicitly changes earlier drawer, circular-primary-button and four-font-everywhere guidance for the revised UX. The design-system source itself is not edited by these documents.

## 11. V2 → V3 migration and release boundary

| V2 element | V3 disposition | Migration behavior |
|---|---|---|
| E1 seven-section welcome | Simplified E1 | Optional story below fold; remove Business teaser |
| E2 / F2 | Retained, simplified | Shared schema, proxies, running estimate and safe resume |
| E3 save-first suggestion | Actionable E3 | Try this records intent; no baseline/goal chain |
| E4/E5/E6 | Consolidated E4 | Redirect old register/recover entries to appropriate passwordless state |
| T1 dashboard | Focused T1 | One next task; weekly rhythm; no reward cards |
| F1 multiple baselines | Simplified F1 | Dated footprint and one quality signal |
| F3 confirmation | Retired | Old entry safely routes to F1; no mutation |
| F4 hotspots | Retained | Controllability, actionable suggestions |
| F5 history/snapshot detail | Retired | Old history route may redirect to F8 summary; technical snapshot routes have no consumer replacement |
| F6 revision | Retired | Old entry routes to F1 with Improve/situation-change entry; no automatic reset |
| F7 conditional benchmark | Required F7 section | Validated country reference is a regional launch gate |
| P1 My plan | Actions P1 | Old `/personal/plan` redirects to `/personal/actions` |
| P2 goal/action builder | Optional post-review goal only | Old builder route returns to P1; no early goal gate |
| P3 many states/evidence | Four-state action detail | Preserve internal history; evidence UI excluded |
| P4 explorer/custom actions | Curated inline alternatives | No custom actions; full explorer later |
| P5 all-change preview | Restricted preview | Only AI proposals and goal changes |
| G1 progress | Merged | Old overview redirects to F8; action record in P1 |
| G2 seasonal review | Unified day-30/seasonal G2 | Preserve existing review identity when mapping old links |
| G3/G4 history/schedule | Summary and inline schedule | No Progress tab |
| R1–R7 rewards/projects | Outside MVP | No tab, balances, ledger, evidence, checkout or placeholder routes |
| A1–A4 | Retained | Defined privacy, household model, passwordless and email controls |
| U1 | Narrow MVP role | Contextual alternative-finding and grounded explanation |
| U2 / U5 | Removed | No command palette or Business entry |
| U3/U4 | Simplified / retained | Task links and shared static method/help |

If a real deployed account has reward/contribution records, preserve them and resolve service obligations through a separately reviewed migration; hiding navigation is not authorization to delete transactions. This blueprint does not assert such records exist.

Later recognition should first test non-evidence participation feedback. Future rewards use Points and require genuine operating/funding readiness before becoming a fourth tab. Contribution receipts reflect known fulfillment, and project support never reduces personal footprint. F3/F5/F6 administrative UI, target gaps/pathways, custom actions, U2 and U5 are not a default future backlog.

## 12. Build and validation checklist

- Exactly three primary tabs on mobile and desktop; no removed placeholders or primary chat surface.
- E3 exposes full result and country reference before authentication, with Try this directly actionable.
- New-account save creates starting point internally and activates the selected action without a goal/builder ceremony; retries do not duplicate.
- Running estimate responds to each answer with honest coverage and no unsupported precision.
- Every saved check-in gives factual feedback; action reports never directly decrement footprint.
- First check-up is due on day 30; later review cadence and weekly email are independently defined.
- G2 stays within five screens, persists steps, and completes before optional goal creation.
- Goal access is gated by completed check-up, including direct URLs.
- Manual edits have Undo; AI and goal writes have preview/approval; stale proposals cannot write.
- Country/household/period comparison is defensible; life changes and corrections remain visible without baseline-management pages.
- Empty, partial, failed, signed-out and long-absence states work; main tasks remain usable without AI or email permission.
- Track first-session action activation, check-in within 14 days and first check-up completion using Journey V2 §15 definitions; do not treat screen views as success.

Prototype the full welcome-to-check-in sequence plus day-30 check-up before detailed screen production. Validate numeric comprehension, affordable/control-limited actions, accessibility and recovery. Journey V2 §§5–7 map to E/F/P; §8 to T/P3; §§9–10 to G/F8; §§11–12 to U/A; §§14–15 to this acceptance contract. No live site changes are included in this deliverable.

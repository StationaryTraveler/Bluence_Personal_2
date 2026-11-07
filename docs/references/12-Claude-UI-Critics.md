# Bluence Personal Carbon Copilot — Expert UX Review

Oct 7, 2026 · @Kave Jangi

## A. Executive UX assessment

**Verdict: 6/10. The journey is not ready for detailed UI production.** It is ready for a connected prototype of a simplified core loop.

The two documents describe a trustworthy system. They do not yet describe a simple product. Most of the complexity comes from showing the system's record-keeping to the user.

| Question | Assessment |
| --- | --- |
| What is strong | Estimate before registration (E1 to E3). Honest numbers: missing data is never zero, partial results are labeled. Today is built around one next task. Copilot proposes, the user approves, and core tasks work without AI. No streak punishment; actions can be paused or swapped. Contributions never reduce the footprint. Recovery states are defined. |
| What is weak | Four commitments stand between the result and the first action: account, baseline confirmation, goal, plan approval. The user must learn about 16 concepts. Nothing visible changes between seasonal reviews. Two of five primary destinations are nearly empty in Phase 1. |
| What is overengineered | Baseline confirmation and revision as user flows (F3, F6). Four baseline and estimate concepts. Snapshot detail with factor versions (F5). Change preview on every plan edit (P5). Eight or more action states. Command palette (U2). Custom actions. Ledger entry pages. A welcome page with seven sections. |
| What is missing | A reference point that gives the first number meaning. A weekly feedback loop. A platform and notification-channel decision. A sign-in method. A household model. Activation and retention metrics. A role for the Copilot in Phase 1. |
| Ready for UI production? | No. Simplify the core loop first, then prototype welcome to first check-in. |

**Why 6/10.** Service integrity is about 8/10: honest numbers, clear states, defined recovery. Consumer experience is about 5/10: slow activation, heavy vocabulary, no short feedback loop. The five changes at the end fix the consumer side without changing the backend design.

## B. End-to-end journey review

**The journey is a coherent loop on paper, but it has only an outer loop.** The seasonal cycle (plan, act, review, new estimate, plan) is well defined. The weekly cycle is not: a check-in gives nothing back, and the footprint number moves only at a review, about once per season. A behavior loop needs feedback within days.

### The journey as the documents define it

| Stage | User's question and wanted outcome | Main interaction | System job |
| --- | --- | --- | --- |
| Entry | Will this help me? A reason to start. | Welcome, start estimate (E1) | Route by session and saved state |
| Assessment | What do you need from me? A quick, answerable form. | 8 to 12 adaptive questions (E2) | Validate, mark assumptions, save draft |
| Understanding | What matters most? A number I understand. | Total, categories, two hotspots, one suggestion (E3) | Deterministic calculation with coverage |
| Baseline | Can I keep and trust this? A saved result. | Create account, confirm baseline (E5, F3) | Attach draft, record consent, freeze snapshot |
| Goal | What can I realistically change? A target. | Target, date, constraints (P2) | Evaluate actions and combined impact |
| Action | Which actions fit me? A first step. | Pick one to three actions, approve plan (P2) | Create goal and plan versions |
| Execution | What do I do now? One clear task. | Next task and check-in (T1, P3) | Track status, send reminders |
| Progress review | What changed? An honest comparison. | Seasonal review (G2) | Recalculate, flag comparability limits |
| Adaptation | This is not working. A realistic alternative. | Pause, swap, reschedule (P3, P5) | New plan version, new forecast |
| Rewards and impact | What have I achieved? Recognition. | Evidence, reward, contribution (P3, R1 to R6) | Verification, ledger, fulfillment |
| Return | Where was I? Continue without repeating. | Resume the pending step (T1) | Server-backed state |

### Stage-by-stage review

| Journey stage | What works | UX problem | Severity | Recommendation |
| --- | --- | --- | --- | --- |
| Entry | Estimate before sign-up. Region check before effort. | Welcome has seven sections, including brand story and a Business teaser. | Low | One screen, one button. Story below the fold. No Business entry in the Personal welcome. |
| Assessment | Adaptive questions, "I don't know", disclosed defaults. | No feedback until the end. A guest draft is lost when a mobile tab closes. Units like kWh and km are hard to answer. | High | Show a running estimate after each answer. Ask proxies (home size, monthly bill, hours driven). Offer "email me a link" mid-flow. |
| Understanding | Clear result order. Two hotspots and one suggestion. | The number has no reference point: benchmarks (F7) are conditional. The suggestion cannot be accepted without account, baseline and goal. | Critical | Show the country average for every launch region. Make the suggestion acceptable in one tap. |
| Baseline | Snapshot integrity. No overwrite of an existing baseline. | "Baseline" is accounting language. F3 is a separate ceremony for a system need. | High | Freeze the snapshot silently on save. Call it "your starting point". Remove F3 as a flow. |
| Goal | Editable target. Goal and forecast kept separate. | Target and date are asked before the user has done anything. Constraints are a second questionnaire. "Uncovered gap" frames the plan as insufficient on day one. | High | Move the goal to after the first review. Infer constraints from assessment answers and declined suggestions. |
| Action | One to three actions. Interacting actions calculated together. | Explorer, builder, preview and approval for what should be one tap. | Medium | An action card with one "Add" button. Preview only for Copilot proposals and goal changes. |
| Execution | One next task. Obstacle recovery. No streak guilt. | A check-in returns nothing. "Today" suggests daily use, but content changes weekly at best. | High | Every check-in returns feedback. Design the content rhythm as weekly. |
| Progress review | Pre-filled answers. Asks only what changed. Like-for-like comparison. | G2 crosses P3, F2, P2/P5 and F6. The first feedback on the number arrives after a full season. | High | One linear wizard, five screens at most. First short check-up after 30 days. |
| Adaptation | Pause, swap and reschedule without blame. | A preview overlay (P5) on every manual change. | Medium | Apply low-risk changes at once, with Undo. |
| Rewards and impact | Reported, reviewed and rewarded are separate. No offset claim. | Evidence favors purchases over avoided activity. "Token" suggests crypto. Funding is undecided. | Medium | Keep out of MVP navigation. Test recognition without evidence first. |
| Return | Server-backed resume. Gentle re-entry. History kept. | Return depends on opt-in reminders with no defined channel or platform. | High | Decide web or app, and the reminder channel, before UI design. |

## C. Information architecture review

**Five primary destinations are too many for the MVP. Three carry the product: Today, Footprint, Actions.**

The five tabs map almost one-to-one to the backend modules in journey section 13: assessment and calculation, planning, review, rewards and projects. That is internal architecture shown as navigation. Users think in two things: "my number" and "what I do".

| Destination | User value | Clarity | Overlap | Recommendation |
| --- | --- | --- | --- | --- |
| Today | High. Answers "what now?" | Clear | Current actions also live in My plan | **Keep.** The only place where the next task lives. |
| My footprint | High. The core insight | Clear | History (F5) repeats the progress trend (G1) | **Simplify.** Absorb trend and history as "Footprint over time". Move provenance to drill-down. |
| My plan | High, but "plan" sounds formal | Medium. Plan, Today and Progress are hard to tell apart | Today; action completion in G1 | **Simplify and rename to "Actions".** The goal becomes an optional card inside it. |
| My progress | Medium. Nearly empty until the first review | Low. "Progress" can mean actions, footprint or rewards | F5 and P1 | **Merge.** Trend goes to Footprint. Action record goes to Actions. The review is a flow started from Today. |
| Rewards & impact | Low in MVP (Phase 3) | Low. "Impact" is confused with footprint impact | Little, but it is a dead tab until Phase 3 | **Remove from MVP navigation.** Return as a fourth tab when funded and operating. |
| Profile / account | Needed, low frequency | Clear | Home details repeat F2 answers (the sitemap already links them) | **Keep** in the account menu. |
| Copilot | Depends on answer quality | Clear as an overlay | None | **Keep contextual.** Never a primary destination. |
| Search and command palette (U2) | None with three to five destinations | Not needed | None | **Remove.** |
| Business entry (U5) | None for a consumer | Confusing | None | **Remove** from the app until the product exists. |

On mobile, three destinations fit a bottom tab bar. The drawer proposed in sitemap section 8 hides navigation and should not be the default.

## D. Key UX problems

**The top three problems are about activation, meaning and feedback. Fixing them matters more than any screen design.** Ranked from highest to lowest priority.

### 1. Four commitments stand between the result and the first action

- **Why it matters:** Motivation is highest right after the result. Each extra step loses people.
- **Affected journey:** E3, then E5/E4, F3, P2, T1.
- **Recommended change:** A "Try this" button on the result. Sign-in then saves the result, freezes the snapshot and starts the action in one step.
- **Expected benefit:** More first sessions end with an active action.

### 2. The first number has no reference point

- **Why it matters:** A figure in tonnes of CO₂e means nothing to most people. Without comparison there is no insight and no emotional payoff.
- **Affected journey:** E3 and F1. The benchmark (F7) is conditional and can be hidden.
- **Recommended change:** Make a country average a launch requirement for each region. Show it next to the user's biggest hotspot, so below-average users still see a next step.
- **Expected benefit:** The result is understood in seconds and gives a reason to continue.

### 3. Nothing visible changes between seasonal reviews

- **Why it matters:** The user acts weekly, but the footprint number moves about four times a year. No response to a check-in is defined.
- **Affected journey:** T1, the P3 check-in, G2.
- **Recommended change:** Every check-in returns a short factual summary. Add a first short check-up after 30 days.
- **Expected benefit:** A reason to return each week and earlier proof that actions matter.

### 4. Accounting vocabulary is shown to the user

- **Why it matters:** Original, active and revised baseline, provisional and latest estimate, pathway and snapshot are record-keeping terms.
- **Affected journey:** F1, F3, F5, F6, G1, P1.
- **Recommended change:** The user sees six concepts: footprint, starting point, action, check-in, check-up, goal. The system manages the rest.
- **Expected benefit:** Lower cognitive load. The product feels personal, not like carbon accounting.

### 5. The goal comes before the first experience

- **Why it matters:** A person who has not tried one action cannot judge a realistic target or date. The "uncovered gap" then shows a shortfall on day one.
- **Affected journey:** P2.
- **Recommended change:** Go action-first. Suggest a goal after the first review, based on real behavior.
- **Expected benefit:** Less friction at the start and goals that people can reach.

### 6. Navigation mirrors backend modules

- **Why it matters:** Today, My plan and My progress overlap. Two of five destinations are nearly empty in Phase 1.
- **Affected journey:** All signed-in pages.
- **Recommended change:** Three destinations: Today, Footprint, Actions.
- **Expected benefit:** No dead ends. Users know where things live.

### 7. The Copilot has no defined role in Phase 1

- **Why it matters:** The product is named "Carbon Copilot", but the contextual Copilot arrives in Phase 2 (journey section 15) and guest results use no AI. The name promises more than the launch delivers.
- **Affected journey:** E3, T1, P3.
- **Recommended change:** Ship one inline AI function in Phase 1: "This does not fit me, find an alternative". Or launch as Bluence Personal and add the Copilot name in Phase 2.
- **Expected benefit:** The promise matches the experience, and AI is used where it has real value.

### 8. The seasonal review crosses four destinations

- **Why it matters:** G2 sends the user to P3, F2, P2/P5 and sometimes F6. On mobile this becomes nested flows with lost context.
- **Affected journey:** G2.
- **Recommended change:** One linear wizard: what you did, what changed, your new number, your next step. Five screens at most, saved at each step.
- **Expected benefit:** More completed reviews, so the outer loop actually closes.

### 9. The return channel is undefined

- **Why it matters:** Retention depends on reminders. Platform (web or app), channel (email or push) and sign-in method are all open.
- **Affected journey:** Return, T1, G4, A3.
- **Recommended change:** Decide platform and channel now. Use passwordless sign-in. Ask for reminder permission when the first action is added, with a concrete promise such as one message per week.
- **Expected benefit:** Users come back, and the recovery flow (E6) gets much smaller.

### 10. Reward mechanics favor purchases and add trust risk

- **Why it matters:** The highest-impact changes are avoided activities: fewer flights, less driving, less meat. They leave no evidence, so evidence-based rewards favor purchases with receipts. Verification also needs human reviewers and uploads of private documents.
- **Affected journey:** P3 evidence, R1 to R6.
- **Recommended change:** Keep out of the MVP. Later, rename tokens to points and test rewards for completed check-ups instead of claimed reductions.
- **Expected benefit:** No wrong incentives, lower operating cost, and the core loop is validated first.

## E. Simplified recommended journey

**Go action-first: Discover, Estimate, Understand, Try one action, Check in, Check-up, Adapt.** An ordinary user does not need to create and manage a formal carbon plan. The plan should grow from the actions the user accepts.

&#91;embedded content: simplified journey · first session, then two loops\]

The first session ends when one action is added. After that, a weekly loop (act, check in) runs inside a seasonal loop (check-up, adapt).

### Plan-first or action-first: three options

| Option | What it is | Upside | Risk |
| --- | --- | --- | --- |
| 1. Keep plan-first (Model A) | Baseline, goal, full plan, then actions. Five tabs. As documented. | Complete and consistent with the current documents. | Slowest activation. Heavy first session. |
| 2. Action-first with three tabs (Model B) | Result, one action, check-ins. The goal appears after the first check-up. | Fast activation, small vocabulary, same data integrity in the backend. | Goal-driven users miss a target at the start. Offer "Set a goal" as an optional link. |
| 3. Copilot-led feed | No tabs. A conversational feed drives every step. | Differentiated and true to the product name. | Depends on AI quality from day one. Less predictable, harder to make accessible, higher cost per session. |

**Lean: option 2.** It keeps every integrity rule from the journey document and removes most first-session friction. Option 3 is worth an experiment once the core loop retains users.

### Where each element enters

| Element | Enters when | How |
| --- | --- | --- |
| Account creation | The user taps "Try this" or "Save my result" | Passwordless. The starting-point snapshot is frozen in the background. |
| Goal | After the first check-up | An optional card: "Want a target?" Suggested from real behavior. |
| Copilot | From the first action onward | Inline, on the action card and in the check-up. No chat tab. |
| Rewards | Not in the MVP | Test recognition without evidence first. |
| Contributions | When funding and fulfillment are real | A secondary journey. Project discovery can live in the account menu. |

### MVP scope

Scope here means user interface. The backend should still store versioned snapshots from day one, as journey section 13 describes.

| Scope | Items |
| --- | --- |
| Essential for MVP | Guest estimate and result. Country-average reference. Passwordless account. Silent starting-point snapshot. Short curated action list per hotspot. Check-in with feedback. Today. 30-day check-up. One static "How we calculate" page. |
| Valuable but later | Estimate and baseline history as a user view. Baseline revision as a full flow (MVP: one "My situation changed" prompt). Full Action Explorer. Evidence submission and verification. Green-project contributions. |
| Experiment | AI sustainability Q&A. Points (renamed tokens). Comparable-household benchmark. Project discovery without contribution. Guest-first against light registration-first, as journey section 16 already plans. |
| Overengineered / remove | Target pathway, milestones and target-gap coverage. Snapshot-level methodology in the consumer UI. Change preview for manual edits. Custom actions. Command palette. Business entry. |

## F. UI/UX recommendations

**Design for three screens, six concepts and one next step.** The backend can stay as rich as the documents describe.

### Navigation

- Three bottom tabs on mobile: Today, Footprint, Actions. Account sits top right. No drawer.
- Rewards becomes a fourth tab only when it works.
- Reviews, baseline handling and evidence are flows, not destinations.
- Use labeled buttons for primary steps. Keep icon-only circles for secondary actions. This needs a design-system revision.

### Today: screen hierarchy

1. One next-task card with one button. Above the fold.
2. One status line: footprint, active actions, time to the next check-up.
3. Active actions, three at most, each with a one-tap check-in.
4. One suggestion with "Why this?". A dismissal is remembered.
5. Below the fold: main hotspot and past check-ups. No rewards in the MVP.

If nothing is due, say so and show this month's summary. Do not invent tasks to fill the screen.

### Footprint

On the main screen:

- A rounded total with its period, in the form "about X t CO₂e per year".
- One reference bar against the country average.
- A horizontal stacked bar for categories with a labeled list below. It reads better on mobile than a donut.
- The two biggest hotspots, each with one action.
- One quality indicator (rough, good, detailed) with an "Improve" link.

In drill-down: assumptions, category detail, footprint over time, method. Never on the main screen: factor versions, snapshot records, audit trail.

### Actions

- Action card: what to do, why it fits you, impact size (small, medium, large) with its basis, effort, cost. One button: Add.
- Three active actions at most. No builder flow.
- Four visible states: To do, Doing, Done, Paused. The backend keeps the finer states.
- Declining takes one tap with a reason: not for me, cannot afford, already do it, not now. This replaces the constraints questionnaire and improves ranking.
- The goal is an optional card, offered after the first check-up.
- Manual changes apply at once with Undo. The preview (P5) stays for Copilot proposals and goal changes.

### Progress: a two-layer model

| Layer | Shows | Updates | Wording pattern |
| --- | --- | --- | --- |
| What you did | Actions and check-ins. Facts. | At once | "N car-free commutes since September" |
| What changed | The recalculated footprint, by category | At each check-up | "Your travel estimate fell by about X t per year" |

- Show the category change beside the actions done in that category. Let the user see the link.
- Never attach an exact figure to one completed action. Before completion, a card may show a typical effect, labeled as typical.
- "Confirmed" is a small tag for verified achievements, Phase 3 only.

### Copilot interaction model

| Role | Classification | Note |
| --- | --- | --- |
| Explaining footprint results | Conventional UI is better | A templated explanation from calculation data. AI only for follow-up questions. |
| Interpreting hotspots | Conventional UI is better | Ranked drivers are deterministic. |
| Recommending actions | Useful AI enhancement | Rank with rules and impact data. AI adds fit to free-text constraints. |
| Answering sustainability questions | Useful AI enhancement | An experiment. Limit the scope and never invent numbers. |
| Helping adapt an action | Core AI capability | "This is not working" is free text by nature. AI proposes a swap. |
| Comparing alternatives | Conventional UI is better | Side-by-side cards with numbers from the scenario service. |
| Helping during reviews | Useful AI enhancement | Turns "what changed?" into pre-filled answers the user confirms. |
| Explaining unexpected changes | Core AI capability | Narrates the deterministic split: activity, factors, corrections. |

What should not exist: an open chat tab as a primary destination.

- **Context:** The Copilot receives the record of the current page (category, action or check-up) and reads through the same services as the UI. Show a context chip, for example "About: home energy".
- **Proactive at three moments only:** a check-in that reports an obstacle, a check-up with an unexpected change, a return after long absence. Otherwise passive.
- **Why this:** Every suggestion names the hotspot it targets, the answer it is based on, and the impact size with its basis.
- **Uncertainty:** Numbers come only from the calculation service. When data is missing, the Copilot says what is unknown.
- **Writes:** Draft, preview, approve, as the documents already require.

### Mobile

- Questionnaire: one question per screen, large choice chips, proxies instead of numeric units, remaining time shown.
- Bottom sheets instead of stacked overlays. Never the Copilot on top of a preview on top of a flow.
- Check-up: one linear wizard, saved at each step.
- Charts: stacked bar plus list. One bar per check-up for the trend. No pathway lines.
- Type: four typefaces are heavy on mobile, and Cinzel is a capitals-only display face. I am not aware of Arabic or Hebrew coverage in any of the four, so check before promising RTL.

### Trust and uncertainty

- Round the numbers. One decimal at most.
- One quality indicator with three levels, framed as a path to a better estimate, not as a disclaimer.
- One sentence under the total: "Based on your answers, and on national averages where you did not know."
- The method is one tap away, never inline.
- State the limits plainly: supporting a project does not reduce your footprint.
- Soft wording: "we could not confirm this" instead of "rejected"; "ready when you are" instead of "overdue".

### Vocabulary: what the user sees

| Concept in the documents | Shown to the user? | User-facing name |
| --- | --- | --- |
| Estimate, provisional estimate, latest estimate | Yes, as one thing | "Your footprint", with its date |
| Original baseline | Yes, rarely | "Your starting point" |
| Active and revised baseline | No. One notice when it happens | "We reset your starting point because you moved" |
| Target | Yes, optional | "Your goal" |
| Target pathway, milestone, target-gap coverage | No | None |
| Action | Yes | "Action" |
| Plan | Not as a formal object | "Your actions" |
| Check-in | Yes | "Check in" |
| Seasonal review | Yes | "Check-up" |
| Progress | Yes, as two layers | "What you did" and "What changed" |
| Verification | Later | "Confirmed" |
| Reward, BLU token | Later | "Points" |
| Contribution | Later | "Support a project" |

### Emotional and behavioral risks

| Risk | Where | Fix |
| --- | --- | --- |
| Guilt from a high number without context | E3 | A reference and one doable step on the same screen |
| Perfectionism from the "uncovered gap" | P2 | Remove the gap from the first plan |
| "I answered wrong" from data-quality labels | E3, F1 | Frame as "Improve", not as a warning |
| Feeling accused by "rejected" evidence | P3 | "We could not confirm this" plus one clear next step |
| Guilt from an overdue review | G4 | No "overdue" state |
| Helplessness when big drivers are outside the user's control | F4, P4 | Separate "what you can change" from "what depends on others" |

Make the first action small enough to finish within a week, and mark the first check-in as a win. After a long absence, restart without listing what was missed.

### Gaps the documents do not cover

- **Platform and channel:** responsive web or app, and email or push for reminders.
- **Sign-in method:** passwordless is the low-friction default.
- **Household model:** whether two people can share one household footprint.
- **Recommendation feedback:** decline reasons that improve later suggestions.
- **Empty state:** Footprint over time before the first check-up.
- **Success metrics:** activation is a first action added in the first session; early retention is a first check-in within 14 days; loop closure is a first check-up completed.

## G. THE 5 CHANGES I WOULD MAKE BEFORE CONTINUING UI DEVELOPMENT

### 1. Make the first action reachable in one step from the result

**Current problem:** After the result, the user must create an account, confirm a baseline, set a target and date, and approve a plan before anything starts (E5, F3, P2).

**Recommended change:** Put "Try this" on the result. Passwordless sign-in saves the result, freezes the starting-point snapshot and starts the action. Remove F3 as a user flow.

**Why this matters:** Motivation peaks at the result. Every extra commitment after it loses users before they reach the product's value.

**Expected effect:** Higher activation: more first sessions end with an active action. Measure it as "first action added in the first session".

**Implementation priority:** Critical

### 2. Switch from plan-first to action-first

**Current problem:** The goal builder (P2) asks for a target, a date and constraints before the user has tried anything. It also shows an "uncovered gap" on day one.

**Recommended change:** Start with one small action. Offer the goal as an optional card after the first check-up, suggested from real behavior. Learn constraints from assessment answers and decline reasons.

**Why this matters:** People commit to goals they believe in. Belief comes from one finished action, not from a slider.

**Expected effect:** Less first-session friction, more realistic goals, fewer abandoned plans.

**Implementation priority:** Critical

### 3. Add a weekly feedback loop inside the seasonal one

**Current problem:** The footprint number moves only at a seasonal review. A check-in returns nothing. Today has little new content between reviews.

**Recommended change:** Every check-in returns a factual summary of what the user did. Add a short check-up after 30 days. Use the two-layer model: "what you did" updates at once, "what changed" updates at each check-up.

**Why this matters:** Without feedback within days, there is no reason to open the app again. Retention fails before the first seasonal review arrives.

**Expected effect:** More weekly returns and more users reaching the first check-up, with no false precision about single actions.

**Implementation priority:** Critical

### 4. Cut to three destinations and six user-facing concepts

**Current problem:** Five tabs mirror backend modules, and two are nearly empty in Phase 1. The user meets about 16 concepts, including several kinds of baseline and estimate.

**Recommended change:** Today, Footprint, Actions. Merge My progress into Footprint and Actions. Keep Rewards out of MVP navigation. Show six concepts: footprint, starting point, action, check-in, check-up, goal.

**Why this matters:** Each concept and tab is something to learn before acting. A personal product must feel lighter than the system behind it.

**Expected effect:** Faster comprehension, no dead ends, simpler mobile navigation and less UI to build.

**Implementation priority:** High

### 5. Give the first number meaning and one honest quality signal

**Current problem:** The result shows a total without a reference, because benchmarks are conditional (F7). Data quality, assumptions, uncertainty and provenance all compete on the same screens.

**Recommended change:** Require a country average for each launch region. Round the total. Show one three-level quality indicator with an "Improve" link. Move everything else to drill-down.

**Why this matters:** A number without context creates neither insight nor motivation. Many caveats on one screen read as defensive, not as trustworthy.

**Expected effect:** The result is understood in seconds, trust is kept and the screen stays simple.

**Implementation priority:** High

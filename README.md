# Adviser Central

> Practice analytics for financial advisers — track the health and performance of your advice practice in one modern dashboard.

Adviser Central is a modern fintech dashboard that helps financial advisers measure and
improve the performance of their advice practice. It brings performance KPIs, year-on-year
trend analysis and generated business insights into a single, polished analytics experience.

**Version 1 is intentionally a foundation.** Only one KPI — **Client Retention** — is fully
implemented. Every other capability is scaffolded as an attractive "Coming Soon" placeholder,
ready to be delivered incrementally through future BA (Business Analyst) tickets.

---

## Application Vision

Financial advisers run businesses, but they rarely have a single, trustworthy view of how
that business is actually performing. Adviser Central exists to answer three questions:

1. **How is my business performing?** — headline KPIs across retention, revenue and growth.
2. **How am I tracking versus previous financial years?** — clear year-on-year trends.
3. **How healthy are my client relationships?** — client book health, engagement and risk.

The dashboard is designed to feel like a genuine production SaaS analytics platform: clean
cards, subtle shadows, a professional blue palette, green success indicators, generous
spacing and a fully responsive layout. Over successive releases it grows from a single KPI
into a complete practice-intelligence and AI-coaching product.

---

## Tech Stack

| Concern            | Choice                          |
| ------------------ | ------------------------------- |
| Framework          | React + TypeScript              |
| Build tool         | Vite                            |
| UI library         | Material UI (MUI)               |
| Routing            | React Router                    |
| Charts             | Recharts                        |
| Data               | Mock data only (no backend)     |
| Auth               | None required                   |

There is **no backend integration** and **no authentication**. All data is mock data served
synchronously through a thin service layer so the UI can evolve independently of any API.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (Vite)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

Then open the URL printed by Vite (typically `http://localhost:5173`).

---

## Project Structure

The codebase is organised into clear, single-responsibility folders so future features have
an obvious home:

```text
src/
 ├── components/   # Reusable UI building blocks (KpiCard, InsightCard, PageHeader, ...)
 ├── pages/        # Page-level components (Dashboard, ComingSoonPage, NotFoundPage)
 ├── charts/       # Recharts-based visualisations (RetentionChart)
 ├── layouts/      # Application shell (AppLayout: left nav + top bar)
 ├── models/       # TypeScript interfaces (RetentionHistory, BusinessInsight, KpiSummary)
 ├── services/     # Mock data services (dashboardService)
 ├── data/         # Mock data + navigation config
 ├── routes/       # Route definitions (AppRoutes)
 └── theme/        # MUI theme (colours, typography, component overrides)
```

### Reusable components

Components are built to be reusable even where they are currently used once, so they can be
composed into new pages as the roadmap is delivered:

- **`KpiCard`** — a KPI summary card with a coloured trend indicator.
- **`InsightCard`** — a card listing generated business insights.
- **`PageHeader`** — a consistent page title + subtitle.
- **`PlaceholderFeatureCard`** — the attractive "Coming Soon" card used on placeholder pages.
- **`RetentionChart`** — the responsive Recharts retention visualisation.

### Data models

```ts
interface RetentionHistory {
  financialYear: string; // e.g. "FY26"
  retention: number;     // e.g. 97.2
}

interface BusinessInsight {
  id: string;
  message: string;
  tone: 'positive' | 'neutral' | 'warning';
}
```

All mock data lives in `src/data/` and is exposed through `src/services/dashboardService.ts`,
which future tickets can swap for real API calls without touching the UI.

---

## Implemented Features (v1)

- **Modern application shell** with a fixed left navigation menu and responsive top bar.
- **Left navigation** with: Dashboard, Client Book Health, Adviser Score, Revenue Growth,
  Client Engagement, Referrals, Opportunity Finder, Revenue Forecasting, Adviser Benchmarking
  and Settings. Every item except Dashboard is flagged **Coming Soon**.
- **Dashboard page** (the only fully implemented page), including:
  - A header — *Adviser Central* / *Helping advisers track their success*.
  - A **Client Retention KPI card** — `97.2%`, with a green `+1.4% vs Previous Financial Year`
    trend indicator.
  - A **Client Retention chart** — a responsive, smooth Recharts area/line chart showing five
    financial years (FY22–FY26) with a tooltip and a target reference line.
  - A **Business Insights card** with static, generated-style insights.
- **Reusable "Coming Soon" pages** built from `PlaceholderFeatureCard`, each with a feature
  title, a description of what the feature will eventually do, and a *Coming Soon in a future
  release* banner.
- **Professional theme** — blue primary, green success, clean cards, subtle shadows and a
  responsive layout throughout.

> Only **Client Retention** is functional. Everything else is intentionally positioned as a
> future enhancement with enough scaffolding and documentation to be implemented via new BA
> tickets.

---

## Product Roadmap

### Phase 2 - Adviser Performance
- Adviser Success Score
- Success Score Breakdown
- Year-on-Year Adviser Comparison
- Practice Maturity Indicator
- Adviser Achievements

### Phase 3 - Client Relationship Insights
- Client Health Score
- Client Engagement Score
- Client Review Tracking
- Client Contact Heatmap
- At-Risk Client Detection
- Client Segmentation Dashboard

### Phase 4 - Growth Metrics
- Revenue Growth Dashboard
- Funds Under Advice Trends
- Net New Clients
- Referral Tracking
- Revenue by Client Segment
- Revenue by Adviser

### Phase 5 - Forecasting
- Revenue Forecasting
- Retention Forecasting
- Client Churn Prediction
- Growth Opportunity Discovery
- Capacity Planning

### Phase 6 - Benchmarking
- Adviser Benchmarking
- Office Benchmarking
- Regional Benchmarking
- Peer Group Analysis
- Top Performer Leaderboards

### Phase 7 - Advanced Visualisations
- Client Galaxy View
- Adviser Journey Timeline
- Interactive Practice Map
- Client Network Visualisation
- Referral Network Graph

### Phase 8 - AI Features
- AI Practice Coach
- AI Insight Generation
- AI Opportunity Finder
- AI Client Risk Detection
- AI Forecast Explanations
- AI Action Recommendations

---

## Future BA Tickets

The following example tickets are written as realistic business requirements. They are
intentionally structured so they can later be consumed by an AI planning engine to generate
implementation plans. Each ticket states the value, the requirement and a definition of done.

1. **Add client engagement score.** As an adviser, I want a client engagement score per client
   so that I can prioritise outreach. *Done when:* each client shows a 0–100 engagement score
   derived from meeting, review and communication recency on a new Client Engagement page.
2. **Add referral conversion rate.** Show the percentage of referrals that convert to onboarded
   clients over a selected period. *Done when:* a KPI card and trend chart display conversion
   rate with year-on-year comparison.
3. **Create adviser benchmarking dashboard.** Compare an adviser's core KPIs against peer,
   office and regional benchmarks. *Done when:* the Adviser Benchmarking page shows ranked
   bar charts and percentile positioning for retention, revenue and growth.
4. **Create AI Practice Coach recommendations.** Generate prioritised, plain-English actions an
   adviser should take this week. *Done when:* an AI Practice Coach panel lists 3–5 ranked
   recommendations with rationale and expected impact.
5. **Add retirement opportunity identification.** Identify clients approaching retirement who
   may need advice. *Done when:* the Opportunity Finder lists clients within N years of
   retirement, sorted by potential value.
6. **Add client network visualisation.** Visualise relationships between clients (households,
   referrals, entities). *Done when:* an interactive network graph renders client nodes and
   relationship edges with zoom and filtering.
7. **Add revenue forecasting.** Project practice revenue for the next 4 quarters. *Done when:*
   the Revenue Forecasting page shows a forecast line with confidence bands over historical
   revenue.
8. **Add client health score.** Combine retention risk, engagement and review status into a
   single per-client health score. *Done when:* Client Book Health lists clients with colour-
   coded health scores and a distribution summary.
9. **Add at-risk client detection.** Flag clients likely to leave in the next 12 months.
   *Done when:* an At-Risk Clients list ranks clients by churn probability with contributing
   factors.
10. **Add client review tracking.** Track annual review completion across the client book.
    *Done when:* a review-coverage KPI and a list of overdue reviews are displayed.
11. **Add client contact heatmap.** Show contact frequency over the last 12 months as a
    calendar heatmap. *Done when:* a heatmap renders per-client or practice-wide contact
    density with tooltips.
12. **Add funds under advice (FUA) trend.** Track total FUA over time. *Done when:* a KPI card
    and multi-year trend chart show FUA with year-on-year change.
13. **Add net new clients metric.** Show gross new, lost and net new clients per period.
    *Done when:* a stacked bar chart and net figure appear on the Revenue Growth page.
14. **Add revenue by client segment.** Break revenue down by segment (e.g. HNW, accumulator,
    retiree). *Done when:* a segmented bar/donut chart shows revenue contribution by segment.
15. **Add revenue by adviser.** Compare revenue contribution across advisers in a practice.
    *Done when:* a ranked bar chart shows revenue per adviser with totals.
16. **Add adviser success score.** Compute a composite success score per adviser. *Done when:*
    the Adviser Score page shows the score, a breakdown by driver and a trend over time.
17. **Add success score breakdown.** Explain how the adviser success score is composed.
    *Done when:* a breakdown card shows weighted contributions of each driver.
18. **Add year-on-year adviser comparison.** Compare an adviser's KPIs across financial years.
    *Done when:* a grouped bar chart shows current vs prior year for each KPI.
19. **Add practice maturity indicator.** Classify a practice's maturity stage. *Done when:* a
    maturity indicator with stage description and next-step guidance is shown.
20. **Add adviser achievements.** Award badges for milestones (e.g. 5 years of retention
    growth). *Done when:* an achievements gallery displays earned and locked badges.
21. **Add client segmentation dashboard.** Segment the client book by value, life-stage and
    needs. *Done when:* a segmentation dashboard shows segment sizes, value and health.
22. **Add retention forecasting.** Forecast client retention for upcoming financial years.
    *Done when:* the retention chart is extended with a forecast series and confidence band.
23. **Add client churn prediction.** Predict which clients will churn and why. *Done when:* a
    churn model output lists probabilities and top contributing factors per client.
24. **Add growth opportunity discovery.** Surface cross-sell and up-sell opportunities across
    the book. *Done when:* the Opportunity Finder ranks opportunities by estimated value.
25. **Add capacity planning.** Estimate adviser capacity vs client servicing demand. *Done
    when:* a capacity view shows utilisation and highlights over/under-capacity.
26. **Add office benchmarking.** Benchmark an office's aggregate KPIs against other offices.
    *Done when:* office-level ranked comparisons and percentiles are displayed.
27. **Add regional benchmarking.** Benchmark KPIs by region. *Done when:* a regional comparison
    view with a map or ranked list is displayed.
28. **Add peer group analysis.** Compare against a like-for-like peer group. *Done when:* a
    peer-group selector drives comparative KPI charts.
29. **Add top performer leaderboards.** Rank advisers by selected KPIs. *Done when:* a
    leaderboard with sortable columns and podium highlights is displayed.
30. **Add client galaxy view.** Visualise the entire client book as an explorable "galaxy".
    *Done when:* clients render as an interactive, zoomable scatter/cluster visualisation.
31. **Add adviser journey timeline.** Show an adviser's key milestones over time. *Done when:*
    a horizontal timeline renders milestones with detail on hover.
32. **Add interactive practice map.** Plot clients and offices geographically. *Done when:* an
    interactive map with clustering and filters is displayed.
33. **Add referral network graph.** Visualise who refers whom across the practice. *Done when:*
    a directed network graph shows referral sources, volumes and conversion.
34. **Add AI insight generation.** Replace static insights with AI-generated insights from the
    data. *Done when:* the Business Insights card is populated by a generation service with
    tone classification.
35. **Add AI opportunity finder.** Use AI to rank and explain growth opportunities. *Done
    when:* opportunities include an AI-written rationale and recommended next action.
36. **Add AI client risk detection.** Use AI to detect and explain at-risk clients. *Done
    when:* each at-risk client includes an AI-generated explanation and suggested intervention.
37. **Add AI forecast explanations.** Explain forecasts in plain English. *Done when:* each
    forecast includes an AI narrative describing drivers and assumptions.
38. **Add AI action recommendations.** Recommend the next-best actions across the practice.
    *Done when:* a prioritised action list with expected impact and effort is displayed.
39. **Add settings for practice targets.** Let advisers configure KPI targets (e.g. retention
    target). *Done when:* the Settings page persists targets that drive dashboard reference
    lines and insights.
40. **Add global financial-year selector.** Let users change the active financial year context.
    *Done when:* a year selector in the top bar filters all dashboard data accordingly.

---

## Contributing (Hack Day)

This project is intentionally scaffolded so future Hack Day participants can implement roadmap
items through additional BA tickets. To add a feature:

1. Add or extend a model in `src/models/`.
2. Add mock data in `src/data/` and expose it via a service in `src/services/`.
3. Build reusable UI in `src/components/` and visualisations in `src/charts/`.
4. Replace the relevant "Coming Soon" route in `src/routes/AppRoutes.tsx` with a real page.
5. Update this README's *Implemented Features* section.

---

## Disclaimer

All figures, insights and data in Adviser Central are **mock data for demonstration purposes
only** and do not represent real clients, advisers or financial performance.

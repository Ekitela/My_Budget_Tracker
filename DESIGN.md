# Visual Identity & Design Guidelines: My Budget Tracker

## 1. Brand Identity & Strategy
* **App Name:** My Budget Tracker
* **Core Philosophy:** Minimalist, intuitive, and data-driven personal financial management.
* **Target Audience:** Individuals seeking clear, real-time visibility into their income, expenses, and savings goals.

---

## 2. Color Palette

| Usage | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary** | Emerald Green | `#0F9D58` | Positive balances, income entries, primary action buttons |
| **Secondary** | Slate Navy | `#1E293B` | Navigation bars, headers, dark theme background elements |
| **Accent** | Coral Red | `#E11D48` | Over-budget alerts, expense line items, delete triggers |
| **Warning** | Amber Yellow | `#F59E0B` | Approaching budget limit notifications (75%–90%) |
| **Background** | Soft Gray | `#F8FAFC` | Light mode main container background |
| **Surface/Card** | Pure White | `#FFFFFF` | Dashboard card containers and modal backgrounds |

---

## 3. Typography

* **Font Family:** `Inter`, sans-serif (Fallback: `system-ui`, `-apple-system`, `sans-serif`)
* **Type Scale & Hierarchy:**

| Level | Size | Weight | Line Height | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | 32px | Bold (700) | 1.2 | Total Balance display |
| **Section / H2** | 20px | Semi-Bold (600) | 1.3 | Card headers, chart titles |
| **Subhead / H3** | 16px | Medium (500) | 1.4 | Section labels, modal headers |
| **Body Text** | 14px | Regular (400) | 1.5 | Transaction descriptions, list items |
| **Caption/Data**| 12px | Light (300) | 1.4 | Timestamps, category tags, fine print |

---

## 4. Iconography & UI Components

* **Icon Style:** Minimalist, 2px stroke-width outlined icons (Lucide / Heroicons).
* **Category Visual Identifiers:**
  * 🍔 **Food & Dining:** Light Orange background pill
  * 🏠 **Housing & Rent:** Light Blue background pill
  * 🚗 **Transportation:** Light Purple background pill
  * 💡 **Utilities:** Yellow background pill
  * 💰 **Income/Salary:** Green background pill

---

## 5. UI Layout & Accessibility

* **Layout Structure:** Card-based dashboard layout utilizing a grid system for seamless responsive scaling across desktop and mobile screens.
* **Progress Indicators:**
  * **$< 75\%$ Budget:** Solid Emerald Green progress bar
  * **$75\% - 90\%$ Budget:** Amber Yellow warning bar
  * **$> 90\%$ Budget:** Coral Red alert bar
* **Accessibility (WCAG 2.1 AA):** High contrast text ratios ($> 4.5:1$) across all primary UI components and status indicators.
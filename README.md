# SpendWise Dashboard

## Project Description

SpendWise is a responsive financial dashboard shell designed as the foundation for a budget-tracking application. This week's work focused on rebuilding the existing Budget Tracker layout using modern CSS Grid and Flexbox techniques.

The dashboard contains a sidebar navigation menu, a header, and six financial category cards with realistic static information.

## Dashboard Sections

### Sidebar

The sidebar contains navigation links for:

* Dashboard
* Expenses
* Budget
* Savings
* Reports

### Dashboard Header

The header displays the SpendWise dashboard title, a short description, and a welcome message.

### Financial Category Cards

The dashboard contains six cards:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card displays a category description and a realistic financial amount.

## CSS Grid and Flexbox

CSS Grid is used to create the main dashboard structure and arrange the financial cards.

Flexbox is used to:

* Arrange sidebar navigation items
* Align the dashboard header content
* Organize information inside each financial card

No absolute positioning is used for the page layout.

## CSS Custom Properties

The application uses CSS variables in the `:root` selector for the main design theme, including:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color
* Border color

Using CSS custom properties makes the theme easier to maintain and modify.

## Responsive Design

The dashboard includes a media query for screens below 768px.

On smaller screens:

* The sidebar and main content become a single-column layout.
* Navigation items can wrap across the available width.
* The financial cards are displayed in one column.
* The header content is arranged vertically.

The responsive layout was tested using Chrome DevTools Device Toolbar.

## Micro-interactions

The financial cards include subtle interactions:

* Hover effects move the cards slightly upward and add a shadow.
* Keyboard focus displays a visible outline.
* The transitions are completed within 200 milliseconds.

## Dark Theme

An optional dark theme is included using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme overrides the CSS custom properties without changing the main layout styles.

## Files

### index.html

Contains the structure of the SpendWise dashboard, including the sidebar, header, navigation menu, and six financial category cards.

### style.css

Contains all visual styling, including CSS Grid, Flexbox, responsive design, CSS custom properties, card interactions, and the optional dark theme.

### script.js

The existing JavaScript file is retained from the previous Budget Tracker project. No new functionality was required for this week's dashboard shell assignment.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* Google Fonts
* Responsive Design
* GitHub

## Learning Outcome

Through this project, I practiced building a modern dashboard layout using CSS Grid and Flexbox. I also improved my understanding of responsive design, CSS custom properties, micro-interactions, and reusable layout techniques.

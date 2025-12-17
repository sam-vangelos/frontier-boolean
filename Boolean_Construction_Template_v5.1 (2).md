# INSTRUCTION

When you receive this template with a job description, immediately generate the complete HTML output.

**Do not:**
- Ask which direction the user wants
- Offer to workshop archetypes first
- Request confirmation before starting
- Summarize what you're about to do
- Ask clarifying questions

The job description will appear below this template or in the same message. If the user pastes a JD without commentary, treat that as the generation trigger.

---

# Boolean Construction Template v5.1

**Version:** 5.1 · December 2025 · Sam Vangelos

---

## Your Task

Generate a **complete, standalone HTML file** for Boolean sourcing from the job description provided.

**You must:**
1. Use the exact CSS provided in Section A (copy it literally)
2. Build all components using the exact HTML patterns in Section B
3. Follow the taxonomy in Section C
4. Apply the gating rules in Section D
5. **Follow the generation workflow in Section E** (generate blocks BEFORE archetypes)
6. Complete the checklist in Section F before outputting

**You must not:**
- Modify the CSS in any way
- Invent new component patterns
- Skip any required sections
- Create monolithic parentheticals (always cluster)
- Use emojis in any titles
- Generate archetypes before completing the Search Library
- Include seniority terms in boolean clusters (use LinkedIn filters instead)
- Add pre-built platform strings to archetypes (archetypes are guidance, not executable searches)
- Generate blocks for leadership/management (use LinkedIn seniority filters)
- Generate blocks for client verticals mentioned in JD (these are context, not candidate skills)
- Generate more than 6 blocks or more than 4 archetypes
- Put benchmarks in Methods or Concepts (benchmarks are always Tools)
- Put generic infrastructure terms in Broad clusters (PyTorch, Docker, Spark catch everyone)
- Let expansion drift into generic terms (every term must be role-relevant)

---

## Section A: CSS (Use Exactly)

Copy this entire style block into your output's `<head>`:

```css
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --bg-tertiary: #21262d;
    --bg-elevated: #1c2128;
    --border-primary: #30363d;
    --border-accent: #3b82f6;
    --text-primary: #e6edf3;
    --text-secondary: #8b949e;
    --text-muted: #6e7681;
    --accent-blue: #58a6ff;
    --accent-green: #3fb950;
    --accent-orange: #d29922;
    --accent-red: #f85149;
    --accent-purple: #a371f7;
    --accent-cyan: #39c5cf;
    --code-bg: #0d1117;
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.4);
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    font-size: 15px;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}
::-webkit-scrollbar-thumb {
    background: var(--border-primary);
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
}

.container {
    display: flex;
    min-height: 100vh;
}

/* ========================================
   SIDEBAR
   ======================================== */
.sidebar {
    width: 260px;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-primary);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 20px 0;
    z-index: 100;
}

.sidebar-header {
    padding: 0 20px 20px;
    border-bottom: 1px solid var(--border-primary);
    margin-bottom: 12px;
}

.sidebar-logo {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent-blue);
    margin-bottom: 6px;
}

.sidebar-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.3;
}

.sidebar-version {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
    font-family: 'JetBrains Mono', monospace;
}

.nav-section {
    padding: 6px 12px;
}

.nav-section-title {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-muted);
    padding: 6px 8px;
    margin-bottom: 2px;
}

.nav-link {
    display: block;
    padding: 8px 10px;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    border-radius: var(--radius-sm);
    transition: all 0.15s ease;
    border-left: 2px solid transparent;
}

.nav-link:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
}

.nav-link.active {
    background: rgba(88, 166, 255, 0.1);
    color: var(--accent-blue);
    border-left-color: var(--accent-blue);
}

/* ========================================
   MAIN CONTENT
   ======================================== */
.main {
    flex: 1;
    margin-left: 260px;
    padding: 32px 60px;
    max-width: 1100px;
}

.page-header {
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border-primary);
}

.page-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    background: rgba(88, 166, 255, 0.1);
    border: 1px solid rgba(88, 166, 255, 0.2);
    border-radius: 16px;
    font-size: 11px;
    font-weight: 500;
    color: var(--accent-blue);
    margin-bottom: 12px;
}

.page-badge::before {
    content: '';
    width: 5px;
    height: 5px;
    background: var(--accent-green);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
}

.page-title {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-subtitle {
    font-size: 15px;
    color: var(--text-secondary);
    font-weight: 400;
    max-width: 560px;
}

.page-meta {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
}

/* ========================================
   SECTIONS
   ======================================== */
.section {
    margin-bottom: 36px;
    scroll-margin-top: 24px;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    cursor: pointer;
    user-select: none;
}

.section-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    color: var(--accent-blue);
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
}

.section-toggle {
    margin-left: auto;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    transition: all 0.2s ease;
}

.section-header:hover .section-toggle {
    background: var(--bg-elevated);
    color: var(--text-primary);
}

.section-toggle svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
}

.section.collapsed .section-toggle svg {
    transform: rotate(-90deg);
}

.section-content {
    padding-left: 38px;
}

.section.collapsed .section-content {
    display: none;
}

.subsection {
    margin-bottom: 20px;
}

.subsection-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.subsection-title::before {
    content: '';
    width: 3px;
    height: 14px;
    background: var(--accent-blue);
    border-radius: 2px;
}

p {
    color: var(--text-secondary);
    margin-bottom: 10px;
    font-size: 14px;
}

strong {
    color: var(--text-primary);
    font-weight: 600;
}

/* ========================================
   BLOCKS - Level 1
   ======================================== */
.block {
    position: relative;
    background: rgba(88, 166, 255, 0.03);
    border: 1px solid var(--border-primary);
    border-left: 4px solid var(--accent-blue);
    border-radius: var(--radius-md);
    margin-bottom: 16px;
    overflow: hidden;
}

.block-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: var(--bg-tertiary);
    border-bottom: 1px solid var(--border-primary);
}

.block-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--accent-blue);
    border-radius: var(--radius-sm);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: var(--bg-primary);
}

.block-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
}

.block-content {
    padding: 12px 14px;
}

/* ========================================
   SUB-BLOCKS - Level 2 (Collapsible)
   ======================================== */
.sub-block {
    margin-left: 8px;
    margin-bottom: 8px;
}

.sub-block:last-child {
    margin-bottom: 0;
}

.sub-block-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    cursor: pointer;
    user-select: none;
    border-bottom: 1px solid transparent;
}

.sub-block-header:hover {
    border-bottom-color: var(--border-primary);
}

.sub-block-toggle {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    transition: transform 0.15s ease;
}

.sub-block-toggle svg {
    width: 10px;
    height: 10px;
}

.sub-block.collapsed .sub-block-toggle {
    transform: rotate(-90deg);
}

.sub-block-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-left: 2px solid var(--border-primary);
    padding-left: 8px;
}

.sub-block-count {
    font-size: 11px;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: auto;
    font-family: 'JetBrains Mono', monospace;
}

.sub-block-content {
    padding: 8px 0 8px 24px;
}

.sub-block.collapsed .sub-block-content {
    display: none;
}

/* Single sub-block (no collapse needed) */
.sub-block.solo .sub-block-header {
    cursor: default;
}

.sub-block.solo .sub-block-toggle {
    display: none;
}

.sub-block.solo .sub-block-count {
    display: none;
}

/* ========================================
   CLUSTERS - Level 3 (Single-line, truncated)
   ======================================== */
.cluster {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 0;
    border-bottom: 1px solid var(--bg-tertiary);
    cursor: pointer;
    transition: background 0.1s ease;
}

.cluster:last-child {
    border-bottom: none;
}

.cluster:hover {
    background: rgba(88, 166, 255, 0.05);
    margin: 0 -8px;
    padding: 4px 8px;
    border-radius: 4px;
}

.cluster-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    min-width: 80px;
    flex-shrink: 0;
}

.cluster-label::before {
    content: "•";
    margin-right: 6px;
    color: var(--border-primary);
}

/* Recent clusters */
.cluster.cluster-recent .cluster-label {
    color: var(--accent-orange);
}

.cluster.cluster-recent .cluster-label::after {
    content: " ⚡";
    font-size: 11px;
}

.cluster-code {
    flex: 1;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--accent-cyan);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: var(--bg-primary);
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid var(--border-primary);
}

.cluster-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    color: var(--text-muted);
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.15s ease;
}

.cluster-copy:hover {
    background: var(--bg-elevated);
    color: var(--text-primary);
    border-color: var(--accent-blue);
}

.cluster-copy.copied {
    background: rgba(63, 185, 80, 0.15);
    border-color: var(--accent-green);
    color: var(--accent-green);
}

.cluster-copy svg {
    width: 14px;
    height: 14px;
}

/* Expanded cluster (shows full code) */
.cluster.expanded .cluster-code {
    white-space: pre-wrap;
    word-break: break-word;
}

/* ========================================
   STANDALONE CODE BLOCKS
   ======================================== */
.code-block {
    position: relative;
    background: var(--code-bg);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    margin: 10px 0;
    overflow: hidden;
}

.code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--bg-tertiary);
    border-bottom: 1px solid var(--border-primary);
}

.code-label {
    font-size: 10px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.code-copy {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
}

.code-copy:hover {
    background: var(--bg-elevated);
    color: var(--text-primary);
    border-color: var(--accent-blue);
}

.code-copy.copied {
    background: rgba(63, 185, 80, 0.1);
    border-color: var(--accent-green);
    color: var(--accent-green);
}

pre {
    padding: 12px 14px;
    overflow-x: auto;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    line-height: 1.6;
    color: var(--text-primary);
    white-space: pre-wrap;
    word-break: break-word;
}

code {
    font-family: 'JetBrains Mono', monospace;
    background: var(--bg-tertiary);
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 12px;
    color: var(--accent-cyan);
}

pre code {
    background: none;
    padding: 0;
    color: inherit;
}

/* ========================================
   TABLES
   ======================================== */
.table-wrapper {
    overflow-x: auto;
    margin: 10px 0;
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
}

th {
    text-align: left;
    padding: 8px 12px;
    background: var(--bg-tertiary);
    font-weight: 600;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border-primary);
    white-space: nowrap;
}

td {
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-primary);
    color: var(--text-secondary);
    vertical-align: top;
}

tr:last-child td {
    border-bottom: none;
}

tr:hover td {
    background: var(--bg-secondary);
}

/* ========================================
   TAGS
   ======================================== */
.tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
}

.tag-recent { background: rgba(210, 153, 34, 0.15); color: var(--accent-orange); }
.tag-ambiguous { background: rgba(248, 81, 73, 0.15); color: var(--accent-red); }
.tag-broad { background: rgba(88, 166, 255, 0.15); color: var(--accent-blue); }
.tag-specific { background: rgba(163, 113, 247, 0.15); color: var(--accent-purple); }

.signal {
    display: inline-flex;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.signal-target { background: rgba(63, 185, 80, 0.15); color: var(--accent-green); }
.signal-adjacent { background: rgba(210, 153, 34, 0.15); color: var(--accent-orange); }
.signal-false { background: rgba(248, 81, 73, 0.15); color: var(--accent-red); }

/* ========================================
   CALLOUTS
   ======================================== */
.callout {
    padding: 12px 14px;
    border-radius: var(--radius-sm);
    margin: 12px 0;
    border-left: 3px solid;
}

.callout-info {
    background: rgba(88, 166, 255, 0.08);
    border-color: var(--accent-blue);
}

.callout-title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    color: var(--accent-blue);
    margin-bottom: 4px;
    font-size: 12px;
}

.callout p {
    margin: 0;
    font-size: 13px;
}

/* ========================================
   LISTS
   ======================================== */
ul, ol {
    margin: 10px 0;
    padding-left: 18px;
    color: var(--text-secondary);
}

li {
    margin-bottom: 4px;
    font-size: 13px;
}

li::marker {
    color: var(--accent-blue);
}

/* ========================================
   RELATIONSHIPS
   ======================================== */
.relationship-group {
    margin-bottom: 16px;
}

.relationship-group-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.relationship-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    margin-bottom: 6px;
    font-size: 13px;
}

.relationship-symbol {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    width: 18px;
    text-align: center;
    flex-shrink: 0;
}

.relationship-symbol.strong { color: var(--accent-green); }
.relationship-symbol.validates { color: var(--accent-blue); }
.relationship-symbol.differentiates { color: var(--accent-orange); }
.relationship-symbol.excludes { color: var(--accent-red); }

.relationship-content {
    flex: 1;
}

.relationship-blocks {
    font-family: 'JetBrains Mono', monospace;
    color: var(--text-primary);
    font-size: 12px;
}

.relationship-meaning {
    color: var(--text-secondary);
    margin-top: 2px;
    font-size: 12px;
}

/* ========================================
   ARCHETYPES
   ======================================== */
.archetype-item {
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    margin-bottom: 8px;
    overflow: hidden;
}

.archetype-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s ease;
}

.archetype-header:hover {
    background: var(--bg-tertiary);
}

.archetype-toggle {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    color: var(--accent-blue);
    flex-shrink: 0;
}

.archetype-toggle svg {
    width: 10px;
    height: 10px;
    transition: transform 0.2s ease;
}

.archetype-item.expanded .archetype-toggle svg {
    transform: rotate(90deg);
}

.archetype-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
}

.archetype-summary {
    font-size: 12px;
    color: var(--text-secondary);
    margin-left: 4px;
}

.archetype-content {
    display: none;
}

.archetype-item.expanded .archetype-content {
    display: block;
}

.archetype-body {
    padding: 0 14px 14px 42px;
    border-top: 1px solid var(--border-primary);
}

.archetype-section {
    margin-top: 12px;
}

.archetype-section-title {
    font-size: 10px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
}

.archetype-section p {
    margin: 0;
    font-size: 12px;
}

.archetype-why {
    color: var(--text-secondary);
    line-height: 1.5;
    font-size: 13px;
}

.archetype-blocks {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.archetype-block-tag {
    padding: 3px 8px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: 4px;
    font-size: 11px;
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent-blue);
}

/* RECIPE */
.archetype-recipe {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.recipe-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-sm);
    font-size: 13px;
}

.recipe-block {
    font-weight: 600;
    color: var(--accent-blue);
}

.recipe-arrow {
    color: var(--text-muted);
}

.recipe-components {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--text-secondary);
}

/* ========================================
   DISAMBIGUATION
   ======================================== */
.disambiguation-entry {
    margin-bottom: 20px;
}

.disambiguation-term {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.disambiguation-recommendation {
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    padding: 8px 12px;
    margin-top: 8px;
    font-size: 12px;
}

.disambiguation-recommendation strong {
    color: var(--accent-blue);
}

/* ========================================
   PLATFORM STRINGS
   ======================================== */
.platform-group {
    margin-bottom: 20px;
}

.platform-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.platform-description {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

/* ========================================
   REF CARDS
   ======================================== */
.ref-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-md);
    padding: 16px;
    margin: 12px 0;
}

.ref-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
}

.ref-card-item {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    padding: 12px;
}

.ref-card-item-title {
    font-size: 10px;
    font-weight: 600;
    color: var(--accent-blue);
    margin-bottom: 6px;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ref-card-item p {
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
}

/* ========================================
   FOOTER
   ======================================== */
.footer {
    margin-top: 36px;
    padding-top: 20px;
    border-top: 1px solid var(--border-primary);
    text-align: center;
    color: var(--text-muted);
    font-size: 12px;
}

.footer a {
    color: var(--accent-blue);
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 1024px) {
    .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .main {
        margin-left: 0;
        padding: 20px 16px;
    }

    .page-title {
        font-size: 26px;
    }

    .section-content {
        padding-left: 0;
    }

    .archetype-body {
        padding-left: 14px;
    }
}

.mobile-toggle {
    display: none;
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 200;
    width: 36px;
    height: 36px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1024px) {
    .mobile-toggle {
        display: flex;
    }
}
```

---

## Section B: Component Library

Use these exact HTML patterns. Do not modify structure or class names.

### B.1 Complete Document Template

Generate a complete HTML file following this structure. Replace all `{{PLACEHOLDER}}` values with role-specific content.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ROLE_TITLE}} · Search Library</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* PASTE COMPLETE CSS FROM SECTION A HERE */
    </style>
</head>
<body>
    <button class="mobile-toggle" onclick="toggleSidebar()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
    </button>

    <div class="container">
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">Search Library</div>
                <div class="sidebar-title">{{ROLE_TITLE}}</div>
                <div class="sidebar-version">v5.1 · {{MONTH}} {{YEAR}}</div>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Find Candidates</div>
                <a href="#summary" class="nav-link">Role Summary</a>
                <a href="#archetypes" class="nav-link">Archetypes</a>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Customize</div>
                <a href="#reference" class="nav-link">Search Library</a>
            </div>
        </nav>

        <main class="main">
            <header class="page-header">
                <h1 class="page-title">{{ROLE_TITLE}}</h1>
                <p class="page-subtitle">{{ROLE_SUMMARY}}</p>
                <p class="page-meta">Generated {{MONTH}} {{YEAR}} · Template v5.1 · {{COMPANY}}</p>
            </header>

            <!-- SECTION 0: ROLE SUMMARY -->
            <section class="section" id="summary">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">0</span>
                    <h2 class="section-title">Role Summary</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    <!-- Signal cards go here (use E.1 template) -->
                </div>
            </section>

            <!-- SECTION 1: ARCHETYPES (PRIMARY) -->
            <section class="section expanded" id="archetypes">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">1</span>
                    <h2 class="section-title">Archetypes</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    <!-- Archetype items go here (use B.5 template) -->
                </div>
            </section>

            <!-- SECTION 2: SEARCH LIBRARY -->
            <section class="section" id="reference">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">2</span>
                    <h2 class="section-title">Search Library</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    <!-- Blocks go here (use B.2, B.3, B.4 templates) -->
                </div>
            </section>

            <!-- Footer -->
            <footer class="footer">
                <p>Built with <a href="https://github.com/samvangelos/boolean-template" target="_blank">Sam Vangelos' Boolean Construction Template</a> v5.1</p>
                <p>{{ROLE_TITLE}} · {{COMPANY}} · {{MONTH}} {{YEAR}}</p>
            </footer>
        </main>
    </div>

    <script>
        // Toggle main sections
        function toggleSection(header) {
            const section = header.closest('.section');
            section.classList.toggle('collapsed');
        }

        // Toggle sub-blocks
        function toggleSubBlock(header) {
            const subBlock = header.closest('.sub-block');
            if (subBlock.classList.contains('solo')) return;
            subBlock.classList.toggle('collapsed');
        }

        // Toggle cluster expansion
        function toggleCluster(cluster) {
            cluster.classList.toggle('expanded');
        }

        // Toggle archetype
        function toggleArchetype(element) {
            element.classList.toggle('expanded');
        }

        // Toggle sidebar (mobile)
        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('open');
        }

        // Copy cluster code
        function copyCluster(button) {
            const cluster = button.closest('.cluster');
            const code = cluster.querySelector('.cluster-code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                button.classList.add('copied');
                setTimeout(() => button.classList.remove('copied'), 1500);
            });
        }

        // Copy code block
        function copyCode(button) {
            const codeBlock = button.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                button.classList.add('copied');
                const originalText = button.innerHTML;
                button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg> Copied!`;
                
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = originalText;
                }, 1500);
            });
        }

        // Auto-collapse sub-blocks in blocks with 2+ sub-blocks
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.block').forEach(block => {
                const subBlocks = block.querySelectorAll('.sub-block');
                if (subBlocks.length > 1) {
                    subBlocks.forEach(sb => sb.classList.add('collapsed'));
                } else if (subBlocks.length === 1) {
                    subBlocks[0].classList.add('solo');
                }
            });
        });

        // Highlight active nav on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>
```

### B.2 Block Component

```html
<div class="block">
    <div class="block-header">
        <span class="block-number">{{N}}</span>
        <h3 class="block-title">{{BLOCK_NAME}}</h3>
    </div>
    <div class="block-content">
        {{SUB_BLOCKS}}
    </div>
</div>
```

### B.3 Sub-Block Component (Collapsible)

Sub-blocks are collapsible when there are 2+ in a block. Use `data-clusters` to set cluster count.

```html
<div class="sub-block" data-clusters="{{N}}">
    <div class="sub-block-header" onclick="toggleSubBlock(this)">
        <span class="sub-block-toggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 9l-7 7-7-7"/>
            </svg>
        </span>
        <h4 class="sub-block-title">{{SUB_BLOCK_NAME}}</h4>
        <span class="sub-block-count">{{N}} clusters</span>
    </div>
    <div class="sub-block-content">
        {{CLUSTERS}}
    </div>
</div>
```

**Note:** The JavaScript will auto-collapse sub-blocks when there are 2+ in a block, and add `solo` class when there's only 1.

### B.4 Cluster Component (Single-line, Truncated)

For **non-recent** clusters:
```html
<div class="cluster" onclick="toggleCluster(this)">
    <span class="cluster-label">{{CLUSTER_TYPE}}</span>
    <span class="cluster-code">{{BOOLEAN_STRING}}</span>
    <button class="cluster-copy" onclick="event.stopPropagation(); copyCluster(this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    </button>
</div>
```

For **recent** clusters (add `cluster-recent` class):
```html
<div class="cluster cluster-recent" onclick="toggleCluster(this)">
    <span class="cluster-label">Recent</span>
    <span class="cluster-code">{{BOOLEAN_STRING}}</span>
    <button class="cluster-copy" onclick="event.stopPropagation(); copyCluster(this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    </button>
</div>
```

**Behavior:** 
- Clusters show truncated by default (single line with ellipsis)
- Click row to expand and show full string
- Recent clusters get ⚡ indicator via CSS

### B.5 Additional Components

**Archetype Item (with Recipe + WHY):**
```html
<div class="archetype-item" onclick="toggleArchetype(this)">
    <div class="archetype-header">
        <span class="archetype-toggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </span>
        <span class="archetype-name">{{ARCHETYPE_NAME}}</span>
        <span class="archetype-summary">— {{ONE_SENTENCE_DESCRIPTION}}</span>
    </div>
    <div class="archetype-content">
        <div class="archetype-body">
            <div class="archetype-section">
                <div class="archetype-section-title">Recipe</div>
                <div class="archetype-recipe">
                    <div class="recipe-item">
                        <span class="recipe-block">{{BLOCK_NAME}}</span>
                        <span class="recipe-arrow">→</span>
                        <span class="recipe-components">{{SUB_BLOCK}} ({{CLUSTER}})</span>
                    </div>
                    <!-- Repeat for each block in recipe -->
                </div>
            </div>
            <div class="archetype-section">
                <div class="archetype-section-title">WHY</div>
                <p class="archetype-why">{{WHY_EXPLANATION}}</p>
            </div>
        </div>
    </div>
</div>
```

The WHY section explains:
- What this persona does day-to-day
- Why these specific clusters together signal this persona (not another)
- How the clusters work as proxies (e.g., "Uses established tools for specific methods in broad concept domain")

**Recipe Item (inside archetype):**
```html
<div class="recipe-item">
    <span class="recipe-block">{{BLOCK_NAME}}</span>
    <span class="recipe-arrow">→</span>
    <span class="recipe-components">{{SUB_BLOCK}} ({{CLUSTER}})</span>
</div>
```

Example recipe:
```html
<div class="archetype-recipe">
    <div class="recipe-item">
        <span class="recipe-block">RL & Post-Training</span>
        <span class="recipe-arrow">→</span>
        <span class="recipe-components">Methods (Established) + Tools (Recent)</span>
    </div>
    <div class="recipe-item">
        <span class="recipe-block">AI Lab Context</span>
        <span class="recipe-arrow">→</span>
        <span class="recipe-components">Concepts (Established)</span>
    </div>
</div>
```

---

## Section C: Taxonomy

### C.1 Sub-block Types (Proxy Categories)

Every block has exactly 3 sub-blocks representing different search angles:

| Sub-block | Label | What it captures | Example (for "RL Post-Training") |
|-----------|-------|------------------|----------------------------------|
| **Concepts** | "Concepts" | Field vocabulary, domain descriptors | "reinforcement learning", "alignment", "post-training" |
| **Methods** | "Methods" | Techniques, algorithms, processes | "RLHF", "DPO", "PPO", "reward modeling" |
| **Tools** | "Tools" | Libraries, frameworks, platforms, benchmarks | "TRL", "DeepSpeed", "SWE-bench", "HumanEval" |

**Disambiguation tests:**

| Sub-block | Test | Pass example | Fail example |
|-----------|------|--------------|--------------|
| Concepts | "What field is this?" — appears in team/org descriptions | "agentic AI", "post-training" | "SWE-bench" (not a field) |
| Methods | "What do they do?" — describes a technique or process | "reward modeling", "DPO" | "HumanEval" (not a technique) |
| Tools | "What do they use?" — has a GitHub repo, docs site, or leaderboard | "Axolotl", "SWE-bench" | "alignment" (not a tool) |

**Tiebreaker:** If something passes multiple tests, use this hierarchy: **Tools > Methods > Concepts**

**Critical disambiguation — Benchmarks are ALWAYS Tools:**
- SWE-bench, HumanEval, WebArena, MMLU → Tools (Recent or Established)
- NOT Methods (they don't describe *how* to do something)
- NOT Concepts (they don't describe *what field* someone is in)

### C.2 Cluster Types (Precision Tiers)

Every sub-block has exactly 4 clusters representing precision levels:

| Cluster Type | Label Text | What belongs | CSS Class |
|--------------|------------|--------------|-----------|
| **Broad** | "Broad" | High recall within the domain | (none) |
| **Established** | "Established" | Mainstream 2+ years | (none) |
| **Recent** | "Recent" | Last 12-18 months | `cluster-recent` |
| **Specific** | "Specific" | Implementation-level, niche | (none) |

**CRITICAL: Broad ≠ Generic**

Broad clusters catch people *adjacent to this role's domain*, not adjacent to tech in general.

**Broad cluster quality test:** Would this term, searched alone on LinkedIn, return mostly people relevant to this specific role?

| Term | Passes test? | Why |
|------|--------------|-----|
| "reinforcement learning" | ✅ Yes | Most matches are ML researchers/engineers |
| "PyTorch" | ❌ No | Matches 500k+ general ML/data people |
| "agent systems" | ✅ Yes | Specific enough to this domain |
| "Docker" | ❌ No | Matches all of DevOps |
| "data pipeline" | ❌ No | Matches all data engineers |
| "RLHF data" | ✅ Yes | Domain-specific compound term |

**If a term fails this test, do NOT put it in a Broad cluster.** Either:
1. Make it a compound term (e.g., "data pipeline" → "RLHF data pipeline", "trajectory pipeline")
2. Move it to Established/Specific with qualifying context
3. Remove it entirely

### C.3 The Full Matrix

Each block generates a 3×4 matrix:

```
                    Broad    Established    Recent    Specific
Concepts             ●            ●           ●          ●
Methods              ●            ●           ●          ●
Tools                ●            ●           ●          ●
```

12 clusters per block. Each cluster has 8-20 terms.

### C.4 Cluster Rules

1. **Recent clusters use `class="cluster cluster-recent"`** — adds ⚡ indicator via CSS
2. **Cluster order: Broad → Established → Recent → Specific** (top to bottom)
3. **Every cluster: 8-20 terms** — no exceptions (see Section D.4)
4. **Apply all expansion dimensions to each cluster** — don't skip any

---

## Section D: Gating Rules

### D.1 Block Selection

| Constraint | Value |
|------------|-------|
| Floor | 4 blocks |
| Ceiling | 6 blocks |

**Blocks are the pillars of competency for the role.** They represent the core things someone must know, use, and do to perform the role's mandate. A viable candidate has signal in ALL blocks — the variation is in depth, not presence.

**To identify blocks:** Read the JD and ask: "What are the 4-6 distinct technical competencies this role requires?" Each answer is a block.

**Block test:** Is this a core competency required to perform the role? 
- If yes → block
- If it's context (client industries), a filter (seniority), or a nice-to-have → not a block

**Example for "Frontier Data Lead – RL":**
- RL & Post-Training ✓ (core: must understand the training they're supporting)
- Agent Systems ✓ (core: the environments are for agents)
- Environment Design ✓ (core: this is what they build)
- Evaluation & Verification ✓ (core: quality/verification is explicit in JD)
- Data Operations ✓ (core: trajectory data, annotation pipelines)
- Technical Leadership ✗ (filter: use LinkedIn seniority)
- Enterprise Domains ✗ (context: client verticals, not candidate skills)

**DO NOT generate blocks for:**
- **Leadership/Management** — Use LinkedIn seniority filters. "Technical leadership" isn't a boolean-searchable skill.
- **Client/Customer verticals** — If the JD mentions "Finance, Sales, Retail" as domains the company serves, these are context, not candidate skills.
- **Generic soft skills** — Communication, collaboration, stakeholder management. Not searchable.

### D.2 Uniform Sub-block Structure

**Every block has exactly 3 sub-blocks:**

| Sub-block | What it captures | Test |
|-----------|------------------|------|
| **Concepts** | Field vocabulary, domain descriptors | "What field is this?" — appears in team/org descriptions |
| **Methods** | Techniques, algorithms, processes | "What do they know how to do?" — appears as skills |
| **Tools** | Libraries, frameworks, platforms | "What do they use?" — has a GitHub repo or docs site |

No exceptions. No "2-4 sub-blocks." Always 3.

### D.3 Uniform Cluster Structure

**Every sub-block has exactly 4 clusters:**

| Cluster | What it captures | Precision |
|---------|------------------|-----------|
| **Broad** | Anyone adjacent to the space | High recall, low precision |
| **Established** | Mainstream terms (2+ years) | Balanced |
| **Recent** | Last 12-18 months | Cutting-edge signal |
| **Specific** | Implementation-level, niche | High precision, low recall |

No exceptions. Always 4 clusters per sub-block.

### D.4 Cluster Depth (CRITICAL)

**Every cluster MUST contain 8-20 terms.** Non-negotiable.

| Cluster Type | Minimum | Target | Maximum |
|--------------|---------|--------|---------|
| Broad | 8 | 12-15 | 20 |
| Established | 8 | 10-15 | 20 |
| Recent | 8 | 8-12 | 15 |
| Specific | 8 | 10-15 | 20 |

**Expansion dimensions — apply ALL to each cluster:**

1. **Lexical variants** — hyphenation, spacing, abbreviations
2. **Synonyms** — different words for same concept
3. **Academic terminology** — research paper language
4. **Industry terminology** — job posting language
5. **Older terms** — previous-generation phrasing
6. **Emerging terms** — newest developments (for Recent clusters)
7. **Domain-specific** — target domain manifestations
8. **Compound terms** — concept + common modifiers

**Worked example — expanding "RLHF" for Methods (Established):**

```
Start with core term:
  RLHF

Apply expansions:
  + Lexical variants: "RL-HF", "RL from HF"
  + Full form: "reinforcement learning from human feedback"
  + Synonyms: "human feedback training", "preference-based training"
  + Academic: "preference learning", "reward learning"  
  + Industry: "alignment training", "safety training"
  + Older terms: "interactive machine learning", "learning from feedback"
  + Compound: "RLHF pipeline", "RLHF fine-tuning", "RLHF training"

Result:
("RLHF" OR "reinforcement learning from human feedback" OR "human feedback training" 
OR "preference-based training" OR "preference learning" OR "reward learning" 
OR "alignment training" OR "RLHF pipeline" OR "RLHF fine-tuning")
```

**Pre-output check:** Count OR operators in each cluster. If count < 7, keep expanding.

**CRITICAL: Expansion must stay domain-specific**

When expanding, verify EVERY term is still relevant to this specific role. Generic infrastructure terms should not appear unless the role is specifically about that infrastructure.

**Negative example — expanding "evaluation" incorrectly:**

```
Start with: "evaluation"

❌ WRONG expansion (drifts generic):
  + "A/B testing" ← catches product managers
  + "statistical testing" ← catches data analysts  
  + "pytest" ← catches all software engineers
  + "CI/CD" ← catches all DevOps

✅ CORRECT expansion (stays domain-specific):
  + "model evaluation" ← ML-specific
  + "LLM evaluation" ← domain-specific
  + "reward model evaluation" ← role-specific
  + "benchmark evaluation" ← domain-specific
```

**Expansion quality test:** For each term, ask: "Would someone with ONLY this term on their profile be a reasonable candidate?" If no, the term is too generic.

**DO NOT include in any cluster:**
- Generic infrastructure: PyTorch, TensorFlow, Docker, Kubernetes, AWS, GCP (unless role is infra-specific)
- Generic testing: pytest, unittest, CI/CD, GitHub Actions (unless role is testing-specific)
- Generic data: Spark, Snowflake, Airflow, ETL (unless role is data-engineering-specific)
- Generic methods: A/B testing, statistical testing, regression testing

### D.5 Archetype Requirements

| Constraint | Value |
|------------|-------|
| Floor | 3 archetypes |
| Ceiling | 4 archetypes |

Each archetype must include:
- Name + 1-sentence description
- Search recipe (Block × Sub-block × Cluster combinations)
- WHY explanation (see D.6)

**Archetype validation — DELETE archetypes that fail these tests:**

1. **Distinct sourcing path** — If two archetypes use 80%+ of the same clusters, merge them. Each archetype should represent a genuinely different search strategy.

2. **Role-specific** — "Technical Program Lead" or "Domain Expert" are generic personas. Every archetype must connect directly to specific technical requirements in the JD.

3. **Searchable signal** — The archetype must be findable via boolean. "Someone who ships" is not a search strategy.

### D.6 WHY Quality (CRITICAL)

The WHY is the most important teaching element in the output. It teaches sourcers *why* certain terms cluster together and how combinations create signal.

**The WHY must explain combinatorial signal** — what the cluster combination means that individual clusters don't.

❌ **Bad WHY** (restates cluster contents):
> "Environment Design (Recent) filters for people using current approaches to task generation."

This just describes what's in the cluster. It doesn't teach anything.

✅ **Good WHY** (explains combination logic):
> "Agent Systems (Established) alone catches anyone who's touched LangChain. Adding Environment Design (Methods Specific) filters for people who *build* agent sandboxes, not just deploy agents. The intersection means: designed task curricula, built verification harnesses, or created simulation infrastructure. Without Data Operations, you'd catch researchers who can't operationalize trajectory pipelines."

This explains:
- What each cluster adds to the signal
- What false positives get filtered out
- Why the intersection identifies this specific persona

**WHY must answer:**
- What does this *combination* signal that individual clusters don't?
- What false positives does each added cluster filter out?
- Why would this person (not someone from a related field) have these terms together?

### D.7 Math Check

A complete output contains:
- 4-6 blocks
- 3 sub-blocks per block = 12-18 sub-blocks
- 4 clusters per sub-block = 48-72 clusters
- 8+ terms per cluster = 384-576+ terms

This is still comprehensive, but focused. Every block must earn its place.

---

## Section E: Generation Workflow

**CRITICAL: Generation order ≠ Output order.**

The final HTML shows Archetypes before Search Library, but you must generate them in reverse:

### Step 1: Extract Signals
Read the JD and identify:
- Core function
- Technical domain
- Key tools

### Step 2: Generate Search Library (FIRST)
For each conceptual domain in the role:
1. Create a Block
2. Generate 3 Sub-blocks (Concepts, Methods, Tools)
3. For each Sub-block, generate 4 Clusters (Broad, Established, Recent, Specific)
4. Each Cluster must have 8-20 terms

**Complete all blocks before proceeding to Step 3.**

### Step 3: Synthesize Archetypes (SECOND)
Now that blocks exist, create 3-4 candidate archetypes:

1. **Identify distinct personas** — Who are the different types of people who could fill this role?
2. **Map each persona to blocks** — Which blocks/sub-blocks/clusters describe this person?
3. **Write the recipe** — List the Block → Sub-block (Cluster) combinations
4. **Write the WHY** — Explain why these clusters together signal this persona

**Archetype Recipe + WHY Format:**
```
Archetype: The Lab Post-Training Lead

Recipe:
• RL & Post-Training → Methods (Established) + Tools (Recent)
• Evaluation & Verification → Methods (Specific)

WHY:
This person built RL training pipelines (not just used them). Methods (Established) 
catches core RLHF/DPO vocabulary — anyone doing post-training uses these terms. 
Tools (Recent) filters for hands-on work with current infrastructure; mentions of 
OpenRLHF or Axolotl mean they're building, not just reading papers. Evaluation 
(Methods Specific) adds reward modeling and verifier design — without this, you'd 
catch fine-tuning practitioners who lack the measurement rigor this role requires.
```

### Step 4: Assemble Output
Now arrange in OUTPUT order:
1. Role Summary
2. Archetypes (with recipes and WHY explanations)
3. Search Library (all blocks)
4. Footer

---

## Section F: Pre-Output Checklist

Quick verification before outputting. If any fail, revise.

**Structure:**
- [ ] 4-6 blocks, each with 3 sub-blocks × 4 clusters
- [ ] 3-4 archetypes
- [ ] Section order: Summary → Archetypes → Search Library → Footer

**Blocks:**
- [ ] Each block is a pillar of competency for the role (see D.1)
- [ ] No leadership/management blocks (use LinkedIn filters)
- [ ] No client vertical blocks (context, not skills)

**Clusters:**
- [ ] Every cluster has 8+ terms (see D.4 expansion example)
- [ ] No seniority terms in boolean

**Archetypes:**
- [ ] WHY explains combinatorial signal, not just cluster contents (see D.6)
- [ ] Each archetype is a distinct sourcing path
- [ ] No generic personas ("Technical Lead", "Domain Expert")

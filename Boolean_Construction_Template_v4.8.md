# Boolean Construction Template v4.8

**Version:** 4.8  
**Last Updated:** December 2025  
**Author:** Sam Vangelos

---

## Your Task

Analyze the attached job description and generate a **complete, standalone HTML file** for Boolean sourcing.

**You must:**
1. Use the exact CSS provided in Section A (copy it literally)
2. Build all components using the exact HTML patterns in Section B
3. Follow the clustering taxonomy in Section C
4. Apply the gating rules in Section D
5. Include all fixed content from Section E
6. Structure your output according to Section F
7. Complete the audit checklist in Section G before outputting

**You must not:**
- Modify the CSS in any way
- Invent new component patterns
- Skip any required sections
- Create monolithic parentheticals (always cluster)
- Use emojis in platform string titles
- Use colored tags in the "How to Use" cluster types legend

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
    <title>Boolean Analysis: {{ROLE_TITLE}}</title>
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
                <div class="sidebar-logo">Boolean Analysis</div>
                <div class="sidebar-title">{{ROLE_TITLE}}</div>
                <div class="sidebar-version">v4.8 · {{MONTH}} {{YEAR}}</div>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Overview</div>
                <a href="#overview" class="nav-link">How to Use</a>
                <a href="#signals" class="nav-link">Extracted Signals</a>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Search Building</div>
                <a href="#blocks" class="nav-link">Boolean Blocks</a>
                <a href="#relationships" class="nav-link">Block Relationships</a>
                <a href="#archetypes" class="nav-link">Archetypes</a>
            </div>

            <div class="nav-section">
                <div class="nav-section-title">Reference</div>
                <a href="#disambiguation" class="nav-link">Disambiguation</a>
                <a href="#exclusions" class="nav-link">Exclusions</a>
                <a href="#strings" class="nav-link">Ready-to-Use Strings</a>
            </div>
        </nav>

        <main class="main">
            <header class="page-header">
                <div class="page-badge">Boolean Search Guide</div>
                <h1 class="page-title">{{ROLE_TITLE}}</h1>
                <p class="page-subtitle">{{ROLE_SUMMARY}}</p>
                <p class="page-meta">Generated {{MONTH}} {{YEAR}} · Template v4.8 · {{COMPANY}}</p>
            </header>

            <!-- SECTION 0: OVERVIEW -->
            <section class="section" id="overview">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">0</span>
                    <h2 class="section-title">How to Use This Guide</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    <p>This guide contains Boolean search building blocks for sourcing candidates.</p>
                    
                    <div class="subsection">
                        <h3 class="subsection-title">Quick Start</h3>
                        <ol>
                            <li><strong>Jump to Ready-to-Use Strings</strong> if you need working searches immediately</li>
                            <li><strong>Explore Archetypes</strong> to understand candidate profiles</li>
                            <li><strong>Use Boolean Blocks</strong> to build custom searches</li>
                        </ol>
                    </div>

                    <div class="subsection">
                        <h3 class="subsection-title">Cluster Types</h3>
                        <ul>
                            <li><code>Broad</code> — High recall, catches anyone in the space</li>
                            <li><code>Established</code> — Mainstream methods/tools (2+ years)</li>
                            <li><code>Recent</code> — Cutting-edge (last 12-18 months)</li>
                            <li><code>Specific</code> — Implementation-level, niche terms</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- SECTION 1: EXTRACTED SIGNALS -->
            <section class="section" id="signals">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">1</span>
                    <h2 class="section-title">Extracted Signals</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    <div class="ref-card">
                        <div class="ref-card-grid">
                            <div class="ref-card-item">
                                <div class="ref-card-item-title">Core Function</div>
                                <p>{{CORE_FUNCTION}}</p>
                            </div>
                            <div class="ref-card-item">
                                <div class="ref-card-item-title">Technical Domain</div>
                                <p>{{TECHNICAL_DOMAIN}}</p>
                            </div>
                            <div class="ref-card-item">
                                <div class="ref-card-item-title">Key Tools</div>
                                <p>{{KEY_TOOLS}}</p>
                            </div>
                            <div class="ref-card-item">
                                <div class="ref-card-item-title">Seniority</div>
                                <p>{{SENIORITY}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION 2: BOOLEAN BLOCKS -->
            <section class="section" id="blocks">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">2</span>
                    <h2 class="section-title">Boolean Blocks</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{BLOCKS}}
                </div>
            </section>

            <!-- SECTION 3: BLOCK RELATIONSHIPS -->
            <section class="section" id="relationships">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">3</span>
                    <h2 class="section-title">Block Relationships</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{RELATIONSHIPS}}
                </div>
            </section>

            <!-- SECTION 4: ARCHETYPES -->
            <section class="section" id="archetypes">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">4</span>
                    <h2 class="section-title">Candidate Archetypes</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{ARCHETYPES}}
                </div>
            </section>

            <!-- SECTION 5: DISAMBIGUATION -->
            <section class="section" id="disambiguation">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">5</span>
                    <h2 class="section-title">Disambiguation</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{DISAMBIGUATION}}
                </div>
            </section>

            <!-- SECTION 6: EXCLUSIONS -->
            <section class="section" id="exclusions">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">6</span>
                    <h2 class="section-title">Exclusion Patterns</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{EXCLUSIONS}}
                </div>
            </section>

            <!-- SECTION 7: READY-TO-USE STRINGS -->
            <section class="section" id="strings">
                <div class="section-header" onclick="toggleSection(this)">
                    <span class="section-number">7</span>
                    <h2 class="section-title">Ready-to-Use Strings</h2>
                    <span class="section-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </span>
                </div>
                <div class="section-content">
                    {{PLATFORM_STRINGS}}
                </div>
            </section>

            <footer class="footer">
                <p>Built with <a href="https://github.com/samvangelos/boolean-template" target="_blank">Sam Vangelos' Boolean Construction Template</a> v4.8</p>
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

**Relationship Item:**
```html
<div class="relationship-item">
    <span class="relationship-symbol {{TYPE}}">{{SYMBOL}}</span>
    <div class="relationship-content">
        <div class="relationship-blocks">{{BLOCK_PAIR}}</div>
        <div class="relationship-meaning">{{MEANING}}</div>
    </div>
</div>
```
Where `{{TYPE}}` is one of: `strong`, `validates`, `differentiates`, `excludes`
And `{{SYMBOL}}` is one of: `+`, `→`, `|`, `✗`

**Archetype Item:**
```html
<div class="archetype-item" onclick="toggleArchetype(this)">
    <div class="archetype-header">
        <span class="archetype-toggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </span>
        <span class="archetype-name">{{ARCHETYPE_NAME}}</span>
        <span class="archetype-summary">— {{ARCHETYPE_SUMMARY}}</span>
    </div>
    <div class="archetype-content">
        <div class="archetype-body">
            <div class="archetype-section">
                <div class="archetype-section-title">Description</div>
                <p>{{DESCRIPTION}}</p>
            </div>
            <div class="archetype-section">
                <div class="archetype-section-title">Key Blocks</div>
                <div class="archetype-blocks">
                    {{BLOCK_TAGS}}
                </div>
            </div>
            <div class="archetype-section">
                <div class="archetype-section-title">LinkedIn String</div>
                <div class="code-block">
                    <div class="code-header">
                        <span class="code-label">LinkedIn Recruiter</span>
                        <button class="code-copy" onclick="event.stopPropagation(); copyCode(this)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copy
                        </button>
                    </div>
                    <pre><code>{{LINKEDIN_STRING}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Platform String Group:**
```html
<div class="platform-group">
    <div class="platform-title">{{PLATFORM_NAME}} — {{SEARCH_TYPE}}</div>
    <p class="platform-description">{{DESCRIPTION}}</p>
    <div class="code-block">
        <div class="code-header">
            <span class="code-label">{{PLATFORM_NAME}}</span>
            <button class="code-copy" onclick="copyCode(this)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy
            </button>
        </div>
        <pre><code>{{BOOLEAN_STRING}}</code></pre>
    </div>
</div>
```

**Disambiguation Entry:**
```html
<div class="disambiguation-entry">
    <div class="disambiguation-term">"{{TERM}}"</div>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>If paired with...</th>
                    <th>Likely context</th>
                    <th>Signal</th>
                </tr>
            </thead>
            <tbody>
                {{TABLE_ROWS}}
            </tbody>
        </table>
    </div>
    <div class="disambiguation-recommendation">
        <strong>Recommendation:</strong> {{RECOMMENDATION}}
    </div>
</div>
```

---

## Section C: Clustering Taxonomy

Every sub-block must contain **2-4 clusters**. Assign terms to clusters using this taxonomy:

| Cluster Type | Label Text | What belongs | CSS Class |
|--------------|------------|--------------|-----------|
| **Umbrella** | "Broad" | Terms that catch anyone in the space. High recall, low precision. | (none) |
| **Established** | "Established" | Methods/tools in mainstream use 2+ years. | (none) |
| **Recent** | "Recent" | Methods/tools from last 12-18 months. | `cluster-recent` |
| **Specific** | "Specific" | Implementation-level: tool names, code patterns, niche techniques. | (none) |

### Clustering Rules

1. **Every sub-block must have at least one Broad OR Established cluster**
2. **Recent clusters use `class="cluster cluster-recent"`** — this adds ⚡ indicator via CSS
3. **Maximum 8-10 terms per cluster** — if you have more, split by specificity
4. **Cluster order: Broad → Established → Recent → Specific** (top to bottom)

---

## Section D: Gating Rules

### D.1 Block Gating

| Constraint | Value |
|------------|-------|
| Floor | 5 blocks |
| Ceiling | 8 blocks |

**Distinctiveness test for adding block N+1:**
1. Does this concept cluster represent a genuinely distinct search dimension?
2. Could these terms be folded into an existing block as a sub-block instead?
3. Would a sourcer realistically search this dimension independently?

If **yes to all three** → create the block  
If **no to any** → fold into existing block as sub-block

### D.2 Other Constraints

| Element | Floor | Ceiling |
|---------|-------|---------|
| Sub-blocks per block | 2 | 4 |
| Clusters per sub-block | 2 | 4 |
| Archetypes | 2 | 4 |
| Relationships | 6 | 10 |
| Disambiguation entries | 2 | 4 |
| Platform strings | 4 | 8 |

---

## Section E: Fixed Content

### E.1 How to Use This Guide

Include this standard content (use `<code>` tags for cluster types, not colored tags):

```html
<div class="subsection">
    <h3 class="subsection-title">Quick Start</h3>
    <ol>
        <li><strong>Jump to Ready-to-Use Strings</strong> if you need working searches immediately</li>
        <li><strong>Explore Archetypes</strong> to understand candidate profiles</li>
        <li><strong>Use Boolean Blocks</strong> to build custom searches</li>
    </ol>
</div>

<div class="subsection">
    <h3 class="subsection-title">Cluster Types</h3>
    <ul>
        <li><code>Broad</code> — High recall, catches anyone in the space</li>
        <li><code>Established</code> — Mainstream methods/tools (2+ years)</li>
        <li><code>Recent</code> — Cutting-edge (last 12-18 months)</li>
        <li><code>Specific</code> — Implementation-level, niche terms</li>
    </ul>
</div>
```

### E.2 Platform String Titles

**Do NOT use emojis.** Use plain text titles:

- ✅ `LinkedIn Recruiter — Primary Search`
- ✅ `GitHub — Code Eval Contributors`
- ❌ `💼 LinkedIn Recruiter — Primary Search`
- ❌ `🐙 GitHub — Code Eval Contributors`

---

## Section F: Output Structure

Your output must follow this exact section order:

1. **Overview** (Section 0) — How to Use
2. **Extracted Signals** (Section 1) — 4 signal cards
3. **Boolean Blocks** (Section 2) — 5-8 blocks with clustered sub-blocks
4. **Block Relationships** (Section 3) — 6-10 relationships
5. **Archetypes** (Section 4) — 2-4 collapsible archetypes
6. **Disambiguation** (Section 5) — 2-4 ambiguous terms
7. **Exclusions** (Section 6) — Patterns + NOT clauses
8. **Ready-to-Use Strings** (Section 7) — 4-8 platform-specific strings
9. **Footer**

---

## Section G: Pre-Output Audit Checklist

**Before outputting, verify each item. If any fail, revise.**

### Structure Checks
- [ ] Block count: 5-8
- [ ] Sub-blocks per block: 2-4
- [ ] Clusters per sub-block: 2-4
- [ ] Archetypes: 2-4
- [ ] All required sections present

### Hierarchy Checks
- [ ] Clusters use single-line layout (label + code + copy button)
- [ ] Sub-blocks have toggle and cluster count
- [ ] Recent clusters have `cluster-recent` class
- [ ] Blocks have blue left border

### Content Checks
- [ ] No emojis in platform string titles
- [ ] Cluster Types legend uses `<code>` tags, not colored tags
- [ ] Each cluster includes action-verb variants where applicable
- [ ] No cluster exceeds 10 terms

### Visual Checks
- [ ] CSS is copied exactly from Section A
- [ ] All components use exact HTML from Section B
- [ ] JavaScript includes auto-collapse logic for sub-blocks

### Final Verification
- [ ] Would a sourcer understand this in 15 seconds?
- [ ] Are strings copy-paste ready?
- [ ] Did I challenge at least one initial assumption and improve it?

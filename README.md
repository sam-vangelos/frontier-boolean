## Boolean Construction Template v4.8

### Problem

Technical recruiting for frontier AI roles suffers from three compounding issues:

1. **Terminology fragmentation** — The same work is described as "post-training," "alignment," "preference optimization," or "RLHF" depending on whether the candidate came from research, industry, or early-stage startups. Job descriptions and candidate profiles use inconsistent vocabulary.

2. **Search saturation** — Generic Boolean strings surface the same candidate pools across all recruiters using standard sourcing tools. Differentiation requires granular control over term selection.

3. **Signal degradation** — Flat Boolean strings (2000-character walls of ORs) provide no mechanism for adjusting precision/recall tradeoffs or distinguishing between term categories.

### Solution

This template converts Claude into a structured search generation system. Input: job description. Output: standalone HTML file containing hierarchical Boolean logic, candidate archetypes, disambiguation guides, and platform-ready strings.

### Architecture

The system organizes Boolean content into three levels:

| Level | Contains | Behavior |
|-------|----------|----------|
| **Block** | 2-4 sub-blocks | Top-level search dimension (e.g., "Code Agents," "Post-Training Methods") |
| **Sub-block** | 2-4 clusters | Thematic grouping within a block |
| **Cluster** | Boolean string | Typed term grouping with copy functionality |

Clusters are assigned one of four types:

| Type | Definition | Use Case |
|------|------------|----------|
| Broad | High recall, low precision | Initial pipeline fill |
| Established | Mainstream terms (2+ years in use) | Reliable baseline searches |
| Recent | Emerging terms (12-18 months) | Differentiated sourcing, lower volume |
| Specific | Implementation-level terminology | Practitioner identification |

### Outputs

The generated HTML file contains:

1. **Extracted Signals** — Tools, benchmarks, frameworks, and systems inferred from JD
2. **Boolean Blocks (5-8)** — Collapsible, with sub-block and cluster hierarchy
3. **Block Relationships (6-10)** — Logical connections between blocks (validates, differentiates, excludes)
4. **Candidate Archetypes (2-4)** — Inferred profiles with descriptions and search paths
5. **Disambiguation Guide (2-4 entries)** — Context rules for ambiguous terms
6. **Exclusion Patterns** — NOT clauses for false positive mitigation
7. **Platform Strings (4-8)** — LinkedIn, GitHub, X-formatted, copy-paste ready

### Constraints

The template enforces gating rules to prevent output bloat:

| Element | Floor | Ceiling |
|---------|-------|---------|
| Blocks | 5 | 8 |
| Sub-blocks per block | 2 | 4 |
| Clusters per sub-block | 2 | 4 |
| Terms per cluster | — | 10 |
| Archetypes | 2 | 4 |
| Relationships | 6 | 10 |

An audit checklist runs before output to verify structural compliance.

### Term Expansion

For each concept, the system exhausts seven dimensions:

- Lexical variants (spelling, hyphenation, abbreviation)
- Tool/library names
- Academic terminology
- Industry terminology
- Older terms (previous-generation)
- Emerging terms (12-18 months)
- Domain-specific variants

### Usage

1. Download `Boolean_Construction_Template_v4.8.md`
2. Attach to Claude (Opus 4.5 recommended)
3. Input job description
4. Receive HTML file; open in browser

### Dependencies

- Claude Opus 4.5 (required for full HTML generation)
- Claude Sonnet 4.5 (acceptable for simpler roles; verify output)

### License

MIT. Attribution in footer requested.

---

v4.8 · December 2025 · Sam Vangelo

## Boolean Construction Template v5.0

### Problem

Technical recruiting for frontier AI roles suffers from three compounding issues:

1. **Terminology fragmentation** — The same work is described as "post-training," "alignment," "preference optimization," or "RLHF" depending on whether the candidate came from research, industry, or early-stage startups. Job descriptions and candidate profiles use inconsistent vocabulary.

2. **Search saturation** — Generic Boolean strings surface the same candidate pools across all recruiters using standard sourcing tools. Differentiation requires granular control over term selection.

3. **Workflow friction** — Previous versions of this template required sourcers to understand block relationships and manually compose searches. This created a learning curve that slowed adoption.

### Solution

This template converts Claude into a structured search generation system. Input: job description. Output: standalone HTML file containing candidate archetypes with ready-to-use strings, search recipes explaining cluster logic, and a Boolean reference library for custom composition.

### v5.0 Architecture

**Archetypes are now the primary entry point.** Sourcers open the output, identify the persona they're targeting, copy a platform-specific string, and execute. No block navigation required for standard use cases.

**Uniform generation enforces consistency.** Every block contains exactly 3 sub-blocks (Concepts, Methods, Tools). Every sub-block contains exactly 4 clusters (Broad, Established, Recent, Specific). Every cluster contains 8-20 terms. This eliminates structural variance across outputs.

**Recipes expose combination logic.** Each archetype includes a recipe explaining which clusters were combined and why. Example: "The Lab Post-Training Lead = Methods (Established) + Tools (Recent)" communicates both the search composition and the underlying signal hypothesis.

### Output Structure

```
Archetype: "The Lab Post-Training Lead"
├── Recipe: RL & Post-Training → Methods (Established) + Tools (Recent)
├── Recipe: AI Lab Context → Concepts (Established)
└── [Copy LinkedIn]  [Copy GitHub]

Boolean Reference (Library)
├── Block: RL & Post-Training
│   ├── Sub-block: Concepts (4 clusters)
│   ├── Sub-block: Methods (4 clusters)
│   └── Sub-block: Tools (4 clusters)
└── [6-10 blocks total]
```

### Constraints

| Element | Value |
|---------|-------|
| Blocks | 6-10 |
| Sub-blocks per block | 3 (fixed: Concepts, Methods, Tools) |
| Clusters per sub-block | 4 (fixed: Broad, Established, Recent, Specific) |
| Terms per cluster | 8-20 |

### Usage

1. Download `Boolean_Construction_Template_v5.0.md`
2. Attach to Claude (Opus 4.5 recommended)
3. Input job description
4. Open HTML output in browser

### Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page and documentation |
| `Boolean_Construction_Template_v5.0.md` | Template file (attach to Claude) |
| `LICENSE` | MIT with attribution requirement |
| `README.md` | This document |

### License

MIT. Attribution in footer required.

---

v5.0 · December 2025 · Sam Vangelos

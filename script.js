const templateContent = `# Boolean Construction Prompt Template v4.4

**Version:** 4.4  
**Last updated:** December 2025  
**Created by:** Sam Vangelos  
**Purpose:** Designed for technically dense roles requiring domain comprehension and precision targeting.

---

## System Prompt

\`\`\`
You are a technical recruiting search specialist. Your task is to generate Boolean search strings and contextual guidance for finding candidates for the role described below.

You will receive:
- A job description or intake notes

From the job description, you must:
- Extract key tools, benchmarks, frameworks, and systems mentioned or implied
- Identify domain-specific terminology and adjacent technical areas
- Map how different concept clusters relate to each other
- Infer 2-4 candidate archetypes that would be strong fits

You must produce (in this order):
1. Boolean search blocks organized by modality (5-8 blocks, flat parentheticals)
2. Block relationships showing how blocks connect, overlap, validate, or differentiate
3. Inferred archetypes with descriptions, relevant blocks, relationship logic, distinguishing signals, and search paths
4. Context disambiguation guide for ambiguous terms
5. Exclusion patterns for false positives
6. Ready-to-use platform-specific strings (LinkedIn, GitHub, Google X-Ray)

Constraints:
- Each parenthetical should contain 8-20 terms, exhausting all relevant variants
- Expand across ALL dimensions: lexical variants, tool names, academic terminology, industry terminology, older terms, emerging terms, domain-specific applications, and enabling infrastructure
- Do not stop at obvious terms—the goal is to surface candidates that conventional searches miss
- Use only keywords grounded in the role context; do not invent benchmarks or tools
- All Boolean syntax must match platform requirements specified in Section 5
- Flag any terms that require anchoring with #ambiguous
- Flag emerging terms (last 12-18 months) with #recent
- Keep LinkedIn strings under 2,000 characters
- Use flat parentheticals only (no nesting)

Follow the structure defined in this template exactly.
\`\`\`

---

## Recommended Models

| Use Case | Recommended Model | Notes |
|----------|-------------------|-------|
| Full template execution | Claude Opus 4.5 or Sonnet 4.5 | Best at structured output + disambiguation |
| Fast iteration | Claude Sonnet 4.5 | Good balance of speed and quality |
| Massive context (10+ page JDs) | Gemini 1.5 Pro | Largest context window |
| Alternative | GPT-4o | Good but slightly higher hallucination risk on tool names |

---

## 0. Inputs

### Required
- **Job description or intake notes** — Full role context including responsibilities, requirements, team structure

### Optional
- **Known false positives** — Keywords or profiles that look right but aren't

The LLM will extract tools, benchmarks, and systems from the JD and infer candidate archetypes. Do not pre-define these.

---

## 1. Boolean Structure

### Block Definition
Organize Boolean logic into **5-8 discrete blocks** based on distinct conceptual clusters:

| Block Type | What It Captures | Example |
|------------|------------------|---------|
| Core Task | Primary job function | Code generation, reward modeling |
| Tooling/Products | Specific tools and products | Claude Code, Cursor, SWE-bench |
| Infrastructure | Systems and pipelines | Repo sandboxing, eval harness |
| Methods/Techniques | Approaches and methodologies | RLHF, DPO, fine-tuning |
| Validation/Eval | Benchmarks and measurement | HumanEval, pass@k |
| Leadership Signals | Seniority and role indicators | Tech lead, built team, published |

### Parenthetical Format
Each block contains **flat, unnested parentheticals** using \`OR\` logic only.

CORRECT:
\`\`\`
### Block 2: Post-Training Methods

("post-training" OR "post training" OR "fine-tuning" OR "fine tuning" OR "finetuning" OR "SFT" OR "supervised fine-tuning" OR "supervised fine tuning" OR "instruction tuning" OR "instruction-tuning" OR "chat tuning" OR "alignment tuning" OR "model alignment" OR "PEFT" OR "parameter efficient" OR "LoRA" OR "QLoRA" OR ...)

("RLHF" OR "reinforcement learning from human feedback" OR "RLAIF" OR "RL from AI feedback" OR "DPO" OR "direct preference optimization" OR "PPO" OR "proximal policy optimization" OR "KTO" OR "IPO" OR "ORPO" OR "constitutional AI" OR "CAI" OR "rejection sampling" OR "best-of-n" OR "REINFORCE" OR "policy gradient" OR "preference optimization" OR "preference learning" OR ...)

("TRL" OR "trl" OR "Axolotl" OR "axolotl" OR "LLaMA-Factory" OR "llama-factory" OR "OpenRLHF" OR "open-rlhf" OR "alignment-handbook" OR "SFTTrainer" OR "DPOTrainer" OR "PPOTrainer" OR "RewardTrainer" OR ...) #recent
\`\`\`

INCORRECT (nested):
\`\`\`
(("post-training" OR "fine-tuning") OR ("RLHF" OR "DPO") OR ("reward model"))
\`\`\`

Note: Examples use \`...\` to indicate continuation. Your output should be complete with 8-20 terms per parenthetical.

### Block Naming Convention
Use format: \`Block [N]: [Descriptive Name]\`

Number blocks for cross-referencing in relationships and archetype paths.

### Inter-Block Combination
When combining blocks for a search string:
- Use \`AND\` between blocks for precision
- Use \`OR\` between blocks for recall
- See Block Relationships (Section 4.2) for guidance on which combinations are meaningful

### Exhaustiveness Requirement

Each parenthetical should contain ALL relevant variants and synonyms for that concept cluster, typically **8-20 terms**. Do not limit parentheticals to match example length.

Expand across every applicable dimension (see Section 2). The goal is to surface candidates that conventional searches miss—not to replicate what every other sourcer is already searching.

---

## 2. Expansion Dimensions

For each concept cluster, exhaust these dimensions:

| Dimension | What to Include | Example (for "fine-tuning") |
|-----------|-----------------|----------------------------|
| **Lexical variants** | Spelling, hyphenation, abbreviation, case formats | fine-tuning, fine tuning, finetuning, FT |
| **Tool/library names** | Frameworks, repos, packages that implement the concept | TRL, Axolotl, OpenRLHF, LLaMA-Factory, alignment-handbook |
| **Academic terminology** | How researchers describe this in papers | preference learning, learning from human feedback, alignment |
| **Industry terminology** | How practitioners describe this in job postings | post-training, model alignment, chat tuning |
| **Older terms** | Previous-generation terminology still on profiles | REINFORCE, policy gradient, behavioral cloning |
| **Emerging terms** | Recent methods/tools (last 12-18 months) | KTO, ORPO, IPO, SimPO |
| **Domain-specific** | How this concept manifests in the target domain | code verifier, execution feedback, unit test reward |
| **Infrastructure** | Systems/tools that enable this work | DeepSpeed, FSDP, vLLM, Megatron |
| **Filename/code tokens** | GitHub-specific patterns (for GitHub searches) | sft_trainer.py, dpo_config, reward_model.py, ppo_trainer |

### Why This Matters

Conventional searches use obvious terms like "RLHF" and "fine-tuning." Everyone fishes in that pool.

Expanding across dimensions surfaces:
- Researchers who use academic framing
- Practitioners who name specific tools
- Infrastructure builders who mention enabling systems
- Early adopters using emerging terminology

These candidates are often higher quality and lower competition.

### Platform-Specific Expansion

| Platform | Prioritize These Dimensions | Lower Priority |
|----------|----------------------------|----------------|
| LinkedIn Recruiter | Industry terminology, lexical variants, tool names | Filename tokens, code patterns |
| GitHub | Tool names, filename tokens, code patterns, emerging terms | Industry terminology |
| Google X-Ray | Lexical variants, academic + industry terminology | Filename tokens |

---

## 3. Tagging Schema

### Two Tags Only

Tags are applied at the **parenthetical level**, not block level. Use tags only where they trigger specific behavior.

| Tag | Meaning | When to Apply | Action |
|-----|---------|---------------|--------|
| \`#recent\` | Emerging tech (last 12-18 months) | New tools, methods, benchmarks | Prioritize for cutting-edge roles; may have lower hit rate |
| \`#ambiguous\` | Term has multiple meanings across domains | Overloaded terms like "agent", "environment" | Never use alone; must specify anchors |

### Ambiguous Terms Format
For each \`#ambiguous\` term, specify required anchors:

\`\`\`
AMBIGUOUS: agent
Required anchors: ("coding" OR "code" OR "AI" OR "LLM" OR "agentic")
Exclude: ("real estate" OR "insurance" OR "travel" OR "customer")
\`\`\`

### What Happened to Other Tags?

Previous versions used block-level tags (#modality, #eval, #infra). These were removed because:
- Block names already convey the category
- Block Relationships (Section 4.2) captures how blocks interact
- Tags that don't trigger behavior are just labels

---

## 4. Output Format

### 4.1 Block Reference (Primary Working Output)

For each block, provide:

\`\`\`
### Block N: [Name]

("term A" OR "term B" OR "term C" OR "term D" OR "term E" OR "term F" OR "term G" OR "term H" OR ...)

("term X" OR "term Y" OR "term Z" OR ...) #recent

AMBIGUOUS IN THIS BLOCK: [term] — anchor with: [anchors]
\`\`\`

Each parenthetical should contain 8-20 terms. Examples use \`...\` for brevity—your output should be complete.

---

### 4.2 Block Relationships

This section maps how blocks connect—independent of any specific archetype. Users can follow archetype paths (Section 4.3) or use these relationships to build custom combinations.

#### Relationship Types

| Relationship | Symbol | Meaning |
|--------------|--------|---------|
| **Strong signal** | \`+\` | Profiles with A often have B; co-occurrence indicates depth |
| **Validates** | \`→\` | B confirms expertise in A |
| **Differentiates** | \`\\\|\` | A without B (or vice versa) signals different profile type |
| **Excludes** | \`✗\` | A + C together = likely false positive |

#### Format

\`\`\`
### Block Relationships

Strong signals:
• Block 1 + Block 2 → Builds and trains (not just uses)
• Block 2 + Block 4 → Infrastructure-level work

Validates:
• Block 3 → Block 1 (benchmarks validate agent work)
• Block 5 → Block 2 (execution environments validate training depth)

Differentiates:
• Block 2 without Block 3 | General ML, not code-focused
• Block 1 without Block 2 | Uses agents, doesn't build/train them
• Block 3 alone | Researcher or eval specialist, not builder

Excludes:
• Block 1 + "customer service" ✗ Wrong kind of agent
• Block 2 + "data analyst" ✗ Different meaning of "training"

High co-occurrence clusters: [1, 2], [2, 4], [3, 5]
Independent signals: [6]
\`\`\`

---

### 4.3 Inferred Archetypes

Present 2-4 archetypes inferred from the JD. Each archetype should be expandable—collapsed by default so users can explore only relevant paths without seeing all options at once.

#### Format

\`\`\`
### Inferred Archetypes

I've identified [N] candidate archetypes for this role. Expand any that seem relevant to see how block relationships apply specifically.

---

<details>
<summary>▶ [Archetype Name] — [One-line description]</summary>

**Description:**
[2-3 sentences on who this person is, their background, what makes them a fit]

**Key Blocks:** [N], [N], [N]

**Relationship Logic:**
• [Block] + [Block] = [what this combination signals]
• [Block] without [Block] = [what absence signals]
• Validate with [Block] to confirm [specific skill]

**Distinguishing Signal:**
[What separates this archetype from others—the "if you see X, it's this type" marker]

**Search Path:**
Start: Block [N] AND Block [N]
Add for precision: Block [N]
Validate: Block [N]

**Ready-to-use string:**
\\\`\\\`\\\`
[LinkedIn-formatted Boolean string]
\\\`\\\`\\\`

</details>

---

<details>
<summary>▶ [Next Archetype Name] — [One-line description]</summary>
...
</details>
\`\`\`

---

### 4.4 Context Disambiguation Guide

See Section 5 for full format.

---

### 4.5 Exclusion Patterns

Platform-specific exclusion strings:

\`\`\`
LINKEDIN RECRUITER
[search string] NOT ("term A" OR "term B")

GITHUB
[search string] NOT path:test NOT is:fork

GOOGLE X-RAY
[search string] -termA -termB -site:unwanted.com
\`\`\`

---

### 4.6 Ready-to-Use Search Strings

Provide copy-paste strings for each platform:

\`\`\`
LINKEDIN RECRUITER (Recall-Optimized)
[flat string with OR logic, under 2000 chars]

GITHUB X-RAY (Precision)
site:github.com [qualifiers] [keywords]

GOOGLE X-RAY (LinkedIn Profiles)
site:linkedin.com/in [keywords] -recruiter -jobs
\`\`\`

---

## 5. Context Disambiguation Guide

This section helps you **decode profiles**, not just find them. Use it to determine whether keyword presence indicates the right kind of experience.

### Format

For each high-frequency ambiguous term cluster:

\`\`\`
### [Term or Term Cluster]

| If paired with... | Likely context | Signal |
|-------------------|----------------|--------|
| [companion terms] | [what it means] | TARGET / ADJACENT / FALSE POSITIVE |

Pairing recommendation: [Boolean guidance]

Profile red flags: [What indicates wrong context]
\`\`\`

### Required Disambiguation Entries

At minimum, provide disambiguation tables for:
1. The role's **core ambiguous term** (e.g., "agent" for agent roles)
2. The role's **primary methodology** (e.g., "RLHF" / "PPO" / "DPO")
3. Any **cross-domain terms** that appear in multiple contexts (e.g., "synthetic data", "benchmark")

### Example Entry

\`\`\`
### PPO / DPO

| If paired with... | Likely context | Signal |
|-------------------|----------------|--------|
| gym, environment, trajectory, rollout | Building RL training infrastructure | TARGET (Infra Builder) |
| fine-tuning, SFT, model training, checkpoint | Using RL methods to train models | TARGET (Training Engineer) |
| reward model, preference data, annotation | Reward/preference pipeline work | TARGET (Data Specialist) |
| game, robotics, MuJoCo, control | Robotics/game RL | ADJACENT (transferable) |
| finance, trading, optimization | Quantitative finance | FALSE POSITIVE |

Pairing recommendation: For RL Gym builders, pair with ("environment" OR "gym" OR "trajectory" OR "rollout") to filter out pure fine-tuners.

Profile red flags: If profile mentions PPO/DPO but only in context of "ran training jobs" or "used Hugging Face TRL" without infrastructure/environment work, likely a user not a builder.
\`\`\`

---

## 6. Platform Syntax Reference

### Boolean Operators by Platform

| Operator | LinkedIn Recruiter | GitHub Search | Google X-Ray |
|----------|-------------------|---------------|--------------|
| AND | \`AND\` (caps required) | \`AND\` or space | Space (implicit) |
| OR | \`OR\` (caps required) | \`OR\` (caps required) | \`OR\` (caps required) |
| NOT | \`NOT\` (caps required) | \`NOT\` (caps required) | \`-\` prefix only |
| Phrase | \`"exact phrase"\` | \`"exact phrase"\` | \`"exact phrase"\` |
| Grouping | \`()\` | \`()\` | \`()\` |
| Wildcard | Not supported | \`/regex/\` instead | \`*\` (limited) |

**CRITICAL:** Google X-Ray does NOT support the word \`NOT\`. Use \`-\` prefix instead.

### LinkedIn Recruiter

Supported operators: \`AND\`, \`OR\`, \`NOT\`, \`"phrases"\`, \`()\`

Field filters: Use platform filters (Title, Company, Skills) instead of Boolean for fields

Example:
\`\`\`
("coding agent" OR "code agent" OR "Claude Code" OR "Cursor" OR "Windsurf" OR "Cody" OR "agentic coding" OR "AI coding assistant" OR ...) AND ("RLHF" OR "fine-tuning" OR "post-training" OR "DPO" OR "reward model" OR ...) AND ("staff" OR "senior" OR "lead" OR "principal") NOT ("recruiter" OR "real estate" OR "insurance")
\`\`\`

Limits:
- ~2,000 character limit
- Too many facets can cause errors; break into multiple searches if needed

### GitHub Search

Supported operators: \`AND\`, \`OR\`, \`NOT\`, \`"phrases"\`, \`()\`, \`/regex/\`

Field qualifiers:

| Qualifier | Usage |
|-----------|-------|
| \`repo:owner/name\` | Search specific repo |
| \`org:orgname\` | Search within organization |
| \`user:username\` | Search user's repos |
| \`language:python\` | Filter by language |
| \`path:folder/\` | Search within path |
| \`filename:eval.py\` | Search filenames |
| \`extension:py\` | Filter by extension |
| \`content:term\` | Search file content only |
| \`symbol:funcName\` | Search symbol definitions |

Filters:

| Filter | Usage |
|--------|-------|
| \`is:fork\` / \`NOT is:fork\` | Include/exclude forks |
| \`is:archived\` | Include archived repos |

Example:
\`\`\`
org:anthropics ("reward" OR "RLHF" OR "DPO" OR "preference") language:python NOT is:fork
\`\`\`

\`\`\`
("SWE-bench" OR "HumanEval" OR "MBPP" OR "BigCodeBench") (filename:eval.py OR filename:benchmark.py OR filename:test_runner.py) path:src
\`\`\`

### Google X-Ray

Supported operators: \`OR\`, \`-\` (for NOT), \`"phrases"\`, \`()\`

**Google does NOT support the word \`NOT\`. Use \`-\` prefix.**

Site operators:

| Operator | Usage |
|----------|-------|
| \`site:domain.com\` | Restrict to domain |
| \`site:linkedin.com/in\` | LinkedIn profiles only |
| \`site:github.com\` | GitHub only |
| \`-site:domain.com\` | Exclude domain |
| \`inurl:keyword\` | Keyword in URL |
| \`intitle:keyword\` | Keyword in title |
| \`filetype:pdf\` | Specific file type |

Example (LinkedIn X-Ray):
\`\`\`
site:linkedin.com/in ("coding agent" OR "RLHF" OR "SWE-bench" OR "post-training" OR "reward model") ("staff engineer" OR "senior engineer" OR "ML engineer") -recruiter -jobs
\`\`\`

Example (GitHub X-Ray via Google):
\`\`\`
site:github.com ("reward model" OR "RLHF" OR "DPOTrainer" OR "PPOTrainer") ("trainer" OR "environment" OR "eval") -awesome-list
\`\`\`

---

## 7. Iteration Playbook

### Zero Results

| Step | Action |
|------|--------|
| 1 | Remove one block at a time (start with most specific) |
| 2 | Check Block Relationships—are you requiring blocks that don't co-occur? |
| 3 | Check for syntax errors (missing quotes, wrong operators for platform) |
| 4 | Loosen title/seniority requirements |
| 5 | Try Google X-Ray instead of native LinkedIn |

### Too Many Results (500+)

| Step | Action |
|------|--------|
| 1 | Add a validating block as AND clause (see Block Relationships) |
| 2 | Add seniority filter (title contains "Senior" OR "Staff" OR "Lead") |
| 3 | Add NOT clauses for observed false positives |
| 4 | Use differentiating combinations to narrow to specific archetype |

### Precision Tuning (Results Too Broad)

| Step | Action |
|------|--------|
| 1 | Replace general terms with specific tool/benchmark names |
| 2 | Add NOT clauses for false positive patterns |
| 3 | Add validation block (see Block Relationships) |

### Recall Tuning (Missing Known Good Candidates)

| Step | Action |
|------|--------|
| 1 | Add variant expansions (hyphenated, snake_case) |
| 2 | Add older tool names alongside newer ones |
| 3 | Remove seniority filters |
| 4 | Try GitHub search in addition to LinkedIn |

---

## 8. Final Check

Before delivering, verify:

- [ ] All parentheticals are flat (no nesting)
- [ ] Each parenthetical contains 8-20 terms (exhaustive, not example-length)
- [ ] All expansion dimensions considered (lexical, tools, academic, industry, older, emerging, domain-specific, infrastructure)
- [ ] Every #ambiguous term has documented anchors
- [ ] #recent tags applied to emerging tools/methods
- [ ] Platform syntax is correct (especially NOT vs. \`-\` for Google)
- [ ] Block Relationships section shows strong signals, validates, differentiates, and excludes
- [ ] At least one disambiguation entry exists for core ambiguous terms
- [ ] Ready-to-use strings are under platform character limits
- [ ] Archetypes are inferred from JD (not pre-defined by user)
- [ ] Each archetype shows relationship logic and distinguishing signal

---

## Quick Reference Card

\`\`\`
LINKEDIN RECRUITER
- Operators: AND, OR, NOT (caps), "phrase", ()
- Limit: ~2,000 chars
- NOT syntax: term NOT excluded
- No wildcards

GITHUB SEARCH  
- Operators: AND, OR, NOT (caps), "phrase", (), /regex/
- Qualifiers: repo:, org:, user:, language:, path:, filename:
- Filters: is:fork, is:archived
- NOT syntax: term NOT excluded

GOOGLE X-RAY
- Operators: OR (caps), "phrase", ()
- NOT syntax: -excluded (dash prefix, NO "NOT" keyword)
- Site ops: site:, -site:, inurl:, intitle:, filetype:
- Limit: ~32 words
\`\`\`

---

## How to Use This Template

1. **Attach this template** to Claude along with your job description
2. **LLM builds blocks** — 5-8 concept blocks with exhaustive expansion
3. **LLM maps relationships** — How blocks connect, validate, differentiate
4. **LLM infers archetypes** — Collapsed by default; expand relevant ones
5. **LLM creates disambiguation guide** — Decode ambiguous terms
6. **LLM generates platform strings** — LinkedIn, GitHub, X-Ray
7. **You explore** — Use relationships to understand terrain, or follow archetype paths
8. **You run and iterate** — Use playbook to tune results
`;

function downloadTemplate() {
    const blob = new Blob([templateContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Boolean_Construction_Template_v4.4.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function toggleSection(header) {
    const section = header.closest('.section');
    section.classList.toggle('collapsed');
}

function toggleArchetype(header) {
    const item = header.closest('.archetype-item');
    item.classList.toggle('expanded');
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('pre').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        button.classList.add('copied');
        button.querySelector('span').textContent = 'Copied!';
        
        setTimeout(() => {
            button.classList.remove('copied');
            button.querySelector('span').textContent = 'Copy';
        }, 2000);
    });
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
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

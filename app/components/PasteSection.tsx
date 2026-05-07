"use client";

import { useEffect, useState } from "react";

const RAW_BASE = "https://raw.githubusercontent.com/msg2ai/nonprofit-team-skills/main";
const SKILL_NAMES = [
  "nonprofit-executive-director",
  "nonprofit-development-director",
  "nonprofit-grants-manager",
  "nonprofit-programs-impact",
  "nonprofit-marketing-storytelling",
  "nonprofit-finance-compliance",
  "nonprofit-volunteer-community",
  "nonprofit-vibe-coder",
] as const;

type Tab = "claudeai" | "claudecode" | "codex" | "cursor";

const HASH_TO_TAB: Record<string, Tab> = {
  "paste-claudeai": "claudeai",
  "paste-claudecode": "claudecode",
  "paste-codex": "codex",
  "paste-cursor": "cursor",
};

export default function PasteSection() {
  const [tab, setTab] = useState<Tab>("claudeai");

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      const next = HASH_TO_TAB[hash];
      if (next) setTab(next);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="paste" className="paste-section">
      <div className="wrap">
        <div className="section-eyebrow">No install? No problem.</div>
        <h2 className="section-title">Copy-paste a skill straight into your editor.</h2>
        <p className="section-lede">
          Each <code>SKILL.md</code> in this repo is just markdown. You can drop it into Claude.ai, Claude Code, Codex, or Cursor as-is — they&apos;ll all treat it as a system prompt for that role. Pick the tool you already use:
        </p>

        <div className="paste-tabs" role="tablist">
          <button className={`paste-tab ${tab === "claudeai" ? "active" : ""}`} onClick={() => setTab("claudeai")}>
            Claude.ai (browser)
          </button>
          <button className={`paste-tab ${tab === "claudecode" ? "active" : ""}`} onClick={() => setTab("claudecode")}>
            Claude Code
          </button>
          <button className={`paste-tab ${tab === "codex" ? "active" : ""}`} onClick={() => setTab("codex")}>
            Codex CLI
          </button>
          <button className={`paste-tab ${tab === "cursor" ? "active" : ""}`} onClick={() => setTab("cursor")}>
            Cursor
          </button>
        </div>

        {tab === "claudeai" && (
          <div className="paste-panel active">
            <div className="paste-grid">
              <div>
                <h4>Claude.ai · the easiest path (no install, no terminal)</h4>
                <p>Best if you&apos;re not technical. Works on any computer with a browser. Each skill becomes its own Project so you can switch personas by switching Projects.</p>
                <ol className="paste-steps">
                  <li>Sign in at <a href="https://claude.ai">claude.ai</a> (Pro, Team, or Enterprise — Free tier works for short tests).</li>
                  <li>Click <strong>Projects</strong> → <strong>Create Project</strong>. Name it after the role, e.g. <em>&ldquo;Bright Futures — Grants Manager&rdquo;</em>.</li>
                  <li>Open the SKILL.md file you want from the repo (e.g. <a href={`${RAW_BASE}/nonprofit-grants-manager/SKILL.md`}>nonprofit-grants-manager/SKILL.md</a>) and copy <strong>everything</strong>.</li>
                  <li>In the Project, click <strong>Set instructions</strong> and paste it in.</li>
                  <li>Save. Every new chat in that Project is now your AI Grants Manager.</li>
                </ol>
                <p className="paste-tip"><strong>Tip:</strong> Make 8 Projects, one per skill, and switch between them as your role changes during the day.</p>
              </div>
              <div className="paste-snippet">
                <div className="paste-snippet-head">Raw SKILL.md links (click to copy)</div>
                <ul className="paste-link-list">
                  {SKILL_NAMES.map((name) => (
                    <li key={name}>
                      <a href={`${RAW_BASE}/${name}/SKILL.md`}>{name}/SKILL.md</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {tab === "claudecode" && (
          <div className="paste-panel active">
            <div className="paste-grid">
              <div>
                <h4>Claude Code · automatic detection, zero copy-paste</h4>
                <p>If you have <a href="https://claude.com/claude-code">Claude Code</a> installed, the skills are auto-loaded the moment you put them in <code>~/.claude/skills/</code>. One command does the whole install.</p>
                <ol className="paste-steps">
                  <li>Make sure you have <a href="https://nodejs.org">Node.js 18+</a> and Git installed.</li>
                  <li>Run the npx installer in your terminal:</li>
                </ol>
                <pre className="paste-code">npx @msg2ai/nonprofit-team-skills install</pre>
                <ol className="paste-steps" start={3}>
                  <li>Open Claude Code and start asking — Claude picks the right skill based on your prompt.</li>
                  <li>(Optional) Set up your shared Knowledge Base (Google Drive recommended):</li>
                </ol>
                <pre className="paste-code">npx @msg2ai/nonprofit-team-skills setup</pre>
                <p className="paste-tip"><strong>Manual install</strong> (if you prefer): <code>git clone https://github.com/msg2ai/nonprofit-team-skills.git ~/.claude/skills/nonprofit-team-skills</code></p>
              </div>
              <div className="paste-snippet">
                <div className="paste-snippet-head">npx commands</div>
                <pre className="paste-code paste-code-block">{`npx @msg2ai/nonprofit-team-skills install
npx @msg2ai/nonprofit-team-skills list
npx @msg2ai/nonprofit-team-skills setup
npx @msg2ai/nonprofit-team-skills update
npx @msg2ai/nonprofit-team-skills mock
npx @msg2ai/nonprofit-team-skills uninstall`}</pre>
              </div>
            </div>
          </div>
        )}

        {tab === "codex" && (
          <div className="paste-panel active">
            <div className="paste-grid">
              <div>
                <h4>OpenAI Codex CLI · paste as system prompt</h4>
                <p>Codex respects <code>AGENTS.md</code> as a system instruction file. Drop the SKILL.md there.</p>
                <ol className="paste-steps">
                  <li>From your non-profit project root, clone the repo (or just download the SKILL.md you need):</li>
                </ol>
                <pre className="paste-code">git clone https://github.com/msg2ai/nonprofit-team-skills.git ~/nonprofit-team-skills</pre>
                <ol className="paste-steps" start={2}>
                  <li>Copy the SKILL.md into your repo as <code>AGENTS.md</code> so Codex picks it up automatically:</li>
                </ol>
                <pre className="paste-code">cp ~/nonprofit-team-skills/nonprofit-grants-manager/SKILL.md ./AGENTS.md</pre>
                <ol className="paste-steps" start={3}>
                  <li>Start Codex from that directory — the skill becomes the active instruction set:</li>
                </ol>
                <pre className="paste-code">{`codex
# now ask: "Write a grant proposal for our youth tutoring program"`}</pre>
                <p className="paste-tip"><strong>Switching roles:</strong> swap <code>AGENTS.md</code> with a different SKILL.md when you change roles, or keep one project per skill.</p>
              </div>
              <div className="paste-snippet">
                <div className="paste-snippet-head">Quick swap</div>
                <pre className="paste-code paste-code-block">{`# Executive Director
cp ~/nonprofit-team-skills/nonprofit-executive-director/SKILL.md AGENTS.md

# Grants Manager
cp ~/nonprofit-team-skills/nonprofit-grants-manager/SKILL.md AGENTS.md

# Finance & Compliance
cp ~/nonprofit-team-skills/nonprofit-finance-compliance/SKILL.md AGENTS.md

# Vibe Coder (web)
cp ~/nonprofit-team-skills/nonprofit-vibe-coder/SKILL.md AGENTS.md`}</pre>
              </div>
            </div>
          </div>
        )}

        {tab === "cursor" && (
          <div className="paste-panel active">
            <div className="paste-grid">
              <div>
                <h4>Cursor · paste as a Project Rule</h4>
                <p>Cursor&apos;s <em>Rules for AI</em> (or <code>.cursor/rules/*.mdc</code>) are exactly the right place for a SKILL.md. Drop one rule per skill and toggle which one is active.</p>
                <ol className="paste-steps">
                  <li>In your non-profit project, create the Cursor rules folder:</li>
                </ol>
                <pre className="paste-code">mkdir -p .cursor/rules</pre>
                <ol className="paste-steps" start={2}>
                  <li>Save each SKILL.md as a separate <code>.mdc</code> rule:</li>
                </ol>
                <pre className="paste-code">{`curl -L -o .cursor/rules/grants.mdc \\
  ${RAW_BASE}/nonprofit-grants-manager/SKILL.md`}</pre>
                <ol className="paste-steps" start={3}>
                  <li>Open Cursor → <strong>Settings → Cursor Settings → Rules</strong> and confirm the rule is active.</li>
                  <li>Open the chat panel and ask the role-specific question. Cursor will use the SKILL.md as system context.</li>
                </ol>
                <p className="paste-tip"><strong>Pro tip:</strong> Combine the <code>vibe-coder</code> SKILL.md with your normal coding rules — Cursor stacks rules.</p>
              </div>
              <div className="paste-snippet">
                <div className="paste-snippet-head">All 8 rules at once</div>
                <pre className="paste-code paste-code-block">{`mkdir -p .cursor/rules
BASE=${RAW_BASE}
for s in nonprofit-executive-director nonprofit-development-director \\
         nonprofit-grants-manager nonprofit-programs-impact \\
         nonprofit-marketing-storytelling nonprofit-finance-compliance \\
         nonprofit-volunteer-community nonprofit-vibe-coder; do
  curl -sL "$BASE/$s/SKILL.md" -o ".cursor/rules/$s.mdc"
done`}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

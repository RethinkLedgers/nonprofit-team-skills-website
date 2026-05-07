import {
  CharExecutiveDirector,
  CharDevelopmentDirector,
  CharGrantsManager,
  CharProgramsImpact,
  CharMarketingStorytelling,
  CharFinanceCompliance,
  CharVolunteerCommunity,
  CharVibeCoder,
} from "./components/CharacterSvgs";
import ContactForm from "./components/ContactForm";
import PasteSection from "./components/PasteSection";

const ROLES = [
  {
    num: "01",
    title: "Executive Director",
    persona: "Maria",
    sub: "your AI organizational leader.",
    tag: "Leadership",
    char: <CharExecutiveDirector />,
    bullets: [
      "Builds the 3-year strategic plan with SMART goals and owner accountability",
      "Runs board meetings — agendas, packets, minutes, action items",
      "Maintains a live risk register across all workstreams",
      "Writes stakeholder briefings and cross-team status dashboards",
      "Tracks every major decision and policy in a running log",
    ],
    prompt:
      "Build a 3-year strategic plan for our youth education non-profit. We want to grow from 450 to 600 youth served and diversify revenue so no funder is more than 25% of our budget.",
  },
  {
    num: "02",
    title: "Development Director",
    persona: "James",
    sub: "your AI fundraising lead.",
    tag: "Revenue",
    char: <CharDevelopmentDirector />,
    bullets: [
      "Builds the annual fundraising plan with revenue targets by source",
      "Manages the donor pipeline — identification, cultivation, solicitation, stewardship",
      "Designs campaigns: annual fund, Giving Tuesday, year-end, peer-to-peer",
      "Plans fundraising events — galas, walks, house parties",
      "Analyzes donor data: retention, lifetime value, segment performance",
    ],
    prompt:
      "Our fundraising is at 42% of our $1.25M annual goal halfway through the year, and our Development Director position is still open. Build a recovery plan to hit target by year-end.",
  },
  {
    num: "03",
    title: "Grants Manager",
    persona: "Priya",
    sub: "your AI grant strategist.",
    tag: "Grants",
    char: <CharGrantsManager />,
    bullets: [
      "Researches and scores grant prospects by mission alignment and competitiveness",
      "Writes LOIs and full proposals — needs statements, logic models, budgets",
      "Builds grant-specific budgets with indirect cost calculations",
      "Manages post-award compliance, reporting deadlines, and funder relationships",
      "Tracks the full grants pipeline with win rates and revenue forecasts",
    ],
    prompt:
      "Write a full grant proposal for our After-School Tutoring program. $150,000 request, family foundation, 12-month period. Our program serves 200 youth annually with 85% grade improvement.",
  },
  {
    num: "04",
    title: "Programs & Impact",
    persona: "David",
    sub: "your AI program designer and impact measurer.",
    tag: "Programs",
    char: <CharProgramsImpact />,
    bullets: [
      "Designs programs with theory of change, logic models, and SMART outcomes",
      "Builds measurement frameworks — output, outcome, and impact indicators",
      "Manages participant data collection, tracking, and dashboards",
      "Writes impact reports for funders, boards, and the public",
      "Evaluates program effectiveness with data-driven recommendations",
    ],
    prompt:
      "Design an outcomes framework for our Youth Mentorship program. We match 120 youth with mentors annually and need to measure academic improvement, life skills, and long-term trajectory.",
  },
  {
    num: "05",
    title: "Marketing & Storytelling",
    persona: "Aisha",
    sub: "your AI communications lead — builds the brand, tells the impact story, grows the audience.",
    tag: "Communications",
    char: <CharMarketingStorytelling />,
    bullets: [
      "Builds the brand voice guide — tone, key messages, elevator pitches",
      "Turns program outcomes into dignity-preserving impact stories",
      "Plans and produces content calendars across email, social, and blog",
      "Writes donor newsletters, email appeals, and stewardship sequences",
      "Produces the annual report — the most important credibility document",
    ],
    prompt:
      "Write an impact story about one of our tutoring students for the annual report. Anonymized, dignity-centered, 300 words, data-supported. The program achieved 92% grade improvement this year.",
  },
  {
    num: "06",
    title: "Finance & Compliance",
    persona: "Robert",
    sub: "your AI financial officer.",
    tag: "Finance",
    char: <CharFinanceCompliance />,
    bullets: [
      "Builds organizational budgets with fund accounting principles",
      "Prepares financial statements for board, funders, and auditors",
      "Manages 990 filing, state charity registrations, and IRS compliance",
      "Builds financial policies: controls, conflict of interest, whistleblower",
      "Tracks grant-specific financials with restricted fund management",
    ],
    prompt:
      "Build our FY2026 budget. $1.4M total, with personnel at 55%, program costs at 20%, admin at 15%, and fundraising at 10%. Show functional expense allocation and monthly cash flow.",
  },
  {
    num: "07",
    title: "Volunteer & Community",
    persona: "Keiko",
    sub: "your AI volunteer coordinator and community builder.",
    tag: "Community",
    char: <CharVolunteerCommunity />,
    bullets: [
      "Builds volunteer recruitment plans with role descriptions and pipelines",
      "Designs onboarding and training programs for new volunteers",
      "Manages scheduling, assignments, and coverage across programs",
      "Builds appreciation and retention programs to reduce turnover",
      "Manages community partnerships and in-kind donation tracking",
    ],
    prompt:
      "We need 30 new mentors by June. Build a recruitment plan targeting university partnerships and corporate volunteer programs. We currently have 60 active mentors with 85% retention.",
  },
  {
    num: "08",
    title: "Head of Web",
    persona: "Noor",
    sub: "your AI vibe coder — ships donation pages, impact dashboards, and campaign sites to production fast.",
    tag: "Web",
    char: <CharVibeCoder />,
    bullets: [
      "Scaffolds full non-profit websites — programs, donate, impact, volunteer",
      "Builds donation pages with giving levels, recurring gifts, and employer match",
      "Creates visual impact dashboards with charts and infographics",
      "Builds volunteer portals with signup forms and shift calendars",
      "Ships everything to Vercel, in version control on GitHub, accessible by default",
    ],
    prompt:
      "Spin up our non-profit website with a donation page and impact dashboard. Deploy to a Vercel preview today so the board can review it at Thursday's meeting.",
  },
];

const MOCK_CARDS = [
  { num: "01", title: "Executive Director · Maria Gonzalez", tag: "3-year strategic plan · Risk register · Board briefing", href: "/mock#executive-director" },
  { num: "02", title: "Development Director · James Patel", tag: "Donor pipeline · Giving Tuesday campaign · Fundraising plan", href: "/mock#development-director" },
  { num: "03", title: "Grants Manager · Priya Kim", tag: "ShineStar proposal · Progress report · Grants calendar", href: "/mock#grants-manager" },
  { num: "04", title: "Programs & Impact · David Chen", tag: "Program design · Outcomes framework · Impact dashboard", href: "/mock#programs-impact" },
  { num: "05", title: "Marketing & Storytelling · Aisha Torres", tag: "Brand guide · Content calendar · Annual report", href: "/mock#marketing-storytelling" },
  { num: "06", title: "Finance & Compliance · Robert Abrams", tag: "FY2025 budget · Board finance report · 990 checklist", href: "/mock#finance-compliance" },
  { num: "07", title: "Volunteer & Community · Keiko Yamamoto", tag: "Volunteer roster · Recruitment plan · Community assessment", href: "/mock#volunteer-community" },
  { num: "08", title: "Head of Web · Noor Khan", tag: "Next.js site scaffold · Donation page · Impact dashboard", href: "/mock#vibe-coder" },
];

const CONNECTORS = [
  { name: "Shared Knowledge Base", desc: "Drive / Dropbox / Notion — single source of truth." },
  { name: "Firecrawl", desc: "Scrape your org website to bootstrap the KB." },
  { name: "Gmail", desc: "Send donor updates, board packets, volunteer alerts." },
  { name: "Google Calendar", desc: "Board meetings, campaign launches, grant deadlines." },
  { name: "Google Drive", desc: "Proposals, budgets, policies, impact reports." },
  { name: "Zoom", desc: "Board meetings, donor calls, staff check-ins." },
  { name: "Canva", desc: "Annual reports, campaign graphics, board decks." },
  { name: "ClickUp / Asana", desc: "Tasks, projects, donor pipelines, grant deadlines." },
  { name: "Apollo", desc: "Prospect research for major donors and partners." },
  { name: "Vercel", desc: "Deploy the org website and donation pages." },
  { name: "Stripe", desc: "Process online donations securely." },
];

const FAQ_ENTRIES = [
  {
    q: "Do I need to know how to code?",
    a: "No. The browser path is just copy-paste into Claude.ai. The whole reason these are 'skills' rather than software is that the work happens in plain English — yours, going in, and Claude's, coming back.",
  },
  {
    q: "Will Claude make things up about our organization?",
    a: "Claude will produce a plausible draft from whatever context you give it. The skills are written to ask for the missing pieces first — your mission, fiscal year, key metrics — before producing output. Treat the first response as a strong first draft, not a final answer.",
  },
  {
    q: "Is our non-profit data safe?",
    a: "Your conversations stay in your Claude account. The skills don't send anything anywhere on their own — the only data Claude sees is what you paste or what's reachable through integrations you choose to connect.",
  },
  {
    q: "What does it cost?",
    a: "The skills are free, open source (MIT). You pay for Claude — Claude.ai has a free tier and a $20/mo Pro plan that covers most non-profit teams.",
  },
  {
    q: "What if our team is not technical?",
    a: "That's the most common case. Use the Claude.ai browser path. Each team member loads whichever skill matches their role and starts a conversation — no terminal, no install.",
  },
];

const SOFTWARE_APP_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nonprofit Team Skills",
  description:
    "Eight open-source Claude Skills covering every role on a non-profit team — Executive Director, Development Director, Grants Manager, Programs & Impact, Marketing & Storytelling, Finance & Compliance, Volunteer & Community, and a Vibe Coder for the website.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, macOS, Windows, Linux",
  url: "https://nonprofit-team-skills-website.vercel.app",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  license: "https://github.com/msg2ai/nonprofit-team-skills/blob/main/LICENSE",
  softwareVersion: "1.0.0",
  publisher: {
    "@type": "Organization",
    name: "MSG2AI",
    url: "https://msg2ai.xyz",
  },
  codeRepository: "https://github.com/msg2ai/nonprofit-team-skills",
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ENTRIES.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <header className="topbar">
        <div className="topbar-inner">
          <a href="https://msg2ai.xyz" className="brand" target="_blank" rel="noopener noreferrer">
            <img src="/logos/msg2ai.jpg" alt="MSG2AI" className="brand-logo" width={32} height={32} />
            <span>msg2ai<span className="dot">.</span></span>
          </a>
          <nav className="topnav">
            <a href="#team">Your AI team</a>
            <a href="#mock">Mock non-profit</a>
            <a href="#paste">Copy-paste</a>
            <a href="#start">Install</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" style={{ borderTop: "none", paddingTop: 90 }}>
        <div className="wrap">
          <div className="eyebrow">
            <span className="pulse" />
            Free · 8 AI teammates · No code required
            <span className="version-badge">v1.0.0</span>
          </div>
          <h1 className="display">
            8 Claude Skills <em>for your non-profit team.</em>
          </h1>
          <p className="lede">
            The whole back office your non-profit can&apos;t afford to hire — one AI teammate per role, free.
            Executive Director, Development Director, Grants Manager, Programs &amp; Impact,
            Marketing &amp; Storytelling, Finance &amp; Compliance, Volunteer &amp; Community, and a Vibe Coder for the website.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#start">
              Get the team <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#mock">
              See real examples
            </a>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/nonprofit-team-skills" target="_blank" rel="noopener noreferrer">
              View on GitHub <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-meta">
            <div className="item">
              <strong>8</strong>AI teammates, one per role
            </div>
            <div className="item">
              <strong>1 hour</strong>to write a full grant proposal for the Grants Manager
            </div>
            <div className="item">
              <strong>$0</strong>free, MIT licensed
            </div>
            <div className="item">
              <strong>1 command</strong>to install — or copy-paste in your browser
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem">
        <div className="wrap">
          <div className="row">
            <div>
              <p className="display">
                Every non-profit has the same eight roles. Most teams have two or three people trying to cover all of them — while also doing the actual mission work.
              </p>
            </div>
            <div className="stats">
              <div className="stat"><strong>8</strong><span>roles on every non-profit team</span></div>
              <div className="stat"><strong>3</strong><span>people typically doing the work</span></div>
              <div className="stat"><strong>60%</strong><span>of ED time spent on admin, not mission</span></div>
              <div className="stat"><strong>~$0</strong><span>budget for the back office team they need</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section id="team">
        <div className="wrap">
          <div className="roles-intro">
            <div>
              <div className="section-eyebrow">Meet your AI team</div>
              <h2 className="section-title">Eight specialists. One conversation each. No onboarding.</h2>
            </div>
            <p className="section-lede">
              Each teammate is a focused brief — a senior version of that role, ready on the first message. Use one. Use all eight. They share a Knowledge Base, so when you ask for a board update the Executive Director already knows what Development, Finance, and Programs are seeing.
            </p>
          </div>

          <div className="roles">
            {ROLES.map((role) => (
              <article className="role" key={role.num}>
                <div className="role-head">
                  <div className="role-head-text">
                    <span className="role-character">{role.char}</span>
                    <div>
                      <span className="role-num">{role.num}</span>
                      <h3 className="display">{role.title}</h3>
                      <p className="role-sub"><strong>{role.persona}</strong> · {role.sub}</p>
                    </div>
                  </div>
                  <span className="role-tag">{role.tag}</span>
                </div>
                <ul className="role-list">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="role-prompt">{`"${role.prompt}"`}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mock showcase */}
      <section id="mock" className="mock-section">
        <div className="wrap">
          <div className="mock-head">
            <div>
              <div className="section-eyebrow">See a real run · Bright Futures Foundation</div>
              <h2 className="section-title">Here&apos;s what 8 skills produced for one fictional non-profit.</h2>
            </div>
            <p className="section-lede" style={{ marginBottom: 0 }}>
              A complete mock non-profit — youth education, Denver metro, $1.25M budget — with every artifact each skill actually generated. Browse the full set in the repo: <a href="https://github.com/msg2ai/nonprofit-team-skills/tree/main/mock"><code>mock/</code></a>.
            </p>
          </div>

          <div className="mock-meta">
            <div className="mock-meta-item">
              <span className="mock-meta-label">Organization</span>
              <strong>Bright Futures Foundation</strong>
              <span className="mock-meta-sub">Denver metro · Youth education · 450+ served annually</span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Knowledge Base</span>
              <strong>Google Drive — 11 folders</strong>
              <span className="mock-meta-sub">Bootstrapped via Firecrawl from <code>brightfuturesdenver.org</code></span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Budget</span>
              <strong>$1,250,000 FY2025</strong>
              <span className="mock-meta-sub">14 FTE · 180 volunteers · 3 programs</span>
            </div>
            <div className="mock-meta-item">
              <span className="mock-meta-label">Live</span>
              <strong>brightfuturesdenver.org</strong>
              <span className="mock-meta-sub">Next.js · Vercel · Donation page + Impact dashboard</span>
            </div>
          </div>

          <div className="mock-grid">
            {MOCK_CARDS.map((c) => (
              <a
                key={c.num}
                href={c.href}
                className="mock-card"
              >
                <span className="mock-num">{c.num}</span>
                <h4>{c.title}</h4>
                <p className="mock-tag">{c.tag}</p>
                <span className="mock-link">See outputs →</span>
              </a>
            ))}
          </div>

          <div className="mock-foot">
            <a className="btn btn-ghost" href="https://github.com/msg2ai/nonprofit-team-skills/tree/main/mock" target="_blank" rel="noopener noreferrer">
              Browse on GitHub <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/nonprofit-team-skills" target="_blank" rel="noopener noreferrer">
              View the skills repo <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Connectors */}
      <section>
        <div className="wrap">
          <div className="section-eyebrow">Plays well with the tools you already use</div>
          <h2 className="section-title">Bring your own stack. Optional, but powerful.</h2>
          <p className="section-lede">
            The skills work without any integrations. Connect the tools your team already uses and they get sharper — pulling real donor data, sending real emails, tracking real outcomes. You only connect what helps.
          </p>
          <div className="connectors-grid">
            {CONNECTORS.map((c) => (
              <div className="connector" key={c.name}>
                <div className="connector-name">{c.name}</div>
                <div className="connector-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="start">
        <div className="wrap">
          <div className="section-eyebrow">Three ways to get started</div>
          <h2 className="section-title">Pick whichever feels easier. You can change later.</h2>
          <p className="section-lede">
            All three paths give you the same teammates. The only difference is where the conversation lives and how much of your tooling Claude can reach into.
          </p>

          <div className="start-grid">
            <div className="start">
              <div className="start-time">≈ 5 minutes · easiest</div>
              <h3 className="display">Try one in your browser</h3>
              <p>Best if you&apos;ve never used Claude before. Works on any computer. No installs.</p>
              <ol>
                <li>Sign in at <a href="https://claude.ai">claude.ai</a></li>
                <li>Create a Project — name it after your non-profit</li>
                <li>Open any <code>SKILL.md</code> file in the repo and copy the contents</li>
                <li>Paste it into the project&apos;s instructions and save</li>
                <li>Start chatting</li>
              </ol>
              <a className="btn btn-ghost" href="#paste">Step-by-step <span className="arrow">→</span></a>
            </div>

            <div className="start featured">
              <div className="start-time">≈ 10 minutes · recommended</div>
              <h3 className="display">Install all eight on your computer</h3>
              <p>Best if you&apos;ll be using these regularly and want Claude to send emails, update calendars, and use your tools.</p>
              <ol>
                <li>Install Node.js (if you don&apos;t have it)</li>
                <li>Open Terminal and run:<br/><code style={{ background: "rgba(255,255,255,.1)", padding: "6px 10px", borderRadius: 6, display: "inline-block", marginTop: 8 }}>npx @msg2ai/nonprofit-team-skills install</code></li>
                <li>Open Claude Code and start asking</li>
              </ol>
              <a className="btn btn-primary" style={{ background: "white", color: "var(--ink)", marginTop: "auto" }} href="#paste-claudecode">
                Install guide <span className="arrow">→</span>
              </a>
            </div>

            <div className="start">
              <div className="start-time">≈ 30 minutes · most powerful</div>
              <h3 className="display">Wire up the full stack</h3>
              <p>Best for teams running multiple programs. Connect Gmail, Calendar, Drive, Zoom, your CRM, your project tool — and let the team work in real systems.</p>
              <ol>
                <li>Install via the recommended path</li>
                <li>Set up the shared Knowledge Base (Google Drive recommended)</li>
                <li>Connect your integrations</li>
                <li>You&apos;re now running a non-profit with an 8-person AI back office.</li>
              </ol>
              <a className="btn btn-ghost" href="https://github.com/msg2ai/nonprofit-team-skills#connectors">
                Connector guide <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Copy-paste section */}
      <PasteSection />

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-title">Things people ask before getting started.</h2>
          <p className="section-lede">
            If your question isn&apos;t here, write to <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>. Real human, fast reply.
          </p>
          <div className="faq">
            {FAQ_ENTRIES.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">{f.a}</div>
              </details>
            ))}
            <details>
              <summary>What&apos;s the catch?</summary>
              <div className="answer">
                <p>There isn&apos;t one. We build AI tools at <a href="https://msg2ai.xyz">msg2ai.xyz</a>, and we open-sourced these skills because we wanted every non-profit team to have a real back office — regardless of budget. The skills, the mock organization, the website, the npm installer — all free, MIT licensed.</p>
                <p style={{ marginTop: 14 }}>Check out our sister project: <a href="https://github.com/msg2ai/conference-team-skills">Conference Team Skills</a> — 8 skills for conference organizing teams, built on the same pattern.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-intro">
              <div className="section-eyebrow">Get in touch</div>
              <h2 className="section-title">Question? Custom integration? Want to chat?</h2>
              <p className="section-lede">
                Tell us a bit about your non-profit and we&apos;ll write back. The form opens your default email client and pre-fills a message to <strong>info@msg2ai.xyz</strong> — nothing leaves your computer until you hit send.
              </p>
              <p style={{ color: "var(--ink-mute)", fontSize: 13.5, marginTop: 16 }}>
                Prefer to email directly? <a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a>
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="wrap">
          <h2 className="display">Run the non-profit you wish you had the team for.</h2>
          <p>Pick a teammate. Ask them something. See what comes back. The first useful output happens in about 60 seconds.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#start">Get started <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="https://github.com/msg2ai/nonprofit-team-skills">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h5>Nonprofit Team Skills</h5>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, maxWidth: "38ch" }}>
                Eight AI teammates for non-profit teams. Free, open-source, MIT licensed. Built by{" "}
                <a href="https://msg2ai.xyz">MSG2AI</a>.
              </p>
            </div>
            <div>
              <h5>The 8 skills</h5>
              <ul>
                <li><a href="#team">Executive Director</a></li>
                <li><a href="#team">Development Director</a></li>
                <li><a href="#team">Grants Manager</a></li>
                <li><a href="#team">Programs &amp; Impact</a></li>
                <li><a href="#team">Marketing &amp; Storytelling</a></li>
                <li><a href="#team">Finance &amp; Compliance</a></li>
                <li><a href="#team">Volunteer &amp; Community</a></li>
                <li><a href="#team">Head of Web (Vibe Coder)</a></li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul>
                <li><a href="https://github.com/msg2ai/nonprofit-team-skills">GitHub repo</a></li>
                <li><a href="https://github.com/msg2ai/nonprofit-team-skills#quick-start">Install guide</a></li>
                <li><a href="https://github.com/msg2ai/nonprofit-team-skills/tree/main/mock">Mock non-profit</a></li>
                <li><a href="https://claude.ai">Claude.ai</a></li>
              </ul>
            </div>
            <div>
              <h5>MSG2AI &amp; sister project</h5>
              <ul>
                <li><a href="https://msg2ai.xyz">msg2ai.xyz</a></li>
                <li><a href="https://github.com/msg2ai/conference-team-skills">Conference Team Skills</a></li>
                <li><a href="mailto:info@msg2ai.xyz">info@msg2ai.xyz</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal">
            <p className="legal-note">
              <strong>License.</strong> The Nonprofit Team Skills are released under the{" "}
              <a href="https://github.com/msg2ai/nonprofit-team-skills/blob/main/LICENSE">MIT license</a> — free to use, modify, and redistribute. Attribution appreciated, not required.
            </p>
            <p className="legal-note">
              <strong>No warranty.</strong> The skills are provided &ldquo;as is&rdquo;, without warranty of any kind. MSG2AI is not responsible for outputs produced by Claude or for actions taken based on them. Always review AI-generated work before sending it, signing it, or publishing it.
            </p>
            <p className="legal-note">
              <strong>Privacy.</strong> This landing page is statically rendered, no analytics, no cookies, no server-side tracking. The contact form opens your local email client; nothing is sent anywhere until you press Send. Anything you do inside Claude is governed by Anthropic&apos;s privacy and terms — see{" "}
              <a href="https://www.anthropic.com/legal/privacy">Anthropic Privacy</a> and{" "}
              <a href="https://www.anthropic.com/legal/consumer-terms">Anthropic Terms</a>.
            </p>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 MSG2AI · <a href="https://github.com/msg2ai/nonprofit-team-skills/blob/main/LICENSE">MIT License</a> · v1.0.0
            </div>
            <div>For non-profits, by non-profits.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

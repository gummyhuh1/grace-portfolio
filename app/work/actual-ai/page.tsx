import Container from '@/components/Container'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata = {
  title: 'Usability Study for Actual AI',
}

const Placeholder = ({ aspect = 'aspect-video', label = 'Image' }: { aspect?: string; label?: string }) => (
  <div className={`w-full ${aspect} bg-gray-100 rounded-[24px] flex items-center justify-center text-gray-400 text-sm tracking-widest uppercase`}>
    {label}
  </div>
)

const Divider = () => <div className="border-t border-gray-200 my-20" />

const severityColor = (level: 3 | 2 | 1) => {
  if (level === 3) return 'bg-red-600'
  if (level === 2) return 'bg-orange-500'
  return 'bg-yellow-400'
}

export default function ActualAIPage() {
  return (
    <main className="pt-20 bg-white min-h-screen">

      {/* Hero */}
      <FadeIn>
        <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 -mt-[60px]">
          <img
            src="/actual-ai-header.jpg"
            alt="Actual AI Usability Study"
            className="w-full h-auto block rounded-[32px]"
          />
        </div>
      </FadeIn>

      <Container>

        {/* Title */}
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-10 mb-8">
            Usability Study for Actual AI
          </h1>
        </FadeIn>

        {/* Metadata */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-[200px]">
            {[
              { label: 'Role', value: ['UX Researcher'] },
              { label: 'Team', value: ['Grace Huh', 'Julie Bevilacqua', 'Lia Vargas', 'Stuti Shah'] },
              { label: 'Type', value: ['Usability Testing', 'User Research'] },
              { label: 'Method', value: ['Remote Moderated', 'Think-Aloud', 'SUS Rating'] },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-2">{label}</p>
                {value.map((line) => (
                  <p key={line} className="text-sm text-gray-800 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Typographic statement */}
        <FadeIn>
          <p className="text-4xl md:text-5xl lg:text-6xl font-thin leading-[1.25] tracking-tight text-gray-900 mb-[200px]">
            Actual AI is building an <span className="font-semibold">AI-powered platform</span> to help senior developers and managers{' '}
            <span className="font-semibold">automate</span> software development workflows
          </p>
        </FadeIn>

        {/* Overview */}
        <FadeIn>
          <div id="overview" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-gray-900">Overview</h2>
            <p className="text-base text-gray-600 leading-6">
              Actual AI is a platform that helps engineering teams improve efficiency by automating functions through two core agents — the Architecture Agent and the Management Agent. Our team conducted a remote moderated usability study with six participants to evaluate the onboarding experience and first-time dashboard use, identify friction points, and deliver prioritized recommendations.
            </p>
          </div>
        </FadeIn>

        {/* Product Background */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Product Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-gray-100 rounded-[24px] p-10">
                <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-4">Architecture Agent</p>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Enforces code quality and architectural decisions</h3>
                <ul className="space-y-3">
                  {[
                    'Analyzes code contributions and development tickets',
                    'Enforces rules and guidelines for code written by humans and AI',
                    'Provides actionable recommendations',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 rounded-[24px] p-10">
                <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-4">Management Agent</p>
                <h3 className="text-lg font-bold mb-4 text-gray-900">Automates progress tracking and reporting</h3>
                <ul className="space-y-3">
                  {[
                    'Automates progress reports',
                    'Measures velocity by developer, team, and project',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-10">
              <Placeholder aspect="aspect-[16/9]" label="Product — Homepage Dashboard" />
            </div>
          </div>
        </FadeIn>

        {/* Study Objective & Goals */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-gray-900">Study Objective</h2>
            <p className="text-base text-gray-600 leading-6 mb-10">
              This study focuses on evaluating the user experience of senior-level engineers and managers as they onboard and use the platform for the first time.
            </p>

            <h3 className="text-lg font-bold mb-4 text-gray-900">Goals</h3>
            <ul className="space-y-3">
              {[
                'Evaluate if a user can successfully onboard without external guidance.',
                'Evaluate if the value and purpose of the product and its features are clear to the user once they land on the dashboard and navigate to the homepage, architecture agent, and management agent.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base text-gray-600 leading-relaxed">
                  <span className="text-gray-300 mt-1">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Research Questions */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Research Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { n: 1, q: 'How easily might users complete onboarding without external guidance?' },
                { n: 2, q: 'What friction points or confusion might users encounter during onboarding?' },
                { n: 3, q: 'Do users have enough understanding to confidently navigate the dashboard after completion of onboarding?' },
                { n: 4, q: 'Do users understand what the Management and Architecture Agents do when first encountering them with incomplete data?' },
                { n: 5, q: 'Does the content (fields, headings, and data) align with users\' decision-making needs and expectations?' },
                { n: 6, q: 'How might users successfully identify and utilize core product features within their existing workflow?' },
              ].map(({ n, q }) => (
                <div key={n} className="bg-gray-100 rounded-[20px] p-6 flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#22C55E' }}>
                    {n}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Method & Participants */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#22C55E' }}>Study Setup</h3>
                <ul className="space-y-4">
                  {[
                    'A group of six participants were selected.',
                    'Testing took place via Zoom; participants shared their screen so their actions could be observed.',
                    'Participants onboarded to the Actual AI platform and explored the dashboard.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#22C55E' }}>Data Collected</h3>
                <ul className="space-y-4">
                  {[
                    'Notes about friction points during onboarding',
                    'Satisfaction and cognitive load ratings',
                    'Suggestions for improvement',
                    'SUS (System Usability Scale) ratings',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-lg font-bold mb-6 text-gray-900">Participant Criteria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Have not used Actual AI\'s platform yet',
                  'Software project team size of 2 to 99 people',
                  'Responsible for contributing production code or reviewing pull requests',
                  'Manages repository-level technical decisions or team members',
                  'Their team uses AI agents for coding',
                ].map((item) => (
                  <div key={item} className="bg-gray-100 rounded-[16px] px-6 py-4 flex gap-3 items-start">
                    <span className="text-gray-300 mt-0.5 text-sm">·</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Findings Summary */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-gray-900">Findings Summary</h2>
            <p className="text-base text-gray-600 leading-6 mb-10">
              Findings are rated on a three-point severity scale. Critical issues lead to task failure, moderate issues cause delays and occasional task failure, and minor issues cause hesitation or slight irritation.
            </p>

            {/* Severity legend */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { level: 3, label: 'Critical', desc: 'Task failure; extreme irritation', color: 'bg-red-600' },
                { level: 2, label: 'Moderate', desc: 'Occasional failure; delays', color: 'bg-orange-500' },
                { level: 1, label: 'Minor', desc: 'Hesitation; slight irritation', color: 'bg-yellow-400' },
              ].map(({ level, label, desc, color }) => (
                <div key={level} className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white ${color}`}>{level}</span>
                  <span className="text-sm text-gray-900 font-medium">{label}</span>
                  <span className="text-xs text-gray-400">{desc}</span>
                </div>
              ))}
            </div>

            {/* Findings table */}
            <div className="bg-gray-50 rounded-[24px] overflow-hidden border border-gray-200">
              <div className="grid grid-cols-[1fr_auto] px-8 py-4 border-b border-gray-200">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Finding</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Severity</span>
              </div>
              {[
                { finding: 'UI is clean and minimalistic', severity: null },
                { finding: 'Users appreciate help and feedback', severity: null },
                { finding: 'Inconsistent onboarding flow', severity: 3 },
                { finding: 'Management agent was missing', severity: 3 },
                { finding: 'Users felt lost landing on homepage after onboarding', severity: 3 },
                { finding: 'Platform lacked stability, disrupting user flows', severity: 3 },
                { finding: 'Functionality of architecture agent is unclear', severity: 3 },
                { finding: 'Developer minutes is ambiguous', severity: 3 },
                { finding: 'Nested buttons resulting in confusion', severity: 3 },
                { finding: 'Create decision form unclear', severity: 2 },
                { finding: 'Lack of agency over context files', severity: 2 },
                { finding: 'Management agent doesn\'t feel agentic', severity: 1 },
              ].map(({ finding, severity }, i) => (
                <div key={finding} className={`grid grid-cols-[1fr_auto] px-8 py-4 items-center ${i < 11 ? 'border-b border-gray-200' : ''}`}>
                  <span className="text-sm text-gray-700">{finding}</span>
                  {severity ? (
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${severityColor(severity as 3 | 2 | 1)}`}>
                      {severity}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">N/A</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* What Went Well */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">What Went Well</h2>

            <div className="mb-16">
              <h3 className="text-xl font-bold mb-2 text-gray-900">UI is Clean and Minimalist</h3>
              <p className="text-base text-gray-600 leading-6 mb-6">3 of 6 users noticed and praised the aesthetic of the platform.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  '"I like the branding and the colors on the buttons."',
                  '"The white space is nice... I like the big call-outs."',
                  '"Overall it\'s pretty clean."',
                ].map((quote) => (
                  <div key={quote} className="bg-gray-100 rounded-[20px] p-6">
                    <p className="text-sm text-gray-600 leading-relaxed italic">{quote}</p>
                  </div>
                ))}
              </div>
              <Placeholder aspect="aspect-[16/9]" label="Screenshot — Clean UI" />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Users Appreciate Help & Feedback</h3>
              <p className="text-base text-gray-600 leading-6 mb-6">
                Users found tooltips, descriptions, and feedback helpful and wanted this extended throughout the platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  '"Cool, I like this little help... should have more of that in the UI."',
                  '"I like these "abouts".. so I know what I\'m clicking on or what benefit I get from it."',
                ].map((quote) => (
                  <div key={quote} className="bg-gray-100 rounded-[20px] p-6">
                    <p className="text-sm text-gray-600 leading-relaxed italic">{quote}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Placeholder aspect="aspect-video" label="Screenshot — Tooltip / Filter Help" />
                <Placeholder aspect="aspect-video" label="Screenshot — About Slack Integration" />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Areas of Improvement */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Areas of Improvement</h2>

            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900">Inconsistent Onboarding Flow</h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white bg-red-600">3</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  '3 of 6 users did not complete the onboarding flow.',
                  '2 users\' email confirmation link took them directly to the dashboard after only creating a login.',
                  '1 user remained stuck on the "Import from GitHub" page while the repository loaded.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-gray-600 leading-relaxed">
                    <span className="text-gray-300 mt-1">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-100 rounded-[20px] p-6">
                  <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-3">User Quote</p>
                  <p className="text-sm text-gray-600 italic leading-relaxed">"I never onboarded so the experience is not good."</p>
                </div>
                <div className="bg-gray-100 rounded-[20px] p-6">
                  <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-3">Recommendations</p>
                  <ul className="space-y-2">
                    {[
                      'Troubleshoot onboarding flow from email confirmation link.',
                      'On the "Import from GitHub" page, add a button to cancel importing repository.',
                      'Show status bar of repository loading.',
                    ].map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="text-gray-300 mt-0.5">·</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Placeholder aspect="aspect-[16/9]" label="Screenshot — Import from GitHub / Onboarding" />
            </div>

            <Divider />

            <div className="space-y-6">
              {[
                {
                  title: 'Management Agent Was Missing',
                  severity: 3,
                  description: 'During testing, the Management Agent was not visible or accessible for some users, blocking them from completing key tasks.',
                  recommendations: ['Ensure Management Agent is available and visible during onboarding and first-time dashboard use.'],
                },
                {
                  title: 'Users Felt Lost After Onboarding',
                  severity: 3,
                  description: 'After completing onboarding, users landed on the homepage without clear guidance on where to go or what to do next.',
                  recommendations: ['Add a clear next-step prompt or guided tour after onboarding completes.', 'Improve the welcome state of the homepage to orient new users.'],
                },
                {
                  title: 'Platform Lacked Stability',
                  severity: 3,
                  description: 'Unexpected bugs and loading issues disrupted user flows during the study, causing frustration and task failure.',
                  recommendations: ['Address known stability issues before conducting future studies or product launches.'],
                },
                {
                  title: 'Architecture Agent Functionality is Unclear',
                  severity: 3,
                  description: 'Users did not understand what the Architecture Agent does when first encountering it, especially with incomplete data.',
                  recommendations: ['Add an onboarding tooltip or empty-state explanation for the Architecture Agent.', 'Clarify terminology and surface key actions more prominently.'],
                },
                {
                  title: '"Developer Minutes" is Ambiguous',
                  severity: 3,
                  description: 'The "Developer Minutes" metric confused users — they were unsure what it measured or how it related to their work.',
                  recommendations: ['Rename or add a tooltip explanation for the "Developer Minutes" metric.', 'Provide context on how the metric is calculated.'],
                },
                {
                  title: 'Nested Buttons Resulting in Confusion',
                  severity: 3,
                  description: 'Buttons nested within other clickable elements caused users to misfire actions and lose their place in the interface.',
                  recommendations: ['Audit the UI for nested interactive elements and restructure to avoid conflicting click targets.'],
                },
                {
                  title: 'Create Decision Form Unclear',
                  severity: 2,
                  description: 'Users struggled to understand what information to enter in the "Create Decision" form, leading to hesitation and errors.',
                  recommendations: ['Add inline hints or examples within form fields.', 'Clarify the purpose of a "Decision" within the form context.'],
                },
                {
                  title: 'Lack of Agency Over Context Files',
                  severity: 2,
                  description: 'Users wanted more control over context files but couldn\'t find clear affordances for editing or managing them.',
                  recommendations: ['Surface context file management actions more clearly.', 'Add descriptive labels explaining what context files are used for.'],
                },
              ].map(({ title, severity, description, recommendations }) => (
                <div key={title} className="bg-gray-50 border border-gray-200 rounded-[24px] p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${severityColor(severity as 3 | 2 | 1)}`}>{severity}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                  <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-2">Recommendations</p>
                  <ul className="space-y-1">
                    {recommendations.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="text-gray-300 mt-0.5">·</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-gray-50 border border-gray-200 rounded-[24px] p-10">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Management Agent Doesn&apos;t Feel Agentic</h3>
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white bg-yellow-400">1</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Users perceived the Management Agent as a passive reporting tool rather than an active, intelligent agent taking action on their behalf.
                </p>
                <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-2">Recommendations</p>
                <ul className="space-y-1">
                  {[
                    'Add language and UI patterns that emphasize the agent\'s proactive behaviors.',
                    'Surface agent-initiated insights or actions more prominently on the dashboard.',
                  ].map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gray-300 mt-0.5">·</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Next Steps */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Placeholder aspect="aspect-[4/3]" label="Next Steps — Slide 1" />
              <Placeholder aspect="aspect-[4/3]" label="Next Steps — Slide 2" />
            </div>
          </div>
        </FadeIn>

        {/* Reflection */}
        <FadeIn>
          <div className="mb-32">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-gray-900">Reflection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Placeholder aspect="aspect-[4/3]" label="Reflection — Slide 1" />
              <Placeholder aspect="aspect-[4/3]" label="Reflection — Slide 2" />
            </div>
          </div>
        </FadeIn>

      </Container>
      <ScrollToTop />
      <Footer />
    </main>
  )
}

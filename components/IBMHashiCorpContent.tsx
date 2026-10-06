'use client'

import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'
import AuthVsGovernance from '@/components/AuthVsGovernance'
import Link from 'next/link'

const metadata = [
  { label: 'Role', value: ['Product Design Intern'] },
  { label: 'Collaborators', value: ['1 Senior Product Designer', '1 Cryptography Engineer', '1 Project Manager'] },
  { label: 'Company', value: ['IBM'] },
  { label: 'Duration', value: ['3 Months'] },
]

const evaluationCriteria = [
  {
    label: 'Policy Languages & Syntax',
    description: 'How declarative vs. imperative models impacted the authoring learning curve.',
  },
  {
    label: 'Core Capabilities',
    description: 'How systems handled rule composition, policy enforcement points, and scoping.',
  },
  {
    label: 'Strengths & Friction Points',
    description: 'Where users faced cognitive overload, syntax confusion, or operational blind spots.',
  },
]

const nextSteps = [
  {
    label: 'Public Debut',
    description: 'The initial concept and UI workflows will be showcased at HashiConf at IBM TechExchange.',
  },
  {
    label: 'Scope Expansion',
    description: 'Transitioning the governance controls from cluster-level applications down to granular child scopes (organization and project levels).',
  },
  {
    label: 'New Feature Development',
    description: 'Designing and integrating essential compliance tools, specifically audit logging and dry-run policy testing.',
  },
  {
    label: 'Phase 2 Usability Testing',
    description: 'Conducting a new round of moderated testing with external customer users to validate the revised prototype against real-world production scenarios.',
  },
]

const usabilityFindings = [
  {
    heading: 'Clarifying the State Model',
    body: 'Upon reaching the confirmation page, users were unsure if their governance control was actually saved because the optional "apply to clusters" action appeared as a pending third step in the progress bar.',
    quote: 'If I hit cancel... I’m not actually sure that my control is saved.',
    attribution: 'One engineer',
    resolution: 'I resolved this by removing the final step from the progress bar, adding a clear success toast message, and introducing a distinct "What’s next?" section to separate the creation state from the application state.',
  },
  {
    heading: 'Contextualizing Complex Actions',
    body: 'Four out of six participants were confused by the "Override" feature, specifically questioning whether it replaced or added to an algorithm set. Furthermore, three participants struggled with overrides appearing in a disconnected section on the summary page rather than inline with their corresponding key types.',
    quote: null,
    attribution: null,
    resolution: 'In the revised prototype, I added explicit helper text and relocated the overrides to sit directly next to their associated key types for immediate context.',
  },
  {
    heading: 'Designing for Enterprise Scale',
    body: 'When selecting clusters, four out of six participants flagged that the UI would introduce severe friction in a real-world environment.',
    quote: 'Without a ‘select all,’ if there are hundreds of production environments, I’m going to hit every button the first time and I will make a mistake.',
    attribution: 'One participant',
    resolution: 'I iterated on the dropdown component to include a bulk "select all" function and enabled filtering by product name to accommodate large-scale deployments.',
  },
]

export default function IBMHashiCorpContent() {
  return (
    <Container className="mb-8">
      <FadeIn>
        <p className="text-sm text-gray-400 mb-4">
          <Link href="/work" className="hover:opacity-60 transition-opacity">
            ← Work
          </Link>
        </p>
      </FadeIn>

      {/* Hero image */}
      <FadeIn>
        <img
          src="/ibm-hero-v2.png"
          alt="Governance Policy workflow for IBM HashiCorp Vault"
          className="w-full h-auto block mb-10"
        />
      </FadeIn>

      {/* Project title */}
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight mt-4 mb-8">Governance Policy workflow for IBM HashiCorp Vault</h1>
      </FadeIn>

      {/* Project metadata — right below hero */}
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32">
          {metadata.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[13px] text-gray-400 uppercase tracking-widest mb-2">{label}</p>
              {value.map((line) => (
                <p key={line} className="text-sm text-gray-700 leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Background */}
      <FadeIn>
        <div id="background" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Background</h2>
          <div className="mb-12">
            <p className="text-[17.3px] leading-[1.5] text-[#525252] mb-5">
              As enterprise security models evolve to handle agile hybrid clouds, agentic AI, and post-quantum cryptography, traditional access controls are no longer enough. Authorization dictates who can perform an action, but it can&apos;t prevent a fully privileged user from making a vulnerable choice—like creating a deprecated 1024-bit encryption key. That requires Governance Control: proactive, organization-wide rules that dictate what is allowed to exist at all.
            </p>
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              Historically, governance in HashiCorp Vault was treated as a secondary enterprise overlay. For this 0-to-1 product initiative, our goal was to fundamentally shift that paradigm, designing an experience where proactive governance is a native, first-class citizen.
            </p>
          </div>

          <AuthVsGovernance />
        </div>
      </FadeIn>

      {/* Challenges */}
      <FadeIn>
        <div id="challenges" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Untangling Technical Ambiguity</h2>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252] mb-5">
              Building a zero-to-one product means navigating a blank slate. Tasked with designing a brand-new governance policy model to control system algorithms, I initially faced a steep technical learning curve. I didn&apos;t fully understand how the underlying rules were supposed to work, which meant dealing with heavy ambiguity.
            </p>
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              To get up to speed, I embedded myself with the technical teams—interviewing Engineers, PMs, and designers, while dissecting PRDs and RFCs to translate complex architecture into clear design requirements.
            </p>
          </div>

          <div className="bg-[#f4f4f4] border-l-4 border-[#0f62fe] px-8 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-3">The Goal</p>
            <p className="text-xl leading-[1.4] font-medium text-[#161616]">
              Design an end-to-end workflow enabling platform engineers and compliance officers to effortlessly CRUDL (Create, Read, Update, Delete, List) governance policies.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Competitive Analysis */}
      <FadeIn>
        <div id="competitive-analysis" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Competitive Analysis</h2>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252] mb-5">
              To navigate the technical complexity and establish a clear design direction, I conducted a deep dive into the broader governance and policy-as-code landscape. I evaluated 9 industry platforms and frameworks, dissecting their underlying policy languages, feature sets, and user workflows.
            </p>

            <img
              src="/ibm-ca-platforms.png"
              alt="9 industry platforms and frameworks evaluated, grouped by NHI & Infra, Agentic, Generic, and App"
              className="w-full h-auto block mb-8"
            />

            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              By analyzing the strengths and trade-offs of each system—from declarative languages like Open Policy Agent (Rego) and AWS Cedar to proprietary enterprise engines—I mapped out current industry standards and uncovered critical usability gaps.
            </p>

            <div className="mt-8">
              <img
                src="/ibm-ca-scatter.png"
                alt="Scatter plot of proactive enforcement posture vs. granularity across evaluated platforms"
                className="w-full max-w-sm mx-auto h-auto block"
              />
            </div>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-4">What I evaluated across each tool</p>
          <div className="bg-white border border-[#e0e0e0] divide-y divide-[#e0e0e0]">
            {evaluationCriteria.map(({ label, description }) => (
              <div key={label} className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-8 px-8 py-6">
                <p className="text-base font-semibold text-[#161616]">{label}</p>
                <p className="text-[17.3px] leading-[1.5] text-[#525252]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Defining the Users: Personas & Intent */}
      <FadeIn>
        <div id="users" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Defining the Users: Personas & Intent</h2>

          <img
            src="/ibm-persona.jpg"
            alt="Core user personas: Compliance Officer (Futuristic Freya) and Platform Engineer"
            className="w-full h-auto block mb-8"
          />

          <div className="mb-16">
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              To translate our competitive insights into a tangible product, I first anchored the design around our two core users.
            </p>
          </div>

          <img
            src="/ibm-jtbd.jpg"
            alt="Jobs to be Done breakdown across the starting list view, creating a control, the confirmation page, and applying updates"
            className="w-full h-auto block mb-8"
          />

          <div className="mb-16">
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              To deeply understand what the platform engineer needed to accomplish at every stage, I mapped out comprehensive Jobs to be Done (JTBD). This breakdown covered every major touchpoint, from navigating the starting list view and creating a control, to reviewing the confirmation page and applying updates.
            </p>
          </div>

          <img
            src="/ibm-journey-map.jpg"
            alt="CRUDL user journey map spanning the Create, List, Apply, Update, and Delete phases"
            className="w-full h-auto block mb-8"
          />

          <h3 className="text-xl font-semibold text-[#161616] mb-4">Architecting the Journey: The &quot;Apply&quot; Pivot</h3>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              I visualized the full CRUDL user journey (Create, List, Apply, Update, Delete) to align our design with the backend architecture. Walking through this flow with PMs and engineers led to a critical workflow pivot:
            </p>
          </div>

          <img
            src="/ibm-resource-flow.png"
            alt="Resource management flow diagram showing the control creation flow and the apply-to-clusters branching paths"
            className="w-full h-auto block mb-8"
          />

          <div className="bg-[#f4f4f4] border-l-4 border-[#0f62fe] px-8 py-8 mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-3">The Constraint</p>
            <p className="text-[17.3px] leading-[1.5] text-[#161616]">
              Initially, creating and applying a control was designed as one continuous step. However, technical reviews revealed engineers actually need to stage controls to secure organizational approvals before applying them to active clusters.
            </p>
          </div>

          <div className="bg-[#f4f4f4] border-l-4 border-[#0f62fe] px-8 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-3">The Solution</p>
            <p className="text-[17.3px] leading-[1.5] text-[#161616]">
              I uncoupled the actions into a natural branching path. Upon creating a control, users can now choose to apply it immediately, or exit directly to the list view to stage it for future application.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Low-Fi Wireframes */}
      <FadeIn>
        <div id="low-fi-wireframes" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Low-Fi Wireframes</h2>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              With the user flow locked in, I quickly translated the architecture into low-fidelity wireframes. The goal was speed—putting foundational UX patterns in front of Engineering, Product, and Design (EPD) to get immediate reactions. This approach allowed us to rapidly validate structural design decisions and iterate collaboratively on high-level concepts before committing to high-fidelity execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <img
              src="/ibm-wireframe-list.jpg"
              alt="Low-fidelity wireframe of the governance controls policy list view"
              className="w-full h-auto block border border-[#e0e0e0]"
            />
            <img
              src="/ibm-wireframe-create.jpg"
              alt="Low-fidelity wireframe of the create a new control flow"
              className="w-full h-auto block border border-[#e0e0e0]"
            />
          </div>
        </div>
      </FadeIn>

      {/* Prototype */}
      <FadeIn>
        <div id="prototype" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Prototype</h2>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              To accelerate the transition to high-fidelity, I used Figma Make to &quot;vibe code&quot; our validated low-fidelity wireframes into polished prototypes. I took these initial high-fidelity designs through multiple internal iteration cycles—collaborating closely with engineering to refine the complex technical workflows and interactions, ensuring we had a robust, realistic model ready for our upcoming usability testing sessions.
            </p>
          </div>

          <video
            src="/ibm-prototype-walkthrough.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-auto block border border-[#e0e0e0]"
          />
        </div>
      </FadeIn>

      {/* Usability Testing */}
      <FadeIn>
        <div id="usability-testing" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-6 text-[#161616]">Usability Testing</h2>
          <div className="mb-10">
            <p className="text-[17.3px] leading-[1.5] text-[#525252] mb-5">
              To validate the high-fidelity designs, I conducted moderated, task-based usability testing with six internal participants—five engineers and one project manager. These 45–60 minute sessions were crucial for uncovering how technical users navigated the complexity of the new governance workflows.
            </p>
            <p className="text-[17.3px] leading-[1.5] text-[#525252]">
              Based on the feedback, I prioritized three major workflow iterations:
            </p>
          </div>

          <div className="space-y-12">
            {usabilityFindings.map(({ heading, body, quote, attribution, resolution }) => (
              <div key={heading}>
                <h3 className="text-xl font-semibold text-[#161616] mb-4">{heading}</h3>
                <p className="text-[17.3px] leading-[1.5] text-[#525252]">{body}</p>

                {quote && (
                  <blockquote className="border-l-4 border-[#8d8d8d] pl-6 py-1 my-6">
                    <p className="text-[17.3px] italic leading-[1.5] text-[#393939]">&quot;{quote}&quot;</p>
                    {attribution && (
                      <p className="text-sm text-[#6f6f6f] mt-2">{attribution}</p>
                    )}
                  </blockquote>
                )}

                <p className={`text-[17.3px] leading-[1.5] text-[#525252] ${quote ? '' : 'mt-5'}`}>{resolution}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Refined Product */}
      <FadeIn>
        <div id="refined-product" className="mb-[200px]">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-10 text-[#161616]">Refined Product</h2>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#161616] mb-6">1. The List View</h3>
            <img
              src="/ibm-refined-list-view-annotated.png"
              alt="Refined governance controls list view with callouts highlighting the search bar, filter button, clusters column, and the row actions menu for editing, applying to clusters, and deleting"
              className="w-full h-auto block"
            />
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[#161616] mb-6">2. Create a Control</h3>
            <video
              src="/ibm-create-control-loop.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto block border border-[#e0e0e0]"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#161616] mb-6">3. Apply to Clusters</h3>
            <video
              src="/ibm-apply-clusters-loop.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto block border border-[#e0e0e0]"
            />
          </div>
        </div>
      </FadeIn>

      {/* Next Steps */}
      <FadeIn>
        <div id="next-steps" className="mb-16">
          <h2 className="text-[28px] leading-[1.29] font-semibold tracking-[-0.01em] mb-10 text-[#161616]">Next Steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nextSteps.map(({ label, description }) => (
              <div key={label} className="bg-[#f4f4f4] border-t-4 border-[#0f62fe] px-8 py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-4">
                  {label}
                </p>
                <p className="text-[17.3px] leading-[1.5] text-[#161616]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <img
          src="/ibm-hashiconf.jpg"
          alt="Photo collage from HashiConf at IBM TechExchange, including the HashiCorp keynote stage and event floor"
          className="w-full h-auto block"
        />
      </FadeIn>
    </Container>
  )
}

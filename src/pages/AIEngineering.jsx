import { ArrowLeft, ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";

const entries = [
  {
    number: "01",
    slug: "what-is-ai-engineering",
    category: "Foundations",
    title: "From Prompt to Product: What AI Engineering Means",
    summary:
      "AI engineering is about turning model capabilities into useful, dependable software. The model matters, but so do the data, product design, evaluation, and safeguards around it.",
    takeaway: "A great demo is a beginning; a reliable product is the goal.",
    readingTime: "5 min read",
    sections: [
      {
        heading: "More than choosing a model",
        paragraphs: [
          "A language model can generate text, summarize documents, and help people explore information. AI engineering is the work of shaping those capabilities into a product that solves a real problem. That means starting with the user and task, not with a model or a clever prompt.",
          "The model is only one part of the system. The surrounding software decides what context the model receives, how its response is checked, what the user sees, and what happens when the model is uncertain or unavailable.",
        ],
      },
      {
        heading: "A practical workflow",
        paragraphs: [
          "First, define a specific task and what success means for the person using it. Next, build the smallest useful version and gather representative examples. Those examples make it possible to compare prompts, models, and product changes instead of relying on a few impressive demonstrations.",
          "From there, improve the full experience: provide relevant context, constrain output when needed, handle errors clearly, and measure quality over time. Some tasks may not need a large language model at all; a simple search or deterministic rule can be faster and more predictable.",
        ],
      },
      {
        heading: "The product is the system",
        paragraphs: [
          "A useful AI feature combines a model with data, application logic, user experience, evaluation, and operational safeguards. Thinking in systems helps teams find the real source of a problem: it might be stale data, poor retrieval, confusing instructions, or an interface that invites users to over-trust the answer.",
          "The goal is not to make every response sound confident. It is to make the feature useful for its intended task and honest about its limits.",
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "giving-models-the-right-context",
    category: "Retrieval-Augmented Generation",
    title: "Giving Language Models the Right Context",
    summary:
      "RAG connects a language model to relevant information at answer time. A practical pipeline includes preparing documents, retrieving useful passages, and grounding the response in that context.",
    takeaway: "Better retrieval often matters more than a longer prompt.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Why add retrieval?",
        paragraphs: [
          "A model's built-in knowledge may be incomplete, out of date, or unrelated to a user's private documents. Retrieval-augmented generation (RAG) addresses this by finding relevant source material and giving it to the model alongside the question.",
          "This pattern is useful for tasks such as answering questions about product documentation or searching a team's knowledge base. It does not automatically make answers correct, but it gives the model evidence it can use and cite.",
        ],
      },
      {
        heading: "The main steps",
        paragraphs: [
          "Prepare the source material by extracting text, removing irrelevant noise, and splitting it into chunks that preserve enough context. Create an index for those chunks, often using embeddings so that passages with similar meaning can be found even when they do not share exact words.",
          "When a question arrives, retrieve a small set of likely relevant passages. The application can then place those passages in the model's context with clear instructions to answer from the supplied information and say when the evidence is insufficient.",
        ],
      },
      {
        heading: "Retrieval needs its own evaluation",
        paragraphs: [
          "If the right passage never reaches the model, a carefully written generation prompt cannot fix the answer. Test retrieval separately: for a set of realistic questions, check whether the expected source appears near the top of the results.",
          "Chunk size, metadata filters, ranking, and source freshness all affect quality. Start with a simple baseline, inspect failed examples, and improve the part of the pipeline responsible for each failure. RAG is a system to measure and refine, not a switch that guarantees factual answers.",
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "evaluating-ai-features",
    category: "Evaluation",
    title: "How to Tell Whether an AI Feature Is Improving",
    summary:
      "A handful of impressive examples can hide inconsistent behavior. Build a small set of representative test cases, define what a good answer looks like, and compare changes against that baseline.",
    takeaway: "Measure quality with examples that reflect real user tasks.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Why examples matter",
        paragraphs: [
          "Generative systems can produce different answers to similar questions. Trying a few prompts by hand is useful while exploring, but it is a poor way to know whether a change improved the overall experience. A small, carefully chosen evaluation set makes behavior easier to compare.",
          "Collect questions that reflect real tasks and include ordinary cases, edge cases, and cases where the system should decline or ask for clarification. Remove private information and make sure the examples are appropriate to keep and test.",
        ],
      },
      {
        heading: "Define quality for the task",
        paragraphs: [
          "There is no single score that describes every AI feature. A summarizer might be judged on whether it preserves key facts and avoids unsupported claims. A retrieval system might be measured on whether relevant sources are found. A support assistant may need to be helpful, grounded, and safe.",
          "Use explicit criteria that reviewers can apply consistently. For some criteria, automated checks are suitable; for nuanced qualities, human review remains valuable. Keep examples of both good and bad outputs so the standard is clear.",
        ],
      },
      {
        heading: "Make evaluation part of iteration",
        paragraphs: [
          "Run the same set of cases when changing a prompt, model, retrieval strategy, or user interface. Compare results and inspect regressions instead of looking only at an average score. A change that helps one common task may make an important edge case worse.",
          "Evaluation does not end at launch. Real usage can reveal new questions and failure patterns, so update the test set carefully over time. This creates a feedback loop between what users need and what the system is designed to do.",
        ],
      },
    ],
  },
  {
    number: "04",
    slug: "reliable-ai-features",
    category: "Reliable Systems",
    title: "Designing AI Features for the Real World",
    summary:
      "Production AI needs more than a successful model call. Clear limits, useful fallbacks, privacy-aware data handling, and monitoring help make an unpredictable component safer to use.",
    takeaway: "Plan for uncertainty instead of assuming every answer is right.",
    readingTime: "8 min read",
    sections: [
      {
        heading: "Set expectations in the interface",
        paragraphs: [
          "People need to understand what an AI feature can and cannot do. Explain the feature's purpose in plain language, show sources when they are available, and avoid presenting generated answers as guaranteed facts. Interface choices influence how much users trust an answer.",
          "For high-impact decisions, the system should support human judgment rather than quietly replacing it. Make it easy to review the evidence and correct mistakes.",
        ],
      },
      {
        heading: "Plan for failure and uncertainty",
        paragraphs: [
          "Model providers can be slow or unavailable, and a model may return an answer that does not fit the expected format. Set reasonable timeouts, validate important outputs, and give users a clear recovery path when something goes wrong.",
          "A fallback might be a normal search result, a request for clarification, or a message that the system could not complete the task. The right option depends on the product, but silently showing a low-confidence answer as if it were certain is rarely a good fallback.",
        ],
      },
      {
        heading: "Protect data and monitor behavior",
        paragraphs: [
          "Send only the information needed for the task and understand how data is handled by each service in the pipeline. Avoid placing secrets or unnecessary personal data in prompts and logs. Apply access controls before retrieving private content, not after it has already been sent to a model.",
          "After launch, monitor reliability, latency, cost, and quality signals. Review failures in a privacy-conscious way and use them to improve tests and product behavior. A dependable AI feature is maintained continuously, not declared finished after its first successful demo.",
        ],
      },
    ],
  },
];

const sectionTitles = [
  entries[0].title,
  "How Language Models Generate Text",
  "Tokens, Context Windows, and Model Limits",
  "AI Tasks: Classification, Extraction, and Generation",
  "Choosing a Model for the Job",
  "Defining Your First AI Feature",
  "Preparing a Python Environment",
  "Calling a Language Model API",
  "Managing API Keys and Environment Variables",
  "System and User Messages",
  "Handling API Errors and Retries",
  "Streaming Responses to the Interface",
  "Writing Clear Model Instructions",
  "Prompt Templates and Reusable Inputs",
  "Learning from Few-Shot Examples",
  "Requesting Structured JSON Outputs",
  "Validating Model Responses",
  "Tool Calling Fundamentals",
  "What Are Text Embeddings?",
  "Vector Similarity and Distance",
  "Building a Semantic Search Demo",
  "Document Chunking Strategies",
  "Metadata and Search Filters",
  "Evaluating Search Results",
  entries[1].title,
  "Document Ingestion and Parsing",
  "Building a Retrieval Pipeline",
  "Improving Retrieval with Hybrid Search",
  "Grounding Answers with Sources",
  "Handling Missing or Conflicting Context",
  "What Makes a System an AI Agent?",
  "Tools, Actions, and Permissions",
  "Planning Multi-Step Tasks",
  "Conversation State and Memory",
  "Human Approval in Agent Workflows",
  "Testing Agent Behavior",
  entries[2].title,
  "Creating an Evaluation Dataset",
  "Quality, Latency, and Cost Metrics",
  "Human Review and AI Judges",
  "Privacy and Data Minimization",
  "Prompt Injection and Unsafe Inputs",
  entries[3].title,
  "Caching and Rate Limits",
  "Monitoring Quality and Failures",
  "Fallbacks and Graceful Degradation",
  "Deploying and Scaling AI Services",
  "A Production Readiness Checklist",
  "Planning an AI Engineering Project",
  "Building a Document Q&A Assistant",
  "Building a Customer Support Assistant",
  "Building an AI Research Helper",
  "Documenting Results and Lessons Learned",
  "Planning Your Next Learning Steps",
  "Prompting vs. Fine-Tuning",
  "Working with Open-Source Language Models",
  "Model Quantization and Efficient Inference",
  "Choosing Between Hosted and Local Models",
  "Routing Requests Across Multiple Models",
  "Multimodal Inputs: Text, Images, and Audio",
  "Speech-to-Text and Text-to-Speech",
  "Building an Image Understanding Feature",
  "Creating and Using Synthetic Data",
  "Preparing Data for AI Applications",
  "Managing Knowledge Sources and Updates",
  "Reranking Retrieved Documents",
  "Query Rewriting for Better Retrieval",
  "Citations and Source Verification",
  "Access Control for AI Search",
  "Agent State and Workflow Persistence",
  "Orchestrating Long-Running AI Tasks",
  "Safe Tool Permissions for Agents",
  "Designing Search Tools for Agents",
  "Evaluating Multi-Step Agent Tasks",
  "Interoperability Between AI Agents",
  "Prompt Versioning and Change Tracking",
  "Tracing Requests Through an AI System",
  "Logging AI Quality Signals",
  "Setting Cost and Usage Budgets",
  "Caching Model Responses Responsibly",
  "Background Jobs for AI Workloads",
  "Managing Concurrency and Rate Limits",
  "Authentication for AI Features",
  "Handling Sensitive Data in Prompts",
  "Moderating User Inputs and Model Outputs",
  "Testing AI Systems with Adversarial Examples",
  "Schema Design for AI Responses",
  "Versioning Models, Prompts, and Data",
  "Collecting Useful User Feedback",
  "Capstone: Design an AI Product",
];

const allSections = sectionTitles.map((title, index) => {
  const article = entries.find((item) => item.title === title);
  const slug = article
    ? article.slug
    : title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

  return {
    article,
    number: String(index + 1).padStart(2, "0"),
    slug,
    title,
  };
});

const AIEngineering = () => {
  const { slug } = useParams();
  const section = allSections.find((item) => item.slug === slug);

  if (slug && !section) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <PageHeader article />
        <section className="px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link
            to="/ai-engineering"
            className="mt-6 inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft size={17} />
            Back to AI Engineering
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader article={Boolean(section)} />

      {section ? (
        <article className="px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/5 px-3 py-1 font-medium text-primary">
                Section {section.number} of {allSections.length}
              </span>
              {section.article && (
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} />
                  {section.article.readingTime}
                </span>
              )}
              <span>{section.article ? "Sample article" : "Draft section"}</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {section.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {section.article
                ? section.article.summary
                : "This section is ready for your notes. Add explanations, examples, code snippets, and useful links here as you learn."}
            </p>

            {section.article ? (
              <>
                <div className="mt-12 space-y-10">
                  {section.article.sections.map((articleSection) => (
                    <section key={articleSection.heading}>
                      <h2 className="text-2xl font-semibold tracking-tight">
                        {articleSection.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                        {articleSection.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
                <p className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-5 leading-relaxed">
                  <span className="font-semibold">Key takeaway: </span>
                  {section.article.takeaway}
                </p>
              </>
            ) : (
              <div className="mt-12 rounded-xl border border-dashed border-border p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Your notes go here</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  This is a placeholder for the full lesson. You can add your
                  explanation, code examples, diagrams, project notes, and
                  references as you work through this topic.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>Key ideas and concepts</li>
                  <li>Examples or code to try</li>
                  <li>Questions, takeaways, and useful resources</li>
                </ul>
              </div>
            )}
            <Link
              to="/ai-engineering"
              className="mt-10 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
            >
              <ArrowLeft size={17} />
              More AI Engineering notes
            </Link>
          </div>
        </article>
      ) : (
        <>
          <section className="px-4 pb-12 pt-16 sm:px-6 sm:pt-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary">
                <Sparkles size={15} />
                Learning journal · Sample content
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
                AI Engineering
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A 90-section learning path for building useful AI products,
                exploring language models, and making AI systems work reliably.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen size={17} />
                {allSections.length} standalone sections
              </div>
            </div>
          </section>

          <section className="px-4 pb-20 sm:px-6">
            <div className="mx-auto max-w-5xl space-y-3">
              {allSections.map((item) => (
                <Link
                  key={item.slug}
                  to={`/ai-engineering/${item.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-5"
                >
                  <span className="w-8 shrink-0 text-sm tabular-nums text-muted-foreground">
                    {item.number}
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-medium group-hover:text-primary sm:text-base">
                    {item.title}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    {item.article ? "Sample article" : "Add notes"}
                  </span>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </Link>
              ))}
              <p className="pt-8 text-center text-lg font-medium text-muted-foreground">
                More to come...
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

const PageHeader = ({ article }) => (
  <header className="border-b border-border">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <Link
        to={article ? "/ai-engineering" : "/"}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft size={17} />
        {article ? "All articles" : "Back to portfolio"}
      </Link>
      <ThemeToggle />
    </div>
  </header>
);

export default AIEngineering;

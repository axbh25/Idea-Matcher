// ─── Types ───────────────────────────────────────────────────────────────────

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Recommendation = {
  id: string;
  title: string;
  problemStatement: string;
  suggestedRole: string;
  difficulty: Difficulty;
  techStack: string[];
  thirtySecondPitch: string;
  /** The single theme this project is primarily built for */
  primaryTheme: string;
  /** All themes this project is relevant to */
  themes: string[];
  /** Interest tags used for matching */
  interests: string[];
  /** Extra signal flags for specific interests */
  flags?: Array<"ai" | "cloud">;
};

// ─── Project pool ────────────────────────────────────────────────────────────
// 3–4 projects per hackathon theme, covering all 10 themes.
// Each entry uses {name} and {role} placeholders — replaced at runtime.

export const PROJECT_POOL: Recommendation[] = [

  // ── Education & Learning ──────────────────────────────────────────────────
  {
    id: "edu-1",
    title: "QuizCraft",
    problemStatement: "Students waste time creating study materials when they should be revising.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Local Storage", "Tailwind CSS"],
    thirtySecondPitch: "QuizCraft lets students paste any text and auto-generates a multiple-choice quiz in seconds. {name}, as the {role}, you'll build the card-flip quiz UI. It's the study tool every student wishes existed.",
    primaryTheme: "Education & Learning",
    themes: ["Education & Learning", "Future of Work"],
    interests: ["Education", "Web Dev"],
  },
  {
    id: "edu-2",
    title: "CampusAssist",
    problemStatement: "First-year students get overwhelmed by campus resources and don't know where to look.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "SQLite"],
    thirtySecondPitch: "CampusAssist is a smart FAQ chatbot trained on your university's own docs. {name}, as the {role}, you'll wire up the keyword search and response system. It's every freshman's digital orientation guide.",
    primaryTheme: "Education & Learning",
    themes: ["Education & Learning", "Social Good"],
    interests: ["Education", "Web Dev", "AI/ML"],
    flags: ["ai"],
  },
  {
    id: "edu-3",
    title: "FlashAI",
    problemStatement: "Reading a textbook chapter and turning it into flashcards takes more time than studying.",
    suggestedRole: "AI Engineer",
    difficulty: "Advanced",
    techStack: ["Python", "HuggingFace Transformers", "React", "FastAPI"],
    thirtySecondPitch: "FlashAI runs a local summarisation model to extract key concepts and turn them into Anki-style flashcards instantly. {name}, as the {role}, you'll integrate the NLP pipeline. It's the AI study buddy that never sleeps.",
    primaryTheme: "Education & Learning",
    themes: ["Education & Learning", "Future of Work"],
    interests: ["AI/ML", "Education"],
    flags: ["ai"],
  },
  {
    id: "edu-4",
    title: "GradeTracker",
    problemStatement: "Students track assignment deadlines and grades across five different apps and still miss things.",
    suggestedRole: "Mobile Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    thirtySecondPitch: "GradeTracker is a simple mobile planner that shows every deadline, grade, and GPA projection in one place. {name}, as the {role}, you'll build the calendar and notification system. Simple, effective, and overdue.",
    primaryTheme: "Education & Learning",
    themes: ["Education & Learning"],
    interests: ["Education", "Mobile Apps"],
  },

  // ── Climate & Sustainability ───────────────────────────────────────────────
  {
    id: "clim-1",
    title: "CarbonLog",
    problemStatement: "People want to cut their carbon footprint but have no easy way to measure daily habits.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Chart.js", "Tailwind CSS"],
    thirtySecondPitch: "CarbonLog is a one-tap carbon footprint journal. Log your commute, meals, and purchases and watch your weekly impact shrink as habits improve. {name}, as the {role}, you'll own the data visualisation dashboard. Let's make sustainability measurable.",
    primaryTheme: "Climate & Sustainability",
    themes: ["Climate & Sustainability", "Social Good", "Smart Cities"],
    interests: ["Climate Tech", "Web Dev"],
  },
  {
    id: "clim-2",
    title: "RecycleRight",
    problemStatement: "Recycling rules differ by city and most people get them wrong, contaminating whole batches.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "Open Data APIs"],
    thirtySecondPitch: "RecycleRight lets you snap a photo or type an item and instantly tells you whether it's recyclable in your city. {name}, as the {role}, you'll build the lookup engine and city database. Less landfill, less confusion.",
    primaryTheme: "Climate & Sustainability",
    themes: ["Climate & Sustainability", "Smart Cities"],
    interests: ["Climate Tech", "Web Dev", "Social Impact"],
  },
  {
    id: "clim-3",
    title: "EnergyPulse",
    problemStatement: "Households have no visibility into which appliances consume the most energy or when grid power is greenest.",
    suggestedRole: "Data Engineer",
    difficulty: "Intermediate",
    techStack: ["Python", "React", "WattTime API", "Recharts"],
    thirtySecondPitch: "EnergyPulse shows a real-time dashboard of your home's energy profile and alerts you when the grid is running on renewables. {name}, as the {role}, you'll ingest live grid data and turn it into actionable nudges. Smart home meets climate action.",
    primaryTheme: "Climate & Sustainability",
    themes: ["Climate & Sustainability", "Smart Cities"],
    interests: ["Climate Tech", "Web Dev"],
  },
  {
    id: "clim-4",
    title: "GreenRoute",
    problemStatement: "Commuters default to the fastest route, never the lowest-emission one.",
    suggestedRole: "Mobile Developer",
    difficulty: "Advanced",
    techStack: ["React Native", "Mapbox", "Node.js", "Open-Meteo API"],
    thirtySecondPitch: "GreenRoute is a navigation app that ranks transit options by carbon cost, not just time. {name}, as the {role}, you'll integrate routing APIs and build the emissions scoring model. One app that makes the green choice the obvious choice.",
    primaryTheme: "Climate & Sustainability",
    themes: ["Climate & Sustainability", "Smart Cities", "Social Good"],
    interests: ["Climate Tech", "Mobile Apps"],
  },

  // ── Health & Wellness ─────────────────────────────────────────────────────
  {
    id: "health-1",
    title: "SymptomSort",
    problemStatement: "People describe vague symptoms online and get buried in unreliable, anxiety-inducing results.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Tailwind CSS", "Local Storage"],
    thirtySecondPitch: "SymptomSort is a simple, calm symptom organiser that helps you describe what you're feeling before a GP appointment — no diagnoses, just clarity. {name}, as the {role}, you'll build the guided symptom log. It's the pre-doctor companion everyone needs.",
    primaryTheme: "Health & Wellness",
    themes: ["Health & Wellness", "Social Good"],
    interests: ["Health Tech", "Web Dev"],
  },
  {
    id: "health-2",
    title: "WellnessStreak",
    problemStatement: "People set wellness goals but abandon them within two weeks because there's no lightweight daily check-in.",
    suggestedRole: "Mobile Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    thirtySecondPitch: "WellnessStreak is a micro-habit tracker — three taps a day to log sleep, water, and mood. Watch your streak grow. {name}, as the {role}, you'll build the habit ring UI and push notifications. Small habits, big results.",
    primaryTheme: "Health & Wellness",
    themes: ["Health & Wellness", "Future of Work"],
    interests: ["Health Tech", "Mobile Apps"],
  },
  {
    id: "health-3",
    title: "AppointEase",
    problemStatement: "Managing multiple specialist appointments across different hospital portals is a scheduling nightmare.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "SQLite", "Google Calendar API"],
    thirtySecondPitch: "AppointEase aggregates all your medical appointments into one timeline with reminders and pre-visit checklists. {name}, as the {role}, you'll own the calendar sync and reminder engine. Finally, a health organiser that respects your time.",
    primaryTheme: "Health & Wellness",
    themes: ["Health & Wellness"],
    interests: ["Health Tech", "Web Dev"],
  },
  {
    id: "health-4",
    title: "MindScan",
    problemStatement: "Early signs of burnout go unnoticed until it's too late because there's no passive check-in system.",
    suggestedRole: "AI Engineer",
    difficulty: "Advanced",
    techStack: ["Python", "scikit-learn", "React", "FastAPI"],
    thirtySecondPitch: "MindScan analyses your daily mood journal entries using sentiment analysis to spot burnout patterns early and suggest interventions. {name}, as the {role}, you'll train the NLP model and build the alert system. Mental health monitoring that's proactive, not reactive.",
    primaryTheme: "Health & Wellness",
    themes: ["Health & Wellness", "Future of Work"],
    interests: ["AI/ML", "Health Tech"],
    flags: ["ai"],
  },

  // ── Future of Work ────────────────────────────────────────────────────────
  {
    id: "work-1",
    title: "FocusBlock",
    problemStatement: "Remote workers lose up to 2 hours a day to context-switching and notification overload.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Tailwind CSS", "Web Notifications API"],
    thirtySecondPitch: "FocusBlock is a Pomodoro timer with a distraction log — every time you switch away, it records why. {name}, as the {role}, you'll build the timer UI and distraction heatmap. Work smarter, not longer.",
    primaryTheme: "Future of Work",
    themes: ["Future of Work", "Health & Wellness"],
    interests: ["Web Dev"],
  },
  {
    id: "work-2",
    title: "MeetingMemo",
    problemStatement: "Action items from meetings get lost because nobody writes proper notes in the moment.",
    suggestedRole: "AI Engineer",
    difficulty: "Intermediate",
    techStack: ["React", "Web Speech API", "Node.js", "OpenAI API"],
    thirtySecondPitch: "MeetingMemo records your meeting audio and extracts a clean list of action items, decisions, and owners automatically. {name}, as the {role}, you'll integrate the transcription and summarisation pipeline. The meeting notes that write themselves.",
    primaryTheme: "Future of Work",
    themes: ["Future of Work", "Education & Learning"],
    interests: ["AI/ML", "Web Dev"],
    flags: ["ai"],
  },
  {
    id: "work-3",
    title: "TaskPilot",
    problemStatement: "Freelancers juggle tasks across clients in emails, Notion, and sticky notes with no single source of truth.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "SQLite", "Drag-and-Drop API"],
    thirtySecondPitch: "TaskPilot is a dead-simple kanban board built for freelancers — one board per client, shareable by link, no account required. {name}, as the {role}, you'll own the real-time drag-and-drop and link sharing. Freelance clarity, finally.",
    primaryTheme: "Future of Work",
    themes: ["Future of Work", "Open Innovation"],
    interests: ["Web Dev"],
  },
  {
    id: "work-4",
    title: "CloudDeploy101",
    problemStatement: "Junior developers want to deploy their first web app to the cloud but get lost in configuration and IAM policies.",
    suggestedRole: "DevOps Engineer",
    difficulty: "Intermediate",
    techStack: ["AWS S3", "AWS Lambda", "Terraform", "GitHub Actions"],
    thirtySecondPitch: "CloudDeploy101 is a guided wizard that walks a developer through deploying a static site to AWS S3 with a CDN in under 10 minutes. {name}, as the {role}, you'll build the step-by-step setup flow. Your first cloud deployment, no PhD required.",
    primaryTheme: "Future of Work",
    themes: ["Future of Work", "Open Innovation"],
    interests: ["Web Dev"],
    flags: ["cloud"],
  },

  // ── FinTech ────────────────────────────────────────────────────────────────
  {
    id: "fin-1",
    title: "SpendSnap",
    problemStatement: "Young adults overspend on subscriptions and impulse purchases they forget about within days.",
    suggestedRole: "Mobile Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Expo", "AsyncStorage"],
    thirtySecondPitch: "SpendSnap is a swipe-to-log expense tracker where every transaction takes under 3 seconds to record. {name}, as the {role}, you'll build the swipe UI and weekly budget summary. Spending awareness in your pocket.",
    primaryTheme: "FinTech",
    themes: ["FinTech", "Education & Learning"],
    interests: ["Finance", "Mobile Apps"],
  },
  {
    id: "fin-2",
    title: "SplitEasy",
    problemStatement: "Splitting shared expenses in group trips leads to awkward conversations and miscalculations.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Tailwind CSS", "Local Storage"],
    thirtySecondPitch: "SplitEasy calculates who owes what in a group trip with one shared link — no accounts, no app install. {name}, as the {role}, you'll build the expense entry and settlement calculator. The end of awkward money talks.",
    primaryTheme: "FinTech",
    themes: ["FinTech", "Social Good"],
    interests: ["Finance", "Web Dev"],
  },
  {
    id: "fin-3",
    title: "InvoiceKit",
    problemStatement: "Freelancers spend hours formatting invoices and chasing late payments with no tracking system.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "PDF.js", "SQLite"],
    thirtySecondPitch: "InvoiceKit generates professional PDF invoices from a simple form and tracks payment status with automated reminders. {name}, as the {role}, you'll own the PDF generation and reminder scheduler. Get paid faster, stress less.",
    primaryTheme: "FinTech",
    themes: ["FinTech", "Future of Work"],
    interests: ["Finance", "Web Dev"],
  },
  {
    id: "fin-4",
    title: "MicroSave",
    problemStatement: "Gig workers with irregular income find it impossible to save consistently using traditional methods.",
    suggestedRole: "Backend Developer",
    difficulty: "Intermediate",
    techStack: ["Node.js", "React", "PostgreSQL", "Stripe API"],
    thirtySecondPitch: "MicroSave rounds up every logged transaction to the nearest dollar and moves the difference to a savings pot automatically. {name}, as the {role}, you'll build the rounding engine and savings goal tracker. Saving money without thinking about it.",
    primaryTheme: "FinTech",
    themes: ["FinTech", "Social Good"],
    interests: ["Finance", "Web Dev"],
  },

  // ── Social Good ────────────────────────────────────────────────────────────
  {
    id: "soc-1",
    title: "VolunteerMatch",
    problemStatement: "Local charities struggle to find volunteers because discovery is scattered across different websites.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Beginner",
    techStack: ["React", "Node.js", "SQLite"],
    thirtySecondPitch: "VolunteerMatch is a single searchable map of local volunteering opportunities, filterable by cause and time commitment. {name}, as the {role}, you'll build the map view and organisation onboarding form. Making it easy to do good.",
    primaryTheme: "Social Good",
    themes: ["Social Good", "Smart Cities"],
    interests: ["Social Impact", "Web Dev"],
  },
  {
    id: "soc-2",
    title: "FoodBridge",
    problemStatement: "Restaurants and bakeries throw away surplus food every evening while food banks go undersupplied.",
    suggestedRole: "Mobile Developer",
    difficulty: "Intermediate",
    techStack: ["React Native", "Firebase", "Google Maps API"],
    thirtySecondPitch: "FoodBridge connects restaurants with surplus food to nearby food banks and shelters for same-day pick-up. {name}, as the {role}, you'll build the real-time surplus listing and notification system. Fewer skips, more meals.",
    primaryTheme: "Social Good",
    themes: ["Social Good", "Climate & Sustainability"],
    interests: ["Social Impact", "Mobile Apps", "Climate Tech"],
  },
  {
    id: "soc-3",
    title: "SafeWalk",
    problemStatement: "People walking home late at night feel unsafe with no quick way to share their live status.",
    suggestedRole: "Mobile Developer",
    difficulty: "Intermediate",
    techStack: ["Flutter", "Firebase", "Geolocation API"],
    thirtySecondPitch: "SafeWalk quietly shares your walking route with a trusted contact and sends an alert if you stop unexpectedly. {name}, as the {role}, you'll build the real-time location broadcast. Something that could genuinely save lives.",
    primaryTheme: "Social Good",
    themes: ["Social Good", "Health & Wellness", "Smart Cities"],
    interests: ["Mobile Apps", "Social Impact", "Health Tech"],
  },

  // ── Gaming & Entertainment ─────────────────────────────────────────────────
  {
    id: "game-1",
    title: "TriviaRace",
    problemStatement: "Party trivia nights are limited by whoever owns a board game — there's no quick digital alternative that works offline.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "WebSockets", "Tailwind CSS"],
    thirtySecondPitch: "TriviaRace is a local multiplayer trivia game where players join from their phones with a room code — no app download needed. {name}, as the {role}, you'll build the real-time buzzer and scoreboard. Game night in 30 seconds.",
    primaryTheme: "Gaming & Entertainment",
    themes: ["Gaming & Entertainment", "Social Good"],
    interests: ["Gaming", "Web Dev"],
  },
  {
    id: "game-2",
    title: "FocusQuest",
    problemStatement: "People with ADHD struggle to complete boring tasks because there's no reward system attached to them.",
    suggestedRole: "Game Designer / Developer",
    difficulty: "Beginner",
    techStack: ["React", "Framer Motion", "Local Storage"],
    thirtySecondPitch: "FocusQuest turns your to-do list into a retro RPG — completing tasks levels up your character and unlocks gear. {name}, as the {role}, you'll build the quest progression system. Productivity that finally works for neurodivergent brains.",
    primaryTheme: "Gaming & Entertainment",
    themes: ["Gaming & Entertainment", "Health & Wellness", "Future of Work"],
    interests: ["Gaming", "Health Tech", "Web Dev"],
  },
  {
    id: "game-3",
    title: "PixelJam",
    problemStatement: "Amateur musicians can't collaborate remotely because real-time jam tools require expensive software.",
    suggestedRole: "Audio Web Developer",
    difficulty: "Advanced",
    techStack: ["Web Audio API", "WebRTC", "React", "Node.js"],
    thirtySecondPitch: "PixelJam is a browser-based beat sequencer where multiple people can jam in sync, no DAW required. {name}, as the {role}, you'll sync the audio engine over WebRTC. Music collaboration for the rest of us.",
    primaryTheme: "Gaming & Entertainment",
    themes: ["Gaming & Entertainment", "Future of Work"],
    interests: ["Gaming", "Web Dev", "AR/VR"],
  },

  // ── Smart Cities ───────────────────────────────────────────────────────────
  {
    id: "city-1",
    title: "CityFix",
    problemStatement: "Potholes and broken streetlights go unreported because city portals are almost impossible to use.",
    suggestedRole: "Mobile Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Mapbox", "Firebase"],
    thirtySecondPitch: "CityFix lets residents report infrastructure issues with a photo and a tap — then tracks the fix status publicly. {name}, as the {role}, you'll build the camera-to-map reporting flow. Dragging city maintenance into the 21st century.",
    primaryTheme: "Smart Cities",
    themes: ["Smart Cities", "Social Good"],
    interests: ["Mobile Apps", "Social Impact", "Web Dev"],
  },
  {
    id: "city-2",
    title: "ParkFinder",
    problemStatement: "Drivers circle blocks for 10 minutes looking for parking, adding congestion and emissions.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "OpenStreetMap", "Sensor APIs"],
    thirtySecondPitch: "ParkFinder aggregates open parking data and sensor feeds to show real-time availability on a city map. {name}, as the {role}, you'll own the data pipeline and map UI. Less circling, less carbon.",
    primaryTheme: "Smart Cities",
    themes: ["Smart Cities", "Climate & Sustainability"],
    interests: ["Web Dev", "Climate Tech"],
  },
  {
    id: "city-3",
    title: "TransitAlert",
    problemStatement: "Commuters miss buses and trains because real-time delay information is buried in separate apps.",
    suggestedRole: "Backend Developer",
    difficulty: "Intermediate",
    techStack: ["Node.js", "React", "GTFS Real-time API", "Push Notifications"],
    thirtySecondPitch: "TransitAlert sends a push notification exactly when you need to leave to catch your usual bus — factoring in live delays. {name}, as the {role}, you'll build the GTFS integration and personalised alert engine. Never miss your bus again.",
    primaryTheme: "Smart Cities",
    themes: ["Smart Cities", "Social Good"],
    interests: ["Web Dev", "Mobile Apps"],
  },

  // ── Web3 ───────────────────────────────────────────────────────────────────
  {
    id: "web3-1",
    title: "TokenTix",
    problemStatement: "Event tickets are easily scalped and faked, ruining the experience for real fans.",
    suggestedRole: "Smart Contract Developer",
    difficulty: "Advanced",
    techStack: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
    thirtySecondPitch: "TokenTix issues event tickets as soulbound NFTs that cannot be resold above face value. {name}, as the {role}, you'll write the smart contracts and build the ticketing UI. Saving live music from bots.",
    primaryTheme: "Web3",
    themes: ["Web3", "Gaming & Entertainment"],
    interests: ["Blockchain", "Web Dev"],
  },
  {
    id: "web3-2",
    title: "MicroLend",
    problemStatement: "Small business owners in underbanked regions have no access to affordable credit.",
    suggestedRole: "Blockchain Developer",
    difficulty: "Intermediate",
    techStack: ["Solidity", "React", "Polygon", "Ethers.js"],
    thirtySecondPitch: "MicroLend is a decentralised micro-loan protocol with transparent interest rates and on-chain repayment history. {name}, as the {role}, you'll build the lending pool interface. Bypassing banks to help real entrepreneurs.",
    primaryTheme: "Web3",
    themes: ["Web3", "FinTech", "Social Good"],
    interests: ["Blockchain", "Finance", "Social Impact"],
  },
  {
    id: "web3-3",
    title: "CredChain",
    problemStatement: "Fake online course certificates are unverifiable, undermining the value of legitimate credentials.",
    suggestedRole: "Smart Contract Developer",
    difficulty: "Advanced",
    techStack: ["Solidity", "IPFS", "React", "Hardhat"],
    thirtySecondPitch: "CredChain issues tamper-proof course completion certificates as NFTs on-chain — verifiable by any employer in seconds. {name}, as the {role}, you'll design the credential schema and minting flow. The end of fake qualifications.",
    primaryTheme: "Web3",
    themes: ["Web3", "Education & Learning"],
    interests: ["Blockchain", "Education"],
  },

  // ── Open Innovation ────────────────────────────────────────────────────────
  {
    id: "open-1",
    title: "IdeaSpark",
    problemStatement: "Solo founders get stuck in analysis paralysis when brainstorming because there's no structured way to validate ideas quickly.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Local Storage", "Tailwind CSS"],
    thirtySecondPitch: "IdeaSpark walks you through a 5-minute idea validation checklist and scores your concept on feasibility, market, and differentiation. {name}, as the {role}, you'll build the scoring wizard and results summary. From shower thought to validated concept in minutes.",
    primaryTheme: "Open Innovation",
    themes: ["Open Innovation", "Future of Work"],
    interests: ["Web Dev"],
  },
  {
    id: "open-2",
    title: "APIPlayground",
    problemStatement: "Developers learning a new API waste hours reading docs before they can make their first working request.",
    suggestedRole: "Full Stack Developer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "Monaco Editor", "Axios"],
    thirtySecondPitch: "APIPlayground is a browser-based REST client with one-click sample requests and live response inspection — no setup required. {name}, as the {role}, you'll build the request builder and diff viewer. The fastest way from zero to first API call.",
    primaryTheme: "Open Innovation",
    themes: ["Open Innovation", "Education & Learning", "Future of Work"],
    interests: ["Web Dev"],
    flags: ["cloud"],
  },
  {
    id: "open-3",
    title: "CloudSnapshot",
    problemStatement: "Developers building on cloud platforms have no quick way to visualise their current infrastructure without clicking through 10 dashboards.",
    suggestedRole: "DevOps / Cloud Engineer",
    difficulty: "Advanced",
    techStack: ["AWS SDK", "React", "Node.js", "D3.js"],
    thirtySecondPitch: "CloudSnapshot pulls your AWS resource inventory and draws an interactive architecture diagram automatically. {name}, as the {role}, you'll call the AWS APIs and render the live graph. Because no one has time to draw architecture diagrams by hand.",
    primaryTheme: "Open Innovation",
    themes: ["Open Innovation", "Future of Work"],
    interests: ["Web Dev"],
    flags: ["cloud"],
  },
];

// ─── Scoring ─────────────────────────────────────────────────────────────────

function scoreProject(
  project: Recommendation,
  interests: string[],
  skillLevel: string,
  theme: string,
): number {
  let score = 0;

  // Theme matching — primary theme match is the dominant signal
  if (project.primaryTheme === theme) {
    score += 20;
  } else if (project.themes.includes(theme)) {
    score += 6;
  }

  // Difficulty matching
  if (project.difficulty === skillLevel) {
    score += 10;
  } else {
    const levels = ["Beginner", "Intermediate", "Advanced"];
    const dist = Math.abs(levels.indexOf(project.difficulty) - levels.indexOf(skillLevel));
    score += dist === 1 ? 3 : 0;
  }

  // Interest matching — count overlapping tags
  const tagMatches = project.interests.filter(tag => interests.includes(tag)).length;
  score += tagMatches * 4;

  // Keyword fuzzy match for free-text interests not in the preset list
  const customInterests = interests.filter(i =>
    !["AI/ML", "Web Dev", "Mobile Apps", "Gaming", "Climate Tech",
      "Health Tech", "Education", "Finance", "Social Impact",
      "AR/VR", "Blockchain", "Cybersecurity"].includes(i)
  );
  for (const custom of customInterests) {
    const lower = custom.toLowerCase();
    if (
      project.title.toLowerCase().includes(lower) ||
      project.problemStatement.toLowerCase().includes(lower) ||
      project.techStack.some(t => t.toLowerCase().includes(lower))
    ) {
      score += 3;
    }
  }

  // AI interest bonus — boosts AI-powered projects
  if (interests.includes("AI/ML") && project.flags?.includes("ai")) {
    score += 6;
  }

  // Cloud / AWS interest bonus — boosts cloud-oriented projects
  const cloudKeywords = ["cloud", "aws", "azure", "gcp", "devops", "infrastructure"];
  const hasCloudInterest = interests.some(i =>
    cloudKeywords.some(kw => i.toLowerCase().includes(kw))
  );
  if (hasCloudInterest && project.flags?.includes("cloud")) {
    score += 6;
  }

  // Stable tiebreaker so repeated identical inputs return the same order
  // (uses the project id as a deterministic salt)
  score += parseInt(project.id.replace(/\D/g, "").slice(0, 3) || "0", 10) * 0.001;

  return score;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function generateRecommendations(
  name: string,
  interests: string[],
  skillLevel: string,
  theme: string,
): Omit<Recommendation, "primaryTheme" | "themes" | "interests" | "flags">[] {
  const scored = PROJECT_POOL
    .map(p => ({ project: p, score: scoreProject(p, interests, skillLevel, theme) }))
    .sort((a, b) => b.score - a.score);

  const top3 = scored.slice(0, 3).map(s => s.project);
  const userName = name.trim() || "hacker";

  return top3.map(({ id, primaryTheme, themes, interests: _i, flags, ...rest }) => ({
    ...rest,
    thirtySecondPitch: rest.thirtySecondPitch
      .replace(/\{name\}/g, userName)
      .replace(/\{role\}/g, rest.suggestedRole),
  }));
}

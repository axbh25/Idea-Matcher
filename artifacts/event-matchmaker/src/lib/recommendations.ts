export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Recommendation = {
  id: string;
  title: string;
  problemStatement: string;
  suggestedRole: string;
  difficulty: Difficulty;
  techStack: string[];
  thirtySecondPitch: string;
  themes: string[];
  interests: string[];
};

export const MOCK_DATABASE: Recommendation[] = [
  {
    id: "1",
    title: "EcoTrack",
    problemStatement: "People want to reduce their carbon footprint but lack simple tools to measure their daily impact.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React", "Tailwind CSS", "Chart.js"],
    thirtySecondPitch: "EcoTrack is a visual habit-tracker for your carbon footprint. As the {role}, you'll build the dashboard where users can see their daily impact. It's rewarding and helps save the planet one tap at a time.",
    themes: ["Climate & Sustainability", "Social Good", "Smart Cities"],
    interests: ["Climate Tech", "Web Dev", "Social Impact"]
  },
  {
    id: "2",
    title: "MediMatch",
    problemStatement: "Patients struggle to find specialized doctors who accept their specific insurance in their local area.",
    suggestedRole: "Full Stack Engineer",
    difficulty: "Intermediate",
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    thirtySecondPitch: "MediMatch connects patients with local specialists seamlessly. Hey {name}, as the developer, you'll build the search experience and map integration. You're making healthcare access actually work for regular people.",
    themes: ["Health & Wellness", "Social Good"],
    interests: ["Health Tech", "Web Dev", "Social Impact"]
  },
  {
    id: "3",
    title: "LearnLoop",
    problemStatement: "Students lose focus during online lectures and miss key information.",
    suggestedRole: "AI Engineer",
    difficulty: "Advanced",
    techStack: ["Python", "OpenAI API", "React", "FastAPI"],
    thirtySecondPitch: "LearnLoop listens to lectures and generates real-time interactive flashcards. {name}, you'll be wiring up the AI transcription and summarization. It's a game-changer for remote education.",
    themes: ["Education & Learning", "Future of Work"],
    interests: ["AI/ML", "Education", "Web Dev"]
  },
  {
    id: "4",
    title: "BudgetBuddy",
    problemStatement: "College students find budgeting apps too complex and overwhelming.",
    suggestedRole: "Mobile Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Expo", "Firebase"],
    thirtySecondPitch: "BudgetBuddy is a swipe-based expense tracker that feels like a game. {name}, you'd be crafting the mobile UI to make saving money actually fun. Let's make finance less boring.",
    themes: ["FinTech", "Education & Learning"],
    interests: ["Mobile Apps", "Finance", "Gaming"]
  },
  {
    id: "5",
    title: "TokenTix",
    problemStatement: "Event tickets are easily scalped and faked, ruining the experience for real fans.",
    suggestedRole: "Smart Contract Dev",
    difficulty: "Advanced",
    techStack: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
    thirtySecondPitch: "TokenTix issues event tickets as soulbound NFTs. {name}, you'll write the smart contracts ensuring tickets can't be scalped. You're saving the live music industry from bots.",
    themes: ["Web3", "Gaming & Entertainment"],
    interests: ["Blockchain", "Web Dev"]
  },
  {
    id: "6",
    title: "SafeWalk",
    problemStatement: "People walking home late at night feel unsafe and want a passive way to share their status.",
    suggestedRole: "Mobile Developer",
    difficulty: "Intermediate",
    techStack: ["Flutter", "Firebase", "Geolocation API"],
    thirtySecondPitch: "SafeWalk is a passive companion app that alerts trusted friends if your walking route unexpectedly changes. {name}, you'll build the real-time location tracking. You're building something that actually saves lives.",
    themes: ["Smart Cities", "Health & Wellness", "Social Good"],
    interests: ["Mobile Apps", "Social Impact", "Health Tech"]
  },
  {
    id: "7",
    title: "PantryPal",
    problemStatement: "People waste food because they don't know what recipes to make with their expiring ingredients.",
    suggestedRole: "Backend Developer",
    difficulty: "Beginner",
    techStack: ["Node.js", "Express", "Spoonacular API"],
    thirtySecondPitch: "PantryPal takes your leftover ingredients and gives you chef-quality recipes. {name}, you'll be hitting the recipe APIs and sorting by expiration dates. We're fighting food waste with code.",
    themes: ["Climate & Sustainability", "Health & Wellness"],
    interests: ["Web Dev", "Climate Tech"]
  },
  {
    id: "8",
    title: "CodeCollab VR",
    problemStatement: "Remote pair programming lacks the physical presence and spontaneity of an office.",
    suggestedRole: "XR Developer",
    difficulty: "Advanced",
    techStack: ["Unity", "C#", "WebXR", "WebRTC"],
    thirtySecondPitch: "CodeCollab VR is a virtual room where developers can throw code blocks on whiteboards. {name}, you'll build the multiplayer networking. We are redefining how the future of work looks.",
    themes: ["Future of Work", "Open Innovation"],
    interests: ["AR/VR", "Web Dev", "Gaming"]
  },
  {
    id: "9",
    title: "PhishCatch",
    problemStatement: "Elderly users frequently fall for sophisticated phishing emails.",
    suggestedRole: "Security Engineer",
    difficulty: "Intermediate",
    techStack: ["Python", "TensorFlow", "Browser Extension API"],
    thirtySecondPitch: "PhishCatch is a browser extension that uses ML to flag suspicious emails before they are clicked. {name}, you'll build the local model inference. You're the digital bodyguard for vulnerable users.",
    themes: ["Social Good", "Open Innovation"],
    interests: ["Cybersecurity", "AI/ML", "Social Impact"]
  },
  {
    id: "10",
    title: "MicroLend",
    problemStatement: "Small business owners in developing nations lack access to traditional credit.",
    suggestedRole: "Blockchain Developer",
    difficulty: "Intermediate",
    techStack: ["Solidity", "React", "Polygon"],
    thirtySecondPitch: "MicroLend is a decentralized protocol for micro-loans with transparent interest. {name}, you'll build the lending pool interface. We're bypassing traditional banks to help real entrepreneurs.",
    themes: ["FinTech", "Web3", "Social Good"],
    interests: ["Blockchain", "Finance", "Social Impact"]
  },
  {
    id: "11",
    title: "FocusQuest",
    problemStatement: "People with ADHD struggle to complete boring administrative tasks.",
    suggestedRole: "Game Designer / Dev",
    difficulty: "Beginner",
    techStack: ["React", "Framer Motion", "Zustand"],
    thirtySecondPitch: "FocusQuest turns your boring to-do list into a retro RPG where completing tasks levels up your hero. {name}, you'll build the quest progression system. It's productivity that finally works for neurodivergent brains.",
    themes: ["Health & Wellness", "Gaming & Entertainment", "Future of Work"],
    interests: ["Gaming", "Health Tech", "Web Dev"]
  },
  {
    id: "12",
    title: "CityFix",
    problemStatement: "Potholes and broken streetlights go unreported because city portals are impossible to use.",
    suggestedRole: "Frontend Developer",
    difficulty: "Beginner",
    techStack: ["React Native", "Mapbox", "Firebase"],
    thirtySecondPitch: "CityFix lets you report infrastructure issues with a single photo and tap. {name}, you'll build the camera and map flow. We're dragging city maintenance into the 21st century.",
    themes: ["Smart Cities", "Social Good"],
    interests: ["Mobile Apps", "Social Impact", "Web Dev"]
  },
  {
    id: "13",
    title: "SignTranslate",
    problemStatement: "Communication barriers exist between sign language users and non-signers in retail settings.",
    suggestedRole: "AI Engineer",
    difficulty: "Advanced",
    techStack: ["Python", "OpenCV", "TensorFlow.js", "React"],
    thirtySecondPitch: "SignTranslate uses a device camera to translate basic sign language into text in real-time. {name}, you'll integrate the computer vision models. This is tech that breaks down real-world walls.",
    themes: ["Social Good", "Health & Wellness", "Smart Cities"],
    interests: ["AI/ML", "Health Tech", "Social Impact"]
  },
  {
    id: "14",
    title: "VoteClear",
    problemStatement: "Local election ballots are confusing, and voters don't understand what propositions actually do.",
    suggestedRole: "Full Stack Engineer",
    difficulty: "Intermediate",
    techStack: ["Next.js", "Tailwind", "OpenAI API"],
    thirtySecondPitch: "VoteClear summarizes dense legal ballot measures into plain, neutral English. {name}, you'll build the localized ballot generation. Let's make democracy accessible to everyone.",
    themes: ["Social Good", "Education & Learning"],
    interests: ["Web Dev", "Social Impact", "Education"]
  },
  {
    id: "15",
    title: "EnergyShift",
    problemStatement: "Homeowners don't know when grid energy is greenest, leading to high-carbon appliance usage.",
    suggestedRole: "Data Engineer",
    difficulty: "Intermediate",
    techStack: ["Python", "React", "WattTime API"],
    thirtySecondPitch: "EnergyShift alerts you when the local power grid is using renewables so you can run your laundry guilt-free. {name}, you'll ingest the grid data APIs. It's smart-home tech for the climate crisis.",
    themes: ["Climate & Sustainability", "Smart Cities"],
    interests: ["Climate Tech", "Web Dev", "Data Science"]
  }
];

export function generateRecommendations(
  name: string,
  interests: string[],
  skillLevel: string,
  theme: string
): Omit<Recommendation, 'themes' | 'interests'>[] {
  
  const scoreProject = (project: Recommendation) => {
    let score = 0;
    
    // Exact difficulty match = huge bonus
    if (project.difficulty.toLowerCase() === skillLevel.toLowerCase()) {
      score += 10;
    } else if (skillLevel === "Beginner" && project.difficulty === "Intermediate") {
      score += 2;
    } else if (skillLevel === "Advanced" && project.difficulty === "Intermediate") {
      score += 2;
    }

    // Theme match
    if (project.themes.includes(theme)) {
      score += 5;
    }

    // Interests match
    const interestMatches = project.interests.filter(i => interests.includes(i)).length;
    score += (interestMatches * 3);

    // Free text interests fuzzy matching (very basic)
    const customInterests = interests.filter(i => !project.interests.includes(i));
    for (const c of customInterests) {
      if (project.title.toLowerCase().includes(c.toLowerCase()) || project.problemStatement.toLowerCase().includes(c.toLowerCase())) {
        score += 2;
      }
    }

    // Random noise to prevent identical results for identical inputs
    score += Math.random() * 2;

    return score;
  };

  const sorted = [...MOCK_DATABASE].sort((a, b) => scoreProject(b) - scoreProject(a));
  const top3 = sorted.slice(0, 3);

  const userName = name.trim() || "hacker";

  // Personalize the pitch
  const personalized = top3.map(project => ({
    ...project,
    thirtySecondPitch: project.thirtySecondPitch.replace(/\{name\}/g, userName).replace(/\{role\}/g, project.suggestedRole)
  }));

  // Strip internal fields
  return personalized.map(({ id, themes, interests, ...rest }) => rest);
}
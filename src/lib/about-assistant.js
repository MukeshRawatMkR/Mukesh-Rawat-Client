const contactEmail = "swissmukeshrawat@gmail.com";
const contactHint = `For more details, contact Mukesh at ${contactEmail} or use the contact section.`;

const matchesAny = (text, phrases) => phrases.some((phrase) => text.includes(phrase));

export const getAboutAssistantReply = (question) => {
  const message = question
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s'-]/g, " ")
    .trim();

  if (!message) {
    return "Ask me about Mukesh’s skills, projects, education, location, or contact details.";
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(message)) {
    return "Hello! I can tell you about Mukesh’s background, skills, projects, and how to contact him.";
  }

  if (matchesAny(message, ["how many years", "years of experience", "work experience", "work history", "employer", "employment history", "where has he worked", "where does he work"])) {
    return `The portfolio doesn’t list professional work history or years of work experience, so I can’t confirm that. ${contactHint}`;
  }

  if (matchesAny(message, ["available", "availability", "salary", "rate", "resume", "cv"])) {
    return `That information isn’t listed on the portfolio. ${contactHint}`;
  }

  if (matchesAny(message, ["bachelor", "master", "education", "degree", "college", "university", "leetcode"])) {
    return "The portfolio lists a 3-year Bachelor of Computer Application program, a 2-year Master of Computer Application program, and 150+ LeetCode problems solved. It doesn’t list institution names or graduation dates.";
  }

  if (matchesAny(message, ["hangman", "hang man"])) {
    return "Mukesh’s HangMan Game is an interactive React game styled with Tailwind CSS. Its code is on GitHub: https://github.com/MukeshRawatMkR/Front-End-Using-React/tree/main/Project-Hangman";
  }

  if (matchesAny(message, ["recipe", "meal planning"])) {
    return "The Recipe Finder App is listed with React Native, Firebase, the Spoonacular API, and Expo. The portfolio describes ingredient-based search, nutrition information, and meal planning.";
  }

  if (matchesAny(message, ["portfolio website", "portfolio site", "this website", "this site"])) {
    return "This portfolio is built with React, Vite, and Tailwind CSS. Its source code is on GitHub: https://github.com/MukeshRawatMkR/Mukesh-Rawat-Client";
  }

  if (matchesAny(message, ["project", "built", "build", "apps", "application"])) {
    return "Featured work includes a React and Tailwind HangMan game, this React/Vite portfolio, and a Recipe Finder app listed with React Native and Firebase. Ask about any one of them for more detail.";
  }

  if (matchesAny(message, ["frontend", "front-end", "react", "javascript", "html", "css", "tailwind", "vite", "skill", "skills", "technology", "technologies", "tech stack", "specialize"])) {
    return "Mukesh focuses on full-stack web development. The portfolio lists React, JavaScript, HTML, CSS, Tailwind CSS, and Vite for frontend work, plus Node.js, Express, REST APIs, MySQL, and MongoDB.";
  }

  if (matchesAny(message, ["backend", "back-end", "node", "express", "api", "database", "mongodb", "mysql"])) {
    return "For backend work, the portfolio lists Node.js, Express.js, REST APIs, authentication, and middleware. Its database skills include MySQL, MongoDB, and database design.";
  }

  if (matchesAny(message, ["location", "where is", "where does", "based"])) {
    return "Mukesh is based in Kotdwara, Uttarakhand.";
  }

  if (matchesAny(message, ["contact", "email", "reach", "hire", "hiring", "collabor", "opportunit", "phone", "linkedin", "github"])) {
    return `You can reach Mukesh at ${contactEmail}, or use the contact form on this portfolio. GitHub: https://github.com/MukeshRawatMkR. LinkedIn: https://www.linkedin.com/in/mukesh-rawat-5375a8227/`;
  }

  if (matchesAny(message, ["who is mukesh", "about mukesh", "tell me about mukesh", "background", "what does he do", "occupation"])) {
    return "Mukesh Rawat is a full-stack developer based in Kotdwara, Uttarakhand. His portfolio highlights responsive web development, clean code, and user experience.";
  }

  return "I can answer questions about Mukesh’s skills, projects, education, location, and contact details. Try asking about one of those topics.";
};

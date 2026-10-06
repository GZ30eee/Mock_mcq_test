/* =========================================================
   Placement Mock Test — Logic
   ========================================================= */

const TOTAL_TIME_SECONDS = 60 * 60; // 60 minutes
const MAX_MARKS = 50;
const NEGATIVE_MARK = 0;            // no negative marking for Round 1
const STORAGE_KEY = "placement_mock_v1";

/* ---------------------------------------------------------
   FALLBACK QUESTIONS (used only if questions.txt fails to load)
   --------------------------------------------------------- */
const FALLBACK_QUESTIONS = [
  /* Section A — Quantitative Aptitude */
  { section: "A", topic: "Quantitative Aptitude", question: "A shopkeeper marks his goods 40% above the cost price and offers a discount of 25% on the marked price. What is his profit or loss percentage?", options: ["5% profit", "5% loss", "10% profit", "10% loss"], answer: 0, explanation: "CP=100, MP=140, SP=140×0.75=105 ⇒ profit = 5%." },
  { section: "A", topic: "Quantitative Aptitude", question: "The average age of 8 students is 15 years. If a teacher's age is included, the average becomes 18 years. What is the teacher's age?", options: ["40 years", "42 years", "45 years", "48 years"], answer: 1, explanation: "Sum of 8 = 120. New sum of 9 = 9×18 = 162. Teacher = 42." },
  { section: "A", topic: "Quantitative Aptitude", question: "If A can complete a work in 12 days and B can complete the same work in 18 days, how long will they take to complete the work together?", options: ["6 days", "7.2 days", "8 days", "9 days"], answer: 1, explanation: "Combined rate = 1/12 + 1/18 = 5/36 ⇒ time = 36/5 = 7.2 days." },
  { section: "A", topic: "Quantitative Aptitude", question: "A train running at a speed of 72 km/h crosses a platform 200 meters long in 20 seconds. What is the length of the train?", options: ["150 meters", "200 meters", "250 meters", "300 meters"], answer: 1, explanation: "Speed = 20 m/s. Distance = 400 m. Train = 400 − 200 = 200 m." },
  { section: "A", topic: "Quantitative Aptitude", question: "The ratio of the present ages of A and B is 3:5. After 6 years, the ratio becomes 2:3. What is the present age of B?", options: ["24 years", "28 years", "30 years", "35 years"], answer: 2, explanation: "3x+6 : 5x+6 = 2:3 ⇒ 9x+18 = 10x+12 ⇒ x=6 ⇒ B = 30." },
  { section: "A", topic: "Quantitative Aptitude", question: "What is the compound interest on ₹10,000 at 10% per annum for 2 years, compounded annually?", options: ["₹2,000", "₹2,100", "₹2,200", "₹2,500"], answer: 1, explanation: "A = 10000×(1.1)² = 12100 ⇒ CI = 2100." },
  { section: "A", topic: "Quantitative Aptitude", question: "A bag contains 4 red balls, 5 green balls, and 6 blue balls. If one ball is drawn at random, what is the probability that it is NOT blue?", options: ["2/5", "3/5", "4/15", "11/15"], answer: 1, explanation: "Non-blue = 9 out of 15 = 3/5." },
  { section: "A", topic: "Quantitative Aptitude", question: "In how many different ways can the letters of the word \"DATA\" be arranged?", options: ["12", "24", "6", "48"], answer: 0, explanation: "4!/2! = 12 (A is repeated twice)." },
  { section: "A", topic: "Quantitative Aptitude", question: "If 30% of a number is 120, what is 75% of that number?", options: ["250", "275", "300", "320"], answer: 2, explanation: "Number = 400 ⇒ 75% of 400 = 300." },
  { section: "A", topic: "Quantitative Aptitude", question: "The sum of three consecutive even numbers is 156. What is the largest of these numbers?", options: ["50", "52", "54", "56"], answer: 2, explanation: "Numbers 50, 52, 54 ⇒ largest 54." },

  /* Section B — Logical Reasoning */
  { section: "B", topic: "Logical Reasoning", question: "Find the next number in the series: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "46"], answer: 1, explanation: "Differences 4, 6, 8, 10, 12 ⇒ next = 42." },
  { section: "B", topic: "Logical Reasoning", question: "In a certain code language, \"FRIEND\" is written as \"GSJFOE\". How is \"CANDLE\" written?", options: ["DBOMFG", "DBOEMF", "DBPNFG", "DBOMFE"], answer: 0, explanation: "Each letter +1." },
  { section: "B", topic: "Logical Reasoning", question: "Pointing to a photograph, a man said, \"She is the daughter of my grandfather's only son.\" How is the girl related to the man?", options: ["Sister", "Cousin", "Aunt", "Niece"], answer: 0, explanation: "Grandfather's only son = the man's father ⇒ the girl is his sister." },
  { section: "B", topic: "Logical Reasoning", question: "A man walks 5 km North, turns right 3 km, turns right 5 km. How far from start?", options: ["3 km", "4 km", "5 km", "8 km"], answer: 0, explanation: "Net displacement = 3 km east." },
  { section: "B", topic: "Logical Reasoning", question: "Five friends—P, Q, R, S, T—sit in a row facing north. P is immediate right of Q. R is at one end. T not adjacent to Q. S between P and R. Who is at the extreme left?", options: ["P", "Q", "R", "T"], answer: 1, explanation: "Order: Q P S R (with T not adjacent to Q). Left end = Q." },
  { section: "B", topic: "Logical Reasoning", question: "All roses are flowers. Some flowers fade quickly. Conclusion I: Some roses fade quickly. Conclusion II: All flowers are roses.", options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"], answer: 3, explanation: "No definite conclusion follows." },
  { section: "B", topic: "Logical Reasoning", question: "Find the odd one out: 3, 5, 7, 12, 13, 17", options: ["5", "7", "12", "13"], answer: 2, explanation: "12 is not prime." },
  { section: "B", topic: "Logical Reasoning", question: "\"MOUSE\" → \"NPVTF\". What does \"TIGER\" become?", options: ["UJHFS", "UJHGS", "UJHFR", "UJIFS"], answer: 0, explanation: "Each letter +1." },
  { section: "B", topic: "Logical Reasoning", question: "A is B's brother. C is B's mother. D is C's father. How is A related to D?", options: ["Grandson", "Granddaughter", "Son", "Grandfather"], answer: 0, explanation: "D is A's grandfather; A is male ⇒ grandson." },
  { section: "B", topic: "Logical Reasoning", question: "Complete the pattern: AZ, BY, CX, DW, ?", options: ["EV", "EU", "FV", "EW"], answer: 0, explanation: "First letter moves forward, second backward." },

  /* Section C — Data Interpretation (represented inside SQL section as per paper) */
  { section: "C", topic: "Data Interpretation", question: "Total sales of Product A over 2022 (120), 2023 (150), 2024 (180), 2025 (200)?", options: ["₹550 L", "₹600 L", "₹650 L", "₹700 L"], answer: 2, explanation: "120+150+180+200 = 650." },
  { section: "C", topic: "Data Interpretation", question: "In which year was total sales of all products the highest?", options: ["2022", "2023", "2024", "2025"], answer: 3, explanation: "2025 total = 200+120+170+160 = 650." },
  { section: "C", topic: "Data Interpretation", question: "Percentage increase in Product D sales from 100 (2022) to 160 (2025)?", options: ["40%", "50%", "60%", "70%"], answer: 2, explanation: "Increase 60%." },
  { section: "C", topic: "Data Interpretation", question: "Average sales of Product B (80, 100, 90, 120) over four years?", options: ["₹95 L", "₹97.5 L", "₹100 L", "₹102.5 L"], answer: 1, explanation: "390/4 = 97.5." },
  { section: "C", topic: "Data Interpretation", question: "Ratio of Product A (150) to Product C (130) in 2023?", options: ["15:13", "13:15", "3:2", "2:3"], answer: 0, explanation: "150:130 = 15:13." },
  { section: "C", topic: "Data Interpretation", question: "Total students across BCA 400, BBA 300, B.Com 500, B.Sc 250, BA 350?", options: ["1600", "1700", "1800", "1900"], answer: 2, explanation: "Sum = 1800." },
  { section: "C", topic: "Data Interpretation", question: "Which course has the second-highest enrollment?", options: ["BCA", "B.Com", "BA", "BBA"], answer: 0, explanation: "B.Com 500 > BCA 400 > BA 350." },
  { section: "C", topic: "Data Interpretation", question: "What % of 1800 total students is B.Sc (250)?", options: ["12.5%", "13.9%", "15%", "16.7%"], answer: 1, explanation: "250/1800 ≈ 13.9%." },
  { section: "C", topic: "Data Interpretation", question: "Difference between B.Com (500) and BBA (300)?", options: ["100", "150", "200", "250"], answer: 2, explanation: "200." },
  { section: "C", topic: "Data Interpretation", question: "If BA (350) rises by 20%, new BA count?", options: ["400", "410", "420", "430"], answer: 2, explanation: "350×1.2 = 420." },

  /* Section D — SQL & Database */
  { section: "D", topic: "SQL & Database", question: "Which SQL clause filters rows after grouping?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], answer: 1, explanation: "HAVING filters groups produced by GROUP BY." },
  { section: "D", topic: "SQL & Database", question: "Output of SELECT department, AVG(salary) FROM employees GROUP BY department?", options: ["Average salary of all employees", "Average salary per department", "Total salary per department", "Department names only"], answer: 1, explanation: "Aggregate per group." },
  { section: "D", topic: "SQL & Database", question: "Which JOIN returns all rows from the left table plus matches from the right?", options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL JOIN"], answer: 2, explanation: "LEFT JOIN keeps all left-table rows." },
  { section: "D", topic: "SQL & Database", question: "Correct SQL execution order?", options: ["SELECT→FROM→WHERE→GROUP BY→HAVING→ORDER BY", "FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY", "FROM→SELECT→WHERE→GROUP BY→HAVING→ORDER BY", "WHERE→FROM→GROUP BY→HAVING→SELECT→ORDER BY"], answer: 1, explanation: "FROM first, ORDER BY last (SELECT runs after HAVING)." },
  { section: "D", topic: "SQL & Database", question: "Which function counts non-NULL values in a column?", options: ["COUNT(*)", "COUNT(col)", "SUM(col)", "TOTAL(col)"], answer: 1, explanation: "COUNT(col) ignores NULLs." },
  { section: "D", topic: "SQL & Database", question: "Output of SELECT DISTINCT department FROM employees;?", options: ["All rows", "Unique names only", "Count", "First only"], answer: 1, explanation: "DISTINCT removes duplicates." },
  { section: "D", topic: "SQL & Database", question: "Which key uniquely identifies each row?", options: ["Foreign Key", "Primary Key", "Composite Key", "Candidate Key"], answer: 1, explanation: "Primary key = unique row identifier." },
  { section: "D", topic: "SQL & Database", question: "What does CASE do in SQL?", options: ["Create table", "Delete rows", "Conditional logic", "Join tables"], answer: 2, explanation: "CASE implements IF-ELSE logic." },
  { section: "D", topic: "SQL & Database", question: "Which is TRUE about NULL?", options: ["NULL = NULL → TRUE", "NULL = 0", "NULL IS NULL → TRUE", "NULL can be compared with ="], answer: 2, explanation: "Use IS NULL / IS NOT NULL." },
  { section: "D", topic: "SQL & Database", question: "Purpose of ORDER BY?", options: ["Group rows", "Filter rows", "Sort result set", "Join tables"], answer: 2, explanation: "Sorts by ASC/DESC." },

  /* Section E — Excel / Power BI / Stats */
  { section: "E", topic: "Excel / Power BI / Stats", question: "Excel function that looks up a value in the first column and returns a value from another column?", options: ["HLOOKUP", "VLOOKUP", "LOOKUP", "INDEX"], answer: 1, explanation: "VLOOKUP — vertical lookup." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Output of =SUMIF(A1:A10, \">50\", B1:B10)?", options: ["Sum of B1:B10", "Sum of B1:B10 where A1:A10 > 50", "Count of A1:A10 > 50", "Average of B1:B10"], answer: 1, explanation: "SUMIF sums based on a condition." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Difference between a measure and a calculated column in Power BI?", options: ["Measures stored in table", "Measures calculated on the fly; calc. columns stored", "Same", "Measures can only use SUM"], answer: 1, explanation: "Measures evaluate at query time; calculated columns are stored." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Power Query operation to combine data from multiple tables?", options: ["Split Column", "Merge Queries", "Pivot Column", "Group By"], answer: 1, explanation: "Merge = JOIN." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "DAX stands for?", options: ["Data Analysis Expressions", "Data Analytics Extension", "Dynamic Analysis Expressions", "Data Aggregation XML"], answer: 0, explanation: "Data Analysis Expressions." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Which measure is most affected by outliers?", options: ["Median", "Mode", "Mean", "Range"], answer: 2, explanation: "Mean is sensitive to extremes." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Standard deviation of 0 indicates?", options: ["Highly spread", "Normal distribution", "All points identical", "Large range"], answer: 2, explanation: "Zero spread ⇒ identical values." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Correlation = −0.85 means?", options: ["Strong positive", "Weak positive", "Strong negative", "No correlation"], answer: 2, explanation: "Close to −1 ⇒ strong negative." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Output of =COUNTIF(A1:A10, \"Yes\")?", options: ["Sum", "Count of \"Yes\"", "Average", "Position"], answer: 1, explanation: "COUNTIF counts matches." },
  { section: "E", topic: "Excel / Power BI / Stats", question: "Which is NOT a measure of central tendency?", options: ["Mean", "Median", "Mode", "Standard Deviation"], answer: 3, explanation: "Std dev is a measure of spread." }
];

/* ---------------------------------------------------------
   State
   --------------------------------------------------------- */
const state = {
  questions: [],
  answers: [],
  visits: [],            // boolean per question
  current: 0,
  timeLeft: TOTAL_TIME_SECONDS,
  timerId: null,
  startedAt: null,
  startedAtISO: null,
  finished: false,
  reviewFilter: "all",
  candidate: {
    name: "",
    grid: "",
    batch: "",
    date: "",
    startTime: ""
  }
};

/* ---------------------------------------------------------
   DOM shortcuts
   --------------------------------------------------------- */
const $ = (id) => document.getElementById(id);
const screens = {
  candidate: $("screen-candidate"),
  instructions: $("screen-instructions"),
  quiz: $("screen-quiz"),
  result: $("screen-result")
};
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------------------------------------------------
   Load questions from questions.txt (fallback if fails)
   --------------------------------------------------------- */
async function loadQuestions() {
  try {
    const res = await fetch("questions.txt", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const text = await res.text();
    const cleaned = text
      .split("\n")
      .filter((ln) => !ln.trim().startsWith("//"))
      .join("\n");
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed) || parsed.length === 0) throw new Error("Empty");
    return parsed;
  } catch (err) {
    console.warn("Using fallback questions:", err);
    return FALLBACK_QUESTIONS;
  }
}

/* ---------------------------------------------------------
   Shuffle helpers (randomization)
   --------------------------------------------------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledQuestions(raw) {
  // Randomize question order AND option order
  const qs = shuffle(raw).map((q) => {
    const pairs = q.options.map((opt, i) => ({ opt, i }));
    const shuffled = shuffle(pairs);
    const newOptions = shuffled.map((p) => p.opt);
    const newAnswer = shuffled.findIndex((p) => p.i === q.answer);
    return { ...q, options: newOptions, answer: newAnswer };
  });
  return qs;
}

/* ---------------------------------------------------------
   Candidate details
   --------------------------------------------------------- */
function initCandidateForm() {
  const now = new Date();
  $("cand-date").value = now.toLocaleDateString();
  $("cand-start").value = now.toLocaleTimeString();

  $("candidate-form").addEventListener("submit", (e) => {
    e.preventDefault();
    state.candidate.name = $("cand-name").value.trim();
    state.candidate.grid = $("cand-grid").value.trim();
    state.candidate.batch = $("cand-batch").value.trim();
    state.candidate.date = $("cand-date").value;
    state.candidate.startTime = $("cand-start").value;

    $("instr-candidate").textContent =
      `${state.candidate.name} · ${state.candidate.grid} · ${state.candidate.batch}`;
    showScreen("instructions");
  });

  $("btn-back-details").addEventListener("click", () => showScreen("candidate"));
}

/* ---------------------------------------------------------
   Start test
   --------------------------------------------------------- */
async function startTest() {
  const raw = await loadQuestions();
  state.questions = buildShuffledQuestions(raw);
  state.answers = new Array(state.questions.length).fill(null);
  state.visits = new Array(state.questions.length).fill(false);
  state.current = 0;
  state.timeLeft = TOTAL_TIME_SECONDS;
  state.finished = false;
  state.startedAt = Date.now();
  state.startedAtISO = new Date().toISOString();

  $("cand-mini").textContent =
    `${state.candidate.name} · ${state.candidate.grid} · ${state.candidate.batch}`;

  buildPalette();
  markVisited(0);
  renderQuestion();
  updateProgress();
  startTimer();
  saveState();
  showScreen("quiz");
}

/* ---------------------------------------------------------
   Timer
   --------------------------------------------------------- */
function startTimer() {
  updateTimerLabel();
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimerLabel();
    showTimerWarnings();
    saveState();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerLabel() {
  const t = Math.max(0, state.timeLeft);
  const m = String(Math.floor(t / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  const el = $("timer");
  el.textContent = `${m}:${s}`;
  el.classList.toggle("warning", t <= 600);
}

function showTimerWarnings() {
  const bar = $("warn-bar");
  const t = state.timeLeft;
  if (t === 600) {
    bar.textContent = "10 minutes remaining. Please start reviewing your answers.";
    bar.classList.add("show");
  } else if (t === 300) {
    bar.textContent = "5 minutes remaining. Kindly prepare to submit.";
    bar.classList.add("show");
  } else if (t === 60) {
    bar.textContent = "1 minute remaining. The test will submit automatically.";
    bar.classList.add("show");
  } else if (t > 600) {
    bar.classList.remove("show");
  }
}

/* ---------------------------------------------------------
   Question rendering
   --------------------------------------------------------- */
function renderQuestion() {
  const idx = state.current;
  const q = state.questions[idx];
  const total = state.questions.length;

  $("q-number").textContent = `Question ${idx + 1} of ${total}`;
  $("q-section").textContent = `Section ${q.section || "-"} — ${q.topic || ""}`;
  $("q-text").textContent = q.question;

  const wrap = $("q-options");
  wrap.innerHTML = "";
  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option" + (state.answers[idx] === i ? " selected" : "");
    div.innerHTML = `
      <div class="marker">${String.fromCharCode(65 + i)}</div>
      <div class="opt-text">${escapeHTML(opt)}</div>
    `;
    div.addEventListener("click", () => selectOption(i));
    wrap.appendChild(div);
  });

  $("btn-prev").disabled = idx === 0;
  $("btn-next").disabled = idx === total - 1;

  markVisited(idx);
  refreshPalette();
}

function selectOption(i) {
  state.answers[state.current] = i;
  const opts = $("q-options").querySelectorAll(".option");
  opts.forEach((el, k) => el.classList.toggle("selected", k === i));
  updateProgress();
  refreshPalette();
  saveState();
}

function clearAnswer() {
  state.answers[state.current] = null;
  const opts = $("q-options").querySelectorAll(".option");
  opts.forEach((el) => el.classList.remove("selected"));
  updateProgress();
  refreshPalette();
  saveState();
}

function markVisited(i) {
  if (!state.visits[i]) state.visits[i] = true;
}

/* ---------------------------------------------------------
   Palette
   --------------------------------------------------------- */
function buildPalette() {
  const pal = $("palette");
  pal.innerHTML = "";
  state.questions.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "pal-btn not-visited";
    b.textContent = i + 1;
    b.addEventListener("click", () => {
      state.current = i;
      renderQuestion();
    });
    pal.appendChild(b);
  });
}

function refreshPalette() {
  const buttons = $("palette").querySelectorAll(".pal-btn");
  buttons.forEach((b, i) => {
    b.classList.remove("visited-answered", "visited-unanswered", "not-visited", "current");
    if (i === state.current) b.classList.add("current");
    if (!state.visits[i]) {
      b.classList.add("not-visited");
    } else if (state.answers[i] !== null) {
      b.classList.add("visited-answered");
    } else {
      b.classList.add("visited-unanswered");
    }
  });

  const attempted = state.answers.filter((a) => a !== null).length;
  const total = state.questions.length;
  const ready = attempted === total;

  const note = $("palette-note");
  note.classList.toggle("ready", ready);
  note.textContent = ready
    ? "All questions attempted. You may submit now."
    : `All questions must be attempted before submitting. (${attempted} / ${total})`;

  $("btn-submit").disabled = !ready;
}

function updateProgress() {
  const attempted = state.answers.filter((a) => a !== null).length;
  $("progress-text").textContent = `${attempted} / ${state.questions.length} attempted`;
}

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
function goPrev() {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
    saveState();
  }
}
function goNext() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
    saveState();
  }
}

/* ---------------------------------------------------------
   Auto-save (localStorage)
   --------------------------------------------------------- */
function saveState() {
  if (state.finished) return;
  const snapshot = {
    candidate: state.candidate,
    questions: state.questions,
    answers: state.answers,
    visits: state.visits,
    current: state.current,
    timeLeft: state.timeLeft,
    startedAt: state.startedAt,
    startedAtISO: state.startedAtISO
  };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot)); } catch (_) {}
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);
    if (!s.questions || !s.questions.length) return false;
    Object.assign(state, {
      candidate: s.candidate || state.candidate,
      questions: s.questions,
      answers: s.answers || new Array(s.questions.length).fill(null),
      visits: s.visits || new Array(s.questions.length).fill(false),
      current: s.current || 0,
      timeLeft: typeof s.timeLeft === "number" ? s.timeLeft : TOTAL_TIME_SECONDS,
      startedAt: s.startedAt || Date.now(),
      startedAtISO: s.startedAtISO || new Date().toISOString()
    });
    return true;
  } catch (_) { return false; }
}

function clearSavedState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
}

/* ---------------------------------------------------------
   Submit
   --------------------------------------------------------- */
function askSubmit() {
  const attempted = state.answers.filter((a) => a !== null).length;
  const total = state.questions.length;
  const unanswered = total - attempted;
  if (unanswered > 0) {
    showModal(
      "Cannot Submit Yet",
      `You have attempted ${attempted} out of ${total} questions.\n${unanswered} question(s) are unanswered. All questions must be attempted before submitting.`,
      null
    );
    return;
  }
  showModal(
    "Confirm Submission",
    `You have attempted all ${total} questions.\nAre you sure you want to submit? Answers cannot be changed after submission.`,
    doSubmit
  );
}

function doSubmit() {
  if (state.finished) return;
  state.finished = true;
  if (state.timerId) clearInterval(state.timerId);
  clearSavedState();
  computeAndShowResult();
}

function autoSubmit() {
  if (state.finished) return;
  state.finished = true;
  if (state.timerId) clearInterval(state.timerId);
  clearSavedState();
  computeAndShowResult(true);
}

/* ---------------------------------------------------------
   Compute and show result
   --------------------------------------------------------- */
function computeAndShowResult(isAuto) {
  const total = state.questions.length;

  let correct = 0, wrong = 0, unattempted = 0, attempted = 0;
  const sectionAgg = {};

  state.questions.forEach((q, i) => {
    const sec = q.section || "-";
    if (!sectionAgg[sec]) sectionAgg[sec] = { topic: q.topic, total: 0, correct: 0 };
    sectionAgg[sec].total++;

    const user = state.answers[i];
    if (user === null) { unattempted++; return; }
    attempted++;
    if (user === q.answer) { correct++; sectionAgg[sec].correct++; }
    else { wrong++; }
  });

  const marks = +(correct - wrong * NEGATIVE_MARK).toFixed(2);
  const pct = Math.round((marks / MAX_MARKS) * 100);
  const timeUsed = TOTAL_TIME_SECONDS - Math.max(0, state.timeLeft);

  $("res-candidate-line").textContent =
    `${state.candidate.name} · ${state.candidate.grid} · ${state.candidate.batch} · ${state.candidate.date} ${state.candidate.startTime}`;

  $("res-score").textContent = marks;
  $("res-pct").textContent = `${pct}%`;
  $("res-correct").textContent = correct;
  $("res-wrong").textContent = wrong;
  $("res-unatt").textContent = unattempted;
  $("res-attempted").textContent = `${attempted} / ${total}`;
  $("res-time").textContent = formatDuration(timeUsed);
  $("res-level").textContent = levelFromMarks(marks);
  $("res-status").textContent = isAuto ? "Auto-submitted (time up)" : "Submitted";

  // Topic-wise
  const body = $("perf-body");
  body.innerHTML = "";
  Object.keys(sectionAgg).sort().forEach((sec) => {
    const s = sectionAgg[sec];
    const acc = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${sec}</td>
      <td>${escapeHTML(s.topic || "")}</td>
      <td class="num">${s.correct}</td>
      <td class="num">${s.total}</td>
      <td class="num">${acc}%</td>
    `;
    body.appendChild(tr);
  });

  renderReview();
  showScreen("result");
}

function levelFromMarks(m) {
  if (m >= 40) return "Excellent — Placement Ready";
  if (m >= 35) return "Very Good";
  if (m >= 30) return "Good";
  if (m >= 25) return "Needs Improvement";
  if (m >= 20) return "Weak";
  return "Requires Significant Preparation";
}

function formatDuration(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/* ---------------------------------------------------------
   Review list
   --------------------------------------------------------- */
function renderReview() {
  const wrap = $("review");
  wrap.innerHTML = "";

  state.questions.forEach((q, i) => {
    const user = state.answers[i];
    const isCorrect = user === q.answer;
    const isUnattempted = user === null;

    const item = document.createElement("div");
    let cls = "review-item ";
    cls += isUnattempted ? "unattempted" : (isCorrect ? "correct" : "wrong");
    item.className = cls;
    item.dataset.state = isUnattempted ? "unattempted" : (isCorrect ? "correct" : "wrong");

    let head = `
      <div class="review-head">
        <span>Q${i + 1} · Section ${q.section || "-"} · ${escapeHTML(q.topic || "")}</span>
        <span>${isUnattempted ? "Unattempted" : (isCorrect ? "Correct" : "Incorrect")}</span>
      </div>
      <div class="review-q">${escapeHTML(q.question)}</div>
    `;

    if (isCorrect) {
      head += `<div class="review-line correct"><strong>Your answer:</strong> ${escapeHTML(q.options[user])}</div>`;
    } else if (isUnattempted) {
      head += `<div class="review-line neutral"><strong>Your answer:</strong> Not attempted</div>`;
      head += `<div class="review-line correct"><strong>Correct answer:</strong> ${escapeHTML(q.options[q.answer])}</div>`;
    } else {
      head += `<div class="review-line wrong"><strong>Your answer:</strong> ${escapeHTML(q.options[user])}</div>`;
      head += `<div class="review-line correct"><strong>Correct answer:</strong> ${escapeHTML(q.options[q.answer])}</div>`;
    }

    if (q.explanation) {
      head += `<div class="review-exp"><strong>Explanation:</strong> ${escapeHTML(q.explanation)}</div>`;
    }

    item.innerHTML = head;
    wrap.appendChild(item);
  });

  applyReviewFilter(state.reviewFilter);
}

function applyReviewFilter(filter) {
  state.reviewFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.filter === filter)
  );
  document.querySelectorAll(".review-item").forEach((el) => {
    if (filter === "all") el.style.display = "";
    else if (filter === "wrong") el.style.display = el.dataset.state === "wrong" ? "" : "none";
    else if (filter === "correct") el.style.display = el.dataset.state === "correct" ? "" : "none";
    else if (filter === "unattempted") el.style.display = el.dataset.state === "unattempted" ? "" : "none";
  });
}

/* ---------------------------------------------------------
   Modal
   --------------------------------------------------------- */
let modalCallback = null;
function showModal(title, body, onConfirm) {
  $("modal-title").textContent = title;
  $("modal-body").textContent = body;
  $("modal").classList.remove("hidden");
  modalCallback = onConfirm;
}
function hideModal() {
  $("modal").classList.add("hidden");
  modalCallback = null;
}

/* ---------------------------------------------------------
   Export: Print / CSV / Copy
   --------------------------------------------------------- */
function exportPrint() { window.print(); }

function exportCSV() {
  const lines = [];
  lines.push("Candidate," + csv(state.candidate.name));
  lines.push("GRID," + csv(state.candidate.grid));
  lines.push("Batch," + csv(state.candidate.batch));
  lines.push("Date," + csv(state.candidate.date));
  lines.push("StartTime," + csv(state.candidate.startTime));
  lines.push("");

  let correct = 0, wrong = 0, unatt = 0, attempted = 0;
  state.questions.forEach((q, i) => {
    const u = state.answers[i];
    if (u === null) { unatt++; return; }
    attempted++;
    if (u === q.answer) correct++; else wrong++;
  });
  const marks = +(correct - wrong * NEGATIVE_MARK).toFixed(2);
  const pct = Math.round((marks / MAX_MARKS) * 100);
  const timeUsed = TOTAL_TIME_SECONDS - Math.max(0, state.timeLeft);

  lines.push("Score," + marks + " / " + MAX_MARKS);
  lines.push("Percentage," + pct + "%");
  lines.push("Correct," + correct);
  lines.push("Incorrect," + wrong);
  lines.push("Unattempted," + unatt);
  lines.push("Attempted," + attempted + " / " + state.questions.length);
  lines.push("TimeTaken," + formatDuration(timeUsed));
  lines.push("");

  lines.push("Q#,Section,Topic,Question,YourAnswer,CorrectAnswer,Result,Explanation");
  state.questions.forEach((q, i) => {
    const u = state.answers[i];
    const your = u === null ? "Not Attempted" : q.options[u];
    const corr = q.options[q.answer];
    const result = u === null ? "Unattempted" : (u === q.answer ? "Correct" : "Incorrect");
    lines.push([
      i + 1,
      csv(q.section || ""),
      csv(q.topic || ""),
      csv(q.question),
      csv(your),
      csv(corr),
      csv(result),
      csv(q.explanation || "")
    ].join(","));
  });

  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `placement_mock_${sanitizeFilename(state.candidate.grid || "candidate")}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csv(s) {
  const v = String(s == null ? "" : s);
  return '"' + v.replace(/"/g, '""') + '"';
}
function sanitizeFilename(s) {
  return String(s).replace(/[^a-z0-9_\-]+/gi, "_");
}

function copyResult() {
  let correct = 0, wrong = 0, unatt = 0;
  state.questions.forEach((q, i) => {
    const u = state.answers[i];
    if (u === null) unatt++;
    else if (u === q.answer) correct++;
    else wrong++;
  });
  const marks = +(correct - wrong * NEGATIVE_MARK).toFixed(2);
  const pct = Math.round((marks / MAX_MARKS) * 100);
  const timeUsed = TOTAL_TIME_SECONDS - Math.max(0, state.timeLeft);

  const txt =
`Candidate:  ${state.candidate.name}
GRID:       ${state.candidate.grid}
Batch:      ${state.candidate.batch}
Date:       ${state.candidate.date} ${state.candidate.startTime}

Score:      ${marks} / ${MAX_MARKS}
Percentage: ${pct}%
Time Taken: ${formatDuration(timeUsed)}

Correct:     ${correct}
Incorrect:   ${wrong}
Unattempted: ${unatt}
Status:      ${levelFromMarks(marks)}`;

  navigator.clipboard.writeText(txt).then(() => {
    showModal("Copied", "The result summary has been copied to your clipboard.", null);
  }).catch(() => {
    showModal("Copy Failed", "Your browser blocked clipboard access. Please use Print or CSV.", null);
  });
}

/* ---------------------------------------------------------
   Utilities
   --------------------------------------------------------- */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------------------------------------------------------
   Event bindings
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initCandidateForm();

  $("btn-start-test").addEventListener("click", startTest);
  $("btn-prev").addEventListener("click", goPrev);
  $("btn-next").addEventListener("click", goNext);
  $("btn-clear").addEventListener("click", clearAnswer);
  $("btn-submit").addEventListener("click", askSubmit);

  $("modal-cancel").addEventListener("click", hideModal);
  $("modal-confirm").addEventListener("click", () => {
    const cb = modalCallback;
    hideModal();
    if (typeof cb === "function") cb();
  });

  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.addEventListener("click", () => applyReviewFilter(b.dataset.filter));
  });

  $("btn-print").addEventListener("click", exportPrint);
  $("btn-csv").addEventListener("click", exportCSV);
  $("btn-copy").addEventListener("click", copyResult);

  $("btn-restart").addEventListener("click", () => {
    if (state.timerId) clearInterval(state.timerId);
    clearSavedState();
    // reset everything
    state.questions = [];
    state.answers = [];
    state.visits = [];
    state.current = 0;
    state.timeLeft = TOTAL_TIME_SECONDS;
    state.finished = false;
    state.candidate = { name: "", grid: "", batch: "", date: "", startTime: "" };
    // reset candidate form
    $("candidate-form").reset();
    initCandidateForm();
    showScreen("candidate");
  });

  // Keyboard navigation (only while in quiz)
  document.addEventListener("keydown", (e) => {
    if (!screens.quiz.classList.contains("active")) return;
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
    if (/^[1-4]$/.test(e.key)) {
      const i = parseInt(e.key, 10) - 1;
      const opts = $("q-options").querySelectorAll(".option");
      if (opts[i]) selectOption(i);
    }
  });

  // Warn on accidental close / refresh during active attempt
  window.addEventListener("beforeunload", (e) => {
    if (screens.quiz.classList.contains("active") && !state.finished && state.questions.length) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // Offer to resume a saved attempt
  if (loadSavedState()) {
    const msg = `An unfinished attempt was found for ${state.candidate.name || "a candidate"}. Resume?`;
    const resume = window.confirm(msg);
    if (resume) {
      $("cand-mini").textContent =
        `${state.candidate.name} · ${state.candidate.grid} · ${state.candidate.batch}`;
      buildPalette();
      renderQuestion();
      updateProgress();
      updateTimerLabel();
      startTimer();
      showScreen("quiz");
    } else {
      clearSavedState();
    }
  }
});
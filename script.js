/* =========================================================
   Placement Mock Test — Python Edition
   ========================================================= */

const TOTAL_TIME_SECONDS = 80 * 60; // 80 minutes
const MAX_MARKS = 80;
const NEGATIVE_MARK = 0;
const STORAGE_KEY = "placement_mock_python_v1";

/* ---------------------------------------------------------
   FALLBACK QUESTIONS (used only if questions.txt fails)
   --------------------------------------------------------- */
const FALLBACK_QUESTIONS = [
  // ================= SECTION A: Python Basics (20) =================
  { section: "A", topic: "Python Basics", question: "Python is best described as:", options: ["A type of computer hardware", "A programming language that acts as a translator between humans and computers", "A machine code language using only 0s and 1s", "A web browser"], answer: 1, explanation: "Python is a high-level programming language that translates human-readable instructions into machine code." },
  { section: "A", topic: "Python Basics", question: "Python was named after:", options: ["A snake species", "The creator's pet", "A British comedy show called 'Monty Python's Flying Circus'", "A Greek mythology character"], answer: 2, explanation: "Guido van Rossum named Python after Monty Python's Flying Circus." },
  { section: "A", topic: "Python Basics", question: "Who created Python?", options: ["Bill Gates", "Mark Zuckerberg", "Guido van Rossum", "Elon Musk"], answer: 2, explanation: "Guido van Rossum created Python." },
  { section: "A", topic: "Python Basics", question: "Which of the following companies uses Python?", options: ["Instagram", "YouTube", "NASA", "All of the above"], answer: 3, explanation: "Instagram, YouTube, and NASA all use Python." },
  { section: "A", topic: "Python Basics", question: "In the interactive shell, what symbol indicates 'Python is ready, talk to me!'?", options: ["<<<", ">>>", "###", "***"], answer: 1, explanation: "The >>> prompt indicates Python is ready for input." },
  { section: "A", topic: "Python Basics", question: "What is the correct way to display 'Hello, World!' in Python?", options: ["echo('Hello, World!')", "print('Hello, World!')", "display('Hello, World!')", "output('Hello, World!')"], answer: 1, explanation: "The print() function displays output." },
  { section: "A", topic: "Python Basics", question: "What does the input() function always return?", options: ["An integer", "A float", "A string", "A boolean"], answer: 2, explanation: "input() always returns a string." },
  { section: "A", topic: "Python Basics", question: "What will be the output of this code? age = input('Enter your age: '); print(type(age))", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 2, explanation: "input() returns a string, so type is str." },
  { section: "A", topic: "Python Basics", question: "What error occurs when you run this code? age = input('Enter your age: '); print(age + 5)", options: ["SyntaxError", "TypeError", "ValueError", "NameError"], answer: 1, explanation: "Cannot add string and integer; raises TypeError." },
  { section: "A", topic: "Python Basics", question: "Which of the following is the correct way to convert user input to an integer?", options: ["age = input(int('Enter age: '))", "age = int(input('Enter age: '))", "age = input('Enter age: ').int()", "age = integer(input('Enter age: '))"], answer: 1, explanation: "int(input(...)) converts the string to an integer." },
  { section: "A", topic: "Python Basics", question: "What does print('apple', 'banana', 'cherry', sep=', ') output?", options: ["apple banana cherry", "apple,banana,cherry", "apple, banana, cherry", "apple; banana; cherry"], answer: 2, explanation: "sep=', ' inserts a comma and space between items." },
  { section: "A", topic: "Python Basics", question: "What is the default ending character of the print() function?", options: ["Space", "Tab", "Newline (\\n)", "Nothing"], answer: 2, explanation: "print() ends with a newline by default." },
  { section: "A", topic: "Python Basics", question: "What will this code output? print('Hello', end=' '); print('World')", options: ["Hello\\nWorld", "Hello World", "HelloWorld", "Hello\\nWorld"], answer: 1, explanation: "end=' ' replaces newline with space, so output is 'Hello World'." },
  { section: "A", topic: "Python Basics", question: "Which of the following is a single-line comment in Python?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"], answer: 2, explanation: "Comments start with #." },
  { section: "A", topic: "Python Basics", question: "What causes a SyntaxError in the following code? print('Let's learn together!')", options: ["Missing parentheses", "The apostrophe in 'Let's' ends the string early", "The word 'print' is misspelled", "Missing quotation marks"], answer: 1, explanation: "Apostrophe conflicts with single quotes; use double quotes or escape." },
  { section: "A", topic: "Python Basics", question: "Which mode of running Python is described as 'like writing a letter'?", options: ["Interactive Mode", "Script Mode", "Calculator Mode", "Terminal Mode"], answer: 1, explanation: "Script mode is for writing complete programs, like a letter." },
  { section: "A", topic: "Python Basics", question: "What is the correct way to write a multi-line comment in Python?", options: ["/* comment */", "<!-- comment -->", "\"\"\" comment \"\"\"", "-- comment --"], answer: 2, explanation: "Triple quotes can be used for multi-line comments." },
  { section: "A", topic: "Python Basics", question: "What does print() do with comma-separated values?", options: ["Joins them without spaces", "Automatically adds a space between them", "Adds a newline between them", "Causes an error"], answer: 1, explanation: "print() adds a space by default between arguments." },
  { section: "A", topic: "Python Basics", question: "According to best practices, comments should explain:", options: ["What the code does", "Why the code does something", "How long the code took to write", "Who wrote the code"], answer: 1, explanation: "Comments should explain why, not what." },
  { section: "A", topic: "Python Basics", question: "What will this code output? name = 'Rahul'; age = 25; print('My name is', name, 'and I am', age, 'years old.')", options: ["My name is Rahul and I am 25 years old.", "My name isRahuland I am25years old.", "My name is Rahul, and I am 25, years old.", "Error"], answer: 0, explanation: "print() adds spaces between arguments." },

  // ================= SECTION B: Variables (20) =================
  { section: "B", topic: "Variables", question: "In Python, a variable is best described as:", options: ["A labeled box that permanently stores one type", "A name that refers to a value/object", "A machine code instruction", "A Python keyword"], answer: 1, explanation: "Variables are names that refer to objects." },
  { section: "B", topic: "Variables", question: "Which symbol is used for assignment?", options: ["==", "=", "=>", ":="], answer: 1, explanation: "= is the assignment operator." },
  { section: "B", topic: "Variables", question: "What does == mean in Python?", options: ["Assignment", "Comparison", "Comment", "Concatenation"], answer: 1, explanation: "== compares two values for equality." },
  { section: "B", topic: "Variables", question: "What will be the output? score = 10; score = score + 5; print(score)", options: ["10", "15", "5", "Error"], answer: 1, explanation: "score becomes 15." },
  { section: "B", topic: "Variables", question: "score += 5 is the same as:", options: ["score = 5", "score = score + 5", "score == score + 5", "score =+ 5"], answer: 1, explanation: "+= adds and assigns." },
  { section: "B", topic: "Variables", question: "'Python is dynamically typed' means:", options: ["Variable names cannot change", "A variable can refer to different types over time", "You must declare the type before using a variable", "Variables are constants"], answer: 1, explanation: "Dynamic typing allows type changes." },
  { section: "B", topic: "Variables", question: "What will be printed? x = 10; x = 'hello'; print(type(x))", options: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "Error"], answer: 1, explanation: "x is now a string." },
  { section: "B", topic: "Variables", question: "Which set contains only valid variable names?", options: ["age, Age, AGE", "2age, age2, _age", "student name, student_name, student-name", "if, else, for"], answer: 0, explanation: "age, Age, AGE are all valid." },
  { section: "B", topic: "Variables", question: "Which of the following is an invalid variable name?", options: ["_private", "student_name", "2age", "age2"], answer: 2, explanation: "Variable names cannot start with a digit." },
  { section: "B", topic: "Variables", question: "Variable names in Python are:", options: ["Case-insensitive", "Case-sensitive", "Always lowercase", "Not allowed to contain underscores"], answer: 1, explanation: "Python variable names are case-sensitive." },
  { section: "B", topic: "Variables", question: "What will be the output? a = [1, 2, 3]; b = a; b.append(4); print(a)", options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"], answer: 1, explanation: "b refers to the same list as a, so append affects a." },
  { section: "B", topic: "Variables", question: "What does a, b = b, a do?", options: ["Swaps the values of a and b", "Creates a syntax error", "Makes both variables equal", "Deletes both variables"], answer: 0, explanation: "This is a tuple swap." },
  { section: "B", topic: "Variables", question: "Which naming style is standard for normal Python variables?", options: ["camelCase", "snake_case", "PascalCase", "kebab-case"], answer: 1, explanation: "snake_case is the standard." },
  { section: "B", topic: "Variables", question: "Uppercase names like MAX_USERS in Python are:", options: ["True constants enforced by Python", "A convention meaning 'don't change this value'", "Invalid variable names", "Python keywords"], answer: 1, explanation: "Uppercase is a convention for constants." },
  { section: "B", topic: "Variables", question: "What error occurs if you use a variable before assigning it?", options: ["SyntaxError", "NameError", "TypeError", "ValueError"], answer: 1, explanation: "NameError is raised for undefined variables." },
  { section: "B", topic: "Variables", question: "Which of the following is a valid multiple assignment?", options: ["a, b, c = 1, 2, 3", "a = b = c = 0", "Both A and B", "Neither A nor B"], answer: 2, explanation: "Both are valid multiple assignments." },
  { section: "B", topic: "Variables", question: "The variable name _ is often used to:", options: ["Indicate a private variable", "Ignore or not care about a value", "Create a constant", "Start a comment"], answer: 1, explanation: "_ is often used as a throwaway variable." },
  { section: "B", topic: "Variables", question: "_private = 10 means:", options: ["The variable is truly private and cannot be accessed", "It is a convention for internal use, but privacy is not enforced", "It is invalid Python", "It is a keyword"], answer: 1, explanation: "Underscore prefix is a convention, not enforced." },
  { section: "B", topic: "Variables", question: "Which of the following is a Python keyword and cannot be used as a variable name?", options: ["name", "if", "age", "_private"], answer: 1, explanation: "if is a keyword." },
  { section: "B", topic: "Variables", question: "Which is the most descriptive variable name?", options: ["x", "student_age", "a1", "data"], answer: 1, explanation: "student_age is descriptive." },

  // ================= SECTION C: Data Types (20) =================
  { section: "C", topic: "Data Types", question: "What is the data type of 25?", options: ["float", "int", "str", "bool"], answer: 1, explanation: "25 is an integer." },
  { section: "C", topic: "Data Types", question: "What is the data type of 25.0?", options: ["int", "float", "str", "bool"], answer: 1, explanation: "25.0 is a float." },
  { section: "C", topic: "Data Types", question: "Which data type is used for text?", options: ["int", "float", "str", "bool"], answer: 2, explanation: "str is for strings/text." },
  { section: "C", topic: "Data Types", question: "Which values are possible for a bool?", options: ["0 and 1", "True and False", "\"Yes\" and \"No\"", "None and 0"], answer: 1, explanation: "bool has True and False." },
  { section: "C", topic: "Data Types", question: "What is the type of None?", options: ["NoneType", "null", "bool", "str"], answer: 0, explanation: "None has type NoneType." },
  { section: "C", topic: "Data Types", question: "What does type(10) return?", options: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'bool'>"], answer: 1, explanation: "10 is int." },
  { section: "C", topic: "Data Types", question: "What does type(10.0) return?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 1, explanation: "10.0 is float." },
  { section: "C", topic: "Data Types", question: "What is the output of print(0.1 + 0.2)?", options: ["0.3", "0.30000000000000004", "0.30", "Error"], answer: 1, explanation: "Floating point precision issue." },
  { section: "C", topic: "Data Types", question: "Why does 0.1 + 0.2 sometimes give a tiny precision error?", options: ["Python is broken", "Floats are stored using binary approximations", "0.1 is an integer", "Python rounds all floats to 0"], answer: 1, explanation: "Binary representation cannot exactly represent 0.1." },
  { section: "C", topic: "Data Types", question: "Strings in Python are:", options: ["Mutable", "Immutable", "Always numbers", "The same as None"], answer: 1, explanation: "Strings cannot be changed after creation." },
  { section: "C", topic: "Data Types", question: "What happens if you try name[0] = 'J' when name = 'Python'?", options: ["It changes to 'Jython'", "It gives TypeError", "It gives NameError", "It works fine"], answer: 1, explanation: "Strings are immutable; item assignment is not allowed." },
  { section: "C", topic: "Data Types", question: "Which is the correct Boolean capitalization?", options: ["true", "false", "True", "TRUE"], answer: 2, explanation: "Booleans must be capitalized: True, False." },
  { section: "C", topic: "Data Types", question: "What happens when you use lowercase true in Python?", options: ["It works as True", "It gives NameError", "It gives ValueError", "It becomes 0"], answer: 1, explanation: "true is not defined; NameError." },
  { section: "C", topic: "Data Types", question: "What is True == 1?", options: ["True", "False", "Error", "None"], answer: 0, explanation: "True is equal to 1." },
  { section: "C", topic: "Data Types", question: "bool is technically a subclass of:", options: ["str", "float", "int", "NoneType"], answer: 2, explanation: "bool is a subclass of int." },
  { section: "C", topic: "Data Types", question: "None means:", options: ["An empty string", "Zero", "Absence of a value", "False"], answer: 2, explanation: "None represents no value." },
  { section: "C", topic: "Data Types", question: "What is the difference between None and \"\"?", options: ["They are the same", "None means no value; \"\" is an empty string", "\"\" means no value; None is empty text", "Both are integers"], answer: 1, explanation: "None is absence; \"\" is empty string." },
  { section: "C", topic: "Data Types", question: "What does int(\"25\") return?", options: ["\"25\"", "25", "25.0", "Error"], answer: 1, explanation: "Converts string to integer." },
  { section: "C", topic: "Data Types", question: "What happens with int(\"hello\")?", options: ["Returns 0", "Returns None", "Raises ValueError", "Returns \"hello\""], answer: 2, explanation: "Cannot convert non-numeric string." },
  { section: "C", topic: "Data Types", question: "What happens with int(\"25.5\")?", options: ["Returns 25", "Returns 25.5", "Raises ValueError", "Returns \"25.5\""], answer: 2, explanation: "int() cannot parse float string directly." },

  // ================= SECTION D: Operators (20) =================
  { section: "D", topic: "Operators", question: "Which operator is used for addition?", options: ["+", "-", "*", "/"], answer: 0, explanation: "+ is addition." },
  { section: "D", topic: "Operators", question: "Which operator gives the remainder?", options: ["//", "%", "**", "/"], answer: 1, explanation: "% is modulo." },
  { section: "D", topic: "Operators", question: "Which operator always returns a float?", options: ["+", "-", "/", "//"], answer: 2, explanation: "/ always returns float." },
  { section: "D", topic: "Operators", question: "What is 10 // 3?", options: ["3.33", "3", "4", "1"], answer: 1, explanation: "Floor division gives 3." },
  { section: "D", topic: "Operators", question: "What is -10 // 3?", options: ["-3", "-4", "3", "4"], answer: 1, explanation: "Floor division rounds toward negative infinity: -4." },
  { section: "D", topic: "Operators", question: "What is 10 % 3?", options: ["0", "1", "3", "3.33"], answer: 1, explanation: "Remainder is 1." },
  { section: "D", topic: "Operators", question: "What is 2 ** 3?", options: ["6", "8", "9", "5"], answer: 1, explanation: "2 to the power 3 is 8." },
  { section: "D", topic: "Operators", question: "What is 2 ** 3 ** 2?", options: ["64", "512", "36", "12"], answer: 1, explanation: "Right-associative: 2 ** (3 ** 2) = 2 ** 9 = 512." },
  { section: "D", topic: "Operators", question: "What is 2 + 3 * 4?", options: ["20", "14", "24", "10"], answer: 1, explanation: "Multiplication before addition: 2 + 12 = 14." },
  { section: "D", topic: "Operators", question: "What is (2 + 3) * 4?", options: ["20", "14", "24", "10"], answer: 0, explanation: "Parentheses first: 5 * 4 = 20." },
  { section: "D", topic: "Operators", question: "Which operator checks equality?", options: ["=", "==", "!=", ">="], answer: 1, explanation: "== checks equality." },
  { section: "D", topic: "Operators", question: "Which operator checks not equal?", options: ["=", "==", "!=", "<>"], answer: 2, explanation: "!= checks inequality." },
  { section: "D", topic: "Operators", question: "What does = mean?", options: ["comparison", "assignment", "equality", "not equal"], answer: 1, explanation: "= is assignment." },
  { section: "D", topic: "Operators", question: "What does == mean?", options: ["comparison/equality", "assignment", "addition", "not equal"], answer: 0, explanation: "== is comparison." },
  { section: "D", topic: "Operators", question: "and requires:", options: ["both true", "at least one true", "both false", "none"], answer: 0, explanation: "and requires both operands true." },
  { section: "D", topic: "Operators", question: "or requires:", options: ["both true", "at least one true", "both false", "none"], answer: 1, explanation: "or requires at least one true." },
  { section: "D", topic: "Operators", question: "What is not True?", options: ["True", "False", "None", "Error"], answer: 1, explanation: "not True is False." },
  { section: "D", topic: "Operators", question: "18 <= age <= 60 is equivalent to:", options: ["age >= 18 or age <= 60", "age >= 18 and age <= 60", "age > 18 and age < 60", "age == 18 and age == 60"], answer: 1, explanation: "Chained comparison uses and." },
  { section: "D", topic: "Operators", question: "Which has the highest precedence?", options: ["+", "*", "**", "()"], answer: 3, explanation: "Parentheses have highest precedence." },
  { section: "D", topic: "Operators", question: "x += 5 is equivalent to:", options: ["x = 5", "x = x + 5", "x == x + 5", "x = +5"], answer: 1, explanation: "+= adds and assigns." }
];

/* ---------------------------------------------------------
   State
   --------------------------------------------------------- */
const state = {
  questions: [],
  answers: [],
  visits: [],
  current: 0,
  timeLeft: TOTAL_TIME_SECONDS,
  timerId: null,
  startedAt: null,
  startedAtISO: null,
  finished: false,
  reviewFilter: "all",
  candidate: { name: "", grid: "", batch: "", date: "", startTime: "" }
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
   Load questions
   --------------------------------------------------------- */
async function loadQuestions() {
  try {
    const res = await fetch("questions.txt", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const text = await res.text();
    const cleaned = text.split("\n").filter((ln) => !ln.trim().startsWith("//")).join("\n");
    const parsed = JSON.parse(cleaned);
    if (!Array.isArray(parsed) || parsed.length === 0) throw new Error("Empty");
    return parsed;
  } catch (err) {
    console.warn("Using fallback questions:", err);
    return FALLBACK_QUESTIONS;
  }
}

/* ---------------------------------------------------------
   Shuffle helpers
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
  return shuffle(raw).map((q) => {
    const pairs = q.options.map((opt, i) => ({ opt, i }));
    const shuffled = shuffle(pairs);
    const newOptions = shuffled.map((p) => p.opt);
    const newAnswer = shuffled.findIndex((p) => p.i === q.answer);
    return { ...q, options: newOptions, answer: newAnswer };
  });
}

/* ---------------------------------------------------------
   Candidate form
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
  if (t === 600) { bar.textContent = "10 minutes remaining."; bar.classList.add("show"); }
  else if (t === 300) { bar.textContent = "5 minutes remaining."; bar.classList.add("show"); }
  else if (t === 60) { bar.textContent = "1 minute remaining. Test will auto-submit."; bar.classList.add("show"); }
  else if (t > 600) { bar.classList.remove("show"); }
}

/* ---------------------------------------------------------
   Render data table
   --------------------------------------------------------- */
function renderDataTable(table) {
  if (!table || !table.headers || !table.rows) return "";
  const cap = table.caption
    ? `<caption>${escapeHTML(table.caption)}</caption>` : "";
  const thead = `<thead><tr>${table.headers
    .map((h) => `<th>${escapeHTML(h)}</th>`)
    .join("")}</tr></thead>`;
  const tbody = `<tbody>${table.rows
    .map((row) => `<tr>${row
      .map((cell) => `<td>${escapeHTML(cell)}</td>`)
      .join("")}</tr>`)
    .join("")}</tbody>`;
  return `<table class="q-table">${cap}${thead}${tbody}</table>`;
}

/* ---------------------------------------------------------
   Render question
   --------------------------------------------------------- */
function renderQuestion() {
  const idx = state.current;
  const q = state.questions[idx];
  const total = state.questions.length;

  $("q-number").textContent = `Question ${idx + 1} of ${total}`;
  $("q-section").textContent = `Section ${q.section || "-"} — ${q.topic || ""}`;
  $("q-text").textContent = q.question;

  const tableWrap = $("q-table");
  tableWrap.innerHTML = q.table ? renderDataTable(q.table) : "";

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
function markVisited(i) { if (!state.visits[i]) state.visits[i] = true; }

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
    if (!state.visits[i]) b.classList.add("not-visited");
    else if (state.answers[i] !== null) b.classList.add("visited-answered");
    else b.classList.add("visited-unanswered");
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
  if (state.current > 0) { state.current--; renderQuestion(); saveState(); }
}
function goNext() {
  if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); saveState(); }
}

/* ---------------------------------------------------------
   Auto-save
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
      `You have attempted ${attempted} out of ${total} questions.\n${unanswered} question(s) are unanswered.\nAll questions must be attempted before submitting.`,
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
  computeAndShowResult(false);
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
    else wrong++;
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
  const pct = (m / MAX_MARKS) * 100;
  if (pct >= 80) return "Excellent — Placement Ready";
  if (pct >= 70) return "Very Good";
  if (pct >= 60) return "Good";
  if (pct >= 50) return "Needs Improvement";
  if (pct >= 40) return "Weak";
  return "Requires Significant Preparation";
}
function formatDuration(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/* ---------------------------------------------------------
   Review
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

    let html = `
      <div class="review-head">
        <span>Q${i + 1} · Section ${q.section || "-"} · ${escapeHTML(q.topic || "")}</span>
        <span>${isUnattempted ? "Unattempted" : (isCorrect ? "Correct" : "Incorrect")}</span>
      </div>
      <div class="review-q">${escapeHTML(q.question)}</div>
    `;

    if (q.table) {
      html += `<div class="q-table-wrap">${renderDataTable(q.table)}</div>`;
    }

    if (isCorrect) {
      html += `<div class="review-line correct"><strong>Your answer:</strong> ${escapeHTML(q.options[user])}</div>`;
    } else if (isUnattempted) {
      html += `<div class="review-line neutral"><strong>Your answer:</strong> Not attempted</div>`;
      html += `<div class="review-line correct"><strong>Correct answer:</strong> ${escapeHTML(q.options[q.answer])}</div>`;
    } else {
      html += `<div class="review-line wrong"><strong>Your answer:</strong> ${escapeHTML(q.options[user])}</div>`;
      html += `<div class="review-line correct"><strong>Correct answer:</strong> ${escapeHTML(q.options[q.answer])}</div>`;
    }

    if (q.explanation) {
      html += `<div class="review-exp"><strong>Explanation:</strong> ${escapeHTML(q.explanation)}</div>`;
    }

    item.innerHTML = html;
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
   Export
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
    state.questions = [];
    state.answers = [];
    state.visits = [];
    state.current = 0;
    state.timeLeft = TOTAL_TIME_SECONDS;
    state.finished = false;
    state.candidate = { name: "", grid: "", batch: "", date: "", startTime: "" };
    $("candidate-form").reset();
    initCandidateForm();
    showScreen("candidate");
  });

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

  window.addEventListener("beforeunload", (e) => {
    if (screens.quiz.classList.contains("active") && !state.finished && state.questions.length) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  if (loadSavedState()) {
    const msg = `An unfinished attempt was found for ${state.candidate.name || "a candidate"}. Resume?`;
    if (window.confirm(msg)) {
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

# LearnProps — A Visual Guide to React Props

## The Story Behind This

I was explaining React props to a friend over a call. You know how it goes — you start with "it's just like function arguments" and then suddenly you're 40 minutes deep into context API and forwardRef, drawing diagrams on a notepad.

That conversation made me realize two things:

1. **I needed to revise these concepts myself.** I'd been using props daily but couldn't clearly explain *why* things work the way they do.
2. **There's no single resource that shows all prop patterns side by side** — basic props, children, complex nested objects, refs, and context — in one interactive page where you can actually click things and see what happens.

So I built this. It started as a quick demo for my friend and turned into a full interactive guide. Every section has:
- A concept explanation in plain English
- Step-by-step code snippets showing the pattern
- A live demo you can interact with right on the page
- Comments in every file explaining what each line does

If you're learning React or teaching someone, I hope this saves you the same 40-minute call.

---

## What's Inside

| Section | Concept | What You'll Learn |
|---------|---------|-------------------|
| 01 | Basic Props | Strings, numbers, booleans, functions as props |
| 02 | Children Props | Component composition with `children` |
| 03 | Complex Props | Nested objects, callbacks, TypeScript interfaces |
| 04 | Ref Props | `useRef`, `forwardRef`, direct DOM access |
| 05 | Theme Context | `createContext`, `useContext`, custom hooks |

Plus a **"How to Learn"** section with a step-by-step guide on forking, reading, breaking, and rebuilding.

---

## Quick Start

```bash
git clone https://github.com/ace-Shelby/React_props_guide.git
cd React_props_guide
npm install
npm run dev
```

Open `http://localhost:5173` and start clicking around.

---

## Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** for styling
- **Vite** for dev server and builds
- No external icon libraries — all icons are inline SVGs

---

## Project Structure

```
src/
├── main.tsx               ← Entry point + ThemeProvider wrapper
├── App.tsx                ← Main layout with hero + all sections
│
├── sections/              ← Each file teaches ONE concept
│   ├── BasicProp.tsx       ← 01: Simple string/function props
│   ├── ChildrenProp.tsx    ← 02: Component composition
│   ├── ComplexProp.tsx     ← 03: Nested objects & callbacks
│   ├── RefProp.tsx         ← 04: forwardRef & useRef
│   ├── ThemeToggler.tsx    ← 05: Context API & custom hooks
│   └── HowToLearn.tsx     ← Learning guide
│
└── components/            ← Reusable building blocks
    ├── Button.tsx          ← Props: label, color, size, onClick
    ├── Card.tsx            ← Props: color, title, children
    ├── Container.tsx       ← Props: format, children
    ├── ProfileCard.tsx     ← Complex nested props demo
    ├── Navbar.tsx          ← Responsive nav with smooth scroll
    ├── Footer.tsx          ← GitHub link + project info
    └── Icons.tsx           ← Inline SVG icon components
```

---

## How to Learn from This

1. **Fork it** — make your own copy
2. **Read top-to-bottom** — start with `main.tsx`, then `App.tsx`, then sections 01-05
3. **Break things** — remove a prop, change a type, see what TypeScript tells you
4. **Build something** — add your own component using the patterns you learned
5. **Come back later** — try rebuilding a section from memory

---

## Contributing

Found a typo? Want to add a section on `useReducer` or `useMemo`? PRs are welcome.

---

## License

MIT — use it however you want.

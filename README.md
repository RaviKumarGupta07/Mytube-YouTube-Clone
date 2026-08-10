# 🎥 Mytube - YouTube Clone

A React-based YouTube clone built while learning modern React development. This project demonstrates component architecture, routing, state management using Redux Toolkit, API integration, live chat simulation, search suggestions with debouncing, nested comments, and responsive UI.

---

## 🚀 Features

- 🔍 Search videos using YouTube API
- ⚡ Search suggestions with Debouncing
- 💾 Search suggestion caching using Redux Toolkit
- 📺 Watch video page
- 💬 Live Chat simulation
- 📝 Send live chat messages
- 🌳 Nested Comments (Recursive Components)
- 🎯 Dynamic Routing using React Router
- 📂 Category filtering
- 📱 Responsive UI using Tailwind CSS
- ⚙️ State Management using Redux Toolkit
- 🔄 API Polling
- 🎨 Component-based architecture

---

## 🛠 Tech Stack

- React.js
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- JavaScript (ES6+)
- HTML5
- CSS3
- YouTube Data API v3

---

## 📁 Project Structure

```
src
│
├── components
│   ├── Head
│   ├── Sidebar
│   ├── MainContainer
│   ├── ButtonList
│   ├── VideoContainer
│   ├── VideoCard
│   ├── WatchPage
│   ├── LiveChat
│   ├── ChatMessage
│   ├── CommentsContainer
│   └── Comment
│
├── utils
│   ├── appStore
│   ├── appSlice
│   ├── chatSlice
│   ├── searchSlice
│   ├── constants
│   └── helper
│
├── App.js
└── index.js
```

---

# 🧠 React Concepts Practiced

- Functional Components
- Hooks
  - useState
  - useEffect
  - useSelector
  - useDispatch
- Props
- Conditional Rendering
- List Rendering
- Recursive Components
- Controlled Forms
- Debouncing
- API Polling
- Cleanup Functions
- Component Reusability
- Lifting State Up
- React Router
- Redux Toolkit

---

# 📦 Redux Store

```
store
│
├── app
├── search
└── chat
```

### appSlice
- Toggle Sidebar

### searchSlice
- Cache search suggestions
- Avoid unnecessary API calls

### chatSlice
- Store live chat messages

---

# ⚡ Optimizations

### Debouncing

- Waits for the user to stop typing before making an API call.
- Reduces unnecessary API requests.
- Improves performance.

```
Typing:
a
ab
abc
abcd

Only one API request is sent after the delay.
```

---

### Search Cache

- Previously searched keywords are stored in Redux.
- Prevents duplicate API calls.
- Faster user experience.

---

### Live Chat

- Simulated live chat using API polling.
- New random messages are added periodically.
- User can also send messages.

---

### Nested Comments

Implemented recursive components to render unlimited nested replies.

```
Comment
 ├── Reply
 │    ├── Reply
 │    │     ├── Reply
 │    │     └── Reply
 │    └── Reply
 └── Reply
```

---

## 📚 What I Learned

- Building scalable React applications
- Component architecture
- State management with Redux Toolkit
- React Router
- Recursive rendering
- API integration
- Debouncing techniques
- API polling
- Performance optimization
- Form handling
- Tailwind CSS
- Project organization

---

## ▶️ Installation

```bash
git clone <repository-url>

cd my-youtube

npm install

npm start
```

---

## 📸 Screens

- Home Page
- Watch Page
- Live Chat
- Nested Comments
- Search Suggestions

(Add screenshots here later.)

---

## 👨‍💻 Author

**Ravi Kumar Gupta**

GitHub:
https://github.com/RaviKumarGupta07
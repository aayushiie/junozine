import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allPrompts = [
  {
    question: "So, what is Juno?",
    answer:
      "Juno is a space where creativity, code, and community meet. It's built to redefine creativity and showcase the work of the next generation of storytellers and artists in tech.",
  },
  {
    question: "Who is it for?",
    answer:
      "It's for anyone who's ever felt too creative for tech and too technical for art, for people who are tired of choosing between being a maker or a dreamer, an engineer or an artist. It's for those who want a place where all those pieces fit together, and where you can exist within a community.",
  },
  {
    question: "How to contribute?",
    answer:
      "If you're in tech and identify as a woman or gender-expansive person, you can send us your essays, art, or experiments via email. Each issue is built from community submissions, and we'd love to share your story. Head to the ISSUES page for themes and submission guidelines.",
  },
];

const [q1, q2, q3] = allPrompts;
const tabs = [q1, q2, q3];

export default function QnA() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {tabs.map((item) => (
            <motion.li
              key={item.question}
              initial={false}
              animate={{
                backgroundColor:
                  item === selectedTab ? "#F8F8F8" : "transparent",
                color: item === selectedTab ? "#141414" : "#F8F8F8",
              }}
              style={tab}
              onClick={() => setSelectedTab(item)}
            >
              {item.question}
              {item === selectedTab && (
                <motion.div style={underline} layoutId="underline" />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={answerContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.answer}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={answer}
          >
            {selectedTab.answer}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const container = {
  width: "90%",          // mobile first
  maxWidth: "600px",
  minHeight: "auto",     // let content define height
  borderRadius: 10,
  background: "#141414",
  overflow: "hidden",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  margin: "20px auto",
  fontFamily: "'Roboto Mono', monospace",
};

// Tabs bar
const nav = {
  background: "#141414",
  padding: "5px 5px 0",
  borderRadius: 10,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #FF4C65",
  position: "relative",
  overflow: "hidden",
};

const tabsStyles = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: "clamp(12px, 3vw, 14px)", // responsive font size
};

const tabsContainer = {
  ...tabsStyles,
  display: "flex",
  flexWrap: "wrap", // wrap tabs on small screens
  width: "100%",
};

const tab = {
  ...tabsStyles,
  borderRadius: 5,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "transparent",
  cursor: "pointer",
  minHeight: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#F8F8F8",
  transition: "background-color 0.3s, color 0.3s",
  lineHeight: 1.2,
  boxSizing: "border-box",
};

const underline = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "#FF4C65",
};

const answerContainer = {
  padding: 20,
  flex: 1,
  fontSize: "clamp(14px, 2vw, 16px)", // responsive font size
  color: "#F8F8F8",
  overflowY: "auto",
  lineHeight: 1.4,
  fontWeight: 400,
  textAlign: "center",
};

const answer = {
  whiteSpace: "pre-wrap",
};

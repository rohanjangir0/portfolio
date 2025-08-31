import { useState, useEffect, useRef } from "react";
import "./FakeCli.css";

function FakeCli() {
  const [output, setOutput] = useState([
    "Welcome to Rohan Portfolio Terminal! ✨",
    "",
    'Type "help" to see available commands or try: hello, about, projects, hireme',
  ]);
  const [command, setCommand] = useState("");
  const scrollerRef = useRef(null);

  const commands = {
    hello: "👋 Hey there! I'm Rohan Jangir, a passionate web developer who loves creating beautiful, functional experiences. Thanks for stopping by my terminal!",
    about: "I'm a web developer with experience in modern technologies, crafting smooth user experiences and scalable solutions.",
    projects: "You can check out my projects at: github.com/alexjohnson",
    hireme: `💌 Excited to work together! Here's how to reach me:\n\n📧 Email: rohancjj2003@gmail.com\n🔗 LinkedIn: /in/rohanjangir0\n📂 Phone: +91 8107171472\n\nI'm currently available for freelance projects and full-time opportunities. Let's build something amazing!`,
    help: "Available commands: hello, about, projects, hireme",
     rohansecret: `
  🔒 You found the hidden easter egg! 🎉

    Here’s a little secret about Rohan:
    "I believe every line of code tells a story,
    and mine always aim to make life a little easier 
    (and cooler 😎)."

    ✨ Shhh... not everyone knows this 😉
  `,
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    const key = command.trim().toLowerCase();
    const response = commands[key] || `Command not found: ${command}`;
    setOutput((prev) => [...prev, `$ ${command}`, response]);
    setCommand("");
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [output]);

  return (
    <div className="cli-wrapper">
      <header className="cli-header">
        <span className="cli-chevron">▸</span> Interactive Portfolio Terminal
      </header>
      <div className="hint">
      Experience my portfolio in a unique way! Try commands like{" "}
        <span className="cmd">hello</span>,{" "}
        <span className="cmd">about</span>,{" "}
        <span className="cmd">projects</span>, or{" "}
        <span className="cmd">hireme</span>
      </div>

      <section className="cli-terminal">
        <div className="cli-titlebar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="cli-title">Rohan Portfolio Terminal</span>
        </div>

        <div className="cli-screen" ref={scrollerRef}>
          {output.map((line, i) => (
            <div className="cli-line" key={i}>
              {line}
            </div>
          ))}

          <form onSubmit={handleCommand} className="cli-inputrow">
            <span className="prompt">$</span>
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="cli-input"
              autoFocus
            />
          </form>
        </div>
      </section>
    </div>
  );
}
export default FakeCli
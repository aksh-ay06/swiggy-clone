import { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-black p-4 m-4 rounded-md shadow-md">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <button onClick={toggleVisibility} className="cursor-pointer text-blue-500 hover:text-blue-700 underline">
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="mt-2">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const sections = [
    {
      title: "About Instamart",
      description: "On the other hand, we denounce with righteous indignation...",
      key: "about",
    },
    {
      title: "Team Instamart",
      description: "On the other hand, we denounce with righteous indignation...",
      key: "team",
    },
    {
      title: "Careers",
      description: "On the other hand, we denounce with righteous indignation...",
      key: "career",
    },
  ];

  const toggleSection = (section) => {
    setVisibleSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      {sections.map((section) => (
        <Section
          key={section.key}
          title={section.title}
          description={section.description}
          isVisible={visibleSection === section.key}
          toggleVisibility={() => toggleSection(section.key)}
        />
      ))}
    </div>
  );
};

export default Instamart;

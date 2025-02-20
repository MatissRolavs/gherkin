import React from "react";
import "./Translations.css";

const Translations = () => {
  const translations = [
    { keyword: "Feature", equivalents: "Funkcionālā iezīme" },
    { keyword: "Background", equivalents: "Konteksts" },
    { keyword: "Scenario", equivalents: "Scenārijs" },
    { keyword: "Scenario Outline", equivalents: "Scenārijs pēc parauga" },
    { keyword: "Examples", equivalents: "Piemēri, Paraugs" },
    { keyword: "Given", equivalents: "Kad" },
    { keyword: "When", equivalents: "Ja" },
    { keyword: "Then", equivalents: "Tad" },
    { keyword: "And", equivalents: "Un" },
    { keyword: "But", equivalents: "Bet" },
    { keyword: "Or", equivalents: "Vai" },
  ];

  return (
    <div className="translations">
      <h2>Translations</h2>
      <table>
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Equivalent(s)</th>
          </tr>
        </thead>
        <tbody>
          {translations.map((translation, index) => (
            <tr key={index}>
              <td>{translation.keyword}</td>
              <td>{translation.equivalents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Translations;

import React from "react";
import "./Questions.css";
const Question5 = () => {
  return (
    <div className="question">
      <p className="question-text">
        Kas ir veiksmīgā iznākuma scenārijs (angļu v. Happy Path Scenario)?
      </p>
      <p className="question-text">
        Piemērs (e-veikala pasūtījums)<br></br>✅ Lietotājs pievieno preci
        grozam → ievada piegādes un maksājuma datus → veic maksājumu → saņem
        apstiprinājumu.<br></br>
        Šāds scenārijs palīdz pārliecināties, ka galvenā funkcionalitāte
        darbojas nevainojami.
      </p>
    </div>
  );
};

export default Question5;

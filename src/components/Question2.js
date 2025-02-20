import React from "react";
import "./Questions.css";
const Question2 = () => {
  return (
    <div className="question">
      <p className="question-text">
        Kādā formātā veidot lietotājstāstus (angļu v. User Story)?
      </p>
      <p className="question-text">
        Lietotājstāsti (User Stories) parasti tiek veidoti vienkāršā,
        strukturētā formātā:<br></br>
        "Kā [lietotāja loma], es vēlos [funkcionalitāte],lai [ieguvums/mērķis]."
        <br></br>
        Piemērs: "Kā e-veikala klients, es vēlos pievienot preces grozam, lai
        varētu tās ērti iegādāties."
      </p>
    </div>
  );
};

export default Question2;

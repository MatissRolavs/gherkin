import React from "react";
import "./Questions.css";
const Question4 = () => {
  return (
    <div className="question">
      <p className="question-text">
        Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?
      </p>
      <p className="question-text">
        Rubika kubs ilustrē funkcionālās iezīmes, jo tā risināšana ir
        deterministiska (tādi paši soļi dod tādu pašu rezultātu), izmanto
        nemainīgumu (katrs pagrieziens rada jaunu stāvokli, bet sākotnējais
        netiek mainīts) un funkciju kompozīciju (atsevišķas kustības apvienojas
        sarežģītākos algoritmos).
      </p>
    </div>
  );
};

export default Question4;

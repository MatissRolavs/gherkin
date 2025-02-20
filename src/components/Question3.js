import React from "react";
import "./Questions.css";
const Question3 = () => {
  return (
    <div className="question">
      <p className="question-text">Kā veidot scenārijus?</p>
      <p className="question-text">
        Piemērs (E-veikala pirkuma scenārijs)<br></br>
        Nosaukums: Pirkuma veikšana e-veikalā<br></br>
        Mērķis: Lietotājs veiksmīgi iegādājas preci<br></br>
        Lietotājs: Reģistrēts klients<br></br>
        Sākuma nosacījumi: Lietotājs ir ielogojies un pievienojis preci grozam
        <br></br>
        Soļi:<br></br>
        Lietotājs atver iepirkumu grozu<br></br>
        Nospiež pogu “Apmaksāt”<br></br>
        Ievada piegādes informāciju<br></br>
        Izvēlas maksājuma veidu un ievada maksājuma datus<br></br>
        Apstiprina pasūtījumu<br></br>
        Sistēma apstrādā maksājumu un apstiprina pasūtījumu<br></br>
        Beigu nosacījumi: Lietotājs saņem pasūtījuma apstiprinājumu<br></br>
        Alternatīvais scenārijs: Maksājums neizdodas → tiek piedāvāts atkārtoti
        mēģināt
      </p>
    </div>
  );
};

export default Question3;
